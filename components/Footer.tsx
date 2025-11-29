
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-cds-border bg-cds-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 mb-24 text-center">
            <div className="flex flex-col gap-2 items-center">
                <span className="font-display font-bold text-2xl text-cds-fg">CORE DATA STUDIO</span>
             </div>
            
            <div className="flex gap-8 md:gap-12 font-mono text-sm text-cds-fgMuted">
                <a href="mailto:alessandro.feri.m@gmail.com" className="hover:text-cds-accent transition-colors">EMAIL</a>

                <a href="https://github.com/CoreDataStudio" target="_blank" rel="noopener noreferrer" className="hover:text-cds-accent transition-colors">GITHUB</a>
                
            </div>
        </div>

        <div className="relative overflow-hidden w-full text-center">
             <motion.h1 
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[12vw] text-cds-border/30 leading-none select-none inline-block"
             >
                CDS—2025
             </motion.h1>
        </div>
      </div>
    </footer>
  );
};
