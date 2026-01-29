/**
 * useReducedMotion Hook
 * 
 * Purpose: Detect user's motion preference to provide appropriate animations
 * Respects accessibility settings and improves performance on low-end devices
 */

'use client';

import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Animation variants based on motion preference
 * 
 * UX Reasoning:
 * - Full motion: Provides engaging, smooth experience for capable devices
 * - Reduced motion: Instant or fade-only for accessibility and performance
 */
export const getMotionVariants = (reducedMotion: boolean) => ({
  // Page transitions - guide attention, reduce jarring jumps
  pageEnter: reducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 },
  pageExit: reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -20 },
  pageInitial: reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 20 },

  // Button press - acknowledge user action
  buttonTap: reducedMotion
    ? { scale: 1 }
    : { scale: 0.97 },
  buttonHover: reducedMotion
    ? { scale: 1 }
    : { scale: 1.02 },

  // Card selection - visual feedback of choice made
  cardSelected: reducedMotion
    ? { opacity: 1 }
    : { scale: 1.02, opacity: 1 },
  cardUnselected: reducedMotion
    ? { opacity: 0.7 }
    : { scale: 0.98, opacity: 0.7 },
});
