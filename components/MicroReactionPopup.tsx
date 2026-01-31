/**
 * Micro Reaction Popup Component
 * 
 * Shows deep psychological insight after each answer
 * Appears for every question answered
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MicroReactionPopupProps {
  microReaction: string;
  onContinue: () => void;
  isVisible: boolean;
}

export default function MicroReactionPopup({ 
  microReaction, 
  onContinue, 
  isVisible 
}: MicroReactionPopupProps) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onContinue}
          />

          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: reducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: reducedMotion ? 0 : 20 }}
              transition={{ 
                duration: reducedMotion ? 0.2 : 0.4, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="w-full max-w-lg bg-bg-surface border-2 border-brand-red rounded-lg shadow-elevation-lg p-6 sm:p-8"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl mb-4 text-center"
              >
                🧠
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-text-tertiary text-center mb-4 uppercase tracking-wider font-semibold"
              >
                Micro Reaction
              </motion.h3>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base text-text-primary leading-relaxed text-center mb-6"
              >
                {microReaction}
              </motion.p>

              {/* Continue Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={onContinue}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  borderRadius: '2px',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
                className="w-full py-3 sm:py-4 bg-transparent border-2 border-brand-red text-text-primary font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 hover:shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)] hover:bg-[rgba(225,6,0,0.05)]"
              >
                Lanjut
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
