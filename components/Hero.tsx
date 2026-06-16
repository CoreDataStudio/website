
import React from 'react';
import { motion } from 'framer-motion';
import { LogoHero } from './LogoHero';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,201,74,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center w-full px-8 gap-8">
        <div className="w-full max-w-5xl flex items-center justify-center max-h-[55vh] md:max-h-[65vh]">
          <LogoHero />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-mono text-sm md:text-base text-cds-fgMuted tracking-widest uppercase"
        >
          Coming soon
        </motion.p>
      </div>
    </section>
  );
};
