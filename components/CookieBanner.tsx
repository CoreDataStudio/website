import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang, TRANSLATIONS } from '../constants';

const CONSENT_KEY = 'cds_cookie_consent';
const CONSENT_VERSION = '1';

interface CookieConsent {
  choice: 'accepted' | 'declined';
  date: string;
  version: string;
}

interface CookieBannerProps {
  lang: Lang;
}

function getStoredConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    if (raw === 'accepted' || raw === 'declined') {
      return { choice: raw, date: '', version: CONSENT_VERSION };
    }

    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setMounted(true);
    if (!getStoredConsent()) {
      setShow(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    const consent: CookieConsent = {
      choice,
      date: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShow(false);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 md:right-auto md:bottom-6 md:left-6 z-50 p-4 md:p-0"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-[#111111] border border-[#27272A] p-6 md:max-w-md w-full shadow-2xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 font-mono text-[#FFC94A] text-xs uppercase">
                <span className="w-2 h-2 bg-[#FFC94A]" />
                Cookie notice
              </div>
              <p className="font-mono text-sm text-[#71717A] leading-relaxed">
                {t.cookie_msg}{' '}
                <a
                  href="./privacy.html"
                  className="text-[#FFC94A] underline underline-offset-2 hover:text-white transition-colors"
                >
                  {t.cookie_privacy}
                </a>
                .
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleChoice('declined')}
                  className="px-4 py-3 text-xs font-mono border border-[#27272A] text-[#71717A] hover:bg-white/5 transition-colors uppercase"
                >
                  {t.cookie_decline}
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice('accepted')}
                  className="px-4 py-3 bg-[#FFC94A] text-[#050505] text-xs font-mono font-bold hover:bg-white transition-colors uppercase"
                >
                  {t.cookie_accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
