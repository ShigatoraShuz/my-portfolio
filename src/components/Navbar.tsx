import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach((section: Element) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id') || '';
      }
    });
    setActiveSection(current);
  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-200/20 glass transition-all duration-300',
        isDark ? 'bg-slate-900/80 shadow-lg shadow-primary-500/10' : 'bg-white/80 shadow-lg shadow-indigo-500/10'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent font-display"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            JD<span className="text-secondary-500">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={clsx(
                  'relative font-medium py-2 px-3 rounded-lg cursor-pointer transition-all duration-300 group',
                  activeSection === item.id 
                    ? 'text-primary-500 shadow-lg shadow-primary-500/50 animate-glow' 
                    : isDark ? 'text-slate-300 hover:text-primary-400' : 'text-slate-700 hover:text-primary-600'
                )}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                <span className={clsx(
                  'absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-primary-500/10 blur',
                  activeSection === item.id && 'opacity-100'
                )} />
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors duration-200"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'block py-2 px-4 rounded-lg font-medium transition-colors',
                    activeSection === item.id 
                      ? 'bg-primary-500/20 text-primary-400' 
                      : isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-primary-400' : 'text-slate-700 hover:bg-slate-200 hover:text-primary-600'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

