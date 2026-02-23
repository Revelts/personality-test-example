/**
 * Category Card Component
 * For STUNT and CORE categories with hover effects
 */

'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  color: 'red' | 'cyan';
  delay?: number;
}

export default function CategoryCard({
  title,
  description,
  icon,
  color,
  delay = 0,
}: CategoryCardProps) {
  const reducedMotion = useReducedMotion();

  const colorClasses = {
    red: {
      border: 'border-brand-red/50 hover:border-brand-red',
      glow: 'hover:shadow-glow-red',
      text: 'text-brand-red',
      bg: 'from-brand-red/10 to-transparent',
    },
    cyan: {
      border: 'border-accent-cyan/50 hover:border-accent-cyan',
      glow: 'hover:shadow-glow-cyan',
      text: 'text-accent-cyan',
      bg: 'from-accent-cyan/10 to-transparent',
    },
  };

  const styles = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reducedMotion ? 0.1 : 0.8, delay }}
      whileHover={reducedMotion ? {} : { scale: 1.02, y: -4 }}
      className={`relative overflow-hidden border-2 ${styles.border} ${styles.glow} transition-all duration-300 rounded-lg p-8 sm:p-10 md:p-12 cursor-pointer group`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          className="text-5xl sm:text-6xl md:text-7xl mb-6"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 ${styles.text} tracking-tight`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${styles.bg} opacity-50 blur-2xl`} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${styles.bg} opacity-50 blur-2xl`} />
    </motion.div>
  );
}
