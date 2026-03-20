import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import clsx from 'clsx';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'design'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.technologies.some(tech =>
      tech.toLowerCase().includes(filter)
    );
  });

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-primary-500/20 blur-[120px] -translate-x-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Handcrafted with modern technologies and pixel-perfect attention to detail.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                'px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group',
                filter === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/40'
                  : isDark
                  ? 'text-slate-300 bg-slate-800/50 border border-slate-700 hover:text-primary-400'
                  : 'text-slate-600 bg-white border border-slate-200 hover:text-primary-600'
              )}
            >
              <span className="flex items-center gap-2 relative z-10 capitalize">
                {category !== 'all' && <Filter className="w-4 h-4" />}
                {category}
              </span>

              {/* Glow hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-20 transition" />
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -20 }}
              className="group relative rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-primary-500/30 transition-all duration-500 flex flex-col"
            >
              {/* 3D Tilt Wrapper */}
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 animate-pulse" />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-primary-300 border border-primary-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm flex-grow mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm shadow-md hover:shadow-primary-500/40 transition"
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Filter className="w-16 h-16 mx-auto mb-4 opacity-40" />
            <p>No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;