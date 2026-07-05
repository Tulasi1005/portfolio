import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const techIcons = [
  { icon: FaReact, color: '#61DAFB', label: 'React', x: '10%', y: '15%', size: 40, delay: 0 },
  { icon: FaJs, color: '#F7DF1E', label: 'JavaScript', x: '85%', y: '10%', size: 36, delay: 0.5 },
  { icon: FaHtml5, color: '#E34F26', label: 'HTML5', x: '90%', y: '75%', size: 32, delay: 1.2 },
  { icon: FaCss3Alt, color: '#1572B6', label: 'CSS3', x: '15%', y: '80%', size: 32, delay: 0.8 },
  { icon: FaGitAlt, color: '#F05032', label: 'Git', x: '82%', y: '45%', size: 34, delay: 1.5 },
  { icon: FaBootstrap, color: '#7952B3', label: 'Bootstrap', x: '12%', y: '48%', size: 34, delay: 0.3 },
  { icon: FaNodeJs, color: '#339933', label: 'Node.js', x: '50%', y: '85%', size: 38, delay: 1.0 },
];

export default function InteractiveIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-sky-accent/15 to-transparent rounded-full filter blur-3xl animate-pulse-slow -z-10" />

      {/* Editor Mockup Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-[85%] h-[75%] rounded-2xl glass-premium overflow-hidden border border-slate-700/50 shadow-2xl relative"
      >
        {/* Editor Toolbar */}
        <div className="h-10 bg-slate-900/60 light:bg-slate-200/50 border-b border-slate-800/80 light:border-slate-300/60 px-4 flex items-center justify-between">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 font-medium">App.jsx</span>
          <span className="w-4" />
        </div>

        {/* Editor Code Body */}
        <div className="p-5 font-mono text-[11px] sm:text-xs text-left leading-relaxed text-slate-300">
          <span className="text-[#F43F5E]">import</span> {'{ useState, useEffect }'} <span className="text-[#F43F5E]">from</span> <span className="text-[#10B981]">'react'</span>;
          <br />
          <span className="text-[#F43F5E]">import</span> {'{ motion }'} <span className="text-[#F43F5E]">from</span> <span className="text-[#10B981]">'framer-motion'</span>;
          <br /><br />
          <span className="text-[#38BDF8]">const</span> <span className="text-[#FBBF24]">PortfolioCard</span> = () =&gt; {'{'}
          <div className="pl-4">
            <span className="text-[#38BDF8]">const</span> [loaded, setLoaded] = <span className="text-[#FBBF24]">useState</span>(<span className="text-[#EC4899]">false</span>);
            <br /><br />
            <span className="text-[#FBBF24]">useEffect</span>(() =&gt; {'{'}
            <div className="pl-4">
              <span className="text-[#FBBF24]">setLoaded</span>(<span className="text-[#EC4899]">true</span>);
            </div>
            {'}'}, []);
            <br /><br />
            <span className="text-[#F43F5E]">return</span> (
            <div className="pl-4 text-slate-400">
              &lt;<span className="text-[#38BDF8]">motion.div</span>
              <div className="pl-4">
                animate={'{{ scale: loaded ? 1 : 0.95 }}'}
                <br />
                className=<span className="text-[#10B981]">"premium-portfolio"</span>
              </div>
              &gt;
              <div className="pl-4 text-slate-300">
                &lt;<span className="text-[#38BDF8]">h1</span>&gt;M. Tulasi Laxmi&lt;/<span className="text-[#38BDF8]">h1</span>&gt;
                <br />
                &lt;<span className="text-[#38BDF8]">p</span>&gt;React Developer&lt;/<span className="text-[#38BDF8]">p</span>&gt;
              </div>
              &lt;/<span className="text-[#38BDF8]">motion.div</span>&gt;
            </div>
            );
          </div>
          {'};'}
          <br />
          <span className="text-[#F43F5E]">export default</span> <span className="text-[#FBBF24]">PortfolioCard</span>;
        </div>
      </motion.div>

      {/* Floating Technology Icons */}
      {techIcons.map((tech, idx) => {
        const IconComponent = tech.icon;
        return (
          <motion.div
            key={idx}
            className="absolute p-2.5 rounded-2xl glass-premium shadow-lg cursor-pointer flex items-center justify-center z-10"
            style={{
              left: tech.x,
              top: tech.y,
              color: tech.color,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              scale: { delay: tech.delay, duration: 0.5 },
              opacity: { delay: tech.delay, duration: 0.5 },
              y: {
                repeat: Infinity,
                duration: 3 + idx,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ scale: 1.25, rotate: 10, transition: { duration: 0.2 } }}
          >
            <IconComponent size={tech.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
