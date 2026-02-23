/**
 * TECHSHIFT CHALLENGE: NEVER FEAR FULL - Landing Page
 * 
 * Campaign landing page with smooth scroll and scroll-based reveal animations
 * Following SanDisk cyber-tech design system
 */

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import PixelDecoration from '@/components/PixelDecoration';
import CountdownTimer from './components/CountdownTimer';
import CategoryCard from './components/CategoryCard';
import PrizeCard from './components/PrizeCard';
import StepItem from './components/StepItem';
import FAQAccordion from './components/FAQAccordion';
import InstagramSocialWall from './components/InstagramSocialWall';
import BackToTopButton from './components/BackToTopButton';
import CustomCursor from './components/CustomCursor';

export default function TechShiftChallengePage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Scroll-based parallax for hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Force video to play
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* ========================================
          SECTION 1: HERO SECTION
      ======================================== */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          {/* Fallback background (shows while video loads) */}
          <div className="absolute inset-0 bg-bg-primary" />
          
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.play().catch((error) => {
                console.error('Video play failed:', error);
              });
            }}
            onError={(e) => {
              console.error('Video failed to load:', e);
            }}
          >
            <source src="/video/header-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/50 to-bg-primary z-10" />
          
          {/* Subtle grain texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20 z-10" />
        </div>

        {/* Pixel Decoration - Four corners */}
        <PixelDecoration size="md" animated={true} />

        {/* Hero Content */}
        <motion.div
          style={reducedMotion ? {} : { opacity: heroOpacity, scale: heroScale }}
          className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative h-10 sm:h-12 md:h-16 w-auto mx-auto max-w-xs">
              <Image
                src="/images/sandisk-logo.png"
                alt="SanDisk"
                width={300}
                height={80}
                className="h-full w-auto object-contain mx-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #F5F5F5 0%, #E10600 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TECHSHIFT CHALLENGE:<br />
            <span className="text-brand-red">NEVER FEAR FULL</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 sm:mb-10 font-light"
          >
            Rekam momen aksimu, menangkan iPhone 17.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.8 }}
            className="mb-10 sm:mb-12"
          >
            <CountdownTimer endDate="2026-03-31T23:59:59" />
          </motion.div>

          {/* CTA Button with Hover Text Change */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 1 }}
          >
            <motion.button
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.98 }}
              onClick={() => scrollToSection('submission-guide')}
              className="relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold tracking-wide uppercase bg-brand-red hover:bg-brand-red-light text-white rounded-sm shadow-glow-red-sm hover:shadow-glow-red transition-all duration-200 overflow-hidden group"
              style={{ clipPath: 'none' }}
            >
              {/* Default Text - Slides Out to Left */}
              <span className="relative transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                JOIN NOW
              </span>
              
              {/* Hover Text - Slides In from Right */}
              <span className="absolute inset-0 flex items-center justify-center translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                GAS KE INSTAGRAM
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================
          SECTION 2: THE TWO WORLDS (Categories)
      ======================================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              PILIH DUNIAMU
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Dua kategori, satu tujuan: ekspresikan dirimu tanpa batas
            </p>
          </motion.div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <CategoryCard
              title="STUNT"
              description="Buktikan nyalimu. Rekam aksi paling gila tanpa takut memori penuh."
              icon="⚡"
              color="red"
              delay={0.2}
            />
            <CategoryCard
              title="CORE"
              description="Simpan memori paling berharga. Tangkap momen 'Core' yang tak terlupakan."
              icon="💎"
              color="cyan"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: LIVE SOCIAL WALL (Optional)
      ======================================== */}
      {/* <section className="relative py-16 sm:py-20 md:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              GALERI AKSI
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Lihat aksi peserta lainnya
            </p>
          </motion.div>

          <InstagramSocialWall />
        </div>
      </section> */}

      {/* ========================================
          SECTION 4: GRAND PRIZE SECTION
      ======================================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="cyber-grid opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-brand-red">
              THE GRAND PRIZE
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary">
              Alat tempur kontenmu selanjutnya.
            </p>
          </motion.div>

          {/* Main Prize - iPhone 17 */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 1 }}
            className="mb-12 sm:mb-16"
          >
            <div className="max-w-2xl mx-auto card p-8 sm:p-10 md:p-12 text-center relative overflow-hidden">
              <motion.div
                animate={reducedMotion ? {} : {
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-6"
              >
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-brand-red/20 to-accent-cyan/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl">📱</div>
                </div>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-brand-red">
                iPhone 17
              </h3>
              <p className="text-base sm:text-lg text-text-secondary">
                Hadiah utama untuk satu pemenang beruntung
              </p>
            </div>
          </motion.div>

          {/* Additional Prizes Grid */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-text-primary">
              RUNNER-UP PRIZES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <PrizeCard
                icon="💾"
                title="SanDisk Phone Drive"
                description="Untuk 3 runner-up terbaik"
                delay={0.1}
              />
              <PrizeCard
                icon="📦"
                title="Phone SSD"
                description="Storage super cepat"
                delay={0.2}
              />
              <PrizeCard
                icon="🎁"
                title="Exclusive Merch"
                description="Limited edition swag"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          SECTION 5: SUBMISSION GUIDE (Steps)
      ======================================== */}
      <section id="submission-guide" className="relative py-16 sm:py-20 md:py-24 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              CARA IKUT CHALLENGE
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Mudah banget, cuma 4 langkah!
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <StepItem
              number={1}
              title="PILIH VIBE"
              description="Pilih kategori Stunt atau Core yang sesuai dengan gayamu."
              delay={0.1}
            />
            <StepItem
              number={2}
              title="RECORD"
              description="Ambil video sesuai kategori. Buat yang paling epic dan memorable!"
              delay={0.2}
            />
            <StepItem
              number={3}
              title="UPLOAD"
              description="Post ke Instagram dengan hashtag #TechShiftChallenge #NeverFearFull"
              delay={0.3}
            />
            <StepItem
              number={4}
              title="TAG"
              description="Mention @SanDiskID dan tag 3 temanmu untuk ikut challenge!"
              delay={0.4}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.5 }}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.button
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold tracking-wide uppercase bg-brand-red hover:bg-brand-red-light text-white rounded-sm shadow-glow-red-sm hover:shadow-glow-red transition-all duration-200 overflow-hidden group"
              style={{ clipPath: 'none' }}
            >
              {/* Default Text - Slides Out to Left */}
              <span className="relative transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                SUBMIT NOW
              </span>
              
              {/* Hover Text - Slides In from Right */}
              <span className="absolute inset-0 flex items-center justify-center translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                GAS KE INSTAGRAM
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ========================================
          SECTION 6: RULES & FAQ
      ======================================== */}
      <section className="relative py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
              RULES & FAQ
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Semua yang perlu kamu tahu
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* ========================================
          SECTION 7: FOOTER (Simple)
      ======================================== */}
      <footer className="relative py-12 sm:py-16 border-t border-border-subtle bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6">
            <div className="relative h-8 sm:h-10 w-auto mx-auto max-w-xs mb-4">
              <Image
                src="/images/sandisk-logo.png"
                alt="SanDisk"
                width={200}
                height={50}
                className="h-full w-auto object-contain mx-auto"
              />
            </div>
          </div>
          
          <p className="text-sm sm:text-base text-text-secondary mb-4">
            TechShift Challenge: Never Fear Full
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-text-tertiary">
            <a href="#" className="hover:text-brand-red transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Contact Us
            </a>
          </div>
          
          <p className="text-xs text-text-tertiary">
            © 2026 SanDisk. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky Back to Top Button */}
      <BackToTopButton />

      {/* Custom Red Arrow Cursor */}
      <CustomCursor />
    </div>
  );
}
