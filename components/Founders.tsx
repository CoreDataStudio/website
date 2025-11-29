import React from 'react';
import { motion } from 'framer-motion';
import { Lang, TRANSLATIONS, FOUNDERS } from '../constants';

interface FoundersProps {
  lang: Lang;
}

export const Founders: React.FC<FoundersProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section 
        id="contatti" 
        className="py-32 px-6 md:px-12 bg-cds-bg"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-24"
        >
            <span className="font-mono text-cds-accent text-sm mb-4 block">[03] — CONTACT</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-cds-fg">{t.contact_title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cds-border border border-cds-border">
          {FOUNDERS.map((founder, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0.2, y: 50, filter: 'grayscale(100%)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'grayscale(0%)' }}
                viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                transition={{ ...transition, delay: index * 0.2 }}
                className="bg-cds-bg p-8 md:p-12 hover:bg-cds-bgCard transition-colors group relative"
            >
              <div className="flex items-start justify-between mb-8">
                  {/* Larger Founder Image */}
                  <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded border border-cds-border/50 bg-cds-bgCard shadow-lg md:grayscale md:group-hover:grayscale-0 transition-all duration-500">
                     <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover" 
                     />
                  </div>
                  <span className="font-mono text-xs text-cds-fgMuted border border-cds-border px-2 py-1 rounded bg-cds-bg/50 backdrop-blur">FOUNDER</span>
              </div>

              <h3 className="font-display text-3xl font-bold text-cds-fg mb-2">{founder.name}</h3>
              <p className="font-mono text-cds-accent text-xs uppercase mb-8">
                {(t as any)[founder.roleKey]}
              </p>

              <div className="flex flex-col gap-4 font-mono text-sm">
                 <div className="flex flex-col">
                    <span className="text-xs text-cds-fgMuted mb-1">EMAIL</span>
                    <a href={`mailto:${founder.email}`} className="text-cds-fg hover:text-cds-accent transition-colors break-all">
                        {founder.email}
                    </a>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-cds-fgMuted mb-1">GITHUB</span>
                    <a href={`https://${founder.github}`} target="_blank" className="text-cds-fg hover:text-cds-accent transition-colors">
                        {founder.github}
                    </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="mt-12 text-center md:text-left"
        >
            <p className="font-mono text-cds-fgMuted text-sm max-w-md">
                {t.contact_desc}
            </p>
        </motion.div>
      </div>
    </section>
  );
};