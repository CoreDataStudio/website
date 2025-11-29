import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang, TRANSLATIONS } from '../constants';

interface CookieBannerProps {
  lang: Lang;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const [show, setShow] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const consent = localStorage.getItem('cds_cookie_consent');
    if (!consent) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cds_cookie_consent', choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-6 md:left-6 z-[100]"
        >
          <div className="bg-cds-bgCard border border-cds-border p-6 md:max-w-md w-full shadow-2xl">
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-2 font-mono text-cds-accent text-xs uppercase mb-2">
                  <span className="w-2 h-2 bg-cds-accent"></span>
                  SYSTEM NOTICE
               </div>
               <p className="font-mono text-sm text-cds-fgMuted leading-relaxed">
                {(t as any).cookie_msg}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => handleChoice('declined')}
                  className="px-4 py-3 text-xs font-mono border border-cds-border text-cds-fgMuted hover:bg-white/5 transition-colors uppercase"
                >
                  {(t as any).cookie_decline}
                </button>
                <button
                  onClick={() => handleChoice('accepted')}
                  className="px-4 py-3 bg-cds-accent text-cds-bg text-xs font-mono font-bold hover:bg-white transition-colors uppercase"
                >
                  {(t as any).cookie_accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};