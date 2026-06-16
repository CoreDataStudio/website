export type Lang = 'it' | 'en';

export const TRANSLATIONS = {
  it: {
    nav_vision: "Visione",
    nav_services: "Soluzioni",
    nav_projects: "Lavori",
    btn_contact: "Contatti",

    hero_l1: "CORE",
    hero_l2_pre: "dai",
    hero_l2_main: "DATA",
    hero_l2_post: "alle Soluzioni",
    hero_l3: "STUDIO",
    hero_subtitle: "Progettiamo sistemi di AI pensati per ridurre la complessità e filtrare il rumore.",
    btn_explore: "Le Soluzioni",
    vision_title: "Scegliere il territorio, non la scorciatoia.",
    vision_p1:"Dopo la laurea magistrale al <strong>Politecnico di Torino</strong> abbiamo scelto di tornare a lavorare nel Salento, a <strong>Lecce</strong>, per creare valore dove affondano le nostre radici.",
    vision_p2:"Unendo la cultura ingegneristica torinese alla conoscenza del territorio, progettiamo sistemi AI che risolvono problemi reali, non solo casi studio.",
    projects_title: "Progetti Selezionati",
    contact_title: "I Nostri Contatti",
    contact_desc: "Co-fondatori di Core Data Studio.",
    founder_role_1: "MSc Data Science and Engineering",
    founder_role_2: "MSc Computer Engineering and AI",
    cookie_msg: "Utilizziamo cookie essenziali per il funzionamento del sito e, solo con il tuo consenso, cookie analitici per migliorare l'esperienza.",
    cookie_accept: "Accetta",
    cookie_decline: "Rifiuta",
    cookie_privacy: "Informativa privacy",
  },
  en: {
    nav_vision: "Vision",
    nav_services: "Solutions",
    nav_projects: "Work",
    btn_contact: "Contact",

    hero_l1: "CORE",
    hero_l2_pre: "from",
    hero_l2_main: "DATA",
    hero_l2_post: "to Solutions",
    hero_l3: "STUDIO",
    hero_subtitle: "We design AI systems built to reduce complexity and filter out noise.",
    btn_explore: "Our Solutions",
    vision_title: "Choosing our territory over shortcuts.",
    vision_p1:"After earning our MSc degrees at the <strong>Polytechnic University of Turin</strong>, we chose to return to <strong>Lecce</strong>, in Salento, to create value where our roots lie.",
    vision_p2:"Combining Turin’s engineering culture with deep knowledge of our region, we design AI systems that solve real problems, not just academic case studies.",

    projects_title: "Selected Projects",
    contact_title: "Our Contacts",
    contact_desc: "Co-founders of Core Data Studio.",
    founder_role_1: "MSc Data Science and Engineering",
    founder_role_2: "MSc Computer Engineering and AI",
    cookie_msg: "We use essential cookies to run this site and, only with your consent, analytics cookies to improve your experience.",
    cookie_accept: "Accept",
    cookie_decline: "Decline",
    cookie_privacy: "Privacy policy",
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "Eurostat Agent",
    desc: "Intelligent assistant on top of Eurostat data for fast, conversational analysis.",
    image: "./img/sdmx.png", 
    bgFit: "contain"
  },
  {
    id: 2,
    title: "Cappuccino News",
    desc: "Morning briefings powered by LLMs: curated news, clean summaries, zero noise.",
    image: "./img/cappuccinonews.png",
    bgFit: "cover"
  },
  {
    id: 3,
    title: "Regional Analysis",
    desc: "Geo-aware dashboards and AI models focused on regional economic dynamics.",
    image: "./img/olivetree.jpg",
    bgFit: "cover"
  },
];

export const FOUNDERS = [
  {
    name: "Alessandro Ferì",
    roleKey: "founder_role_1",
    email: "alessandro.feri.m@gmail.com",
    github: "github.com/alessandroferi99",
    image: "./img/Alessandro.jpeg"
  },
  {
    name: "Michelangelo Caretto",
    roleKey: "founder_role_2",
    email: "michelangelo.caretto@gmail.com",
    github: "github.com/rasenqt",
    image: "./img/Michelangelo.jpeg"
  }
];
