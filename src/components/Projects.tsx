import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import apiAgm from '../assets/API_AGM.png';
import midPage from '../assets/mid_page.png';
import databasePage from '../assets/database_page.png';
import qaScreen1 from '../assets/qa-scenario1.jpeg';
import qaScreen2 from '../assets/qa-scenario2.jpeg';
import qaScreen3 from '../assets/qa-scenario3.jpeg';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useLanguage();

  const projects = [
    {
      title: t('proj1Title'),
      description: t('proj1Desc'),
      tags: ['GoLang', 'Clean Architecture', 'React', 'PostgreSQL'],
      links: {
        github: 'https://github.com/Andershow2612',
        demo: '#'
      },
      images: [apiAgm, midPage, databasePage]
    },
    {
      title: t('proj2Title'),
      description: t('proj2Desc'),
      tags: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'React 19', 'Vite', 'Tailwind CSS', 'Docker', 'GitHub Actions', 'AWS ECR', 'Docker Swarm'],
      architecture: ['Backend em camadas (controller → service → repo)', 'Integrações externas isoladas', 'Frontend organizado em hooks, contexts e componentes'],
      links: {
        github: 'https://github.com/Andershow2612',
        demo: 'https://qa-scenario-generator.cws.digital'
      },
      images: [qaScreen1, qaScreen2, qaScreen3]
    },
  ];

  const navigate = (newDirection: number) => {
    const next = currentProject + newDirection;
    if (next < 0 || next >= projects.length) return;
    setDirection(newDirection);
    setCurrentProject(next);
  };

  const goTo = (index: number) => {
    setDirection(index > currentProject ? 1 : -1);
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('projTitleSection')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Sliding Window Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => navigate(-1)}
            disabled={currentProject === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Projeto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => navigate(1)}
            disabled={currentProject === projects.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Próximo projeto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Slide area */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.45 }}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl"
              >
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-sky-500 dark:text-blue-400">
                          {currentProject + 1} / {projects.length}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 whitespace-pre-line">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-sky-500/10 dark:bg-green-500/10 text-sky-600 dark:text-green-500 rounded-full text-sm font-medium border border-sky-500/20 dark:border-green-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <div className="absolute inset-0 bg-sky-500/20 dark:bg-blue-500/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                        <img
                          src={img}
                          alt={`Preview do projeto ${idx + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${i === currentProject
                    ? 'w-6 h-2 bg-sky-500 dark:bg-blue-500'
                    : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Projeto em alta resolução"
              className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
