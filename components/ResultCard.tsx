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
    <div id="result-card" className="w-full max-w-xl mx-auto">
      {/* Title on Dark Background */}
      <motion.h1
        initial={{ opacity: 0, y: reducedMotion ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: reducedMotion ? 0.2 : 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 text-left tracking-tight"
      >
        {result.title}
      </motion.h1>

      {/* White Card Content */}
      <motion.div
        initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: reducedMotion ? 0.2 : 0.5,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.1
        }}
        className="bg-white rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-2xl"
      >
        {/* Overall Character Result */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
            Overall Result Karakter
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* Piece Quote / Poem */}
        <div className="border-l-4 border-gray-300 pl-3 sm:pl-4">
          <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
            Piece Quote / Poem
          </h3>
          <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed">
            {result.quote}
          </p>
        </div>

        {/* Elemen */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
            Elemen
          </h3>
          <p className="text-xs sm:text-sm text-gray-800">
            {result.element}
          </p>
        </div>

        {/* Warna */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
            Warna
          </h3>
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm" 
              style={{ backgroundColor: result.colorHex }}
            />
            <p className="text-xs sm:text-sm text-gray-800 font-medium">
              {result.colorName}
            </p>
          </div>
        </div>

        {/* Kenangan Paling Penting */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
            Kenangan Paling Penting
          </h3>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line">
            {result.mostImportant}
          </p>
        </div>

        {/* Music */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
            Music
          </h3>
          <p className="text-xs sm:text-sm text-gray-800">
            {result.musicArtist} – {result.music}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
