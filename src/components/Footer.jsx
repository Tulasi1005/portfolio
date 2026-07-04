import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950/80 light:bg-slate-100/80 py-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand/Signature */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold tracking-tight text-white light:text-slate-900">
              <span className="text-gradient">MT</span> Laxmi
            </Link>
            <p className="mt-2 text-sm text-slate-400 light:text-slate-500 max-w-xs mx-auto md:mx-0">
              Crafting scalable React applications with precision and modern designs.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-sm text-slate-400 hover:text-sky-accent light:text-slate-500 light:hover:text-primary transition-all">About</Link>
            <Link to="/experience" className="text-sm text-slate-400 hover:text-sky-accent light:text-slate-500 light:hover:text-primary transition-all">Experience</Link>
            <Link to="/projects" className="text-sm text-slate-400 hover:text-sky-accent light:text-slate-500 light:hover:text-primary transition-all">Projects</Link>
            <Link to="/contact" className="text-sm text-slate-400 hover:text-sky-accent light:text-slate-500 light:hover:text-primary transition-all">Contact</Link>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 light:hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 light:hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 light:hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-slate-400 hover:text-sky-accent hover:border-sky-accent light:text-slate-600 light:hover:text-primary transition-all duration-300"
              aria-label="Phone"
            >
              <FaPhoneAlt size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 light:border-slate-200 text-center text-xs text-slate-500">
          <p>© {currentYear} M. Tulasi Laxmi. All rights reserved. Created with Vite, React v19 & Tailwind CSS v4.</p>
        </div>
      </div>
    </footer>
  );
}
