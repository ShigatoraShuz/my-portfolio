import React, { useMemo } from 'react'; // Added useMemo
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../contexts/ThemeContext';
import { aboutData } from '../data/about';
import { ArrowDown, Mail } from 'lucide-react';
import clsx from 'clsx';

const Hero = () => {
  const { isDark } = useTheme();

  // Fix 1: Memoize particles so they don't jump on every re-render
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2,
    })), []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={clsx(
          'absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30 animate-pulse',
          isDark ? 'bg-gradient-to-r from-primary-500/40 to-secondary-500/40' : 'bg-gradient-to-r from-indigo-400/40 to-emerald-400/40'
        )} />
        <div className={clsx(
          'absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-30',
          isDark ? 'bg-gradient-to-r from-secondary-500/30 to-primary-500/30' : 'bg-gradient-to-r from-emerald-400/30 to-indigo-400/30'
        )} />
        
        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 rounded-full bg-primary-400/40"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent mb-6 pb-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {aboutData.name}
          </motion.h1>

          <div className="mb-8 h-16 md:h-20 flex items-center justify-center">
            {/* Fix 2: Wrap TypeAnimation properly for gradient text */}
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Enthusiast', 2000,
                'UI/UX Designer', 2000,
              ]}
              wrapper="span"
              speed={50}
              className={clsx(
                "text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent inline-block"
              )}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {aboutData.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/25 transition-all text-lg"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 backdrop-blur-md transition-all flex items-center gap-2 text-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 mx-auto cursor-pointer group"
            onClick={scrollToAbout}
            aria-label="Scroll to about section"
          >
            <ArrowDown className={clsx(
              'w-6 h-6 transition-colors',
              isDark ? 'text-primary-400 group-hover:text-primary-300' : 'text-indigo-500 group-hover:text-indigo-600'
            )} />
            <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">Explore</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;