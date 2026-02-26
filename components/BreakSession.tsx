/**
 * Break Session Component
 * 
 * Shows every 3 questions to give user a mental break
 * Displays micro reaction from the selected answer
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BreakSessionProps {
  currentQuestion: number;
  totalQuestions: number;
  microReaction: string;
  onContinue: () => void;
  isVisible: boolean;
}

export default function BreakSession({ 
  currentQuestion, 
  totalQuestions, 
  microReaction,
  onContinue, 
  isVisible 
}: BreakSessionProps) {
  const reducedMotion = useReducedMotion();
  const progress = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />

          {/* Break Session Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: reducedMotion ? 0.2 : 0.5, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-2xl bg-bg-surface border-2 border-brand-red rounded-lg shadow-elevation-lg p-6 sm:p-8 md:p-10 text-center">
              {/* Pause Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                className="text-5xl sm:text-6xl mb-4 sm:mb-6"
              >
                ⏸️
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-red mb-3 sm:mb-4"
              >
                Take a Breath
              </motion.h2>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center justify-center gap-2 text-text-tertiary mb-2">
                  <span className="text-xs sm:text-sm">Progress:</span>
                  <span className="text-brand-red font-bold text-base sm:text-lg">{progress}%</span>
                </div>
                <div className="w-full h-1.5 sm:h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-red to-red-500"
                  />
                </div>
              </motion.div>

              {/* Micro Reaction - Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-bg-elevated border border-border rounded-lg p-4 sm:p-6 mb-6 sm:mb-8"
              >
                <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed text-left">
                  {microReaction}
                </p>
              </motion.div>

              {/* Continue Button */}
              <div className="relative max-w-md mx-auto">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  onClick={onContinue}
                  whileTap={{ scale: 0.97 }}
                  className="w-full text-sm sm:text-base py-3 sm:py-4 font-bold bg-brand-red hover:bg-red-700 text-white rounded-full shadow-lg transition-colors duration-150 uppercase tracking-wide active:shadow-xl"
                >
                  Lanjut Tes →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
