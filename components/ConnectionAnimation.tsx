/**
 * ConnectionAnimation - USB Plug-in Loading State
 * 
 * Shows detailed animation of USB connecting to phone
 * before redirecting to result page
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ConnectionAnimationProps {
  onComplete: () => void;
}

export default function ConnectionAnimation({ onComplete }: ConnectionAnimationProps) {
  const [stage, setStage] = useState<'plugging' | 'connected' | 'complete'>('plugging');

  useEffect(() => {
    // Stage 1: Plugging animation (2s)
    const plugTimer = setTimeout(() => {
      setStage('connected');
    }, 2000);

    // Stage 2: Show "Connected" (2s)
    const connectedTimer = setTimeout(() => {
      setStage('complete');
    }, 4000);

    // Stage 3: Fade out and redirect (1s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(plugTimer);
      clearTimeout(connectedTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-bg-primary flex items-center justify-center"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 text-center px-4 w-full max-w-md mx-auto">
          {/* Animation Container - Centered with proper spacing */}
          <div className="mb-8 sm:mb-12 relative flex items-center justify-center">
            {/* Spacer untuk balance layout */}
            <div className="w-20 sm:w-24" />
            
            {/* USB Flashdisk */}
            <motion.div
              animate={
                stage === 'plugging'
                  ? {
                      x: [0, 40, 40],
                      rotate: [0, 0, 0],
                    }
                  : stage === 'connected'
                  ? {
                      scale: [1, 1.1, 0.95, 1],
                      rotate: [0, -3, 3, 0],
                    }
                  : {}
              }
              transition={{
                duration: stage === 'plugging' ? 1.5 : 0.4,
                ease: stage === 'plugging' ? [0.34, 1.56, 0.64, 1] : 'easeOut',
              }}
              className="relative flex-shrink-0"
            >
              {/* USB Body - Large */}
              <div className="w-16 h-12 sm:w-20 sm:h-16 bg-gradient-to-r from-metallic to-metallic-light rounded-r-lg shadow-elevation-lg relative border-2 border-border">
                {/* USB Cap - SanDisk Red */}
                <div className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-8 sm:h-10 bg-gradient-to-r from-brand-red-dark to-brand-red rounded-l-md shadow-lg" />
                
                {/* USB Connector */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-4 sm:h-5 bg-text-secondary" />
                
                {/* LED Indicator */}
                <motion.div
                  className="absolute right-2 top-2 w-2 h-2 rounded-full"
                  animate={{
                    backgroundColor:
                      stage === 'connected'
                        ? '#4CAF50'
                        : ['#E10600', '#FF1F0F', '#E10600'],
                    boxShadow:
                      stage === 'connected'
                        ? '0 0 10px #4CAF50'
                        : '0 0 8px #E10600',
                  }}
                  transition={{
                    duration: 1,
                    repeat: stage === 'plugging' ? Infinity : 0,
                  }}
                />
                
                {/* SanDisk Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-text-tertiary">USB</span>
                </div>
              </div>

              {/* Data Transfer Particles */}
              {stage === 'plugging' && (
                <motion.div
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                  animate={{ opacity: [0, 1, 0], x: [0, 20, 40] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-brand-red rounded-full"
                        style={{ opacity: 1 - i * 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Gap between USB and Phone */}
            <div className="w-8 sm:w-12 md:w-16 flex-shrink-0" />

            {/* Phone */}
            <motion.div
              animate={
                stage === 'connected'
                  ? {
                      scale: [1, 1.05, 1],
                      y: [0, -4, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative flex-shrink-0"
            >
              {/* Phone Body - Large */}
              <motion.div
                className="w-20 h-32 sm:w-24 sm:h-40 bg-gradient-to-br from-metallic to-bg-elevated rounded-2xl border-2 border-border relative overflow-hidden shadow-elevation-lg"
                animate={{
                  boxShadow:
                    stage === 'connected'
                      ? '0 0 30px rgba(225, 6, 0, 0.6)'
                      : stage === 'plugging'
                      ? '0 0 20px rgba(225, 6, 0, 0.3)'
                      : '0 4px 16px rgba(0, 0, 0, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Phone Screen */}
                <div className="absolute inset-2 bg-gradient-to-br from-bg-secondary to-bg-primary rounded-xl flex items-center justify-center">
                  {/* Screen Content */}
                  <AnimatePresence mode="wait">
                    {stage === 'connected' ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="text-4xl sm:text-5xl"
                      >
                        ✓
                      </motion.div>
                    ) : (
                      <motion.div
                        key="phone"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <svg 
                          width="32" 
                          height="48" 
                          viewBox="0 0 32 48" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-12 sm:w-10 sm:h-14"
                        >
                          {/* Phone body */}
                          <rect 
                            x="2" 
                            y="1" 
                            width="28" 
                            height="46" 
                            rx="3" 
                            fill="currentColor" 
                            className="text-text-secondary"
                            opacity="0.6"
                          />
                          {/* Screen */}
                          <rect 
                            x="4" 
                            y="5" 
                            width="24" 
                            height="35" 
                            rx="1" 
                            fill="currentColor" 
                            className="text-brand-red"
                            opacity="0.4"
                          />
                          {/* Top notch */}
                          <rect 
                            x="11" 
                            y="2.5" 
                            width="10" 
                            height="1.5" 
                            rx="0.75" 
                            fill="currentColor" 
                            className="text-bg-primary"
                            opacity="0.8"
                          />
                          {/* Camera dot */}
                          <circle 
                            cx="9" 
                            cy="3.5" 
                            r="0.5" 
                            fill="currentColor" 
                            className="text-bg-primary"
                            opacity="0.6"
                          />
                          {/* Home indicator */}
                          <rect 
                            x="11" 
                            y="42" 
                            width="10" 
                            height="2" 
                            rx="1" 
                            fill="currentColor" 
                            className="text-text-tertiary"
                            opacity="0.3"
                          />
                          {/* Signal bars on screen */}
                          <g opacity="0.2" className="text-text-primary">
                            <rect x="8" y="9" width="2" height="4" rx="0.5" fill="currentColor"/>
                            <rect x="11" y="9" width="2" height="4" rx="0.5" fill="currentColor"/>
                            <rect x="14" y="9" width="2" height="4" rx="0.5" fill="currentColor"/>
                          </g>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Screen Flash Effect */}
                  {stage === 'connected' && (
                    <motion.div
                      className="absolute inset-0 bg-brand-red rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </div>

                {/* USB Port */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-bg-primary border-t-2 border-border rounded-t-md" />

                {/* Port Glow */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-brand-red rounded-full blur-md"
                  animate={{
                    opacity: stage === 'plugging' ? [0.3, 0.6, 0.3] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: stage === 'plugging' ? Infinity : 0,
                  }}
                />
              </motion.div>

              {/* Connection Ripple */}
              {stage === 'connected' && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-brand-red rounded-2xl"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{
                        duration: 1,
                        delay: i * 0.2,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
            
            {/* Spacer untuk balance layout */}
            <div className="w-20 sm:w-24" />
          </div>

          {/* Status Text */}
          <AnimatePresence mode="wait">
            {stage === 'plugging' && (
              <motion.div
                key="connecting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-3"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                  Connecting...
                </h2>
                <p className="text-sm sm:text-base text-text-secondary">
                  Menghubungkan ke sistem
                </p>
                {/* Loading dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-brand-red rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 'connected' && (
              <motion.div
                key="connected"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="space-y-4"
              >
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-red"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(225, 6, 0, 0.3)',
                      '0 0 20px rgba(225, 6, 0, 0.5)',
                      '0 0 10px rgba(225, 6, 0, 0.3)',
                    ],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Connected!
                </motion.h2>
                <p className="text-base sm:text-lg text-text-secondary">
                  Memuat hasil kamu...
                </p>
              </motion.div>
            )}

            {stage === 'complete' && (
              <motion.div
                key="redirecting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-lg sm:text-xl text-text-primary">
                  Redirecting...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
