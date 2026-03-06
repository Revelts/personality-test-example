'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Legend {
  name: string;
  category: 'Stunt' | 'Core';
  photo: string | null;
}

const legends: Legend[] = [
  { name: 'Legend 1', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80' },
  { name: 'Legend 2', category: 'Core',  photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' },
  { name: 'Legend 3', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' },
  { name: 'Legend 4', category: 'Core',  photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
  { name: 'Legend 5', category: 'Stunt', photo: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80' },
];

/* Triple the list so we can loop infinitely in both directions */
const looped = [...legends, ...legends, ...legends];
const VISIBLE = 3;
const START_OFFSET = legends.length; // begin in the middle clone

function CardItem({ legend }: { legend: Legend }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-hidden bg-[#D9D9D9]">
        {legend.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={legend.photo} alt={legend.name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex items-stretch bg-white flex-shrink-0">
        <a
          href="https://www.instagram.com/sandiskid"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black flex items-center justify-center px-3 py-2 hover:bg-brand-red transition-colors"
        >
          <span className="text-white font-bold text-sm">(→)</span>
        </a>
        <div className="px-3 py-2">
          <p className="text-black font-black text-sm leading-tight tracking-tight">THE HALL OF FAME.</p>
          <p className="text-black text-xs font-medium">Meet Our TechShift Legends.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── MOBILE: single swipe carousel ─── */
function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragStartX = useRef(0);

  const goTo = (index: number) => {
    if (index < 0 || index >= legends.length) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex flex-col px-5 py-10">
      <div
        className="flex-1 flex flex-col items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
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
            className="w-full h-[62vh]"
          >
            <CardItem legend={legends[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-4">
          {legends.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      <p className="text-white text-sm leading-relaxed mt-6">
        Terima kasih telah berbagi perjalanan dan memori berhargamu. Inilah para pemenang yang
        berhasil menangkap esensi <span className="font-bold">&apos;Catch Every Moment.&apos;</span>
      </p>
    </div>
  );
}

/* ─── DESKTOP: 3-visible infinite slider ─── */
function DesktopSlider() {
  const [offset, setOffset] = useState(START_OFFSET);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Measure card width once mounted and on resize */
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setCardWidth(containerRef.current.offsetWidth / VISIBLE);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current); };

  const slide = (dir: 1 | -1) => {
    if (animating) return;
    setOffset(prev => prev + dir);
  };

  /* Auto-play */
  useEffect(() => {
    autoRef.current = setInterval(() => slide(1), 3500);
    return () => stopAuto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating]);

  /* Silent jump after reaching clone boundary */
  const handleAnimationComplete = () => {
    setAnimating(false);
    setOffset(prev => {
      if (prev >= looped.length - VISIBLE) return START_OFFSET;
      if (prev < 0) return START_OFFSET + legends.length - 1;
      return prev;
    });
  };

  if (cardWidth === 0) {
    /* Render invisible track to measure, show nothing yet */
    return (
      <div className="py-16 px-16">
        <div ref={containerRef} className="w-full" />
      </div>
    );
  }

  const translateX = -(offset * cardWidth);

  return (
    <div className="py-16 px-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Hall of Fame</p>
          <h2 className="text-white text-5xl font-black leading-tight tracking-tight">
            THE HALL<br />OF FAME.
          </h2>
        </div>
        <div className="flex flex-col items-end gap-4">
          <p className="text-white text-sm leading-relaxed max-w-xs text-right">
            Terima kasih telah berbagi perjalanan dan memori berhargamu. Inilah para pemenang yang
            berhasil menangkap esensi{' '}
            <span className="font-bold">&apos;Catch Every Moment.&apos;</span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => { stopAuto(); slide(-1); }}
              className="w-11 h-11 border-2 border-white text-white font-bold flex items-center justify-center hover:bg-white hover:text-brand-red transition-colors"
            >←</button>
            <button
              onClick={() => { stopAuto(); slide(1); }}
              className="w-11 h-11 border-2 border-white text-white font-bold flex items-center justify-center hover:bg-white hover:text-brand-red transition-colors"
            >→</button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <motion.div
          className="flex"
          animate={{ x: translateX }}
          transition={
            /* When jumping silently to reset position, use duration 0 */
            animating === false && (offset === START_OFFSET || offset === START_OFFSET + legends.length - 1)
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
          }
          onAnimationStart={() => setAnimating(true)}
          onAnimationComplete={handleAnimationComplete}
        >
          {looped.map((legend, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-1.5"
              style={{ width: cardWidth }}
            >
              <div className="h-[52vh]">
                <CardItem legend={legend} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function HallOfFameCarousel() {
  return (
    <section className="bg-brand-red">
      <div className="lg:hidden"><MobileCarousel /></div>
      <div className="hidden lg:block"><DesktopSlider /></div>
    </section>
  );
}
