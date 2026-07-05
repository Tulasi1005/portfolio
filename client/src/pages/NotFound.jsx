import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-mesh-dark light:bg-mesh-light transition-all px-4">
      <div className="text-center max-w-md w-full">
        {/* Glow behind warning */}
        <div className="relative inline-flex items-center justify-center p-6 rounded-full bg-slate-900 border border-slate-800 text-rose-500 mb-6 shadow-xl shadow-rose-500/10">
          <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full" />
          <FaExclamationTriangle size={48} className="relative" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl sm:text-7xl font-extrabold font-mono text-white light:text-slate-900"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl font-bold text-sky-accent mt-3"
        >
          Page Not Found
        </motion.h2>

        <p className="mt-4 text-sm sm:text-base text-slate-400 light:text-slate-650 leading-relaxed">
          The link you followed may be broken, or the page has been moved. Let's get you back on track.
        </p>

        {/* Code representation of error */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-950/60 light:bg-slate-200 border border-slate-800 light:border-slate-300 font-mono text-left text-xs text-rose-400 light:text-rose-600 shadow-md">
          <span className="text-slate-500">// console error logs</span>
          <br />
          <span className="text-[#38BDF8]">const</span> error = <span className="text-[#EC4899]">new</span> <span className="text-[#FBBF24]">Error</span>(<span className="text-[#10B981]">'Route mismatch'</span>);
          <br />
          <span className="text-[#F43F5E]">throw</span> error; 
          <br />
          <span className="text-slate-500">// Redirecting suggested...</span>
        </div>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-sky-accent text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <FaHome size={14} />
            <span>Return Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
