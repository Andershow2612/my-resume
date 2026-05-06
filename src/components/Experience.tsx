import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('exp1Role'),
      company: 'CWS Platform',
      period: t('exp1Period'),
      desc: t('exp1Desc')
    },
    {
      role: t('exp2Role'),
      company: 'Transben Transporte',
      period: t('exp2Period'),
      desc: t('exp2Desc')
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">

      <div className="absolute top-40 -left-40 w-96 h-96 bg-sky-500/10 dark:bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('expTitle')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-48 gap-3"
            >
              {/* Timeline line */}
              <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-[-8px] top-2 w-4 h-4 rounded-full bg-sky-500 dark:bg-green-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] dark:shadow-[0_0_10px_rgba(34,197,94,0.5)] border-4 border-slate-50 dark:border-slate-950"></div>

              <div className="hidden sm:block absolute left-8 top-1 text-sm font-semibold text-sky-500 dark:text-green-500 w-36">
                {exp.period}
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/30 dark:hover:border-green-500/30 transition-colors gap-10 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-sky-500 dark:text-green-500" size={20} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                </div>
                <h4 className="text-lg text-slate-700 dark:text-slate-200 mb-2 font-medium">{exp.company}</h4>
                <div className="sm:hidden text-sm font-semibold text-sky-500 dark:text-green-500 mb-4">
                  {exp.period}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
