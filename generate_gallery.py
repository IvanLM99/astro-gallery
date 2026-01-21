import os
import json
import re

# === CONFIGURATION ===
GALLERY_DIR = 'assets/'
JSON_FILE = 'gallery_data.json'
ALLOWED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp'}

# Keyword matching for auto-categorization
CATEGORY_KEYWORDS = {
    'moon': 'moon',
    'luna': 'moon',
    'sun': 'solar',
    'solar': 'solar',
    'galaxy': 'galaxies',
    'm31': 'galaxies',
    'nebula': 'nebulae',
    'm42': 'nebulae',
    'planet': 'planets',
    'saturn': 'planets',
    'jupiter': 'planets',
    'cluster': 'starclusters',
    'sky': 'sky',
    'milky': 'landscape'
}

def load_existing_data():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []

def get_category_from_filename(filename):
    fname_lower = filename.lower()
    for keyword, category in CATEGORY_KEYWORDS.items():
        if keyword in fname_lower:
            return category
    return "dso" # Default category

def main():
    existing_data = load_existing_data()
    
    # Create a map of existing images by SRC to preserve edits (Titles, Stories)
    existing_map = {item['src']: item for item in existing_data}
    
    new_gallery_list = []
    
    # Walk through the assets/gallery folder
    for root, dirs, files in os.walk(GALLERY_DIR):
        for file in files:
            if os.path.splitext(file)[1].lower() in ALLOWED_EXTENSIONS:
                
                # Get relative path and fix slashes for web (Windows uses backslashes)
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, start='.').replace('\\', '/')
                
                # Check if we already have this image
                if rel_path in existing_map:
                    print(f"Keeping existing: {rel_path}")
                    new_gallery_list.append(existing_map[rel_path])
                else:
                    print(f"Found new image: {rel_path}")
                    
                    # Extract Year from folder name (e.g., assets/gallery/2025 -> 2025)
                    year = os.path.basename(root)
                    if not year.isdigit():
                        year = "2025" # Fallback if folder isn't a year
                        
                    # Generate a clean ID
                    img_id = re.sub(r'\W+', '', os.path.splitext(file)[0])
                    
                    # Create new entry template
                    new_entry = {
                        "id": img_id,
                        "year": year,
                        "month": month,
                        "day": day,
                        "category": get_category_from_filename(file),
                        "src": rel_path,
                        "title_en": file.replace('-', ' ').replace('_', ' ').split('.')[0].title(),
                        "title_es": "",
                        "story_en": "",
                        "story_es": "",
                        "date": "",
                        "object": "",
                        "exposure": "",
                        "equipment": ""
                    }
                    new_gallery_list.append(new_entry)

    # Sort list: Newest years first, then alphabetically by ID
    new_gallery_list.sort(key=lambda x: (x['year'], x['id']), reverse=True)

    # Save back to JSON
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_gallery_list, f, indent=4, ensure_ascii=False)
        
    print(f"\nDone! {len(new_gallery_list)} images saved to {JSON_FILE}")

if __name__ == "__main__":
    main()
