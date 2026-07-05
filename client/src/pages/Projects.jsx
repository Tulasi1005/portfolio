import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaFilter } from 'react-icons/fa';
import { projectsList } from '../data/portfolioData';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Education', 'Booking', 'Social'];

  const filteredProjects = projectsList.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono">
          Portfolio Showcase
        </h2>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          <span className="text-gradient">Recent</span> Projects
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Filters and Search Bar Row */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
            <FaSearch size={14} />
          </span>
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-300 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-accent light:focus:border-primary text-white light:text-slate-900 transition-all"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 bg-slate-900/30 light:bg-slate-200/40 border border-slate-800 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="glass-premium rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl flex flex-col group cursor-pointer"
            >
              {/* Card Image Wrapper */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-white/10 text-sky-accent">
                  {project.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col text-left">
                <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900 group-hover:text-sky-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 light:text-slate-600 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Core features mini list */}
                <div className="mt-4">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Key Focuses</h4>
                  <ul className="text-xs text-slate-400 light:text-slate-500 space-y-1 pl-1">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="truncate">• {feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-800 light:border-slate-200">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-slate-850 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-450 light:text-slate-600"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-slate-500 font-medium">No projects found matching your search.</p>
        </motion.div>
      )}
    </div>
  );
}
