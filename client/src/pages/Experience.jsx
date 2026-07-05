import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaDotCircle } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono">
          Career Timeline
        </h2>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          <span className="text-gradient">Work</span> Experience
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Timeline Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto relative border-l-2 border-slate-800 light:border-slate-200 pl-6 sm:pl-8 space-y-12"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full bg-slate-950 border-2 border-sky-accent text-sky-accent flex items-center justify-center">
              <FaBriefcase size={12} />
            </span>

            {/* Exp Header */}
            <div className="text-left mb-6">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-primary/20 text-sky-accent text-xs font-semibold font-mono">
                <FaCalendarAlt size={10} />
                <span>{exp.duration}</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mt-2">
                {exp.role}
              </h2>
              <h3 className="text-base sm:text-lg font-semibold text-slate-400 light:text-slate-500">
                {exp.company}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{exp.description}</p>
            </div>

            {/* Sub Projects inside Company */}
            <div className="space-y-6">
              {exp.projects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="glass-premium rounded-2xl p-6 border border-slate-700/50 text-left shadow-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-base sm:text-lg font-bold text-sky-accent">
                      {proj.name}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800/80 light:bg-slate-250 border border-slate-700 light:border-slate-300 text-slate-400 light:text-slate-650">
                      {proj.domain}
                    </span>
                  </div>

                  {/* Bullet features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 light:text-slate-600">
                    {proj.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <span className="text-sky-accent mt-1.5 flex-shrink-0">
                          <FaDotCircle size={8} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
