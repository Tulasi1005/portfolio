import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCode, FaServer } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono"
        >
          About Me
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight"
        >
          <span className="text-gradient">Professional</span> Profile
        </motion.h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Professional Intro Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 glass-premium rounded-3xl p-6 sm:p-8 border border-slate-700/50 text-left shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mb-4">
            React Developer & Frontend Engineer
          </h3>
          <p className="text-slate-300 light:text-slate-600 leading-relaxed mb-6">
            {personalInfo.summary}
          </p>

          {/* Quick Details List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 light:border-slate-200 pt-6">
            <div className="flex items-center space-x-3 text-slate-300 light:text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent light:text-primary">
                <FaBriefcase size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium font-mono uppercase">Current Company</p>
                <p className="text-sm font-semibold">{personalInfo.company}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300 light:text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent light:text-primary">
                <FaGraduationCap size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium font-mono uppercase">Education</p>
                <p className="text-sm font-semibold">{personalInfo.education}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300 light:text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent light:text-primary">
                <FaMapMarkerAlt size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium font-mono uppercase">Location</p>
                <p className="text-sm font-semibold">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300 light:text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-sky-accent light:text-primary">
                <FaCode size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium font-mono uppercase">Frontend Stack</p>
                <p className="text-sm font-semibold">React.js, JS, HTML5, CSS3, Bootstrap</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Stats & Highlights Column */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Card 1: Experience */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-premium rounded-2xl p-6 border border-slate-700/50 text-center shadow-lg group cursor-pointer"
          >
            <span className="text-3xl font-extrabold text-gradient font-mono">2+</span>
            <p className="text-sm font-semibold text-white light:text-slate-900 mt-2">Years of Experience</p>
            <p className="text-xs text-slate-500 mt-1">Enterprise-grade platforms</p>
          </motion.div>

          {/* Card 2: Projects */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-premium rounded-2xl p-6 border border-slate-700/50 text-center shadow-lg group cursor-pointer"
          >
            <span className="text-3xl font-extrabold text-gradient-purple font-mono">10+</span>
            <p className="text-sm font-semibold text-white light:text-slate-900 mt-2">Projects Completed</p>
            <p className="text-xs text-slate-500 mt-1">Responsive web applications</p>
          </motion.div>

          {/* Card 3: Frontend Stack summary */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-premium rounded-2xl p-6 border border-slate-700/50 text-left shadow-lg cursor-pointer"
          >
            <div className="flex items-center space-x-2 text-sky-accent mb-2">
              <FaCode size={18} />
              <span className="text-sm font-bold text-white light:text-slate-900">Frontend Tech</span>
            </div>
            <p className="text-xs text-slate-400 light:text-slate-500">React.js, JavaScript, HTML5, CSS3, Bootstrap</p>
          </motion.div>

          {/* Card 4: Backend Stack summary */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-premium rounded-2xl p-6 border border-slate-700/50 text-left shadow-lg cursor-pointer"
          >
            <div className="flex items-center space-x-2 text-violet-400 mb-2">
              <FaServer size={16} />
              <span className="text-sm font-bold text-white light:text-slate-900">Backend Tech</span>
            </div>
            <p className="text-xs text-slate-400 light:text-slate-500">Node.js, Python, REST APIs, JSON data integrations</p>
          </motion.div>

          {/* Card 5: Full Width Company highlight */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="sm:col-span-2 glass-premium rounded-2xl p-6 border border-slate-700/50 text-left shadow-lg flex items-center justify-between cursor-pointer"
          >
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase">Current Company</p>
              <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900 mt-1">
                CustQ Software Services Pvt Ltd
              </h4>
              <p className="text-xs text-slate-400 light:text-slate-500 mt-0.5">React Developer (March 2024 - Present)</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sky-accent">
              <FaBriefcase size={16} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
