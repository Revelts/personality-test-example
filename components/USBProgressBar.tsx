/**
 * USBProgressBar Component - SanDisk Edition (Fully Responsive)
 * 
 * Konsep: Flashdisk bergerak dari kiri ke kanan dan tercolok ke handphone
 * Style: Industrial tech - responsive untuk semua screen sizes
 */

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface USBProgressBarProps {
  progress: number; // 0-100
  showStatusText?: boolean;
}

export default function USBProgressBar({ 
  progress, 
  showStatusText = false 
}: USBProgressBarProps) {
  const reducedMotion = useReducedMotion();
  const [isPluggedIn, setIsPluggedIn] = useState(false);
  
  const calculatePosition = (value: number): number => {
    if (value < 95) {
      const normalized = value / 95;
      const eased = 1 - Math.pow(1 - normalized, 2);
      return eased * 85;
    } else if (value < 100) {
      return 85 + ((value - 95) / 5) * 7;
    } else {
      return 97;
    }
  };

  const currentPosition = calculatePosition(progress);
  
  const calculateGlow = (value: number): number => {
    if (value < 90) return 0;
    if (value < 100) return (value - 90) / 10;
    return 1;
  };
  
  const currentGlow = calculateGlow(progress);

  useEffect(() => {
    if (progress >= 100 && !isPluggedIn) {
      setIsPluggedIn(true);
    }
  }, [progress, isPluggedIn]);

  const getStatusMessage = () => {
    if (progress === 0) return "Siap memulai...";
    if (progress < 50) return "Mengirim data...";
    if (progress < 90) return "Transfer berlangsung...";
    if (progress < 100) return "Hampir tersambung...";
    return "Terhubung! ✓";
  };

  if (reducedMotion) {
    return (
      <div className="w-full mb-4 sm:mb-6 space-y-2 px-3 sm:px-4 md:px-6">
        <div className="relative h-1 sm:h-1.5 bg-bg-surface rounded-full overflow-hidden border border-border-subtle max-w-4xl mx-auto">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ 
              width: `${progress}%`,
              backgroundColor: '#E10600',
            }}
          />
        </div>
        {showStatusText && (
          <div className="text-center text-xs text-text-tertiary">
            {getStatusMessage()}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full mb-6 sm:mb-8 px-3 sm:px-4 md:px-6">
      {/* Main Container - Responsive heights with proper spacing */}
      <div className="relative w-full h-10 sm:h-12 flex items-center max-w-4xl mx-auto">
        
        {/* Progress Track Background */}
        <div className="absolute left-0 right-10 sm:right-12 md:right-14 h-1 sm:h-1.5 bg-bg-surface border border-border-subtle rounded-full overflow-hidden">
          {/* Progress Fill - Safari compatible */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              backgroundColor: '#E10600', // Solid color for Safari compatibility
              background: 'linear-gradient(90deg, #E10600 0%, #FF1F0F 100%)', // Fallback gradient
            }}
            animate={{ width: `${currentPosition}%` }}
            transition={{ 
              duration: reducedMotion ? 0 : 0.5,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          />
        </div>

        {/* Flashdisk (USB) - Responsive sizes */}
        <motion.div
          className="absolute z-10"
          animate={{
            left: `${currentPosition}%`,
          }}
          transition={{ 
            duration: reducedMotion ? 0 : 0.5,
            ease: [0.34, 1.56, 0.64, 1]
          }}
          style={{
            x: '-50%',
          }}
        >
          <motion.div
            animate={isPluggedIn ? {
              scale: [1, 1.1, 0.95, 1],
              rotate: [0, -2, 2, 0],
            } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* USB Flashdisk Icon - Optimized for mobile */}
            <div className="relative">
              <div 
                className="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-7 rounded-r-md shadow-elevation-sm relative border border-border"
                style={{
                  backgroundColor: '#4F4F51', // Solid metallic color for Safari
                  background: 'linear-gradient(90deg, #3A3A3C 0%, #4F4F51 100%)',
                }}
              >
                {/* USB Cap - Red */}
                <div 
                  className="absolute -left-1.5 sm:-left-2 top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-3 sm:h-4 rounded-l-sm shadow-md"
                  style={{
                    backgroundColor: '#E10600',
                  }}
                />
                {/* USB Connector */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-1.5 sm:h-2 bg-text-secondary" />
                {/* LED Indicator */}
                <motion.div
                  className="absolute right-1 top-1 w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: progress > 0 ? '#E10600' : '#666666',
                  }}
                  animate={{
                    opacity: progress > 0 && progress < 100 ? [1, 0.3, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: progress > 0 && progress < 100 ? Infinity : 0,
                  }}
                />
              </div>
              
              {/* Data Transfer Particles - Visible on mobile */}
              {progress > 0 && progress < 100 && (
                <motion.div
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0], x: [0, 8, 16] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="flex gap-1">
                    <div 
                      className="w-1 h-1 rounded-full" 
                      style={{ backgroundColor: '#E10600' }}
                    />
                    <div 
                      className="w-1 h-1 rounded-full" 
                      style={{ backgroundColor: '#FF1F0F' }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Handphone - Optimized for mobile */}
        <motion.div
          className="absolute right-0 z-20"
          animate={isPluggedIn ? {
            scale: [1, 1.05, 1],
            y: [0, -2, 0],
          } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Phone Body - Bigger and clearer on mobile */}
            <motion.div
              className="w-8 h-11 sm:w-10 sm:h-14 md:w-11 md:h-16 rounded-lg border border-border relative overflow-hidden shadow-elevation-md"
              style={{
                backgroundColor: '#222224',
                background: 'linear-gradient(135deg, #3A3A3C 0%, #222224 100%)',
              }}
              animate={{
                boxShadow: `0 0 ${currentGlow * 15}px rgba(225, 6, 0, ${currentGlow * 0.5})`
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Phone Screen */}
              <div 
                className="absolute inset-1 sm:inset-1.5 rounded-md"
                style={{
                  backgroundColor: '#141414',
                  background: 'linear-gradient(135deg, #141414 0%, #0E0E10 100%)',
                }}
              >
                {/* Screen Glow when connected */}
                {isPluggedIn && (
                  <motion.div
                    className="absolute inset-0 rounded-md"
                    style={{
                      backgroundColor: '#E10600',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                
                {/* Connection Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={isPluggedIn ? {
                      scale: [0, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    {isPluggedIn ? (
                      <span 
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: '#4CAF50' }}
                      >
                        ✓
                      </span>
                    ) : (
                      <svg 
                        width="12" 
                        height="16" 
                        viewBox="0 0 24 32" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-4 sm:w-4 sm:h-5"
                      >
                        {/* Phone body */}
                        <rect 
                          x="2" 
                          y="1" 
                          width="20" 
                          height="30" 
                          rx="2" 
                          fill="#A0A0A0" 
                          opacity="0.8"
                        />
                        {/* Screen */}
                        <rect 
                          x="3.5" 
                          y="3" 
                          width="17" 
                          height="23" 
                          rx="0.5" 
                          fill="#E10600" 
                          opacity="0.3"
                        />
                        {/* Top speaker/notch */}
                        <rect 
                          x="9" 
                          y="2" 
                          width="6" 
                          height="0.5" 
                          rx="0.25" 
                          fill="#0E0E10"
                        />
                        {/* Home indicator */}
                        <rect 
                          x="9" 
                          y="27.5" 
                          width="6" 
                          height="1" 
                          rx="0.5" 
                          fill="#666666" 
                          opacity="0.4"
                        />
                      </svg>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* USB Port */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-0.5 sm:h-1 border-t border-border rounded-t-sm"
                style={{ backgroundColor: '#0E0E10' }}
              />
              
              {/* Port Highlight - Red glow */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-1 sm:h-1.5 rounded-full"
                style={{
                  backgroundColor: '#E10600',
                  filter: 'blur(4px)',
                  WebkitFilter: 'blur(4px)',
                }}
                animate={{ opacity: currentGlow }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Connection Ripple Effect */}
            {isPluggedIn && (
              <motion.div
                className="absolute inset-0 border border-brand-red rounded-lg"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Status Text - Responsive font */}
      {showStatusText && (
        <motion.div
          key={getStatusMessage()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-center text-xs sm:text-sm font-medium text-text-tertiary mt-2 sm:mt-3"
        >
          {getStatusMessage()}
        </motion.div>
      )}
    </div>
  );
}
