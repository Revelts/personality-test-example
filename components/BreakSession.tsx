/**
 * Break Session Component
 * 
 * Shows every 5 questions to give user a mental break
 * Displays encouraging message and allows user to continue
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BreakSessionProps {
  currentQuestion: number;
  totalQuestions: number;
  onContinue: () => void;
  isVisible: boolean;
}

export default function BreakSession({ 
  currentQuestion, 
  totalQuestions, 
  onContinue, 
  isVisible 
}: BreakSessionProps) {
  const reducedMotion = useReducedMotion();
  const progress = Math.round((currentQuestion / totalQuestions) * 100);

  const messages = [
    {
      emoji: "💫",
      title: "Bagus!",
      message: "Lo udah separuh jalan. Jawaban lo mulai ngebentuk pola yang unik. Lanjut?"
    },
    {
      emoji: "🎯",
      title: "Sebentar lagi!",
      message: "Tinggal 25% lagi. Lo udah sejauh ini — gak ada alasan berhenti sekarang."
    },
    {
      emoji: "🔥",
      title: "Almost there!",
      message: "Sedikit lagi hasilnya keluar. Jawab sisa pertanyaan dengan jujur ya."
    }
  ];

  // Determine which message to show based on progress
  let messageIndex = 0;
  if (currentQuestion === 10) messageIndex = 0; // After Q10
  else if (currentQuestion === 15) messageIndex = 1; // After Q15

  const currentMessage = messages[messageIndex];

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
            <div className="w-full max-w-md bg-bg-surface border-2 border-brand-red rounded-lg shadow-elevation-lg p-8 sm:p-10 text-center">
              {/* Emoji */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                className="text-6xl sm:text-7xl mb-6"
              >
                {currentMessage.emoji}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
              >
                {currentMessage.title}
              </motion.h2>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-2 text-text-secondary mb-2">
                  <span className="text-sm sm:text-base">Progress:</span>
                  <span className="text-brand-red font-bold text-lg sm:text-xl">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-brand-red to-red-500"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8"
              >
                {currentMessage.message}
              </motion.p>

              {/* Continue Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={onContinue}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  borderRadius: '2px',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
                className="w-full py-4 sm:py-5 bg-transparent border-2 border-brand-red text-text-primary font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 hover:shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)] hover:bg-[rgba(225,6,0,0.05)]"
              >
                Lanjut Tes
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
