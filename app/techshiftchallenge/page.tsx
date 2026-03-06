/**
 * TECHSHIFT CHALLENGE: NEVER FEAR FULL - Landing Page
 * 
 * Campaign landing page with smooth scroll and scroll-based reveal animations
 * Following SanDisk cyber-tech design system
 */

'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import PixelDecoration from '@/components/PixelDecoration';
import CountdownTimer from './components/CountdownTimer';
import CategoryCard from './components/CategoryCard';
import PrizeCard from './components/PrizeCard';
import StepItem from './components/StepItem';
import FAQAccordion from './components/FAQAccordion';
import HallOfFameCarousel from './components/HallOfFameCarousel';
import FooterSection from './components/FooterSection';
import InstagramSocialWall from './components/InstagramSocialWall';
import BackToTopButton from './components/BackToTopButton';
import CustomCursor from './components/CustomCursor';

export default function TechShiftChallengePage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [activePrize, setActivePrize] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;
  const dragStartX = useRef(0);
  const [activeCategory, setActiveCategory] = useState<'stunt' | 'core' | null>(null);
  const twoWorldsRef = useRef<HTMLElement>(null);

  // Lock body scroll when category detail is open
  useEffect(() => {
    if (activeCategory) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [activeCategory]);

  // Scroll-based parallax for hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

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
        className="relative h-screen flex flex-col overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/header-wallpaper.jpg"
            alt="TechShift Challenge"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* Top Navigation Bar */}
        <div className="relative z-20 flex items-center justify-between px-5 sm:px-8 lg:px-16 pt-6 sm:pt-8 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.1 }}
          >
            <div className="relative h-7 sm:h-8 lg:h-10 w-auto">
              <Image
                src="/images/sandisk-logo.png"
                alt="SanDisk"
                width={160}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.2 }}
            className="text-white text-2xl leading-none"
            aria-label="Menu"
          >
            ≡
          </motion.button>
        </div>

        {/* Hero Content - left aligned, bottom anchored */}
        <motion.div
          style={reducedMotion ? {} : { opacity: heroOpacity }}
          className="relative z-20 flex-1 flex flex-col justify-end px-5 sm:px-8 lg:px-16 pb-20 sm:pb-24 lg:pb-32"
        >
          {/* Arrow Button */}
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.3 }}
            className="mb-4"
          >
            <div className="w-11 h-11 bg-brand-red flex items-center justify-center">
              <span className="text-white text-base font-bold">(→)</span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.4 }}
            className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-widest uppercase mb-1"
          >
            TECHSHIFT CHALLENGE:
          </motion.p>

          {/* Main Headline — stacked */}
          <motion.h1
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.7, delay: 0.5 }}
            className="text-[4rem] sm:text-[5.5rem] lg:text-[9rem] font-black text-white leading-none tracking-tight mb-3"
          >
            NEVER<br />FEAR<br />FULL.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.65 }}
            className="text-white/90 text-base sm:text-lg lg:text-xl font-normal mb-6"
          >
            Rekam momen aksimu, menangkan iPhone 17.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.8 }}
            className="mb-7"
          >
            <CountdownTimer endDate="2026-03-31T23:59:59" />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.95 }}
          >
            <motion.a
              href="https://forms.gle/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              className="relative inline-flex items-center justify-center px-10 lg:px-14 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold tracking-widest uppercase text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 overflow-hidden group"
            >
              <span className="relative transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                JOIN NOW
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                GAS ISI FORM
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 1.2 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center text-white/70 text-xs tracking-widest"
        >
          <p className="mb-1">[SCROLL DOWN]</p>
          <motion.p
            animate={reducedMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================
          SECTION 1.5: GRAND PRIZE
      ======================================== */}
      <section className="relative bg-white py-10 px-5 sm:px-8 lg:px-16 lg:py-20 overflow-hidden">
        <div className="lg:max-w-5xl lg:mx-auto">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
          className="flex items-center justify-between mb-8 lg:mb-12"
        >
          <div className="flex items-stretch gap-0">
            {/* Arrow badge */}
            <span className="bg-brand-red text-white text-sm lg:text-base font-bold px-3 flex items-center leading-none">
              (→)
            </span>
            {/* Title */}
            <span className="bg-black text-white text-xl sm:text-2xl lg:text-4xl font-bold px-3 flex items-center leading-none">
              Grand Prize.
            </span>
          </div>
          {/* Red square dot top-right */}
          <div className="w-4 h-4 lg:w-5 lg:h-5 bg-brand-red flex-shrink-0" />
        </motion.div>

        {/* Prize Items */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 gap-6 max-w-sm lg:max-w-none mx-auto">

          {/* Prize 1 — iPhone 17 (full width) */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6 }}
            className="relative pb-6 w-[80%] lg:w-[45%]"
          >
            <Image
              src="/images/doorprize-1.png"
              alt="iPhone 17"
              width={500}
              height={400}
              className="w-full h-auto object-contain"
            />

            {/* + Button overlapping bottom-right of image */}
            <div className="absolute bottom-8 -right-7 z-10 flex flex-col items-center">
              {/* Speech Bubble — tepat di atas tombol */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 6 }}
                animate={activePrize === 0 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mb-2 pointer-events-none"
              >
                <div className="bg-black text-white text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap relative">
                  iPhone 17
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black" />
                </div>
              </motion.div>
              <motion.button
                whileTap={reducedMotion ? {} : { scale: 0.88 }}
                onClick={() => setActivePrize(activePrize === 0 ? null : 0)}
                className="w-11 h-11 rounded-full bg-black text-white text-2xl font-bold flex items-center justify-center hover:bg-brand-red transition-colors duration-200 shadow-lg"
              >
                {activePrize === 0 ? '×' : '+'}
              </motion.button>
            </div>
          </motion.div>

          {/* Prize 2 — SanDisk Kit (smaller, right-leaning) */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, delay: 0.15 }}
            className="relative pb-6 w-[80%] ml-auto lg:w-[45%] lg:ml-0"
          >
            <Image
              src="/images/doorprize-2.png"
              alt="SanDisk Kit"
              width={400}
              height={320}
              className="w-full h-auto object-contain"
            />

            {/* + Button overlapping bottom of image */}
            <div className="absolute bottom-14 left-[22%] z-10 flex flex-col items-center">
              {/* Speech Bubble — tepat di atas tombol */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 6 }}
                animate={activePrize === 1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mb-2 pointer-events-none"
              >
                <div className="bg-black text-white text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap relative">
                  SanDisk Kit
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black" />
                </div>
              </motion.div>
              <motion.button
                whileTap={reducedMotion ? {} : { scale: 0.88 }}
                onClick={() => setActivePrize(activePrize === 1 ? null : 1)}
                className="w-11 h-11 rounded-full bg-black text-white text-2xl font-bold flex items-center justify-center hover:bg-brand-red transition-colors duration-200 shadow-lg"
              >
                {activePrize === 1 ? '×' : '+'}
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Caption */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.3 }}
          className="mt-10 lg:mt-16"
        >
          <p className="inline bg-brand-red text-white text-base sm:text-lg lg:text-2xl font-bold px-1 leading-relaxed box-decoration-clone">
            Alat tempur kontenmu <br></br>selanjutnya.
          </p>
        </motion.div>
        </div>
      </section>

      {/* ========================================
          SECTION 1.8: SUBMISSION GUIDE CAROUSEL
      ======================================== */}
      <section
        id="submission-guide"
        className="relative min-h-screen bg-brand-red select-none flex flex-col"
      >
        {/* Shared header */}
        <div className="px-5 lg:px-0 pt-6 pb-4 flex-shrink-0 lg:max-w-3xl lg:mx-auto lg:w-full">
          <div className="flex gap-[6px] mb-5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${
                  i === activeSlide ? 'bg-black' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
            (→) Submission Guide.
          </p>
        </div>

        {/* Swipeable content — flex-1 so it fills remaining height */}
        <motion.div
          className="flex-1 flex flex-col lg:max-w-3xl lg:mx-auto lg:w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={(_, info) => { dragStartX.current = info.point.x; }}
          onDragEnd={(_, info) => {
            const diff = dragStartX.current - info.point.x;
            if (diff > 50 && activeSlide < totalSlides - 1) setActiveSlide(s => s + 1);
            if (diff < -50 && activeSlide > 0) setActiveSlide(s => s - 1);
          }}
        >
          {/* ── SLIDE 1: Pilih Kategori ── */}
          {activeSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Grid centered in remaining space */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Row 1: Stunt — image 60%, text 40% */}
                <div className="grid grid-cols-[3fr_2fr] h-44 sm:h-52 lg:h-72">
                  <div className="relative overflow-hidden">
                    <Image src="/images/stunt.png" alt="Stunt" fill className="object-cover" />
                  </div>
                  {/* Stunt text cell — red dot top-right */}
                  <div className="relative bg-white flex items-center justify-center">
                    <div className="absolute top-2 right-2 w-3 h-3 bg-brand-red" />
                    <span className="text-brand-red text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                      Stunt.
                    </span>
                  </div>
                </div>

                {/* Gap row */}
                <div className="h-2 bg-brand-red" />

                {/* Row 2: Core — text 40%, image 60% */}
                <div className="grid grid-cols-[2fr_3fr] h-44 sm:h-52 lg:h-72">
                  {/* Core text cell — red dot top-left */}
                  <div className="relative bg-white flex items-center justify-center">
                    <div className="absolute top-2 left-2 w-3 h-3 bg-brand-red" />
                    <span className="text-brand-red text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                      Core.
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image src="/images/core.png" alt="Core" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Footer — pushed to bottom */}
              <div className="px-5 pt-5 pb-3 flex-shrink-0">
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
                  Pilih VIBE-MU: Pilih kategori Stunt atau Core.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 2: Record ── */}
          {activeSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="flex-1 bg-[#D9D9D9]" />
              {/* Footer */}
              <div className="px-5 pt-5 pb-3 flex-shrink-0">
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
                  1. Record: Ambil video sesuai kategori (Stunt/Core).
                </p>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 3: Upload ── */}
          {activeSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 bg-[#D9D9D9]" />
              <div className="px-5 pt-5 pb-3 flex-shrink-0">
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
                  2. Upload: Post ke Instagram dengan hashtag #TechShiftChallenge #NeverFearFull.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 4: Tag ── */}
          {activeSlide === 3 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 bg-[#D9D9D9]" />
              <div className="px-5 pt-5 pb-3 flex-shrink-0">
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
                  3. Tag: Mention @SanDiskID dan 3 temanmu.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 5: placeholder ── */}
          {activeSlide === 4 && (
            <motion.div
              key="slide-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 bg-[#D9D9D9]" />
              <div className="px-5 pt-5 pb-3 flex-shrink-0">
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold leading-snug">
                  4. Menangkan hadiah!
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Swipe nav — always at bottom */}
        <div className="flex justify-between items-center px-5 py-4 flex-shrink-0 lg:max-w-3xl lg:mx-auto lg:w-full">
          <button
            onClick={() => setActiveSlide(s => Math.max(0, s - 1))}
            className={`text-white/60 text-sm transition-opacity ${activeSlide === 0 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            ← Prev
          </button>
          <p className="text-white/40 text-xs tracking-widest">SWIPE</p>
          <button
            onClick={() => setActiveSlide(s => Math.min(totalSlides - 1, s + 1))}
            className={`text-white/60 text-sm transition-opacity ${activeSlide === totalSlides - 1 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            Next →
          </button>
        </div>
      </section>

      {/* ========================================
          SECTION 2: THE TWO WORLDS (Categories)
      ======================================== */}
      <section ref={twoWorldsRef} className="relative bg-black min-h-screen flex flex-col overflow-hidden">

        {/* ── BASE VIEW: two stacked cards ── */}
        <AnimatePresence>
          {!activeCategory && (
            <motion.div
              key="base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-between py-10 px-4 lg:px-16 lg:py-16"
            >
              {/* Title */}
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-8">
                (→) The Two Worlds.
              </p>

              {/* Cards area — stacked mobile, side-by-side desktop */}
              <div className="flex flex-col lg:flex-row flex-1 justify-center -mx-4 lg:mx-0 lg:gap-4">
                {/* STUNT card */}
                <motion.button
                  className="relative w-full lg:w-1/2 h-[28vh] lg:h-[55vh] overflow-hidden block"
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveCategory('stunt')}
                >
                  <Image src="/images/stunt-category.jpg" alt="Stunt" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute top-4 left-4 text-left">
                    <p className="text-[9px] lg:text-[11px] font-bold tracking-widest text-white bg-brand-red px-2 py-0.5 inline-block">
                      CHALLENGE CATEGORIES
                    </p>
                    <br />
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none bg-brand-red px-2 py-0.5 inline-block mt-1">
                      STUNT.
                    </h3>
                  </div>
                </motion.button>

                {/* CORE card */}
                <motion.button
                  className="relative w-full lg:w-1/2 h-[28vh] lg:h-[55vh] overflow-hidden block"
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveCategory('core')}
                >
                  <Image src="/images/core-category.jpg" alt="Core" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute top-4 left-4 text-left">
                    <p className="text-[9px] lg:text-[11px] font-bold tracking-widest text-white bg-brand-red px-2 py-0.5 inline-block">
                      CHALLENGE CATEGORIES
                    </p>
                    <br />
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none bg-brand-red px-2 py-0.5 inline-block mt-1">
                      CORE.
                    </h3>
                  </div>
                </motion.button>
              </div>

              {/* Bottom spacer */}
              <div className="h-16" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── DETAIL VIEW: zoomed in ── */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              key={`detail-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-50 flex lg:items-center lg:justify-center"
            >
              {/* Full-screen blurred bg */}
              <div className="absolute inset-0">
                <Image
                  src={activeCategory === 'stunt' ? '/images/stunt.png' : '/images/core.png'}
                  alt={activeCategory}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              </div>

              {/* Constrained card on desktop */}
              <div className="relative z-10 w-full h-full flex flex-col lg:w-[700px] lg:h-auto lg:min-h-[80vh] lg:rounded-2xl lg:overflow-hidden lg:shadow-2xl">

                {/* Red pixel dots — top-right */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-brand-red z-20" />

                {/* Back button */}
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setTimeout(() => {
                      twoWorldsRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
                    }, 50);
                  }}
                  className="absolute top-4 left-4 z-20 text-white text-sm font-bold flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full"
                >
                  ← Back
                </button>

                {/* Content — bottom half */}
                <div className="flex-1 flex flex-col justify-end pb-4 px-5 lg:px-8 lg:pb-8">
                  {/* Label + Title */}
                  <div className="mb-4">
                    <p className="text-[10px] font-bold tracking-widest text-white bg-brand-red px-2 py-0.5 inline-block mb-1">
                      CHALLENGE CATEGORIES
                    </p>
                    <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none bg-brand-red px-2 inline-block">
                      {activeCategory === 'stunt' ? 'STUNT.' : 'CORE.'}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-white text-xl sm:text-2xl font-bold leading-snug mb-4">
                    {activeCategory === 'stunt'
                      ? 'Buktikan nyalimu. Rekam aksi paling gila tanpa takut memori penuh.'
                      : "Simpan memori paling berharga. Tangkap momen 'Core' yang tak terlupakan."}
                  </p>

                  {/* Body text */}
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-6">
                    {activeCategory === 'stunt'
                      ? 'Rekam setiap aksi ekstrem, parkour, skateboard, atau tantangan seru lainnya. Simpan momen berani kamu tanpa batas dengan SanDisk Phone Drive.'
                      : 'Abadikan momen berharga bersama orang tersayang. Setiap foto dan video punya cerita. Jangan biarkan storage penuh menghentikanmu.'}
                  </p>

                  {/* Red square dots row */}
                  <div className="flex gap-3 mb-5">
                    <div className="w-4 h-4 bg-brand-red" />
                    <div className="w-4 h-4 bg-brand-red" />
                    <div className="w-4 h-4 bg-brand-red" />
                  </div>
                </div>

                {/* Bottom tab — switch category */}
                <button
                  onClick={() => setActiveCategory(activeCategory === 'stunt' ? 'core' : 'stunt')}
                  className="w-full bg-brand-red py-4 text-white text-xs font-black tracking-widest text-center uppercase"
                >
                  CHALLENGE CATEGORIES — {activeCategory === 'stunt' ? 'CORE' : 'STUNT'} →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ========================================
          SECTION 3: SYARAT DAN KETENTUAN
      ======================================== */}
      <section className="bg-white px-6 lg:px-0 py-10 lg:py-20">
        <div className="lg:max-w-4xl lg:mx-auto">
        {/* Header */}
        <p className="text-black text-base lg:text-2xl font-bold tracking-tight mb-6 lg:mb-10">(→) Syarat dan Ketentuan.</p>

        {/* Items */}
        {[
          {
            num: '01.',
            title: 'Umur',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
          },
          {
            num: '02.',
            title: 'Durasi Video',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
          },
          {
            num: '03.',
            title: 'Kualitas Video',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
          },
          {
            num: '04.',
            title: 'Periode Penjurian',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
          },
        ].map((item, i) => (
          <div key={i}>
            <div className="h-px bg-black/15 mb-6" />
            <div className="grid grid-cols-[3rem_1fr] lg:grid-cols-[5rem_1fr] gap-x-4 lg:gap-x-8 mb-6 lg:mb-10">
              <span className="text-sm lg:text-base font-bold text-black pt-0.5">{item.num}</span>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm lg:text-base text-black/70 leading-relaxed">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
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
          SECTION 6: RULES & FAQ
      ======================================== */}
      <section className="bg-black px-6 lg:px-0 py-10 lg:py-20">
        <div className="lg:max-w-4xl lg:mx-auto">
          <p className="text-white text-base lg:text-2xl font-bold tracking-tight mb-14 lg:mb-16">(→) FAQ</p>
          <FAQAccordion />
        </div>
      </section>

      {/* ========================================
          SECTION 7: HALL OF FAME
      ======================================== */}
      <HallOfFameCarousel />

      {/* ========================================
          SECTION 8: FOOTER
      ======================================== */}
      <FooterSection />

      {/* Custom Red Arrow Cursor */}
      <CustomCursor />
    </div>
  );
}
