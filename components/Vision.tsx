import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lang, TRANSLATIONS } from '../constants';

interface VisionProps {
  lang: Lang;
}

export const Vision: React.FC<VisionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Image moves slightly faster than scroll for parallax
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Consistent animation transition
  const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <motion.section 
        ref={containerRef} 
        id="vision" 
        className="min-h-[80vh] flex flex-col justify-center py-24 px-8 md:px-16 border-b border-cds-border/30 overflow-hidden"
        initial={{ opacity: 0.2, filter: 'grayscale(100%)' }}
        whileInView={{ opacity: 1, filter: 'grayscale(0%)' }}
        viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
        transition={{ duration: 0.8 }}
    >
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="font-mono text-cds-accent text-xs mb-8 block"
        >
            01 / VISION
        </motion.span>

        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight mb-12 text-cds-fg"
        >
            {t.vision_title}
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 font-mono text-sm md:text-base text-cds-fgMuted leading-relaxed relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...transition, delay: 0.2 }}
                    dangerouslySetInnerHTML={{ __html: t.vision_p1 }} 
                />
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...transition, delay: 0.3 }}
                    className="pl-4 border-l-2 border-cds-accent text-cds-fg"
                >
                    {t.vision_p2}
                </motion.div>
            </div>

            {/* Baroque Image with Parallax & Reveal */}
            <motion.div 
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative w-full aspect-[4/3] md:aspect-auto md:h-[400px] overflow-hidden border border-cds-border bg-cds-bgCard"
            >
                <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
                    <img 
                        src="/img/lecceimg.jpeg" 
                        alt="Lecce Baroque Architecture" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
                <div className="absolute bottom-0 left-0 bg-cds-bg/80 backdrop-blur px-3 py-1 text-[10px] font-mono text-cds-accent border-t border-r border-cds-border z-10">
                    LOC: LECCE, IT
                </div>
            </motion.div>
        </div>
    </motion.section>
  );
};