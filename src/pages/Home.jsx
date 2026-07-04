import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaDownload, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import InteractiveIllustration from '../components/InteractiveIllustration';
import { personalInfo } from '../data/portfolioData';

const roles = ['React Developer', 'Frontend Engineer', 'UI Developer', 'JavaScript Developer'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-mesh-dark light:bg-mesh-light transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-sky-accent font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium text-slate-400">
                Hi, I'm
              </h3>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white light:text-slate-900">
                <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <div className="h-12 flex items-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-sky-accent">
                  <span className="border-r-2 border-sky-accent pr-1 animate-pulse">
                    {currentText}
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed max-w-xl">
              {personalInfo.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/resume"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-sky-accent text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <FaDownload size={14} />
                <span>Download Resume</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-white font-semibold hover:bg-slate-800 transition-all light:bg-slate-200/50 light:border-slate-300 light:text-slate-700 light:hover:text-slate-900 cursor-pointer hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <FaArrowRight size={12} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-950/40 border border-slate-800 text-sky-accent font-semibold hover:bg-slate-950/80 transition-all hover:border-sky-accent light:bg-slate-100/50 light:border-slate-300 cursor-pointer hover:scale-[1.02]"
              >
                <FaBriefcase size={14} />
                <span>Hire Me</span>
              </Link>
            </div>

            {/* Social Connects */}
            <div className="flex items-center space-x-4 pt-6">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Connect:</span>
              <div className="flex space-x-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 transition-all"
                  aria-label="Email"
                >
                  <FaEnvelope size={16} />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-xl bg-slate-900/60 light:bg-slate-200/60 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 transition-all"
                  aria-label="Phone"
                >
                  <FaPhoneAlt size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <InteractiveIllustration />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
