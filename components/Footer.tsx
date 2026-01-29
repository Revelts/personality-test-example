/**
 * Footer Component - SanDisk Brand Campaign
 * 
 * Displays "Powered by SanDisk" branding across all pages
 * Consistent with industrial tech design system
 */

'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer 
      className="w-full border-t border-border flex-shrink-0"
      style={{
        backgroundColor: '#111113', // Solid color for Safari compatibility
        background: 'rgba(17, 17, 19, 0.95)', // Slight transparency for modern browsers
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          {/* Powered by text */}
          <div className="flex items-center gap-2">
            <span className="text-text-secondary font-medium">
              Powered by
            </span>
            
            {/* SanDisk Logo/Text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-surface border border-border-subtle hover:border-brand-red transition-all duration-200"
            >
              {/* SanDisk Icon/Logo */}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
              >
                {/* USB/Flash drive icon representation */}
                <rect 
                  x="8" 
                  y="4" 
                  width="8" 
                  height="16" 
                  rx="1" 
                  fill="currentColor" 
                  className="text-brand-red"
                />
                <rect 
                  x="10" 
                  y="6" 
                  width="4" 
                  height="2" 
                  rx="0.5" 
                  fill="currentColor" 
                  className="text-text-primary"
                  opacity="0.3"
                />
                <circle 
                  cx="12" 
                  cy="10" 
                  r="0.5" 
                  fill="currentColor" 
                  className="text-semantic-success"
                />
                <rect 
                  x="10" 
                  y="2" 
                  width="4" 
                  height="2" 
                  rx="0.5" 
                  fill="currentColor" 
                  className="text-metallic"
                />
              </svg>
              
              {/* SanDisk Text */}
              <span className="font-bold tracking-tight text-text-primary">
                San<span className="text-brand-red">Disk</span>
              </span>
            </motion.div>
          </div>

          {/* Separator */}
          <span className="hidden sm:inline text-text-tertiary">|</span>

          {/* Additional info */}
          <span className="text-text-tertiary">
            Fast. Reliable. Ready.
          </span>
          
          {/* Separator */}
          <span className="hidden sm:inline text-text-tertiary">|</span>
          
          {/* Copyright */}
          <span className="text-text-tertiary">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
