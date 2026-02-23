/**
 * Instagram Social Wall Component
 * Displays Instagram posts with #techshiftchallenge hashtag
 * 
 * SETUP INSTRUCTIONS:
 * 
 * Option 1: Using SnapWidget (Recommended - Easy Setup)
 * 1. Go to https://snapwidget.com/
 * 2. Create a free account
 * 3. Choose "Hashtag Widget"
 * 4. Enter hashtag: techshiftchallenge
 * 5. Customize layout (grid, 3 columns)
 * 6. Copy the embed code
 * 7. Paste the code in the SNAPWIDGET_EMBED section below
 * 
 * Option 2: Using EmbedSocial (Alternative)
 * 1. Go to https://embedsocial.com/
 * 2. Create account and connect Instagram
 * 3. Create a hashtag feed for #techshiftchallenge
 * 4. Copy the embed code
 * 5. Replace the code in EMBEDSOCIAL section below
 * 
 * Option 3: Using Curator.io
 * 1. Go to https://curator.io/
 * 2. Create account
 * 3. Add Instagram source with hashtag filter
 * 4. Generate embed code
 * 5. Replace code below
 */

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import Script from 'next/script';

interface InstagramPost {
  id: string;
  permalink: string;
  media_url: string;
  caption: string;
  timestamp: string;
  username: string;
}

export default function InstagramSocialWall() {
  const reducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [useWidget, setUseWidget] = useState(true); // Toggle between widget or custom implementation

  useEffect(() => {
    // Simulate loading delay for widget
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (useWidget) {
    return (
      <div className="relative">
        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[...Array(9)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square bg-bg-surface rounded-lg animate-pulse"
              />
            ))}
          </div>
        )}

        {/* ========================================
            OPTION 1: SNAPWIDGET EMBED
            Replace this section with your SnapWidget code
        ======================================== */}
        <div 
          className="instagram-feed-widget"
          style={{ 
            minHeight: isLoading ? '0' : '600px',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          {/* 
            PASTE YOUR SNAPWIDGET EMBED CODE HERE
            Example format:
            
            <script src="https://snapwidget.com/js/snapwidget.js"></script>
            <iframe 
              src="https://snapwidget.com/embed/XXXXX" 
              className="snapwidget-widget" 
              allowtransparency="true" 
              frameborder="0" 
              scrolling="no" 
              style="border:none; overflow:hidden; width:100%;">
            </iframe>
          */}
          
          {/* Fallback/Placeholder - Remove this when you add real widget */}
          <div className="text-center py-12 card">
            <div className="mb-6">
              <svg 
                className="w-16 h-16 mx-auto text-brand-red" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Instagram Feed Widget
            </h3>
            <p className="text-text-secondary mb-4 max-w-md mx-auto">
              Untuk menampilkan post Instagram dengan hashtag #techshiftchallenge, 
              ikuti instruksi setup di file ini.
            </p>
            <div className="text-sm text-text-tertiary space-y-2 max-w-md mx-auto">
              <p>📝 Buka: <code className="text-brand-red">app/techshiftchallenge/components/InstagramSocialWall.tsx</code></p>
              <p>🔧 Pilih salah satu option (SnapWidget, EmbedSocial, atau Curator)</p>
              <p>📋 Copy embed code dan paste di section yang tersedia</p>
            </div>
          </div>
        </div>

        {/* ========================================
            OPTION 2: EMBEDSOCIAL
            Uncomment and add your EmbedSocial code here
        ======================================== */}
        {/* 
        <div className="embedsocial-hashtag" data-ref="YOUR_REF_ID"></div>
        <Script 
          src="https://embedsocial.com/cdn/ht.js" 
          strategy="lazyOnload"
        />
        */}

        {/* ========================================
            OPTION 3: CURATOR.IO
            Uncomment and add your Curator code here
        ======================================== */}
        {/*
        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
        <Script 
          src="https://cdn.curator.io/published/YOUR_FEED_ID.js"
          strategy="lazyOnload"
        />
        */}
      </div>
    );
  }

  // Custom implementation (if you want to use Instagram API directly)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {/* This would require Instagram Graph API with proper authentication */}
      <div className="col-span-full text-center py-12 card">
        <p className="text-text-secondary">
          Custom Instagram API integration - Requires Facebook App & Access Token
        </p>
      </div>
    </div>
  );
}
