import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white light:text-slate-900 transition-colors">
              <span className="text-gradient">MT</span> Laxmi
            </span>
            <span className="px-2 py-0.5 text-[10px] font-semibold font-mono rounded bg-primary/20 text-sky-accent uppercase tracking-wider">
              React v19
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 sm:px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 text-slate-300 hover:text-white light:bg-slate-200/50 light:border-slate-300 light:text-slate-700 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-800 light:border-slate-200 bg-slate-900/95 light:bg-slate-50/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary/25 border-l-4 border-sky-accent text-white font-semibold'
                        : 'text-slate-400 hover:bg-slate-800/40 hover:text-white light:text-slate-600 light:hover:bg-slate-200/40 light:hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
