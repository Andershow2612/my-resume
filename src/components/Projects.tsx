import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const project = {
    title: t('proj1Title'),
    description: t('proj1Desc'),
    tags: ['GoLang', 'Clean Architecture', 'React', 'PostgreSQL'],
    links: {
      github: 'https://github.com/Andershow2612',
      demo: '#'
    },
    images: [
      './src/assets/API_AGM.png',
      './src/assets/mid_page.png',
      './src/assets/database_page.png'
    ]
  };

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

        <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg dark:shadow-2xl">
          <div className="p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12"
            >
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-sky-500/10 dark:bg-green-500/10 text-sky-600 dark:text-green-500 rounded-full text-sm font-medium border border-sky-500/20 dark:border-green-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 shrink-0">
                <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl transition-all font-medium border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm dark:shadow-none">
                  <span>GitHub</span>
                </a>

              </div>
            </motion.div>

            {/* Galeria */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="absolute inset-0 bg-sky-500/20 dark:bg-blue-500/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                  <img
                    src={img}
                    alt={`Preview do projeto ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Borda interna sutil */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Modal de Imagem */}
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
