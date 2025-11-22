document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. IMAGE CONFIGURATION ---
    const images = {
        hero: {
            // Using the specific iStock Neuron image for both modes as requested
            light: 'https://media.istockphoto.com/id/1053434168/photo/neurons-cells-concept.jpg?s=612x612&w=0&k=20&c=WsA4glAgBMQ-ur_McjozmX9FUqsQdUcHUhVgX4a-vH0=', 
            dark: 'https://media.istockphoto.com/id/1053434168/photo/neurons-cells-concept.jpg?s=612x612&w=0&k=20&c=WsA4glAgBMQ-ur_McjozmX9FUqsQdUcHUhVgX4a-vH0=' 
        },
        lecce: {
            light: 'https://images.unsplash.com/photo-1628178652458-7c858b29c0d5?q=80&w=2000&auto=format&fit=crop', 
            dark: 'https://images.unsplash.com/photo-1616086749327-d4fa24b17df4?q=80&w=2000&auto=format&fit=crop' 
        }
    };

    // --- 2. TRANSLATIONS ---
    const translations = {
        it: {
            nav_vision: "Visione", nav_services: "Soluzioni", nav_projects: "Lavori", btn_contact: "Contatti",
            hero_title: "Core Data Studio.<br><span class='gradient-text'>Intelligenza Invisibile.</span>",
            hero_subtitle: "Ingegnerizziamo gli algoritmi per il tuo prossimo passo avanti. Machine learning puro.",
            btn_explore: "Le Soluzioni",
            vision_title: "La complessità è nel DNA.",
            vision_p1: "Nati a <strong>Lecce</strong>, dove il Barocco ci ha insegnato che la bellezza è nei dettagli.",
            vision_p2: "Portiamo la stessa cura ingegneristica nei tuoi dati.",
            services_title: "Competenze", services_sub: "Ingegneria dei dati end-to-end.",
            srv_1_title: "Analisi Predittiva", srv_1_desc: "Trasforma i dati storici in strategie future.",
            srv_2_title: "Computer Vision", srv_2_desc: "Occhi automatizzati per controllo qualità e sicurezza.",
            srv_3_title: "Modelli AI Custom", srv_3_desc: "LLM privati addestrati esclusivamente sui tuoi dati.",
            projects_title: "Lavori Selezionati",
            contact_title: "Parliamo di Dati.", contact_desc: "Sede a Lecce, operativi ovunque.", form_btn: "Connettiti"
        },
        en: {
            nav_vision: "Vision", nav_services: "Solutions", nav_projects: "Work", btn_contact: "Contact",
            hero_title: "Core Data Studio.<br><span class='gradient-text'>Invisible Intelligence.</span>",
            hero_subtitle: "We engineer the algorithms behind your next breakthrough. Pure machine learning.",
            btn_explore: "Our Solutions",
            vision_title: "Complexity is in our DNA.",
            vision_p1: "Born in <strong>Lecce</strong>, where Baroque architecture taught us beauty lies in details.",
            vision_p2: "We bring that same engineering craftsmanship to your data pipelines.",
            services_title: "Capabilities", services_sub: "End-to-end data engineering.",
            srv_1_title: "Predictive Analytics", srv_1_desc: "Turn historical data into future strategy.",
            srv_2_title: "Computer Vision", srv_2_desc: "Automated eyes for quality control.",
            srv_3_title: "Custom AI Models", srv_3_desc: "Private LLMs trained exclusively on your data.",
            projects_title: "Selected Work",
            contact_title: "Let's talk Data.", contact_desc: "Based in Lecce, working globally.", form_btn: "Connect"
        }
    };

    // --- 3. LOGIC ---
    const els = {
        aiImg: document.getElementById('aiImage'),
        lecceImg: document.getElementById('lecceImage'),
        langBtn: document.getElementById('langToggle'),
        hamburger: document.getElementById('hamburger'),
        mobileMenu: document.getElementById('mobileMenu')
    };

    let currentLang = 'en';

    function updateThemeImages() {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        els.aiImg.src = isDark ? images.hero.dark : images.hero.light;
        els.lecceImg.src = isDark ? images.lecce.dark : images.lecce.light;
    }

    // Initialize
    updateThemeImages();
    
    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeImages);

    // Lang Toggle
    els.langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'it' ? 'en' : 'it';
        els.langBtn.textContent = currentLang === 'it' ? 'EN' : 'IT';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
        });
    });

    // Mobile Menu
    els.hamburger.addEventListener('click', () => {
        const isOpen = els.mobileMenu.style.display === 'block';
        els.mobileMenu.style.display = isOpen ? 'none' : 'block';
    });

    // Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});