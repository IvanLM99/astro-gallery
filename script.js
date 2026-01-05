/* --- Typewriter Effect --- */
const textElement = document.getElementById("typewriter");
const phrases = [
    "Exploring the Universe...",
    "Target: The Moon",
    "Target: Andromeda Galaxy",
    "Target: Orion Nebula",
    "Displaying Astrophotography Portfolio"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Delete faster
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Type normal speed
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing phrase, pause before deleting
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start the typewriter on load
document.addEventListener('DOMContentLoaded', typeWriter);


/* --- Filtering Logic --- */
function filterImages(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-buttons .btn');

    // Update active button style
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category || (category === 'dso' && btn.innerText === 'DEEP_SKY')) {
             if(btn.getAttribute('onclick').includes(category)) btn.classList.add('active');
        }
        if (category === 'all' && btn.innerText === 'ALL') btn.classList.add('active');
    });

    // Show/Hide images
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
