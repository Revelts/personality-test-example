/**
 * FuturisticQuestion - Cyber-Punk Edition
 * 
 * Features:
 * - Typing animation for questions (1-1.5s)
 * - Cyber-punk style answer fade-in with scan/glitch effects
 * - Space Grotesk typography
 * - Fully responsive
 */

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Question } from '@/lib/questions';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FuturisticQuestionProps {
  question: Question;
  onSelectAnswer: (answerId: string) => void;
  isTransitioning?: boolean;
}

export default function FuturisticQuestion({ 
  question, 
  onSelectAnswer,
  isTransitioning = false
}: FuturisticQuestionProps) {
  const reducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(question.text);
      setIsTypingComplete(true);
      return;
    }

    setDisplayedText('');
    setIsTypingComplete(false);
    
    const text = question.text;
    // Fixed typing speed: 35ms per character for smooth, visible typing
    // Total time will be around 1.4-1.5 seconds for ~40 char questions
    const typingSpeed = 35;
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout | null = null;
    let completeTimeout: NodeJS.Timeout | null = null;

    // Small delay before starting typing
    const startDelay = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          if (typingInterval) clearInterval(typingInterval);
          // Keep cursor visible for a moment after typing completes
          completeTimeout = setTimeout(() => {
            setIsTypingComplete(true);
          }, 200);
        }
      }, typingSpeed);
    }, 150);

    // Cleanup function
    return () => {
      clearTimeout(startDelay);
      if (typingInterval) clearInterval(typingInterval);
      if (completeTimeout) clearTimeout(completeTimeout);
    };
  }, [question.text, reducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: reducedMotion ? 0 : 0.8 // Delay answers until typing is complete (~1.5s typing + 0.1s buffer)
      }
    },
    exit: { 
      opacity: 0, 
      y: reducedMotion ? 0 : -16,
      transition: { duration: 0.2 }
    }
  };

  const questionContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  // Cyber-punk style answer fade-in with scan effect
  const answerVariants = {
    hidden: { 
      opacity: 0, 
      x: reducedMotion ? 0 : -20,
      filter: reducedMotion ? 'none' : 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.4, 
        ease: [0.34, 1.56, 0.64, 1] // Custom spring-like easing
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-4xl mx-auto px-4 py-8 pt-20 sm:px-6 sm:py-12 sm:pt-24 md:pt-28"
    >
      {/* Question Text with Typing Animation */}
      <motion.div
        variants={questionContainerVariants}
        className="max-w-3xl w-full mb-6 sm:mb-8 md:mb-10 lg:mb-14"
      >
        <h1 className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary text-center leading-tight tracking-tight px-2 relative inline-block w-full">
          <span className="inline">{displayedText}</span>
          {/* Typing cursor - Cyber-punk style */}
          {!isTypingComplete && displayedText.length >= 0 && (
            <motion.span
              className="inline-block w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 lg:h-14 bg-brand-red ml-0.5 sm:ml-1 align-middle rounded-sm shadow-glow-red-sm"
              animate={{ 
                opacity: [1, 1, 0, 0, 1],
                scaleY: [1, 1, 0.8, 1, 1]
              }}
              transition={{ 
                duration: 0.6, 
                repeat: Infinity, 
                ease: "linear",
                times: [0, 0.4, 0.5, 0.6, 1]
              }}
              style={{ 
                verticalAlign: 'middle',
                marginBottom: '0.15em'
              }}
            />
          )}
        </h1>
      </motion.div>

      {/* Answer Options - Cyber-Punk Style */}
      <motion.div 
        className="max-w-2xl w-full space-y-2 sm:space-y-3"
        variants={containerVariants}
      >
        {question.answers.map((answer, index) => (
          <motion.div
            key={answer.id}
            variants={answerVariants}
            className="relative group"
          >
            {/* Scan line effect (appears on hover) */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent"
                animate={{
                  y: ['0%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            <motion.button
              onClick={() => !isTransitioning && onSelectAnswer(answer.id)}
              disabled={isTransitioning}
              whileHover={!reducedMotion && !isTransitioning ? { 
                scale: 1.005,
                x: 4
              } : {}}
              whileTap={!reducedMotion && !isTransitioning ? { 
                scale: 0.995 
              } : {}}
              className="relative w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 
                       bg-bg-surface
                       border border-border
                       rounded-lg
                       text-left
                       transition-all duration-150 ease-out
                       hover:border-brand-red/60
                       hover:shadow-glow-red-sm
                       focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red
                       active:border-brand-red
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:shadow-none
                       cursor-pointer
                       overflow-hidden"
            >
              {/* Left red accent line (appears on hover) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              
              {/* Answer text */}
              <span className="relative text-sm sm:text-base md:text-lg text-text-primary font-medium leading-relaxed pl-2 block">
                {answer.text}
              </span>

              {/* Subtle arrow indicator (appears on hover) */}
              <div className="absolute right-3 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Cyber grid pattern overlay (subtle) */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] group-hover:opacity-[0.05] transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
