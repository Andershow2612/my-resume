import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  return (
    <section id="formacao" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('eduTitle')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-sky-500/50 dark:hover:border-green-500/50 transition-all flex flex-col items-center text-center group shadow-sm dark:shadow-none hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] dark:hover:shadow-none"
          >
            <div className="w-16 h-16 rounded-full bg-sky-500/10 dark:bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-sky-500 dark:text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('edu1Title')}</h3>
            <p className="text-sky-500 dark:text-green-500 font-medium mb-4">Univali (Itajaí)</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t('edu1Desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-sky-500/50 dark:hover:border-green-500/50 transition-all flex flex-col items-center text-center group shadow-sm dark:shadow-none hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] dark:hover:shadow-none"
          >
            <div className="w-16 h-16 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Languages className="text-sky-500 dark:text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('edu2Title')}</h3>
            <p className="text-sky-500 dark:text-green-500 font-medium mb-4">{t('edu2Sub')}</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t('edu2Desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
