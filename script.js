/* === TAB SWITCHING === */
function switchTab(tabName) {
    const gallery = document.getElementById('gallery-tab');
    const portfolio = document.getElementById('portfolio-tab');
    const buttons = document.querySelectorAll('.menu-btn');

    // Switch Content
    if(tabName === 'gallery') {
        gallery.classList.remove('hidden');
        gallery.classList.add('fade-in');
        portfolio.classList.add('hidden');
        
        // Update Buttons
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        portfolio.classList.remove('hidden');
        portfolio.classList.add('fade-in');
        gallery.classList.add('hidden');

        // Update Buttons
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active');
    }
}

/* === GALLERY FILTERING === */
function filterGallery(category, clickedBtn) {
    const items = document.querySelectorAll('.g-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update Button Styles
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    // Filter Items
    items.forEach(item => {
        // If category is all, show everything. 
        // OR if item has the specific class (moon, dso, etc)
        if(category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

/* === LIGHTBOX FUNCTIONALITY === */
const lightbox = document.getElementById('lightbox');

function openLightbox(elem) {
    // 1. Get Image Src
    const imgSrc = elem.querySelector('img').src;
    
    // 2. Get Data Attributes
    const title = elem.dataset.title;
    const obj = elem.dataset.obj;
    const date = elem.dataset.date;
    const exp = elem.dataset.exp;
    const equip = elem.dataset.equip;

    // 3. Inject into Lightbox DOM
    document.getElementById('lb-img').src = imgSrc;
    document.getElementById('lb-title').innerText = title;
    
    document.getElementById('val-obj').innerText = obj;
    document.getElementById('val-date').innerText = date;
    document.getElementById('val-exp').innerText = exp;
    document.getElementById('val-equip').innerText = equip;

    // 4. Show Lightbox
    lightbox.
