import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { aboutData } from '../data/about';
import { skills, type Skill } from '../data/skills';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SkillIcon {
  name: string;
  icon: string;
  level: number;
}

const About = () => {
  const { isDark } = useTheme();

  const skillIcons: SkillIcon[] = skills.slice(0, 3);

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p className="text-slate-400 text-xl text-center mb-20 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting exceptional digital experiences with passion for clean code and user-centric design.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative group"
          >
            <div className="w-96 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500 glass backdrop-blur-xl border border-white/20">
              <motion.img
                src={aboutData.profileImage}
                alt={`${aboutData.name}'s profile`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{aboutData.name}</h3>
                  <p className="opacity-90">{aboutData.title}</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary-400/30 rounded-full opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400/20 rounded-2xl blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Bio & Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {aboutData.bio.map((line, index) => (
                <motion.p
                  key={index}
                  className="text-lg md:text-xl leading-relaxed text-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Quick Skills Preview */}
            <motion.div className="pt-8 border-t border-slate-800">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
                Core Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {skillIcons.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative p-6 rounded-2xl glass hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-all duration-300">
                        <span className="text-sm font-bold text-white uppercase tracking-wider">{skill.icon.toUpperCase()}</span>
                      </div>
                      <h4 className="text-xl font-bold">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-400 to-primary-500 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                      />
                    </div>
                    <span className="text-sm text-slate-500 mt-2 block font-mono">{skill.level}% Mastery</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
