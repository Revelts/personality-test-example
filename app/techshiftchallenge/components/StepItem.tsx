/**
 * Step Item Component
 * For submission guide steps with progressive reveal
 */

'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

export default function StepItem({
  number,
  title,
  description,
  delay = 0,
}: StepItemProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: reducedMotion ? 0 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reducedMotion ? 0.1 : 0.6, delay }}
      className="flex gap-4 sm:gap-6 items-start"
    >
      {/* Step Number */}
      <motion.div
        whileHover={reducedMotion ? {} : { scale: 1.1 }}
        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-black text-xl sm:text-2xl text-white shadow-glow-red-sm"
      >
        {number}
      </motion.div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-text-primary tracking-wide">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      {/* Connecting Line (except for last item) */}
      {number < 4 && (
        <div className="absolute left-[23px] sm:left-[27px] top-[60px] w-0.5 h-16 bg-gradient-to-b from-brand-red to-transparent opacity-30" />
      )}
    </motion.div>
  );
}
