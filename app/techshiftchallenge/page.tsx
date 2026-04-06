/**
 * TECHSHIFT CHALLENGE: NEVER FEAR FULL - Landing Page
 * 
 * Campaign landing page with smooth scroll and scroll-based reveal animations
 * Following SanDisk cyber-tech design system
 */

'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import CountdownTimer from './components/CountdownTimer';
import FAQAccordion from './components/FAQAccordion';
import HallOfFameCarousel from './components/HallOfFameCarousel';
import FooterSection from './components/FooterSection';
import LeaderboardSection from './components/LeaderboardSection';
import CustomCursor from './components/CustomCursor';
import { WINNERS_ENABLED } from './config';

export default function TechShiftChallengePage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll-based parallax for hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [activeHowSlide, setActiveHowSlide] = useState(0);
  const howDragStartX = useRef(0);
  const HOW_SLIDES = 4;
  const slide0Ref = useRef<HTMLDivElement>(null);
  const [slideContainerHeight, setSlideContainerHeight] = useState<number | undefined>(undefined);

  const [activePrize, setActivePrize] = useState(0);

  useEffect(() => {
    if (slide0Ref.current) {
      setSlideContainerHeight(slide0Ref.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* ========================================
          SECTION 1: HERO SECTION
      ======================================== */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col overflow-hidden"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          {/* Mobile video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="lg:hidden absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/video/vertical_vid.mp4" type="video/mp4" />
          </video>
          {/* Desktop video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/video/horizontal_vid.mp4" type="video/mp4" />
          </video>
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.2 }}
            className="w-5 h-5 bg-brand-red flex-shrink-0"
          />
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
            className="text-white text-sm sm:text-base lg:text-[3rem] font-bold tracking-widest uppercase mb-1"
          >
            TECH SHIFT CHALLENGE:
          </motion.p>

          {/* Main Headline — stacked mobile, single line desktop */}
          <motion.h1
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.7, delay: 0.5 }}
            className="text-[4rem] sm:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-black text-white leading-none tracking-tight mb-3 lg:whitespace-nowrap"
          >
            <span className="lg:hidden">NEVER<br />FEAR<br />FULL.</span>
            <span className="hidden lg:inline">NEVER FEAR FULL.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.65 }}
            className="text-white/90 text-lg sm:text-xl lg:text-[2.5rem] font-medium mb-6"
          >
            Bagikan momen aksimu, raih <span className="lg:hidden"><br /></span>kesempatan menang iPhone 17 Pro!
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.8 }}
            className="mb-7"
          >
            <p className="text-white text-sm font-medium mb-3">Kontes berakhir dalam:</p>
            <CountdownTimer />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.95 }}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3PgL7y-_17-W0LkvlrI8piw42czgvCx3V9JI-KtIklS94CQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reducedMotion ? {} : { scale: 1.03 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              className="relative inline-flex items-center justify-center px-10 lg:px-14 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold tracking-widest uppercase text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 overflow-hidden group"
            >
              <span className="relative transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                IKUT SEKARANG
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
          SECTION 1.5: HADIAH / PRIZE LIST
      ======================================== */}
      <section className="relative bg-white overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0.1 : 0.6 }}
          className="px-5 sm:px-8 lg:px-16 pt-10 sm:pt-14 lg:pt-20 pb-8 sm:pb-10 lg:max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black uppercase tracking-tight leading-tight mb-3">
            HADIAH SERU MENANTI!
          </h2>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed">
            Setiap minggu dipilih 6 pemenang untuk memenangkan voucher belanja dan masuk ke final Grand Prize. Di final, akan dipilih 6 pemenang utama.
          </p>
        </motion.div>

        {(() => {
          const prizes = [
            { label: 'WEEKLY WINNER', desc: 'Voucher Rp 750.000,-', src: '/images/weekly-prize.png', alt: 'Weekly Prize', note: '*Gambar hadiah hanya ditunjukan sebagai ilustrasi.' },
            { label: 'GRAND PRIZE', desc: 'iPhone 17 Pro, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/grand-prize.png', alt: 'Grand Prize', note: '*Gambar hadiah hanya ditunjukan sebagai ilustrasi.' },
            { label: 'SECOND PRIZE', desc: 'Garmin Smartwatch, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/second-prize.png', alt: 'Second Prize', note: '*Gambar hadiah hanya ditunjukan sebagai ilustrasi.' },
            { label: 'THIRD PRIZE', desc: 'Bose Ultra Open Earbuds, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/thrid-prize.png', alt: 'Third Prize', note: '*Gambar hadiah hanya ditunjukan sebagai ilustrasi.' },
          ];
          const prize = prizes[activePrize];
          return (
            <>
              {/* Mobile — stacked */}
              <div className="lg:hidden">
                {prizes.map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: reducedMotion ? 0.1 : 0.65, delay: reducedMotion ? 0 : i * 0.05 }}
                    className="border-t border-black/10 px-5 sm:px-8 pt-8 pb-16"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg font-black text-black uppercase tracking-wide">{p.label}</span>
                      <div className="w-4 h-4 bg-brand-red flex-shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-black font-normal mb-6 max-w-xs">{p.desc}</p>
                    <div className="w-full max-w-xs">
                      <Image src={p.src} alt={p.alt} width={400} height={320} className="w-full h-auto object-contain" />
                    </div>
                    {p.note && <p className="text-xs text-black font-bold mt-3">{p.note}</p>}
                  </motion.div>
                ))}
              </div>

              {/* Desktop — fixed height slider, label+desc top-left, large centered image */}
              <div className="hidden lg:block border-t border-black/10">
                <div className="relative px-16 pt-10 h-[760px] flex flex-col">
                  <motion.div
                    key={activePrize}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col h-full"
                  >
                    {/* Label + desc top-left */}
                    <div className="mb-6 flex-shrink-0">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl font-black text-black uppercase tracking-wide">{prize.label}</span>
                        <div className="w-4 h-4 bg-brand-red flex-shrink-0" />
                      </div>
                      <p className="text-2xl text-black font-normal max-w-2xl">{prize.desc}</p>
                    </div>

                    {/* Large centered image */}
                    <div className="flex-1 flex items-center justify-center min-h-0">
                      <div className="w-[720px] h-[540px] relative">
                        <Image src={prize.src} alt={prize.alt} fill className="object-contain" />
                      </div>
                    </div>

                    {prize.note && <p className="text-sm text-black font-bold pb-2 flex-shrink-0">{prize.note}</p>}
                  </motion.div>
                </div>

                {/* Nav arrows — bottom right */}
                <div className="flex justify-end gap-2 px-16 pb-10">
                  <button
                    onClick={() => setActivePrize(p => Math.max(0, p - 1))}
                    disabled={activePrize === 0}
                    className="w-16 h-16 border border-black/20 flex items-center justify-center text-black font-bold text-2xl hover:bg-black hover:text-white transition-colors disabled:opacity-30"
                  >←</button>
                  <button
                    onClick={() => setActivePrize(p => Math.min(prizes.length - 1, p + 1))}
                    disabled={activePrize === prizes.length - 1}
                    className="w-16 h-16 border border-black/20 flex items-center justify-center text-black font-bold text-2xl hover:bg-black hover:text-white transition-colors disabled:opacity-30"
                  >→</button>
                </div>
              </div>
            </>
          );
        })()}
      </section>


      {/* ========================================
          SECTION 2: CARA IKUT KESERUANNYA
      ======================================== */}
      <section className="relative bg-brand-red select-none overflow-hidden">

        {/* ── MOBILE ── */}
        <div className="lg:hidden flex flex-col min-h-screen">
          {/* Progress bar */}
          <div className="flex gap-1.5 px-5 pt-5 pb-4">
            {Array.from({ length: HOW_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHowSlide(i)}
                className={`h-[3px] flex-1 transition-colors duration-300 ${i === activeHowSlide ? 'bg-black' : 'bg-white/40'}`}
              />
            ))}
          </div>

          {/* Header row */}
          <div className="flex items-center justify-between px-5 mb-5">
            <span className="bg-black text-white text-lg sm:text-xl font-black px-3 py-2 uppercase tracking-wide">
              CARA IKUT KESERUANNYA
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))}
                disabled={Number(activeHowSlide) === 0}
                className="w-7 h-7 border border-white flex items-center justify-center text-white text-xs hover:bg-white hover:text-black transition-colors disabled:opacity-40"
              >←</button>
              <button
                onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))}
                disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                className="w-7 h-7 border border-white flex items-center justify-center text-white text-xs hover:bg-white hover:text-black transition-colors disabled:opacity-40"
              >→</button>
            </div>
          </div>

          {/* Swipeable slides */}
          <motion.div
            className="flex-1 h-full"
            style={{ minHeight: slideContainerHeight }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragStart={(_, info) => { howDragStartX.current = info.point.x; }}
            onDragEnd={(_, info) => {
              const diff = howDragStartX.current - info.point.x;
              if (diff > 50 && activeHowSlide < HOW_SLIDES - 1) setActiveHowSlide(s => s + 1);
              if (diff < -50 && activeHowSlide > 0) setActiveHowSlide(s => s - 1);
            }}
          >
            {activeHowSlide === 0 && (
              <motion.div key="how-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                ref={slide0Ref}
                className="px-5 pt-4 pb-10 flex flex-col items-center"
              >
                <div className="flex items-start gap-3 mb-6 w-full">
                  <div className="bg-black px-2 py-1 flex-shrink-0">
                    <span className="text-white text-base font-black leading-none">1.</span>
                  </div>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Pilih template favoritmu dan kreasikan momenmu</p>
                </div>
                <div className="mb-3 w-full">
                  <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                    <div className="absolute top-3 left-3 z-10">
                      <p className="text-white text-sm font-black leading-none uppercase">AKSI STUNT KEREN</p>
                      <p className="text-white/80 text-xs font-medium">dengan transisi heboh</p>
                    </div>
                    <Image src="/images/how-1.jpeg" alt="Aksi Stunt Keren" fill className="object-cover object-center" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <a href="https://www.capcut.com/tv2/ZSHjD7jwR/" target="_blank" rel="noopener noreferrer"
                        className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                        COBA DI CAPCUT
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-6 w-full">
                  <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                    <div className="absolute top-3 left-3 z-10">
                      <p className="text-white text-sm font-black leading-none uppercase">MOMEN RANDOM</p>
                      <p className="text-white/80 text-xs font-medium">spontan tapi lucu</p>
                    </div>
                    <Image src="/images/how-2.jpeg" alt="Momen Random" fill className="object-cover object-center" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <a href="https://www.capcut.com/tv2/ZSHUT1S74/" target="_blank" rel="noopener noreferrer"
                        className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                        COBA DI CAPCUT
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1UrmVWvr5CUkWBy3KpGD9l5lpgzpsHmYl/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="text-white text-sm font-normal underline underline-offset-4 hover:text-black transition-colors duration-200 mt-auto pt-4 w-full">
                  (→) Baca Syarat &amp; Ketentuan
                </a>
              </motion.div>
            )}
            {activeHowSlide === 1 && (
              <motion.div key="how-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="px-5 pt-4 pb-10 flex flex-col">
                <div className="relative w-full aspect-[9/16] rounded-sm overflow-hidden mb-5">
                  <Image src="/images/slide-2.jpeg" alt="Gunakan lagu resmi Sandisk Challenge" fill className="object-cover object-top" />
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">2.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Gunakan lagu resmi Sandisk Challenge sesuai template yang dipilih, baik untuk aksi seru maupun momen lucu.</p>
                </div>
              </motion.div>
            )}
            {activeHowSlide === 2 && (
              <motion.div key="how-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="px-5 pt-4 pb-10 flex flex-col">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden mb-5">
                  <Image src="/images/slide-3.png" alt="Post videomu di TikTok" fill className="object-cover" />
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">3.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Post videomu di TikTok dengan hashtag #sandisktechshiftid , tag @sandiskindonesia pastikan akunmu tidak private.</p>
                </div>
              </motion.div>
            )}
            {activeHowSlide === 3 && (
              <motion.div key="how-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="px-5 pt-4 pb-10 flex flex-col">
                <div className="relative w-full aspect-square rounded-sm overflow-hidden mb-5">
                  <Image src="/images/form.jpeg" alt="Google Form Sandisk Challenge" fill className="object-cover object-center" />
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">04.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Langkah terakhir! Klik tombol "Ikuti Sekarang" di halaman utama untuk melakukan registrasi</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {activeHowSlide > 0 && (
            <div className="absolute bottom-0 right-[-10%] w-[75%] h-36 pointer-events-none">
              <Image src="/images/eclipse.png" alt="" fill className="object-contain object-right" />
            </div>
          )}
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden lg:flex flex-col h-screen relative">

          {/* Progress bars */}
          <div className="flex gap-1.5 px-16 pt-6 pb-4 flex-shrink-0">
            {Array.from({ length: HOW_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHowSlide(i)}
                className={`h-[3px] flex-1 transition-colors duration-300 ${i === activeHowSlide ? 'bg-black' : 'bg-white/40'}`}
              />
            ))}
          </div>

          {/* Slide content */}
          <div className="flex-1 relative overflow-hidden">

            {/* Nav arrows — always visible, overlay all slides */}
            <div className="absolute bottom-10 right-16 flex gap-1 z-20">
              <button onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))} disabled={Number(activeHowSlide) === 0}
                className="w-20 h-20 border border-white/40 flex items-center justify-center text-white text-2xl hover:bg-white hover:text-black transition-colors disabled:opacity-20">←</button>
              <button onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))} disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                className="w-20 h-20 border border-white/40 flex items-center justify-center text-white text-2xl hover:bg-white hover:text-black transition-colors disabled:opacity-20">→</button>
            </div>

            <AnimatePresence mode="wait">

              {/* ── Slide 1 ── */}
              {activeHowSlide === 0 && (
                <motion.div key="d-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex">

                  {/* LEFT: text block, bottom-aligned */}
                  <div className="w-[340px] 2xl:w-[520px] flex-shrink-0 flex flex-col justify-end px-16 pb-10 overflow-visible">
                    {/* Title block */}
                    <div className="bg-black px-5 py-4 mb-6 w-full">
                      <p className="text-white text-4xl 2xl:text-5xl font-black uppercase leading-tight tracking-tight">
                        CARA IKUT<br />KESERUANNYA
                      </p>
                    </div>
                    {/* Step row */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-black px-4 py-3 flex-shrink-0">
                        <span className="text-white text-3xl font-black">1.</span>
                      </div>
                      <p className="text-white text-3xl 2xl:text-4xl font-semibold leading-snug pt-1">
                        Pilih template favoritmu dan kreasikan momenmu
                      </p>
                    </div>
                    {/* Link */}
                    <a href="https://placeholder-syarat-ketentuan.com" target="_blank" rel="noopener noreferrer"
                      className="text-white text-base font-bold underline underline-offset-4 hover:text-black transition-colors mb-6">
                      (→) Baca Syarat &amp; Ketentuan
                    </a>
                    {/* Square below link */}
                    <div className="w-4 h-4 bg-black flex-shrink-0" />
                  </div>

                  {/* RIGHT: two cards */}
                  <div className="flex-1 min-h-0 pr-16 flex items-center justify-center">

                    {/* Cards — tops aligned via items-start, group centered */}
                    <div className="flex items-start gap-4">
                      {/* Card 1 — portrait, scales with vw capped by vh */}
                      <div
                        className="relative overflow-hidden flex-shrink-0 w-[clamp(200px,20vw,560px)] 2xl:w-[clamp(280px,26vw,680px)]"
                        style={{ aspectRatio: '300 / 424', maxHeight: '72vh' }}
                      >
                        <div className="absolute top-4 left-4 z-10">
                          <p className="text-white text-sm font-black uppercase leading-none">AKSI STUNT KEREN</p>
                          <p className="text-white/80 text-xs font-medium mt-0.5">dengan transisi heboh</p>
                        </div>
                        <Image src="/images/how-1.jpeg" alt="Aksi Stunt Keren" fill className="object-cover object-center" />
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <a href="https://www.capcut.com/tv2/ZSHjD7jwR/" target="_blank" rel="noopener noreferrer"
                            className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                            COBA DI CAPCUT
                          </a>
                        </div>
                      </div>
                      {/* Card 2 — square, scales with vw capped by vh */}
                      <div
                        className="relative overflow-hidden flex-shrink-0 w-[clamp(140px,13vw,360px)] 2xl:w-[clamp(200px,18vw,440px)]"
                        style={{ aspectRatio: '1 / 1', maxHeight: '47vh' }}
                      >
                        <div className="absolute -top-6 right-0 w-4 h-4 bg-black z-10" />
                        <div className="absolute top-4 left-4 z-10">
                          <p className="text-white text-sm font-black uppercase leading-none">MOMEN RANDOM</p>
                          <p className="text-white/80 text-xs font-medium mt-0.5">spontan tapi lucu</p>
                        </div>
                        <Image src="/images/how-2.jpeg" alt="Momen Random" fill className="object-cover object-center" />
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <a href="https://www.capcut.com/tv2/ZSHUT1S74/" target="_blank" rel="noopener noreferrer"
                            className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                            COBA DI CAPCUT
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>

                </motion.div>
              )}

              {/* ── Slide 2 ── */}
              {activeHowSlide === 1 && (
                <motion.div key="d-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex">

                  {/* LEFT: text bottom-aligned */}
                  <div className="w-[520px] 2xl:w-[640px] flex-shrink-0 flex flex-col justify-end px-16 pb-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-black px-4 py-3 flex-shrink-0">
                        <span className="text-white text-3xl 2xl:text-4xl font-black">2.</span>
                      </div>
                      <p className="text-white text-4xl 2xl:text-5xl font-semibold leading-snug pt-1">
                        Gunakan lagu resmi Sandisk Challenge sesuai template yang dipilih, baik untuk aksi seru maupun momen lucu.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: image + nav */}
                  <div className="flex-1 flex flex-col min-h-0 pt-4 pb-10 pr-16">
                    <div className="flex-1 flex items-stretch justify-center min-h-0">
                      <div className="relative h-full aspect-[9/16] overflow-hidden">
                        <Image src="/images/slide-2.jpeg" alt="Gunakan lagu resmi Sandisk Challenge" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Slide 3 ── */}
              {activeHowSlide === 2 && (
                <motion.div key="d-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex">

                  {/* LEFT: text bottom-aligned */}
                  <div className="w-[520px] 2xl:w-[640px] flex-shrink-0 flex flex-col justify-end px-16 pb-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-black px-4 py-3 flex-shrink-0">
                        <span className="text-white text-3xl 2xl:text-4xl font-black">3.</span>
                      </div>
                      <p className="text-white text-4xl 2xl:text-5xl font-semibold leading-snug pt-1">
                        Post videomu di TikTok dengan hashtag #sandisktechshiftid, tag @sandiskindonesia, pastikan akunmu tidak private.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: image + nav */}
                  <div className="flex-1 flex flex-col min-h-0 pt-4 pb-10 pr-16">
                    <div className="flex-1 flex items-stretch justify-center min-h-0">
                      <div className="relative h-full aspect-[4/5] overflow-hidden">
                        <Image src="/images/slide-3.png" alt="Post videomu di TikTok" fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Slide 4 ── */}
              {activeHowSlide === 3 && (
                <motion.div key="d-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex">

                  {/* LEFT: text bottom-aligned */}
                  <div className="w-[520px] 2xl:w-[640px] flex-shrink-0 flex flex-col justify-end px-16 pb-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-black px-4 py-3 flex-shrink-0">
                        <span className="text-white text-3xl 2xl:text-4xl font-black">04.</span>
                      </div>
                      <p className="text-white text-4xl 2xl:text-5xl font-semibold leading-snug pt-1">
                        Langkah terakhir! Klik tombol "Ikuti Sekarang" di halaman utama untuk melakukan registrasi
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: image + nav */}
                  <div className="flex-1 flex flex-col min-h-0 pt-4 pb-10 pr-16">
                    <div className="flex-1 flex items-stretch justify-center min-h-0">
                      <div className="relative h-full aspect-[3/4] overflow-hidden">
                        <Image src="/images/form.jpeg" alt="Google Form Sandisk Challenge" fill className="object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: FAQ
      ======================================== */}
      <section className="bg-white px-6 lg:px-0 py-10 lg:py-20">
        <div className="lg:max-w-4xl lg:mx-auto">
          <p className="text-black text-xl lg:text-3xl font-black tracking-tight mb-10 lg:mb-14">(→) FAQ</p>
          <FAQAccordion />
          <div className="h-px bg-black/15 mt-6 mb-8" />
          <a
            href="https://drive.google.com/file/d/1UrmVWvr5CUkWBy3KpGD9l5lpgzpsHmYl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-base lg:text-lg font-bold underline underline-offset-4 hover:text-brand-red transition-colors duration-200"
          >
            (→) Baca Syarat &amp; Ketentuan
          </a>
        </div>
      </section>

      {/* ========================================
          SECTION 7: HALL OF FAME
      ======================================== */}
      {WINNERS_ENABLED && <HallOfFameCarousel />}

      {/* ========================================
          SECTION 8: LEADERBOARD
      ======================================== */}
      <LeaderboardSection />

      {/* ========================================
          SECTION 9: FOOTER
      ======================================== */}
      <FooterSection />

      {/* Custom Red Arrow Cursor */}
      <CustomCursor />
    </div>
  );
}
