import { motion } from 'framer-motion';
import { Terminal, Database, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('aboutCard1Title'),
      icon: <Terminal className="text-sky-500 dark:text-green-500" size={32} />,
      desc: t('aboutCard1Desc')
    },
    {
      title: t('aboutCard2Title'),
      icon: <ShieldCheck className="text-sky-500 dark:text-green-500" size={32} />,
      desc: t('aboutCard2Desc')
    },
    {
      title: t('aboutCard3Title'),
      icon: <Database className="text-sky-500 dark:text-green-500" size={32} />,
      desc: t('aboutCard3Desc')
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('aboutTitle')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6 text-slate-700 dark:text-slate-200 text-lg leading-relaxed"
          >
            <p>
              {t('aboutP1_1')}
              <span className="text-sky-500 dark:text-green-500 font-semibold">{t('aboutP1_2')}</span>.
            </p>
            <p>
              {t('aboutP2_1')}
              <span className="text-sky-500 dark:text-green-500 font-semibold">{t('aboutP2_2')}</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-sky-500/50 dark:hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] dark:hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
