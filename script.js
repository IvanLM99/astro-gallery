// --- AUDIO CONTROL ---
const audio = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');
const introOverlay = document.getElementById('intro-overlay');
const audioIcon = document.getElementById('audio-icon');
let isPlaying = false;

startBtn.addEventListener('click', () => {
    // Start music
    audio.volume = 0.4; // 40% volume
    audio.play().then(() => {
        isPlaying = true;
        audioIcon.className = 'fas fa-volume-up';
    }).catch(err => console.log("Audio play blocked", err));

    // Fade out overlay
    introOverlay.style.opacity = '0';
    setTimeout(() => {
        introOverlay.style.display = 'none';
        startTypewriter(); // Start typing only after entry
    }, 1000);
});

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        audioIcon.className = 'fas fa-volume-mute';
    } else {
        audio.play();
        audioIcon.className = 'fas fa-volume-up';
    }
    isPlaying = !isPlaying;
}

// --- TAB SWITCHING ---
function switchTab(tab) {
    const galleryView = document.getElementById('gallery-view');
    const cvView = document.getElementById('cv-view');
    const header = document.getElementById('main-header');
    const navBtns = document.querySelectorAll('.nav-btn');

    // Update Buttons
    navBtns.forEach(btn => btn.classList.remove('active'));
    // Find the button clicked (simple logic)
    if(tab === 'gallery') navBtns[0].classList.add('active');
    else navBtns[1].classList.add('active');

    if (tab === 'gallery') {
        galleryView.classList.add('active');
        cvView.classList.remove('active');
        header.style.display = 'block'; // Show header on gallery
    } else {
        galleryView.classList.remove('active');
        cvView.classList.add('active');
        header.style.display = 'none'; // Hide header on CV to save space
    }
}

// --- TYPEWRITER EFFECT ---
const textElement = document.getElementById("typewriter");
const phrases = ["Deep Sky Objects", "Lunar Surfaces", "Landscape Astrophotography", "Welcome to the Universe"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTypewriter() {
    typeWriterLoop();
}

function typeWriterLoop() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriterLoop, typeSpeed);
}

// --- FILTERING ---
function filterImages(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === category || 
          (category === 'all' && btn.innerText === 'All') ||
          (category === 'dso' && btn.innerText.includes('Deep'))) {
            btn.classList.add('active');
        }
    });

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --- LIGHTBOX LOGIC ---
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbTitle = document.getElementById('lb-title');
const lbDate = document.getElementById('lb-date');
const lbObj = document.getElementById('lb-obj');
const lbExp = document.getElementById('lb-exp');
const lbEquip = document.getElementById('lb-equip');

function openLightbox(element) {
    // Get data attributes
    const imgSrc = element.querySelector('img').src;
    const title = element.getAttribute('data-title');
    const date = element.getAttribute('data-date');
    const obj = element.getAttribute('data-obj');
    const exp = element.getAttribute('data-exp');
    const equip = element.getAttribute('data-equip');

    // Set content
    lbImg.src = imgSrc;
    lbTitle.textContent = title;
    lbDate.textContent = date;
    lbObj.textContent = obj;
    lbExp.textContent = exp;
    lbEquip.textContent = equip;

    // Show
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

// Close on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
