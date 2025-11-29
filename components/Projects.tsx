import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lang, TRANSLATIONS, PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  lang: Lang;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Consistent animation transition
  const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <section 
        id="progetti" 
        className="py-24 px-6 md:px-16 border-b border-cds-border/30"
    >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
            <span className="font-mono text-cds-accent text-xs mb-4 block">02 / WORK</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-cds-fg">{t.projects_title}</h2>
        </motion.div>

        <div className="flex flex-col gap-12">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0.2, y: 40, filter: 'grayscale(100%)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'grayscale(0%)' }}
                    viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                    transition={{ ...transition, delay: index * 0.15 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative border border-cds-border bg-cds-bgCard/30 hover:bg-cds-bgCard/60 transition-colors p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start rounded-lg"
                >
                    {/* Image Thumbnail (Significantly Larger) */}
                    <div className="w-full md:w-[400px] h-64 md:h-[280px] shrink-0 overflow-hidden rounded border border-cds-border/50 bg-cds-bgCard">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className={`w-full h-full object-${project.bgFit} md:grayscale md:group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105`}
                        />
                    </div>

                    <div className="flex flex-col gap-4 flex-grow py-2">
                        <div className="flex justify-between items-baseline w-full">
                             <h3 className="font-display text-3xl font-bold text-cds-fg group-hover:text-cds-accent transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="w-8 h-8 text-cds-fgMuted group-hover:text-cds-accent transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                        <p className="font-mono text-sm md:text-base text-cds-fgMuted max-w-xl group-hover:text-cds-fg transition-colors leading-relaxed">
                            {project.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};