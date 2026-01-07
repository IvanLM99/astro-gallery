/* === TRANSLATIONS DATA === */
const translations = {
    "en": {
        "nav_gallery": "GALLERY",
        "nav_portfolio": "JOURNEY & PORTFOLIO",
        "details": "DETAILS",
        "story1_title": "The First Glimpse",
        "story1_text": "It wasn't just about looking up; it was about understanding the scale of it all. The silence of the night sky in Mallorca offered a perspective that the noise of the day could never provide. I realized that every photon hitting my sensor had traveled thousands of years just to end its journey here.",
        "story2_title": "The Technical Pursuit",
        "story2_text": "Astrophotography is where art meets rigorous science. It taught me patience—collecting light for hours to reveal what the human eye cannot see. Just like in Data Science, it is about extracting signal from noise, finding patterns in the chaos of the cosmos using tools like PixInsight and Python.",
        "story3_title": "The Philosophy of Light",
        "story3_text": "We are merely temporary observers of an eternal universe. Through my lens, I attempt to capture these fleeting moments of eternity. Whether it is the craters of the Moon or the dust lanes of Andromeda, each image is a humbled acknowledgement of our place in the void.",
        "profile_title": "Professional Profile",
        "exp_title": "Experience",
        "skills_title": "Core Competencies",
        "edu_title": "Education",
        "job1_role": "AI Engineer & Architect",
        "job1_place": "Multinational Hospitality Group",
        "job1_date": "May 2025 - Present",
        "job1_desc": "Leading AI adoption strategies, defining corporate governance for Generative AI, and deploying LLM solutions (Gemini) across global departments to automate complex workflows.",
        "job2_role": "Data Scientist",
        "job2_place": "Engineering & Innovation Firm",
        "job2_date": "Apr 2024 - Oct 2024",
        "job2_desc": "Developed Computer Vision models (YOLO, Detectron) to digitize road infrastructure assets from terabytes of visual data. Built deep learning pipelines for object detection.",
        "job3_role": "Data Analyst",
        "job3_place": "Public Utility Services",
        "job3_date": "Oct 2022 - May 2023",
        "job3_desc": "Optimized fleet efficiency and environmental reporting using BI tools and statistical analysis for large-scale urban infrastructure.",
        "edu1_role": "Master in Artificial Intelligence",
        "edu1_place": "University of the Balearic Islands",
        "edu2_role": "B.S. Industrial Electronics Engineering",
        "edu2_place": "University of the Balearic Islands",
        "contact_quote": "\"Somewhere, something incredible is waiting to be known.\"",
        "lb_obj": "OBJECT",
        "lb_date": "DATE",
        "lb_exp": "EXPOSURE",
        "lb_equip": "EQUIPMENT",
        "zoom_hint": "Click image to zoom",
        "filter_all": "All",
        "filter_moon": "Moon",
        "filter_dso": "Deep Sky",
        "filter_landscape": "Landscapes",
        "filter_sky": "Sky",
        "filter_solar": "Solar"
    },
    "es": {
        "nav_gallery": "GALERÍA",
        "nav_portfolio": "VIAJE Y PORTFOLIO",
        "details": "DETALLES",
        "story1_title": "El Primer Vistazo",
        "story1_text": "No se trataba solo de mirar hacia arriba; se trataba de entender la escala de todo. El silencio del cielo nocturno en Mallorca ofrecía una perspectiva que el ruido del día nunca podría proporcionar. Me di cuenta de que cada fotón que golpeaba mi sensor había viajado miles de años solo para terminar su viaje aquí.",
        "story2_title": "La Búsqueda Técnica",
        "story2_text": "La astrofotografía es donde el arte se encuentra con la ciencia rigurosa. Me enseñó paciencia: recolectar luz durante horas para revelar lo que el ojo humano no puede ver. Al igual que en la Ciencia de Datos, se trata de extraer señal del ruido, encontrando patrones en el caos del cosmos utilizando herramientas como PixInsight y Python.",
        "story3_title": "La Filosofía de la Luz",
        "story3_text": "Somos meramente observadores temporales de un universo eterno. A través de mi lente, intento capturar estos momentos fugaces de eternidad. Ya sean los cráteres de la Luna o los carriles de polvo de Andrómeda, cada imagen es un humilde reconocimiento de nuestro lugar en el vacío.",
        "profile_title": "Perfil Profesional",
        "exp_title": "Experiencia",
        "skills_title": "Competencias Clave",
        "edu_title": "Educación",
        "job1_role": "Ingeniero y Arquitecto de IA",
        "job1_place": "Grupo Hotelero Multinacional",
        "job1_date": "May 2025 - Presente",
        "job1_desc": "Liderando estrategias de adopción de IA, definiendo la gobernanza corporativa para IA Generativa y desplegando soluciones LLM (Gemini) en departamentos globales para automatizar flujos de trabajo complejos.",
        "job2_role": "Científico de Datos",
        "job2_place": "Firma de Ingeniería e Innovación",
        "job2_date": "Abr 2024 - Oct 2024",
        "job2_desc": "Desarrollo de modelos de Visión por Computador (YOLO, Detectron) para digitalizar activos de infraestructura vial a partir de terabytes de datos visuales.",
        "job3_role": "Analista de Datos",
        "job3_place": "Servicios Públicos",
        "job3_date": "Oct 2022 - May 2023",
        "job3_desc": "Optimización de la eficiencia de la flota e informes ambientales utilizando herramientas de BI y análisis estadístico para infraestructura urbana a gran escala.",
        "edu1_role": "Máster en Inteligencia Artificial",
        "edu1_place": "Universitat de les Illes Balears",
        "edu2_role": "Grado en Ing. Electrónica Industrial",
        "edu2_place": "Universitat de les Illes Balears",
        "contact_quote": "\"En algún lugar, algo increíble está esperando ser conocido.\"",
        "lb_obj": "OBJETO",
        "lb_date": "FECHA",
        "lb_exp": "EXPOSICIÓN",
        "lb_equip": "EQUIPO",
        "zoom_hint": "Haz clic para hacer zoom",
        "filter_all": "Todo",
        "filter_moon": "Luna",
        "filter_dso": "Cielo Profundo",
        "filter_landscape": "Paisajes",
        "filter_sky": "Cielo",
        "filter_solar": "Solar"
    }
};

let currentLang = 'en';
let galleryData = []; // Will hold JSON data

/* === INIT & FETCH DATA === */
document.addEventListener('DOMContentLoaded', () => {
    fetch('gallery_data.json')
        .then(response => response.json())
        .then(data => {
            galleryData = data;
            renderGallery(data);
        })
        .catch(err => console.error('Error loading gallery data:', err));
});

/* === LANGUAGE HANDLING === */
function setLanguage(lang) {
    currentLang = lang;
    
    // Update elements with data-t attributes
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(function(el) {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Nav Buttons manually
    const btnGal = document.getElementById('btn-gallery');
    const btnPort = document.getElementById('btn-portfolio');
    if(btnGal) btnGal.textContent = translations[lang].nav_gallery;
    if(btnPort) btnPort.textContent = translations[lang].nav_portfolio;

    // Toggle Active State
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');

    // Update Quote immediately
    updateQuoteDisplay();
}

/* === ROTATING QUOTES (BILIGUAL) === */
const quotes = [
    { 
        text_en: "\"We are made of starstuff.\"", 
        text_es: "\"Estamos hechos de polvo de estrellas.\"", 
        author: "- Carl Sagan" 
    },
    { 
        text_en: "\"Somewhere, something incredible is waiting to be known.\"", 
        text_es: "\"En algún lugar, algo increíble espera ser descubierto.\"", 
        author: "- Carl Sagan" 
    },
    { 
        text_en: "\"Eppur si muove.\"", 
        text_es: "\"Y sin embargo, se mueve.\"", 
        author: "- Galileo Galilei" 
    },
    { 
        text_en: "\"Look up at the stars and not down at your feet.\"", 
        text_es: "\"Mira a las estrellas y no a tus pies.\"", 
        author: "- Stephen Hawking" 
    },
    { 
        text_en: "\"The universe is under no obligation to make sense to you.\"", 
        text_es: "\"El universo no tiene la obligación de tener sentido para ti.\"", 
        author: "- Neil deGrasse Tyson" 
    },
    { 
        text_en: "\"Two things are infinite: the universe and human stupidity.\"", 
        text_es: "\"Dos cosas son infinitas: el universo y la estupidez humana.\"", 
        author: "- Albert Einstein" 
    },
    {
        text_en: "\"Equipped with his five senses, man explores the universe around him and calls the adventure Science.\"",
        text_es: "\"Equipado con sus cinco sentidos, el hombre explora el universo que lo rodea y llama a la aventura Ciencia.\"",
        author: "- Edwin Hubble"
    },
    {
        text_en: "\"For small creatures such as we the vastness is bearable only through love.\"",
        text_es: "\"Para criaturas pequeñas como nosotros, la inmensidad es soportable solo a través del amor.\"",
        author: "- Carl Sagan"
    }
];

let quoteIndex = 0;
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthEl = document.getElementById('quote-author');

function updateQuoteDisplay() {
    if(!quoteTextEl || !quoteAuthEl) return;
    
    const q = quotes[quoteIndex];
    const text = currentLang === 'en' ? q.text_en : q.text_es;
    
    quoteTextEl.textContent = text;
    quoteAuthEl.textContent = q.author;
}

function cycleQuotes() {
    quoteTextEl.classList.remove('visible');
    quoteAuthEl.classList.remove('visible');

    setTimeout(function() {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        updateQuoteDisplay();
        
        quoteTextEl.classList.add('visible');
        quoteAuthEl.classList.add('visible');
    }, 1000); 
}

// Init quotes loop
setTimeout(function() {
    if(quoteTextEl) quoteTextEl.classList.add('visible');
    if(quoteAuthEl) quoteAuthEl.classList.add('visible');
    setInterval(cycleQuotes, 8000); 
}, 3000);

/* === DYNAMIC GALLERY RENDER === */
function renderGallery(data) {
    const container = document.getElementById('dynamic-gallery-root');
    container.innerHTML = ''; // Clear existing

    // Group by Year
    const grouped = data.reduce((acc, item) => {
        (acc[item.year] = acc[item.year] || []).push(item);
        return acc;
    }, {});

    // Sort years descending
    const years = Object.keys(grouped).sort((a, b) => b - a);

    years.forEach(year => {
        // Create Year Section
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';
        yearSection.id = `year-${year}`;

        const yearTitle = document.createElement('h2');
        yearTitle.className = 'year-title';
        yearTitle.textContent = year;
        yearSection.appendChild(yearTitle);

        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        // Add Items
        grouped[year].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `g-item ${item.category}`;
            // Store data directly on element for easy retrieval
            itemDiv.dataset.json = JSON.stringify(item);
            
            itemDiv.onclick = function() { openLightbox(this); };

            itemDiv.innerHTML = `
                <img src="${item.src}" alt="${item.object}" loading="lazy">
                <div class="overlay"><span data-t="details">DETAILS</span></div>
            `;
            grid.appendChild(itemDiv);
        });

        yearSection.appendChild(grid);
        container.appendChild(yearSection);
    });

    // Apply current translations to new elements (Details buttons)
    setLanguage(currentLang);
}

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

/* === GALLERY FILTERING === */
function filterGallery(category, clickedBtn) {
    const yearSections = document.querySelectorAll('.year-section');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(function(btn) { btn.classList.remove('active'); });
    clickedBtn.classList.add('active');

    yearSections.forEach(function(section) {
        let visibleCount = 0;
        const items = section.querySelectorAll('.g-item');

        items.forEach(function(item) {
            if(category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Hide section if empty
        if (visibleCount === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

/* === LIGHTBOX === */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');

function openLightbox(elem) {
    const data = JSON.parse(elem.dataset.json);

    lbImg.src = data.src;
    lbImg.classList.remove('zoomed'); // Reset zoom
    
    // Set bilingual text based on currentLang
    const title = currentLang === 'en' ? data.title_en : data.title_es;
    const story = currentLang === 'en' ? data.story_en : data.story_es;

    document.getElementById('lb-title').innerText = title || data.object;
    
    // Story Logic
    const storyContainer = document.getElementById('lb-story-container');
    const storyText = document.getElementById('lb-story-text');
    
    if (story && story.trim() !== "") {
        storyContainer.style.display = 'block';
        storyText.innerText = story;
    } else {
        storyContainer.style.display = 'none';
    }

    document.getElementById('val-obj').innerText = data.object;
    document.getElementById('val-date').innerText = data.date;
    document.getElementById('val-exp').innerText = data.exposure;
    document.getElementById('val-equip').innerText = data.equipment;

    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lbImg.classList.remove('zoomed');
    }, 300);
}

function toggleZoom(img) {
    img.classList.toggle('zoomed');
}

if(lightbox) {
    lightbox.addEventListener('click', function(e) {
        // Close if clicking outside the image or info
        if(e.target === lightbox || e.target.classList.contains('lb-content')) {
            closeLightbox();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") closeLightbox();
});
