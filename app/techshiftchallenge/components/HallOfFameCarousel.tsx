'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Legend {
  name: string;
  category: 'Stunt' | 'Core';
  photo: string | null;
}

const legends: Legend[] = [
  { name: 'Legend 1', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80' },
  { name: 'Legend 2', category: 'Core',  photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
  { name: 'Legend 3', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
  { name: 'Legend 4', category: 'Core',  photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80' },
  { name: 'Legend 5', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80' },
];

export default function HallOfFameCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragStartX = useRef(0);

  const goTo = (index: number) => {
    if (index < 0 || index >= legends.length) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    dragStartX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const legend = legends[activeIndex];

  return (
    <section className="bg-brand-red min-h-screen flex flex-col px-5 py-10">
      {/* Carousel card */}
      <div
        className="flex-1 flex flex-col items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
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
            className="flex flex-col w-full"
          >
            {/* Photo */}
            <div className="relative w-full h-[62vh] bg-[#D9D9D9] overflow-hidden">
              {legend.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={legend.photo}
                  alt={legend.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Card footer — below the photo */}
            <div className="flex items-stretch bg-white">
              <a
                href="https://www.instagram.com/sandiskid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black flex items-center justify-center px-4 py-3 hover:bg-brand-red transition-colors"
              >
                <span className="text-white font-bold text-lg">(→)</span>
              </a>
              <div className="px-4 py-3">
                <p className="text-black font-black text-xl leading-tight tracking-tight">
                  THE HALL OF FAME.
                </p>
                <p className="text-black text-sm font-medium">
                  Meet Our TechShift Legends.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4 mb-3">
        {legends.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="text-white text-sm leading-relaxed mt-2">
        Terima kasih telah berbagi perjalanan dan memori berhargamu. Inilah para pemenang yang
        berhasil menangkap esensi{' '}
        <span className="font-bold">&apos;Catch Every Moment.&apos;</span>
      </p>
    </section>
  );
}
