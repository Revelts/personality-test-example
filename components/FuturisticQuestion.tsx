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
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  isTransitioning?: boolean;
}

export default function FuturisticQuestion({ 
  question,
  selectedAnswer,
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
      className="w-full max-w-2xl mx-auto py-6 sm:py-8"
    >
      {/* Question Text with Typing Animation */}
      <motion.div
        variants={questionContainerVariants}
        className="w-full mb-6 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary text-left leading-tight px-2 relative">
          <span className="inline">{displayedText}</span>
          {/* Typing cursor - Cyber-punk style */}
          {!isTypingComplete && displayedText.length >= 0 && (
            <motion.span
              className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 md:h-10 bg-brand-red ml-0.5 sm:ml-1 align-middle rounded-sm shadow-glow-red-sm"
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

      {/* Answer Options - Style matching ShareButton */}
      <motion.div 
        className="w-full space-y-3 sm:space-y-4"
        variants={containerVariants}
      >
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswer === answer.id;
          const answerLabel = String.fromCharCode(65 + index); // A, B, C, D
          
          return (
            <motion.div
              key={answer.id}
              variants={answerVariants}
              className="relative"
            >
              <motion.button
                onClick={() => !isTransitioning && onSelectAnswer(answer.id)}
                disabled={isTransitioning}
                whileHover={!reducedMotion && !isTransitioning ? { 
                  scale: 1.01,
                } : {}}
                whileTap={!reducedMotion && !isTransitioning ? { 
                  scale: 0.98 
                } : {}}
                style={{
                  borderRadius: '2px',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
                className={`relative w-full px-4 py-4 sm:px-6 sm:py-5 
                         text-left
                         transition-all duration-300 ease-out
                         focus:outline-none 
                         disabled:cursor-not-allowed
                         cursor-pointer
                         font-semibold
                         ${isSelected 
                           ? 'bg-transparent border-2 text-text-primary shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)]' 
                           : 'bg-transparent border-2 border-border text-text-primary hover:border-brand-red hover:shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)] hover:bg-[rgba(225,6,0,0.05)]'
                         }
                         ${isSelected ? 'border-brand-red' : ''}`}
              >
                {/* Answer text with label */}
                <span className="relative text-sm sm:text-base font-semibold leading-relaxed flex items-start gap-2 sm:gap-3">
                  <span className="font-bold text-base sm:text-lg">{answerLabel}.</span>
                  <span className="flex-1">{answer.text}</span>
                </span>

                {/* Selection indicator (checkmark when selected) */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
