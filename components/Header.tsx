import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lang, TRANSLATIONS } from '../constants';
import { Logo } from './Logo';

interface HeaderProps {
  lang: Lang;
  toggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#vision", label: t.nav_vision, num: "01" },
    { href: "#progetti", label: t.nav_projects, num: "02" },
    { href: "#contatti", label: t.btn_contact, num: "03" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
        <div className="flex justify-between items-center px-6 md:px-12 py-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
                <Logo size={32} color="#FFC94A" />
                <span className="font-display font-bold text-lg tracking-tight hidden md:block">CORE DATA STUDIO</span>
            </a>

            <div className="flex items-center gap-8">
                <button 
                    onClick={toggleLang}
                    className="font-mono text-sm hover:text-cds-accent transition-colors underline decoration-1 underline-offset-4"
                >
                    [{lang === 'it' ? 'EN' : 'IT'}]
                </button>

                <button 
                    onClick={toggleMenu}
                    className="flex items-center gap-2 hover:text-cds-accent transition-colors"
                >
                    <span className="font-mono text-sm hidden md:block">MENU</span>
                    <Menu size={24} />
                </button>
            </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-cds-bg z-[60] flex flex-col justify-center px-6 md:px-20"
          >
            <div className="absolute top-6 right-6 md:right-12">
                 <button 
                    onClick={toggleMenu}
                    className="text-cds-fg hover:text-cds-accent transition-colors"
                >
                    <X size={32} />
                </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="group flex items-baseline gap-6"
                >
                  <span className="font-mono text-cds-accent text-sm md:text-base">/{item.num}</span>
                  <span className="font-display text-5xl md:text-8xl font-bold text-cds-fg group-hover:text-cds-accent transition-colors uppercase">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};