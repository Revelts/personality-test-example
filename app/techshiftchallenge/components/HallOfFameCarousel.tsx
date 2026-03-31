'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Winner {
  username: string;
  category: string;
  photo: string;
}

const winners: Winner[] = [
  {
    username: '@Jondoe',
    category: 'Weekly Winner',
    photo: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
  },
  {
    username: '@creativegirl',
    category: 'Weekly Winner',
    photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
  {
    username: '@stuntkid',
    category: 'Weekly Winner',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
  {
    username: '@memorymaker',
    category: 'Weekly Winner',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
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
        <div className="mb-10">
          <div className="inline-block bg-black px-3 py-2 mb-4">
            <span className="text-white text-lg sm:text-xl font-black">The Hall of Fame</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black leading-tight mb-3">
            {current.category}
          </h2>
          <p className="text-white text-sm sm:text-base font-bold leading-relaxed max-w-sm">
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
                    onClick={() => goTo(activeIndex < winners.length - 1 ? activeIndex + 1 : 0)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors z-10"
                  >→</button>
                </div>
                <div className="flex items-stretch bg-white">
                  <div className="bg-black px-4 py-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-base">(→)</span>
                  </div>
                  <div className="flex-1 px-4 py-3 flex items-center">
                    <span className="text-black font-black text-base sm:text-lg">{current.username}</span>
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
              <span className="text-white text-xl font-black">The Hall of Fame</span>
            </div>
            <h2 className="text-white text-4xl font-black leading-tight mb-3">
              {current.category}
            </h2>
            <p className="text-white text-base font-bold leading-relaxed max-w-md">
              Pemenang akan diumumkan melalui akun resmi Sandisk Indonesia di Facebook, Instagram, dan TikTok setelah proses penilaian selesai.
            </p>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-1 mt-2">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40"
            >←</button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex >= winners.length - 1}
              className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-lg hover:bg-black hover:text-white transition-colors disabled:opacity-40"
            >→</button>
          </div>
        </div>

        {/* 3 cards visible */}
        <div className="grid grid-cols-3 gap-4">
          {[-1, 0, 1].map(offset => {
            const idx = activeIndex + offset;
            const winner = winners[idx];
            if (!winner) {
              return <div key={offset} className="bg-white/10 aspect-[4/5]" />;
            }
            return (
              <div key={offset} className={`transition-opacity duration-300 ${offset === 0 ? 'opacity-100' : 'opacity-60'}`}>
                <div className="relative w-full aspect-[4/5] bg-black/20 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={winner.photo} alt={winner.username} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-stretch bg-white">
                  <div className="bg-black px-4 py-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-base">(→)</span>
                  </div>
                  <div className="flex-1 px-4 py-3 flex items-center">
                    <span className="text-black font-black text-lg">{winner.username}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
