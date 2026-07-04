import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Stack' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'tools', label: 'Tools & Utilities' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono animate-pulse">
          Technical Stack
        </h2>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          <span className="text-gradient">Skills</span> & Expertise
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative cursor-pointer ${
              activeTab === category.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 bg-slate-900/30 light:bg-slate-200/40 border border-slate-800 light:border-slate-300/60'
            }`}
          >
            {activeTab === category.id && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 bg-primary border border-primary/40 rounded-xl -z-10 shadow-lg shadow-primary/10"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
            {category.label}
          </button>
        ))}
      </div>

      {/* Skill Grid Container */}
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills[activeTab].map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass-premium rounded-2xl p-5 border border-slate-700/50 flex items-center space-x-5 shadow-lg group"
            >
              {/* Icon Container */}
              <div 
                className="p-3.5 rounded-xl bg-slate-950/60 light:bg-slate-200 border border-slate-800/80 light:border-slate-350 flex items-center justify-center transition-all group-hover:scale-110 duration-300"
                style={{ color: skill.color }}
              >
                <Icon size={28} />
              </div>

              {/* Progress Detail */}
              <div className="flex-1 text-left">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-sky-accent transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-sky-accent">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800/50 light:bg-slate-300/50 h-[6px] rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-sky-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
