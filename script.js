/* === TRANSLATION DATA === */
const translations = {
    en: {
        nav_gallery: "GALLERY",
        nav_portfolio: "JOURNEY & PORTFOLIO",
        details: "DETAILS",
        // Gallery
        story1_title: "The First Glimpse",
        story1_text: "It wasn't just about looking up; it was about understanding the scale of it all. The silence of the night sky in Mallorca offered a perspective that the noise of the day could never provide. I realized that every photon hitting my sensor had traveled thousands of years just to end its journey here.",
        story2_title: "The Technical Pursuit",
        story2_text: "Astrophotography is where art meets rigorous science. It taught me patience—collecting light for hours to reveal what the human eye cannot see. Just like in Data Science, it is about extracting signal from noise, finding patterns in the chaos of the cosmos using tools like PixInsight and Python.",
        story3_title: "The Philosophy of Light",
        story3_text: "We are merely temporary observers of an eternal universe. Through my lens, I attempt to capture these fleeting moments of eternity. Whether it is the craters of the Moon or the dust lanes of Andromeda, each image is a humbled acknowledgement of our place in the void.",
        // Profile
        profile_title: "Professional Profile",
        exp_title: "Experience",
        skills_title: "Core Competencies",
        edu_title: "Education",
        job1_role: "AI Engineer & Architect",
        job1_place: "Multinational Hospitality Group",
        job1_date: "May 2025 - Present",
        job1_desc: "Leading AI adoption strategies, defining corporate governance for Generative AI, and deploying LLM solutions (Gemini) across global departments to automate complex workflows.",
        job2_role: "Data Scientist",
        job2_place: "Engineering & Innovation Firm",
        job2_date: "Apr 2024 - Oct 2024",
        job2_desc: "Developed Computer Vision models (YOLO, Detectron) to digitize road infrastructure assets from terabytes of visual data. Built deep learning pipelines for object detection.",
        job3_role: "Data Analyst",
        job3_place: "Public Utility Services",
        job3_date: "Oct 2022 - May 2023",
        job3_desc: "Optimized fleet efficiency and environmental reporting using BI tools and statistical analysis for large-scale urban infrastructure.",
        edu1_role: "Master in Artificial Intelligence",
        edu1_place: "University of the Balearic Islands",
        edu2_role: "B.S. Industrial Electronics Engineering",
        edu2_place: "University of the Balearic Islands",
        contact_quote: "\"Somewhere, something incredible is waiting to be known.\"",
        // Lightbox
        lb_obj: "OBJECT",
        lb_date: "DATE",
        lb_exp: "EXPOSURE",
        lb_equip: "EQUIPMENT"
    },
    es: {
        nav_gallery: "GALERÍA",
        nav_portfolio: "VIAJE Y PORTFOLIO",
        details: "DETALLES",
        // Gallery
        story1_title: "El Primer Vistazo",
        story1_text: "No se trataba solo de mirar hacia arriba; se trataba de entender la escala de todo. El silencio del cielo nocturno en Mallorca ofrecía una perspectiva que el ruido del día nunca podría proporcionar. Me di cuenta de que cada fotón que golpeaba mi sensor había viajado miles de años solo para terminar su viaje aquí.",
        story2_title: "La Búsqueda Técnica",
        story2_text: "La astrofotografía es donde el arte se encuentra con la ciencia rigurosa. Me enseñó paciencia: recolectar luz durante horas para revelar lo que el ojo humano no puede ver. Al igual que en la Ciencia de Datos, se trata de extraer señal del ruido, encontrando patrones en el caos del cosmos utilizando herramientas como PixInsight y Python.",
        story3_title: "La Filosofía de la Luz",
        story3_text: "Somos meramente observadores temporales de un universo eterno. A través de mi lente, intento capturar estos momentos fugaces de eternidad. Ya sean los cráteres de la Luna o los carriles de polvo de Andrómeda, cada imagen es un humilde reconocimiento de nuestro lugar en el vacío.",
        // Profile
        profile_title: "Perfil Profesional",
        exp_title: "Experiencia",
        skills_title: "Competencias Clave",
        edu_title: "Educación",
        job1_role: "Ingeniero y Arquitecto de IA",
        job1_place: "Grupo Hotelero Multinacional",
        job1_date: "May 2025 - Presente",
        job1_desc: "Liderando estrategias de adopción de IA, definiendo la gobernanza corporativa para IA Generativa y desplegando soluciones LLM (Gemini) en departamentos globales para automatizar flujos de trabajo complejos.",
        job2_role: "Científico de Datos",
        job2_place: "Firma de Ingeniería e Innovación",
        job2_date: "Abr 2024 - Oct 2024",
        job2_desc: "Desarrollo de modelos de Visión por Computador (YOLO, Detectron) para digitalizar activos de infraestructura vial a partir de terabytes de datos visuales.",
        job3_role: "Analista de Datos",
        job3_place: "Servicios Públicos",
        job3_date: "Oct 2022 - May 2023",
        job3_desc: "Optimización de la eficiencia de la flota e informes ambientales utilizando herramientas de BI y análisis estadístico para infraestructura urbana a gran escala.",
        edu1_role: "Máster en Inteligencia Artificial",
        edu1_place: "Universitat de les Illes Balears",
        edu2_role: "Grado en Ing. Electrónica Industrial",
        edu2_place: "Universitat de les Illes Balears",
        contact_quote: "\"En algún lugar, algo increíble está esperando ser conocido.\"",
        // Lightbox
        lb_obj: "OBJETO",
        lb_date: "FECHA",
        lb_exp: "EXPOSICIÓN",
        lb_equip: "EQUIPO"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('btn-gallery').textContent = translations[lang].nav_gallery;
    document.getElementById('btn-portfolio').textContent = translations[lang].nav_portfolio;

    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
}

/* === ROTATING QUOTES === */
const quotes = [
    { text: "\"We are made of starstuff.\"", author: "- Carl Sagan" },
    { text: "\"Somewhere, something incredible is waiting to be known.\"", author: "- Carl Sagan" },
    { text: "\"Eppur si muove.\"", author: "- Galileo Galilei" },
    { text: "\"Look up at the stars and not down at your feet.\"", author: "- Stephen Hawking" },
    { text: "\"The universe is under no obligation to make sense to you.\"", author: "- Neil deGrasse Tyson" },
    { text: "\"Two things are infinite: the universe and human stupidity.\"", author: "- Albert Einstein" }
];

let quoteIndex = 0;
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthEl = document.getElementById('quote-author');

function cycleQuotes() {
    quoteTextEl.classList.remove('visible');
    quoteAuthEl.classList.remove('visible');

    setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quoteTextEl.textContent = quotes[quoteIndex].text;
        quoteAuthEl.textContent = quotes[quoteIndex].author;
        
        quoteTextEl.classList.add('visible');
        quoteAuthEl.classList.add('visible');
    }, 1000); // Wait for fade out
}

// Init quotes
setTimeout(() => {
    quoteTextEl.classList.add('visible');
    quoteAuthEl.classList.add('visible');
    setInterval(cycleQuotes, 6000); 
}, 3000);

/* === TAB SWITCHING === */
function switchTab(tabName) {
    const gallery = document.getElementById('gallery-tab');
    const portfolio = document.getElementById('portfolio-tab');
    const btnGallery = document.getElementById('btn-gallery');
    const btnPortfolio = document.getElementById('btn-portfolio');

    if(tabName === 'gallery') {
        gallery.classList.remove('hidden');
        gallery.classList.add('fade-in');
        portfolio.classList.add('hidden');
        btnGallery.classList.add('active');
        btnPortfolio.classList.remove('active');
    } else {
        portfolio.classList.remove('hidden');
        portfolio.classList.add('fade-in');
        gallery.classList.add('hidden');
        btnPortfolio.classList.add('active');
        btnGallery.classList.remove('active');
    }
}

/* === GALLERY FILTERING (SMART YEARS) === */
function filterGallery(category, clickedBtn) {
    const yearSections = document.querySelectorAll('.year-section');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    yearSections.forEach(section => {
        let visibleCount = 0;
        const items = section.querySelectorAll('.g-item');

        items.forEach(item => {
            if(category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Hide year title if no images remain
        if (visibleCount === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

/* === LIGHTBOX === */
const lightbox = document.getElementById('lightbox');

function openLightbox(elem) {
    const imgSrc = elem.querySelector('img').src;
    const title = elem.dataset.title;
    const obj = elem.dataset.obj;
    const date = elem.dataset.date;
    const exp = elem.dataset.exp;
    const equip = elem.dataset.equip;

    document.getElementById('lb-img').src = imgSrc;
    document.getElementById('lb-title').innerText = title;
    
    document.getElementById('val-obj').innerText = obj;
    document.getElementById('val-date').innerText = date;
    document.getElementById('val-exp').innerText = exp;
    document.getElementById('val-equip').innerText = equip;

    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});

/* === PLAY AUDIO ON CLICK (BROWSER POLICY) === */
document.body.addEventListener('click', function() {
    const audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed (policy):", e));
    }
}, { once: true });
