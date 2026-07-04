import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringConfig = { damping: 30, stiffness: 180, mass: 0.8 };

  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);
  const ringSpringX = useSpring(ringX, ringConfig);
  const ringSpringY = useSpring(ringY, ringConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive-cursor'
      );
      
      const handleHoverStart = () => setIsHovered(true);
      const handleHoverEnd = () => setIsHovered(false);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Run setup initially
    updateInteractiveElements();

    // Create a MutationObserver to handle dynamic elements (like route changes)
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovered ? 'custom-cursor-hover' : ''}`}
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
      />
      <motion.div
        className={`custom-cursor-ring ${isHovered ? 'custom-cursor-ring-hover' : ''}`}
        style={{
          x: ringSpringX,
          y: ringSpringY,
        }}
      />
    </>
  );
}
