'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Winner {
  username: string;
  category: string;
  photo: string;
  videoUrl: string;
}

const winners: Winner[] = [
  {
    username: '@amelll.ia29',
    category: 'Weekly Winner',
    photo: '/images/winner/template_lucu_1.png',
    videoUrl: 'https://www.tiktok.com/@amelll.ia29/video/7627401977571331346?is_from_webapp=1&sender_device=pc',
  },
  {
    username: '@gebbymerinda',
    category: 'Weekly Winner',
    photo: '/images/winner/template_lucu_2.png',
    videoUrl: 'https://www.tiktok.com/@gebbymerinda/video/7627428548046900500?is_from_webapp=1&sender_device=pc',
  },
  {
    username: '@andriani.53',
    category: 'Weekly Winner',
    photo: '/images/winner/template_lucu_3.png',
    videoUrl: 'https://www.tiktok.com/@andriani.53/video/7627631058669866260?is_from_webapp=1&sender_device=pc',
  },
  {
    username: '@arif.ikhwani',
    category: 'Weekly Winner',
    photo: '/images/winner/template_aksi_1.png',
    videoUrl: 'https://www.tiktok.com/@arif.ikhwani/video/7627404271599766804?is_from_webapp=1&sender_device=pc',
  },
  {
    username: '@pinkku223',
    category: 'Weekly Winner',
    photo: '/images/winner/template_aksi_2.png',
    videoUrl: 'https://www.tiktok.com/@pinkku223/video/7627439343220854037?is_from_webapp=1&sender_device=pc',
  },
  {
    username: '@airyn631',
    category: 'Weekly Winner',
    photo: '/images/winner/template_aksi_3.png',
    videoUrl: 'https://www.tiktok.com/@airyn631/video/7627429261858671893?is_from_webapp=1&sender_device=pc',
  },
];

export default function HallOfFameCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragStartX = useRef(0);

  const goTo = (index: number) => {
    if (index < 0 || index >= winners.length) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const current = winners[activeIndex];

  return (
    <section className="bg-brand-red">

      {/* ── MOBILE layout ── */}
      <div className="lg:hidden min-h-screen flex flex-col px-5 pt-10 pb-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-black px-3 py-2 mb-4">
            <span className="text-white text-2xl font-normal tracking-wide">The Hall of Fame</span>
          </div>
          <h2 className="text-white text-2xl font-normal leading-none tracking-tight mb-3">
            {current.category}
          </h2>
          <p className="text-white text-sm sm:text-base font-normal leading-relaxed max-w-sm">
            Pemenang akan diumumkan melalui akun resmi Sandisk Indonesia di Facebook, Instagram, dan TikTok setelah proses penilaian selesai.
          </p>
        </div>

        {/* Image card */}
        <div className="flex-1 flex flex-col justify-center">
          <div
            className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={e => { dragStartX.current = e.touches[0].clientX; }}
            onTouchEnd={e => {
              const diff = dragStartX.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) diff > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
            }}
            onMouseDown={e => { dragStartX.current = e.clientX; }}
            onMouseUp={e => {
              const diff = dragStartX.current - e.clientX;
              if (Math.abs(diff) > 40) diff > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className="relative w-full aspect-[4/5] bg-black/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={current.photo} alt={current.username} className="w-full h-full object-cover" />
                  <button
                    onClick={() => goTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 flex items-center justify-center text-white font-bold text-lg hover:bg-black transition-colors z-10 disabled:opacity-30"
                  >←</button>
                  <button
                    onClick={() => goTo(activeIndex < winners.length - 1 ? activeIndex + 1 : 0)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 flex items-center justify-center text-white font-bold text-lg hover:bg-black transition-colors z-10"
                  >→</button>
                </div>
                <div className="flex items-stretch bg-white">
                  <a
                    href={current.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black px-6 py-5 flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-white font-black text-xl">(→)</span>
                  </a>
                  <div className="flex-1 px-6 py-5 flex items-center">
                    <span className="text-black font-black text-xl sm:text-2xl">{current.username}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {winners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-white scale-110' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden lg:block px-16 py-16">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="inline-block bg-black px-3 py-2 mb-4">
              <span className="text-white text-2xl font-normal tracking-wide">The Hall of Fame</span>
            </div>
            <h2 className="text-white text-5xl font-black leading-none tracking-tight mb-3">
              {current.category}
            </h2>
            <p className="text-white text-base font-normal leading-relaxed max-w-md">
              Pemenang akan diumumkan melalui akun resmi Sandisk Indonesia di Facebook, Instagram, dan TikTok setelah proses penilaian selesai.
            </p>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-1 mt-2">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-10 h-10 bg-black/50 flex items-center justify-center text-white font-bold text-lg hover:bg-black transition-colors disabled:opacity-40"
            >←</button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex >= winners.length - 1}
              className="w-10 h-10 bg-black/50 flex items-center justify-center text-white font-bold text-lg hover:bg-black transition-colors disabled:opacity-40"
            >→</button>
          </div>
        </div>

        {/* 3 cards carousel — sliding */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: `calc(-${activeIndex} * (33.333% + 0.333rem))` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {winners.map((winner, idx) => (
              <div key={idx} className="flex-shrink-0 w-[calc(33.333%-0.667rem)]">
                <div className="relative w-full aspect-[4/5] bg-black/20 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={winner.photo} alt={winner.username} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-stretch bg-white">
                  <a
                    href={winner.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black px-4 py-3 flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-white font-black text-base">(→)</span>
                  </a>
                  <div className="flex-1 px-4 py-3 flex items-center">
                    <span className="text-black font-black text-lg">{winner.username}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {winners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-white scale-110' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
