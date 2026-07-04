import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3.5 rounded-full bg-slate-900/90 border border-slate-700/60 light:bg-white/90 light:border-slate-300/80 shadow-2xl cursor-pointer text-sky-accent hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Back to top"
            title="Back to Top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat/Contact Link */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-primary to-sky-accent shadow-2xl text-white cursor-pointer relative group"
          aria-label="Contact M. Tulasi Laxmi"
          title="Hire Me / Contact"
        >
          <FiMessageSquare size={22} className="group-hover:rotate-6 transition-transform duration-300" />
          <span className="absolute right-14 bg-slate-900 border border-slate-700/80 text-xs px-2.5 py-1.5 rounded-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 text-sky-accent">
            Get in touch!
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
