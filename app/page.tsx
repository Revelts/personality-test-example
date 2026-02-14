/**
 * Landing Page - SanDisk-Inspired Design (Fully Responsive)
 * 
 * Design Philosophy:
 * - Industrial tech aesthetic
 * - Professional, confident, reliable
 * - Red as signal for action (CTA)
 * - Fully responsive (mobile-first)
 */

'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { trackFormSubmit } from '@/lib/analytics';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Home() {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [videoWatched, setVideoWatched] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const handleStartTest = () => {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError('Nama wajib diisi');
      return;
    }

    if (trimmedName.length < 2) {
      setError('Nama terlalu pendek. Minimal 2 karakter');
      return;
    }

    if (!videoWatched) {
      setError('Tonton video sampai selesai terlebih dahulu');
      return;
    }

    trackFormSubmit('name_input', {
      user_name: trimmedName,
      form_location: 'landing_page'
    });

    localStorage.setItem('test_taker_name', trimmedName);
    router.push('/prologue');
  };

  const handleVideoEnded = () => {
    setVideoWatched(true);
    setVideoProgress(100);
  };

  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
  };

  return (
    <div className="h-screen flex items-center justify-center p-3 sm:p-4 bg-bg-primary relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <motion.div
        initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: 'easeOut' }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* SanDisk Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.1 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="relative h-8 sm:h-10 md:h-12 w-auto">
            <Image
              src="/images/sandisk-logo.png"
              alt="SanDisk"
              width={200}
              height={50}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Video Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.2 }}
          className="mb-4 sm:mb-6 rounded-lg overflow-hidden border border-border shadow-elevation-lg relative"
        >
          <video
            autoPlay
            muted
            playsInline
            controls
            onEnded={handleVideoEnded}
            onTimeUpdate={handleVideoTimeUpdate}
            className="w-full h-auto"
          >
            <source src="/images/sandisk-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Status Badge */}
          {videoWatched && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-lg"
            >
              <span>✓</span>
              <span>Video Selesai</span>
            </motion.div>
          )}
        </motion.div>

        {/* Name Input Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.3 }}
          className="card p-4 sm:p-5 md:p-6"
        >
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-text-primary mb-2">
            Siapa nama kamu? <span className="text-brand-red">*</span>
          </label>
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                handleStartTest();
              }
            }}
            placeholder="Masukkan nama kamu"
            className={`input mb-2 sm:mb-3 text-sm sm:text-base ${error ? 'input-error' : ''}`}
            maxLength={50}
            autoFocus
          />

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs sm:text-sm text-semantic-error mb-2 sm:mb-3"
            >
              {error}
            </motion.p>
          )}

          <div className="relative">
            <motion.button
              whileHover={!reducedMotion && name.trim() && videoWatched ? { scale: 1.02 } : {}}
              whileTap={!reducedMotion && name.trim() && videoWatched ? { scale: 0.98 } : {}}
              onClick={handleStartTest}
              disabled={!name.trim() || !videoWatched}
              className="w-full text-sm sm:text-base py-3 sm:py-4 font-bold relative disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              style={{
                backgroundColor: '#6B1A17',
                color: 'white',
                borderRadius: '8px',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                overflow: 'hidden',
              }}
            >
              {/* Smooth Progress Fill */}
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${videoProgress}%` }}
                transition={{ 
                  duration: 0.5, 
                  ease: 'easeOut'
                }}
                className="absolute inset-0 bg-brand-red"
                style={{ transformOrigin: 'left' }}
              />
              
              {/* Button Text */}
              <span className="relative z-10 uppercase tracking-wide">
                Mulai Test Sekarang →
              </span>
            </motion.button>
          </div>

          {!videoWatched && (
            <p className="text-[10px] sm:text-xs text-amber-400 text-center mt-2 sm:mt-3 flex items-center justify-center gap-1">
              <span>⏱️</span>
              <span>Tonton video sampai selesai untuk melanjutkan</span>
            </p>
          )}

          <p className="text-[10px] sm:text-xs text-text-tertiary text-center mt-2 sm:mt-3">
            Gratis • Tanpa registrasi • 5 menit
          </p>
        </motion.div>

        {/* Footer note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.4 }}
          className="text-[10px] sm:text-xs text-text-tertiary text-center mt-3 sm:mt-4 px-2"
        >
          Nama kamu akan muncul di hasil test untuk personalisasi
        </motion.p>
      </motion.div>
    </div>
  );
}
