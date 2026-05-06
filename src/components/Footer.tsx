import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contato" className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="mb-8 md:mb-0 text-center md:text-left">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-blue-500 dark:to-violet-500">
            Anderson
          </a>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm max-w-xs">
            {t('footerDesc')}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a href="andersondossantosmedeiros@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white hover:scale-110 transition-all flex items-center gap-2">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/anderson-medeiros-53915226b/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-green-500 hover:scale-110 transition-all flex items-center gap-2 text-sm">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Andershow2612" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white hover:scale-110 transition-all flex items-center gap-2 text-sm">
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Anderson dos S. Medeiros.
          </p>
        </div>

      </div>
    </footer>
  );
}
