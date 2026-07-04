import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 400);
          return 100;
        }
        // Increment progress with random speeds for authentic feel
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-dark-bg"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            {/* Spinning background rings */}
            <motion.div 
              className="w-24 h-24 rounded-full border-2 border-primary/20 border-t-primary border-r-sky-accent/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Pulsing initials */}
            <div className="absolute top-[34px] text-center font-bold text-gradient text-xl">
              MTL
            </div>

            {/* Developer text and percent indicator */}
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-sm font-semibold tracking-widest uppercase text-slate-400"
            >
              M. Tulasi Laxmi
            </motion.h3>

            <motion.span 
              className="text-xs text-sky-accent font-mono mt-1"
            >
              React Developer
            </motion.span>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-800/60 h-[3px] rounded-full mt-6 overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-sky-accent rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <div className="text-right w-full mt-2 font-mono text-xs text-slate-500">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
