/**
 * Sticky Back to Top Button
 * Appears when user scrolls down, always visible on right side
 */

'use client';

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.3, ease: 'easeOut' }}
          whileHover={reducedMotion ? {} : { scale: 1.1, y: -4 }}
          whileTap={reducedMotion ? {} : { scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 sm:right-6 md:right-8 z-50 group"
          aria-label="Back to top"
        >
          {/* Main Button Circle */}
          <div className="relative">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand-red rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            
            {/* Button */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-red to-brand-red-dark rounded-full shadow-lg shadow-brand-red/30 flex items-center justify-center border border-brand-red-light/20 overflow-hidden">
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow Icon */}
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>

            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-red opacity-0 group-hover:opacity-100 animate-ping" />
          </div>

          {/* Tooltip on hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-bg-elevated border border-border-default rounded px-3 py-2 shadow-lg whitespace-nowrap">
              <span className="text-sm font-medium text-text-primary">
                Back to Top
              </span>
              {/* Arrow pointer */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-bg-elevated border-r border-b border-border-default" />
            </div>
          </div>

          {/* Progress ring - shows scroll progress */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-brand-red/20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-brand-red-light"
              style={{
                pathLength: scaleY,
              }}
              strokeDasharray="289"
              strokeDashoffset="0"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
