/**
 * ConnectionAnimation - USB to Phone Loading State
 * 
 * Shows animation of USB icon connecting to phone
 * Uses usb.png and phone.png assets
 * before redirecting to result page
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ConnectionAnimationProps {
  onComplete: () => void;
}

export default function ConnectionAnimation({ onComplete }: ConnectionAnimationProps) {
  const [stage, setStage] = useState<'plugging' | 'connected' | 'complete'>('plugging');
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            
            {/* USB Icon - Using usb.png */}
            <motion.div
              animate={
                stage === 'plugging'
                  ? {
                      x: isMobile ? [0, -10, 10] : [0, 40, 30], // Mobile needs more movement
                      rotate: [0, 0, 0],
                    }
                  : stage === 'connected'
                  ? {
                      x: isMobile ? 10 : 30, // Match final position
                      scale: [1, 1.05, 1],
                      rotate: [0, -2, 2, 0],
                    }
                  : {}
              }
              transition={{
                duration: stage === 'plugging' ? 2 : 0.5,
                ease: stage === 'plugging' ? [0.34, 1.56, 0.64, 1] : 'easeOut',
              }}
              className="relative flex-shrink-0 -mr-12 sm:-mr-16"
            >
              {/* USB Icon Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative">
                <Image
                  src="/images/usbc.png"
                  alt="USB"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* LED Indicator - Overlay on image */}
                <motion.div
                  className="absolute top-1 right-1 w-2 h-2 rounded-full"
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
              </div>

              {/* Data Transfer Particles */}
              {stage === 'plugging' && (
                <motion.div
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2"
                  animate={{ opacity: [0, 1, 0], x: [0, 15, 30] }}
                  transition={{
                    duration: 0.6,
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

            {/* Gap between USB and Phone - Reduced */}
            <div className="w-2 sm:w-4 flex-shrink-0" />

            {/* Phone - Using phone.png */}
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
              {/* Phone Image */}
              <motion.div
                className="w-24 h-40 sm:w-32 sm:h-52 md:w-36 md:h-60 relative"
                animate={{
                  filter: stage === 'connected'
                    ? `drop-shadow(0 0 30px rgba(225, 6, 0, 0.6))`
                    : stage === 'plugging'
                    ? `drop-shadow(0 0 20px rgba(225, 6, 0, 0.3))`
                    : 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.5))',
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Screen Content Overlay - Success Checkmark */}
                {stage === 'connected' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <div className="bg-green-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-2xl">
                      <span className="text-white text-2xl sm:text-3xl font-bold">✓</span>
                    </div>
                  </motion.div>
                )}

                {/* Port Glow at bottom */}
                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-brand-red rounded-full blur-md"
                  animate={{
                    opacity: stage === 'plugging' ? [0.3, 0.6, 0.3] : stage === 'connected' ? 1 : 0,
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
                      animate={{ opacity: 0, scale: 1.3 }}
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
