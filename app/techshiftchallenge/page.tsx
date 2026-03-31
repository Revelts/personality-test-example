/**
 * TECHSHIFT CHALLENGE: NEVER FEAR FULL - Landing Page
 * 
 * Campaign landing page with smooth scroll and scroll-based reveal animations
 * Following SanDisk cyber-tech design system
 */

'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import CountdownTimer from './components/CountdownTimer';
import FAQAccordion from './components/FAQAccordion';
import HallOfFameCarousel from './components/HallOfFameCarousel';
import FooterSection from './components/FooterSection';
import LeaderboardSection from './components/LeaderboardSection';
import CustomCursor from './components/CustomCursor';

export default function TechShiftChallengePage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll-based parallax for hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [activeHowSlide, setActiveHowSlide] = useState(0);
  const howDragStartX = useRef(0);
  const HOW_SLIDES = 3;

  const [activePrize, setActivePrize] = useState(0);

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
            className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-widest uppercase mb-1"
          >
            TECH SHIFT CHALLENGE:
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
            className="text-white/90 text-lg sm:text-xl lg:text-4xl font-medium mb-6"
          >
            Bagikan momen aksimu, raih <br></br>kesempatan menang iPhone 17!
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
            { label: 'WEEKLY WINNER', desc: 'Voucher Rp 750.000,-', src: '/images/weekly-prize.png', alt: 'Weekly Prize', note: null },
            { label: 'GRAND PRIZE', desc: 'iPhone 17, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/grand-prize.png', alt: 'Grand Prize', note: '*Gambar hadiah hanya ditunjukan sebagai ilustrasi.' },
            { label: 'SECOND PRIZE', desc: 'Garmin Smartwatch, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/second-prize.png', alt: 'Second Prize', note: null },
            { label: 'THIRD PRIZE', desc: 'Bose Ultra Open Earbuds, SANDISK® Phone Drive 256GB & merchandise eksklusif Sandisk', src: '/images/thrid-prize.png', alt: 'Third Prize', note: null },
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
                    className="border-t border-black/10 px-5 sm:px-8 pt-8 pb-10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base sm:text-lg font-black text-black uppercase tracking-wide">{p.label}</span>
                      <div className="w-4 h-4 bg-brand-red flex-shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-black font-bold mb-6 max-w-xs">{p.desc}</p>
                    <div className="w-full max-w-xs">
                      <Image src={p.src} alt={p.alt} width={400} height={320} className="w-full h-auto object-contain" />
                    </div>
                    {p.note && <p className="text-xs text-black font-bold mt-3">{p.note}</p>}
                  </motion.div>
                ))}
              </div>

              {/* Desktop — fixed height slider, label+desc top-left, large centered image */}
              <div className="hidden lg:block border-t border-black/10">
                <div className="relative px-16 pt-10 h-[600px] flex flex-col">
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
                        <span className="text-2xl font-black text-black uppercase tracking-wide">{prize.label}</span>
                        <div className="w-4 h-4 bg-brand-red flex-shrink-0" />
                      </div>
                      <p className="text-lg text-black font-bold max-w-lg">{prize.desc}</p>
                    </div>

                    {/* Large centered image */}
                    <div className="flex-1 flex items-center justify-center min-h-0">
                      <div className="w-[560px] h-[420px] relative">
                        <Image src={prize.src} alt={prize.alt} fill className="object-contain" />
                      </div>
                    </div>

                    {prize.note && <p className="text-xs text-black font-bold pb-2 flex-shrink-0">{prize.note}</p>}
                  </motion.div>
                </div>

                {/* Nav arrows — bottom right */}
                <div className="flex justify-end gap-1 px-16 pb-10">
                  <button
                    onClick={() => setActivePrize(p => Math.max(0, p - 1))}
                    disabled={activePrize === 0}
                    className="w-10 h-10 border border-black/20 flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-30"
                  >←</button>
                  <button
                    onClick={() => setActivePrize(p => Math.min(prizes.length - 1, p + 1))}
                    disabled={activePrize === prizes.length - 1}
                    className="w-10 h-10 border border-black/20 flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-30"
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
        <div className="lg:hidden h-screen flex flex-col overflow-hidden">
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
            <span className="bg-black text-white text-sm sm:text-base font-black px-3 py-2 uppercase tracking-wide">
              CARA IKUT KESERUANNYA
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))}
                disabled={Number(activeHowSlide) === 0}
                className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40"
              >←</button>
              <button
                onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))}
                disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40"
              >→</button>
            </div>
          </div>

          {/* Swipeable slides */}
          <motion.div
            className="flex-1 overflow-hidden h-full"
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
                className="px-5 pt-4 pb-10 flex flex-col items-center min-h-[calc(100vh-120px)]"
              >
                <div className="flex items-start gap-3 mb-10 w-full">
                  <span className="text-black text-2xl font-black leading-none">01.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Pilih template favoritmu dan kreasikan momenmu</p>
                </div>
                <div className="mb-3 w-full">
                  <div className="relative w-full h-[280px] overflow-hidden rounded-sm">
                    <div className="absolute top-3 left-3 z-10">
                      <p className="text-white text-sm font-black leading-none uppercase">AKSI STUNT KEREN</p>
                      <p className="text-white/80 text-xs font-medium">dengan transisi heboh</p>
                    </div>
                    <Image src="/images/how-1.png" alt="Aksi Stunt Keren" fill className="object-cover object-center" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <a href="https://placeholder-capcut-template-1.com" target="_blank" rel="noopener noreferrer"
                        className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                        COBA DI CAPCUT
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-8 w-full">
                  <div className="relative w-full h-[280px] overflow-hidden rounded-sm">
                    <div className="absolute top-3 left-3 z-10">
                      <p className="text-white text-sm font-black leading-none uppercase">MOMEN RANDOM</p>
                      <p className="text-white/80 text-xs font-medium">spontan tapi lucu</p>
                    </div>
                    <Image src="/images/how-2.png" alt="Momen Random" fill className="object-cover object-center" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <a href="https://placeholder-capcut-template-2.com" target="_blank" rel="noopener noreferrer"
                        className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                        COBA DI CAPCUT
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://placeholder-syarat-ketentuan.com" target="_blank" rel="noopener noreferrer"
                  className="text-white text-lg sm:text-xl font-bold underline underline-offset-4 hover:text-black transition-colors duration-200 mt-auto pt-8 w-full">
                  (→) Baca Syarat &amp; Ketentuan
                </a>
              </motion.div>
            )}
            {activeHowSlide === 1 && (
              <motion.div key="how-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="h-full px-5 pb-44 flex flex-col">
                <div className="flex-1 relative rounded-sm overflow-hidden mb-5 min-h-0">
                  <Image src="/images/slide-2.jpeg" alt="Gunakan lagu resmi Sandisk Challenge" fill className="object-cover" />
                </div>
                <div className="flex items-start gap-3 flex-shrink-0 relative z-10">
                  <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">02.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Gunakan lagu resmi Sandisk Challenge sesuai template yang dipilih, baik untuk aksi seru maupun momen lucu.</p>
                </div>
              </motion.div>
            )}
            {activeHowSlide === 2 && (
              <motion.div key="how-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
                className="h-full px-5 pb-44 flex flex-col">
                <div className="flex-1 relative rounded-sm overflow-hidden mb-5 min-h-0">
                  <Image src="/images/slide-3.png" alt="Post videomu di TikTok" fill className="object-cover" />
                </div>
                <div className="flex items-start gap-3 flex-shrink-0 relative z-10">
                  <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">03.</span>
                  <p className="text-white text-base sm:text-lg font-bold leading-snug">Post videomu di TikTok dengan hashtag #sandisktechshiftid , tag @sandiskindonesia pastikan akunmu tidak private.</p>
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
        <div className="hidden lg:flex flex-col h-screen">
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
            <AnimatePresence mode="wait">
              {/* Slide 1 */}
              {activeHowSlide === 0 && (
                <motion.div key="d-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col px-16 pt-4 pb-10">
                  {/* Two cards side by side — centered */}
                  <div className="flex-1 flex items-center justify-center gap-6 min-h-0">
                    <div className="relative w-[340px] h-full max-h-[420px] overflow-hidden rounded-sm flex-shrink-0">
                      <div className="absolute top-3 left-3 z-10">
                        <p className="text-white text-sm font-black leading-none uppercase">AKSI STUNT KEREN</p>
                        <p className="text-white/80 text-xs font-medium">dengan transisi heboh</p>
                      </div>
                      <Image src="/images/how-1.png" alt="Aksi Stunt Keren" fill className="object-cover object-center" />
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <a href="https://placeholder-capcut-template-1.com" target="_blank" rel="noopener noreferrer"
                          className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                          COBA DI CAPCUT
                        </a>
                      </div>
                    </div>
                    <div className="relative w-[340px] h-full max-h-[420px] overflow-hidden rounded-sm flex-shrink-0">
                      <div className="absolute top-3 left-3 z-10">
                        <p className="text-white text-sm font-black leading-none uppercase">MOMEN RANDOM</p>
                        <p className="text-white/80 text-xs font-medium">spontan tapi lucu</p>
                      </div>
                      <Image src="/images/how-2.png" alt="Momen Random" fill className="object-cover object-center" />
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <a href="https://placeholder-capcut-template-2.com" target="_blank" rel="noopener noreferrer"
                          className="w-full bg-white text-black text-sm font-black tracking-widest uppercase py-3 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-200">
                          COBA DI CAPCUT
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Bottom row */}
                  <div className="flex-shrink-0 flex items-end justify-between pt-6">
                    <div>
                      <span className="bg-black text-white text-base font-black px-3 py-2 uppercase tracking-wide block mb-3">CARA IKUT KESERUANNYA</span>
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-black text-xl font-black leading-none">01.</span>
                        <p className="text-white text-base font-bold leading-snug max-w-sm">Pilih template favoritmu dan kreasikan momenmu</p>
                      </div>
                      <a href="https://placeholder-syarat-ketentuan.com" target="_blank" rel="noopener noreferrer"
                        className="text-white text-base font-bold underline underline-offset-4 hover:text-black transition-colors duration-200">
                        (→) Baca Syarat &amp; Ketentuan
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))} disabled={Number(activeHowSlide) === 0}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">←</button>
                      <button onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))} disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">→</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Slide 2 */}
              {activeHowSlide === 1 && (
                <motion.div key="d-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col px-16 pt-4 pb-10">
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <div className="relative h-full max-h-[460px] w-auto aspect-[4/5] overflow-hidden rounded-sm">
                      <Image src="/images/slide-2.jpeg" alt="Gunakan lagu resmi Sandisk Challenge" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-end justify-between pt-6">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">02.</span>
                      <p className="text-white text-base font-bold leading-snug max-w-lg">Gunakan lagu resmi Sandisk Challenge sesuai template yang dipilih, baik untuk aksi seru maupun momen lucu.</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-8">
                      <button onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))} disabled={Number(activeHowSlide) === 0}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">←</button>
                      <button onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))} disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">→</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Slide 3 */}
              {activeHowSlide === 2 && (
                <motion.div key="d-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col px-16 pt-4 pb-10">
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <div className="relative h-full max-h-[460px] w-auto aspect-[4/5] overflow-hidden rounded-sm">
                      <Image src="/images/slide-3.png" alt="Post videomu di TikTok" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-end justify-between pt-6">
                    <div className="flex items-start gap-3">
                      <span className="bg-black text-white text-base font-black px-2 py-1 leading-none flex-shrink-0">03.</span>
                      <p className="text-white text-base font-bold leading-snug max-w-lg">Post videomu di TikTok dengan hashtag #sandisktechshiftid , tag @sandiskindonesia pastikan akunmu tidak private.</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-8">
                      <button onClick={() => setActiveHowSlide(s => Math.max(0, s - 1))} disabled={Number(activeHowSlide) === 0}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">←</button>
                      <button onClick={() => setActiveHowSlide(s => Math.min(HOW_SLIDES - 1, s + 1))} disabled={Number(activeHowSlide) >= HOW_SLIDES - 1}
                        className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40">→</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Eclipse — slide 2 & 3 */}
            {activeHowSlide > 0 && (
              <div className="absolute bottom-0 right-[-5%] w-[40%] h-40 pointer-events-none">
                <Image src="/images/eclipse.png" alt="" fill className="object-contain object-right" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: FAQ
      ======================================== */}
      <section className="bg-white px-6 lg:px-0 py-10 lg:py-20">
        <div className="lg:max-w-4xl lg:mx-auto">
          <p className="text-black text-xl lg:text-3xl font-black tracking-tight mb-10 lg:mb-14">(→) FAQ.</p>
          <FAQAccordion />
          <div className="h-px bg-black/15 mt-6 mb-8" />
          <a
            href="https://placeholder-syarat-ketentuan.com"
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
      <HallOfFameCarousel />

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
