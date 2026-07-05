import React from 'react';
import { motion } from 'framer-motion';
import { FaPrint, FaDownload, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo, skills, experiences } from '../data/portfolioData';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12 print:hidden">
        <h2 className="text-xs font-bold tracking-widest text-sky-accent uppercase font-mono">
          Career Profile
        </h2>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
          <span className="text-gradient">Interactive</span> Resume
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-sky-accent text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <FaPrint size={14} />
            <span>Print Resume</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700/60 light:bg-white light:border-slate-350 text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 font-semibold transition-all cursor-pointer hover:scale-[1.02]"
          >
            <FaDownload size={14} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="print-area"
        className="bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-300 shadow-2xl rounded-3xl p-6 sm:p-12 text-left max-w-4xl mx-auto text-slate-300 light:text-slate-800 transition-colors"
      >
        {/* Document Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-slate-800 light:border-slate-200 pb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white light:text-slate-900 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-semibold text-sky-accent font-mono mt-1">
              {personalInfo.title}
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Currently at: {personalInfo.company}
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-450 light:text-slate-600 font-medium">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-sky-accent shrink-0" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-sky-accent shrink-0" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-sky-accent shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2 pt-1 border-t border-slate-800/80 light:border-slate-200/85">
              <FaLinkedin className="text-slate-400 light:text-slate-500 shrink-0" />
              <span className="truncate max-w-[180px]">{personalInfo.linkedin.replace('https://', '')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaGithub className="text-slate-400 light:text-slate-500 shrink-0" />
              <span className="truncate max-w-[180px]">{personalInfo.github.replace('https://', '')}</span>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mt-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/80 light:border-slate-200/85 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/80 light:border-slate-200/85 pb-2 mb-4">
            Core Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-white light:text-slate-900 mb-2">Frontend</h3>
              <p className="text-slate-400 light:text-slate-600 font-mono text-xs">
                {skills.frontend.map(s => s.name).join(', ')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white light:text-slate-900 mb-2">Backend</h3>
              <p className="text-slate-400 light:text-slate-600 font-mono text-xs">
                {skills.backend.map(s => s.name).join(', ')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white light:text-slate-900 mb-2">Tools & Utilities</h3>
              <p className="text-slate-400 light:text-slate-600 font-mono text-xs">
                {skills.tools.map(s => s.name).join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/80 light:border-slate-200/85 pb-2 mb-4">
            Professional Experience
          </h2>
          {experiences.map((exp, eIdx) => (
            <div key={eIdx} className="mb-6">
              <div className="flex justify-between items-start flex-wrap gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-400 light:text-slate-500 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-850 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 light:text-slate-600">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm mt-2 mb-4 italic text-slate-450 light:text-slate-600">{exp.description}</p>
              
              <div className="space-y-4">
                {exp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="pl-4 border-l border-slate-800 light:border-slate-300">
                    <h4 className="text-sm font-bold text-sky-accent">{proj.name} ({proj.domain})</h4>
                    <ul className="list-disc list-inside text-xs mt-1.5 space-y-1 text-slate-400 light:text-slate-600">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/80 light:border-slate-200/85 pb-2 mb-4">
            Education
          </h2>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white light:text-slate-900">
              {personalInfo.education}
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-500 mt-0.5">India</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
