import os
import json
import uuid
import datetime
from PIL import Image

# === CONFIGURATION ===
ASSETS_DIR = 'assets'
JSON_FILE = 'gallery_data.json'
THUMB_WIDTH = 500  # Width in pixels for the thumbnail
THUMB_SUFFIX = '_thumb' # Result: image_thumb.webp
QUALITY = 80 # WebP quality (0-100)

# Supported extensions to look for
VALID_EXTENSIONS = ('.jpg', '.jpeg', '.png')

def get_creation_date(file_path):
    """Try to get the creation date from file metadata."""
    try:
        timestamp = os.path.getmtime(file_path)
        return datetime.datetime.fromtimestamp(timestamp)
    except:
        return datetime.datetime.now()

def create_thumbnail(original_path):
    """Generates a WebP thumbnail if it doesn't exist."""
    dir_name, file_name = os.path.split(original_path)
    name_part, _ = os.path.splitext(file_name)
    
    # Construct new filename: assets/2025/myimage_thumb.webp
    thumb_name = f"{name_part}{THUMB_SUFFIX}.webp"
    thumb_path = os.path.join(dir_name, thumb_name)

    # If thumbnail already exists, skip (save time)
    if os.path.exists(thumb_path):
        return

    try:
        with Image.open(original_path) as img:
            # Calculate new height to maintain aspect ratio
            w_percent = (THUMB_WIDTH / float(img.size[0]))
            h_size = int((float(img.size[1]) * float(w_percent)))
            
            # Resize
            img = img.resize((THUMB_WIDTH, h_size), Image.Resampling.LANCZOS)
            
            # Save as WebP
            img.save(thumb_path, 'WEBP', quality=QUALITY)
            print(f"Generated WebP: {thumb_path}")
    except Exception as e:
        print(f"Error converting {original_path}: {e}")

def main():
    # 1. Load existing JSON to preserve manual edits (Titles, Stories, etc.)
    existing_data_map = {}
    if os.path.exists(JSON_FILE):
        try:
            with open(JSON_FILE, 'r', encoding='utf-8') as f:
                old_data = json.load(f)
                for item in old_data:
                    # Map by 'src' so we can find existing entries
                    existing_data_map[item['src']] = item
            print(f"Loaded {len(existing_data_map)} existing entries.")
        except Exception as e:
            print(f"Warning: Could not read existing JSON. Starting fresh. ({e})")

    new_gallery_data = []
    
    # 2. Walk through the directory
    for root, dirs, files in os.walk(ASSETS_DIR):
        for file in files:
            # Check if it is an image and NOT already a thumbnail
            if file.lower().endswith(VALID_EXTENSIONS) and THUMB_SUFFIX not in file:
                
                full_path = os.path.join(root, file)
                
                # Normalize path separators for web (windows \ to /)
                web_src = full_path.replace('\\', '/')

                # 3. Generate the WebP Thumbnail
                create_thumbnail(full_path)

                # 4. Prepare JSON Data
                if web_src in existing_data_map:
                    # KEEP EXISTING DATA (Preserve your stories/titles)
                    entry = existing_data_map[web_src]
                else:
                    # CREATE NEW ENTRY
                    print(f"New image found: {file}")
                    dt = get_creation_date(full_path)
                    
                    # Try to infer category from folder name (assets/CATEGORY/img.jpg) or default
                    # Assuming structure is assets/YEAR/img.jpg, we default to 'sky'
                    default_cat = "sky"
                    
                    entry = {
                        "id": str(uuid.uuid4()).replace('-', ''),
                        "year": str(dt.year),
                        "month": f"{dt.month:02d}",
                        "day": f"{dt.day:02d}",
                        "category": default_cat,
                        "src": web_src, # Points to ORIGINAL (JS loads thumb automatically)
                        "title_en": "",
                        "title_es": "",
                        "story_en": "",
                        "story_es": "",
                        "date": dt.strftime("%d-%m-%Y"),
                        "object_es": "",
                        "object_en": "",
                        "exposure": "",
                        "equipment": ""
                    }

                new_gallery_data.append(entry)

    # 5. Write the updated JSON
    # Sort by date (descending) logic happens in JS, but we can do it here too
    try:
        with open(JSON_FILE, 'w', encoding='utf-8') as f:
            json.dump(new_gallery_data, f, indent=4, ensure_ascii=False)
        print(f"Success! {JSON_FILE} updated with {len(new_gallery_data)} images.")
    except Exception as e:
        print(f"Error writing JSON: {e}")

if __name__ == "__main__":
    main()
