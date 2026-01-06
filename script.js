/* === TAB SWITCHING === */
function switchTab(tabName) {
    const gallery = document.getElementById('gallery-tab');
    const portfolio = document.getElementById('portfolio-tab');
    const buttons = document.querySelectorAll('.menu-btn');

    // Toggle Visibility
    if(tabName === 'gallery') {
        gallery.classList.remove('hidden');
        gallery.classList.add('fade-in');
        portfolio.classList.add('hidden');
        
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        portfolio.classList.remove('hidden');
        portfolio.classList.add('fade-in');
        gallery.classList.add('hidden');

        buttons[1].classList.add('active');
        buttons[0].classList.remove('active');
    }
}

/* === GALLERY FILTER === */
function filterGallery(category) {
    const items = document.querySelectorAll('.g-item');
    const buttons = document.querySelectorAll('.filter-btn');
    const yearSections = document.querySelectorAll('.year-section');

    // Active Button State
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let visibleCount = 0;

    items.forEach(item => {
        if(category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Optional: Hide empty year sections if needed
    // (Logic simplified for pure CSS approach)
}

/* === LIGHTBOX === */
const lightbox = document.getElementById('lightbox');

function openLightbox(elem) {
    const img = elem.querySelector('img').src;
    const title = elem.dataset.title;
    const obj = elem.dataset.obj;
    const exp = elem.dataset.exp;
    const equip = elem.dataset.equip;

    document.getElementById('lb-img').src = img;
    document.getElementById('lb-title').innerText = title;
    document.getElementById('val-obj').innerText = obj;
    document.getElementById('val-exp').innerText = exp;
    document.getElementById('val-equip').innerText = equip;

    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

// Close on background click
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
});
