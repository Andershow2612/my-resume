import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-sky-500 dark:text-green-500 font-semibold tracking-wide uppercase mb-3">
            {t('heroGreeting')}
          </h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Anderson dos S. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500">Medeiros</span>
          </h1>
          <h3 className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-200 mb-6 font-medium">
            {t('heroRole')}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
            {t('heroDesc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] dark:shadow-[0_0_20px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              <Mail className="mr-2" size={20} />
              {t('heroContactBtn')}
            </a>
            <a
              href="#experiencia"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 dark:border-transparent"
            >
              {t('heroExpBtn')}
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-950 rounded-full m-1"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-900 flex items-center justify-center">
              <img
                src="./src/assets/profilePiccc.png"
                alt="Anderson Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section >
  );
}
