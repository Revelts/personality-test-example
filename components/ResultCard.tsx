/**
 * ResultCard Component - SanDisk-Inspired Design (Fully Responsive)
 * 
 * Design Philosophy:
 * - Industrial tech aesthetic
 * - Professional, solid presentation
 * - Red as accent for key info
 * - Fully responsive for all devices
 */

'use client';

import { motion } from 'framer-motion';
import { PersonalityResult } from '@/lib/results';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ResultCardProps {
  result: PersonalityResult;
  userName?: string;
}

export default function ResultCard({ result, userName }: ResultCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: reducedMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
      id="result-card"
      className="w-full max-w-3xl mx-auto bg-bg-surface border-2 border-border rounded-lg overflow-hidden shadow-elevation-lg"
    >
      {/* Header Section - Responsive padding & text */}
      <div className="bg-bg-elevated border-b-2 border-brand-red p-6 sm:p-8 md:p-10 text-center relative">
        {/* Emoji - Responsive size */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: reducedMotion ? 0 : 0.1,
            duration: reducedMotion ? 0.1 : 0.3
          }}
          className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4"
        >
          {result.emoji}
        </motion.div>

        {/* User Name - Responsive text */}
        {userName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 0.2 }}
            className="text-sm sm:text-base text-text-secondary mb-2"
          >
            {userName}, kamu adalah
          </motion.p>
        )}

        {/* Title - Responsive text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 sm:mb-3 leading-tight"
        >
          {result.title}
        </motion.h1>

        {/* Tagline - Responsive text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.4 }}
          className="text-base sm:text-lg md:text-xl text-brand-red font-medium px-4"
        >
          "{result.tagline}"
        </motion.p>
      </div>

      {/* Content Section - Responsive padding & spacing */}
      <div className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-text-primary mb-2 sm:mb-3 flex items-center gap-2">
            <span className="w-1 h-5 sm:h-6 bg-brand-red rounded-full"></span>
            Tentang Kamu
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {result.description}
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.6 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-text-primary mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-1 h-5 sm:h-6 bg-brand-red rounded-full"></span>
            Kekuatan Kamu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {result.strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reducedMotion ? 0 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: reducedMotion ? 0 : 0.7 + (index * 0.05),
                  duration: 0.2
                }}
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-bg-primary border border-border rounded-lg hover:border-brand-red/40 transition-colors"
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">{result.emoji}</span>
                <span className="text-xs sm:text-sm md:text-base text-text-primary pt-1">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer - Responsive text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.9 }}
          className="pt-4 sm:pt-6 border-t border-border text-center"
        >
          <p className="text-xs sm:text-sm text-text-tertiary">
            Hasil test personality berdasarkan 10 pertanyaan
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
