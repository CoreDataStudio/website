if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

const translations = {
    en: {
        nav_services: "Services",
        nav_method: "Methodology",
        nav_contact: "Get in Touch",
        hero_title: "Turning Data into <br> Future Intelligence.",
        hero_subtitle: "We build advanced AI solutions and predictive models to propel your business into the next era of technology.",
        btn_start: "Start Project",
        btn_learn: "Learn More",
        serv_title: "Our Expertise",
        serv_sub: "Comprehensive data solutions for complex challenges.",
        c1_title: "Predictive Analytics",
        c1_desc: "Forecast trends and behaviors using historical data to make informed strategic decisions.",
        c2_title: "Machine Learning",
        c2_desc: "Custom algorithms that learn from your data to automate processes and optimize efficiency.",
        c3_title: "Generative AI",
        c3_desc: "Implement LLMs and custom GPT solutions to transform how you interact with information."
    },
    it: {
        nav_services: "Servizi",
        nav_method: "Metodologia",
        nav_contact: "Contattaci",
        hero_title: "Trasformiamo i Dati in <br> Intelligenza Futura.",
        hero_subtitle: "Costruiamo soluzioni AI avanzate e modelli predittivi per spingere il tuo business nella prossima era tecnologica.",
        btn_start: "Inizia Progetto",
        btn_learn: "Scopri di più",
        serv_title: "Le Nostre Competenze",
        serv_sub: "Soluzioni dati complete per sfide complesse.",
        c1_title: "Analisi Predittiva",
        c1_desc: "Prevedi tendenze e comportamenti usando dati storici per prendere decisioni strategiche informate.",
        c2_title: "Machine Learning",
        c2_desc: "Algoritmi personalizzati che imparano dai tuoi dati per automatizzare processi e ottimizzare l'efficienza.",
        c3_title: "AI Generativa",
        c3_desc: "Implementazione di LLM e soluzioni GPT personalizzate per trasformare l'interazione con le informazioni."
    }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'it' : 'en';
    langToggleBtn.textContent = currentLang === 'en' ? 'IT' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key]; 
        }
    });
});