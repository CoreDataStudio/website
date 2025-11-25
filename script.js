document.addEventListener('DOMContentLoaded', () => {
    
    // TRANSLATIONS
    const translations = {
        it: {
            nav_vision: "Visione", nav_services: "Soluzioni", nav_projects: "Lavori", btn_contact: "Contatti",
            hero_title: "Core Data Studio.<br><span class='gradient-text'>Dati Utili.<br>Decisioni migliori.</span>",
            hero_subtitle: "Progettiamo sistemi di AI e machine learning che generano vantaggio competitivo reale.",
            btn_explore: "Le Soluzioni",
            vision_title: "La complessità è il nostro linguaggio.",
            vision_p1: "Nati a <strong>Lecce</strong>, dove l’arte del Barocco ci ricorda che l’eccellenza nasce dalla precisione.",
            vision_p2: "Applichiamo la stessa cura ingegneristica nella costruzione dei tuoi sistemi intelligenti.",
            services_title: "Competenze", 
            services_sub: "AI e Data Engineering end-to-end per imprese ambiziose.",
            srv_1_title: "Analisi Predittiva", 
            srv_1_desc: "Dai segnali nascosti nei dati alle decisioni strategiche, con modelli predittivi su misura.",
            srv_2_title: "Computer Vision", 
            srv_2_desc: "Automazione visiva avanzata per qualità, sicurezza e processi industriali intelligenti.",
            srv_3_title: "Modelli AI Custom", 
            srv_3_desc: "LLM privati, sicuri e addestrati esclusivamente sui dati della tua organizzazione.",
            projects_title: "Progetti Selezionati",
            contact_title: "Costruiamo la tua AI.", 
            contact_desc: "Siamo a Lecce, ma lavoriamo ovunque serva innovazione.", 
            form_btn: "Contattaci"
        },
        en: {
            nav_vision: "Vision", nav_services: "Solutions", nav_projects: "Work", btn_contact: "Contact",
            hero_title: "Core Data Studio.<br><span class='gradient-text'>Useful data.<br>Better decisions.</span>",
            hero_subtitle: "We design AI and machine learning systems that deliver real competitive advantage.",
            btn_explore: "Our Solutions",
            vision_title: "Complexity is our native language.",
            vision_p1: "Born in <strong>Lecce</strong>, where Baroque mastery teaches that excellence lives in precision.",
            vision_p2: "We bring the same engineering craftsmanship to your intelligent data systems.",
            services_title: "Capabilities",
            services_sub: "End-to-end AI and Data Engineering for ambitious organizations.",
            srv_1_title: "Predictive Analytics",
            srv_1_desc: "From hidden signals to strategic decisions with custom predictive models.",
            srv_2_title: "Computer Vision",
            srv_2_desc: "Advanced visual automation for quality, safety, and intelligent industrial processes.",
            srv_3_title: "Custom AI Models",
            srv_3_desc: "Private, secure LLMs trained exclusively on your organization’s data.",
            projects_title: "Selected Projects",
            contact_title: "Let’s build your AI.",
            contact_desc: "Based in Lecce, operating wherever innovation is needed.",
            form_btn: "Contact Us"
        }
    };

    const els = {
        // Updated Selectors for new structure
        headerMenuBtn: document.getElementById('headerMenuBtn'),
        headerLangBtn: document.getElementById('headerLangBtn'),
        fullscreenMenu: document.getElementById('fullscreenMenu'),
        closeMenu: document.getElementById('closeMenu')
    };

    let currentLang = 'en';

    // --- MENU LOGIC ---
    function openMenu() {
        els.fullscreenMenu.style.display = 'flex';
        setTimeout(() => { els.fullscreenMenu.classList.add('is-open'); }, 10);
    }

    function closeMenu() {
        els.fullscreenMenu.classList.remove('is-open');
        setTimeout(() => { els.fullscreenMenu.style.display = 'none'; }, 300);
    }

    if(els.headerMenuBtn) els.headerMenuBtn.addEventListener('click', openMenu);
    if(els.closeMenu) els.closeMenu.addEventListener('click', closeMenu);

    document.querySelectorAll('.menu-nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- LANG LOGIC ---
    if(els.headerLangBtn) {
        els.headerLangBtn.addEventListener('click', () => {
            currentLang = currentLang === 'it' ? 'en' : 'it';
            const label = currentLang === 'it' ? 'EN' : 'IT';
            els.headerLangBtn.textContent = label;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
            });
        });
    }

    // --- ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});