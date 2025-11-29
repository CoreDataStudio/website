
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LogoHero } from './LogoHero';
import { Lang, TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Lang;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const ref = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  return (
    <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cds-bg/50">
      
      {/* Background Radial for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,201,74,0.02)_0%,transparent_70%)] pointer-events-none" />

      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center text-center w-full min-h-screen justify-center pt-24 pb-20 md:pb-0"
      >
        
        {/* Logo Container - Flexible but constrained height */}
        <div className="w-full max-w-5xl flex items-center justify-center p-1 max-h-[55vh] md:max-h-[65vh]">
            <LogoHero />
        </div>

        {/* Minimal Description - Relative with Gap */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="w-full px-8 text-center mt-1 md:mt-2 mb-12"
        >
            <p className="font-mono text-xs text-cds-fgMuted/70 max-w-md mx-auto leading-relaxed">
                {t.hero_subtitle}
            </p>
        </motion.div>
      </motion.div>

      {/* System Status / Coordinates Footer - Stays fixed or fades slower */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 w-full px-8 md:px-12 flex justify-between items-end hidden md:flex pointer-events-none"
      >
            <div className="font-mono text-xs text-cds-fgMuted flex flex-col gap-2 text-left">
               <div>LAT: 40.35° N</div>
               <div>LNG: 18.17° E</div>
               <div className="text-cds-accent mt-2">● SYSTEM ONLINE</div>
            </div>
      </motion.div>

      {/* Decorative Corners */}
      <div className="absolute top-24 left-6 w-3 h-3 border-t border-l border-cds-fgMuted/30" />
      <div className="absolute top-24 right-6 w-3 h-3 border-t border-r border-cds-fgMuted/30" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-cds-fgMuted/30 md:hidden" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-cds-fgMuted/30 md:hidden" />

    </section>
  );
};
