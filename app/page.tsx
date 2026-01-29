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
import { trackFormSubmit } from '@/lib/analytics';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Home() {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

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

    trackFormSubmit('name_input', {
      user_name: trimmedName,
      form_location: 'landing_page'
    });

    localStorage.setItem('test_taker_name', trimmedName);
    router.push('/test');
  };

  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-bg-primary relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <motion.div
        initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: 'easeOut' }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: reducedMotion ? 0 : 0.3,
              delay: reducedMotion ? 0 : 0.1 
            }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl">🎯</div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 sm:mb-4 leading-tight"
          >
            Personality Test
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 0.3 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mx-auto px-4"
          >
            Temukan kekuatan unik dan karakter kamu melalui 10 pertanyaan interaktif
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
        >
          <div className="card p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl mb-2">⚡</div>
            <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-1">
              Cepat & Ringkas
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary">
              10 pertanyaan, 3 menit
            </p>
          </div>
          <div className="card p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl mb-2">🎨</div>
            <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-1">
              Personal
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary">
              Hasil sesuai kepribadian
            </p>
          </div>
          <div className="card p-3 sm:p-4 text-center">
            <div className="text-2xl sm:text-3xl mb-2">🔒</div>
            <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-1">
              Privasi Aman
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary">
              Tanpa registrasi
            </p>
          </div>
        </motion.div>

        {/* Name Input Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.5 }}
          className="card p-5 sm:p-6 md:p-8"
        >
          <label htmlFor="name" className="block text-sm sm:text-base font-medium text-text-primary mb-2 sm:mb-3">
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
            className={`input mb-3 sm:mb-4 text-sm sm:text-base ${error ? 'input-error' : ''}`}
            maxLength={50}
            autoFocus
          />

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs sm:text-sm text-semantic-error mb-3 sm:mb-4"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={!reducedMotion && name.trim() ? { scale: 1.02 } : {}}
            whileTap={!reducedMotion && name.trim() ? { scale: 0.98 } : {}}
            onClick={handleStartTest}
            disabled={!name.trim()}
            className="btn btn-primary w-full text-base sm:text-lg py-3 sm:py-4"
          >
            Mulai Test Sekarang →
          </motion.button>

          <p className="text-xs sm:text-sm text-text-tertiary text-center mt-3 sm:mt-4">
            Gratis • Tanpa registrasi • 3 menit
          </p>
        </motion.div>

        {/* Footer note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.6 }}
          className="text-xs sm:text-sm text-text-tertiary text-center mt-4 sm:mt-6 px-4"
        >
          Nama kamu akan muncul di hasil test untuk personalisasi
        </motion.p>
      </motion.div>
    </div>
  );
}
