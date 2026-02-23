/**
 * Prize Card Component
 * For displaying additional prizes
 */

'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PrizeCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function PrizeCard({
  icon,
  title,
  description,
  delay = 0,
}: PrizeCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reducedMotion ? 0.1 : 0.6, delay }}
      whileHover={reducedMotion ? {} : { scale: 1.03, y: -4 }}
      className="card p-6 sm:p-8 text-center card-interactive"
    >
      {/* Icon */}
      <motion.div
        whileHover={reducedMotion ? {} : { scale: 1.1 }}
        className="text-5xl sm:text-6xl mb-4"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h4 className="text-lg sm:text-xl font-bold mb-2 text-text-primary">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm sm:text-base text-text-secondary">
        {description}
      </p>
    </motion.div>
  );
}
