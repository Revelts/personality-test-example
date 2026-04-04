'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { WINNERS_ENABLED } from '../config';

interface LeaderboardGroup {
  title: string;
  winners: string[];
  isFinal?: boolean;
}

const groups: LeaderboardGroup[] = [
  {
    title: 'WEEKLY WINNER I (Periode: 06 Apr-12 Apr 2026)',
    winners: ['Pemenang 1', 'Pemenang 2', 'Pemenang 3', 'Pemenang 4', 'Pemenang 5', 'Pemenang 6'],
  },
  {
    title: 'WEEKLY WINNER II (Periode: 13 Apr-19 Apr 2026)',
    winners: ['Pemenang 1', 'Pemenang 2', 'Pemenang 3', 'Pemenang 4', 'Pemenang 5', 'Pemenang 6'],
  },
  {
    title: 'WEEKLY WINNER III (Periode: 20 Apr-26 Apr 2026)',
    winners: ['Pemenang 1', 'Pemenang 2', 'Pemenang 3', 'Pemenang 4', 'Pemenang 5', 'Pemenang 6'],
  },
  {
    title: 'WEEKLY WINNER IV (Periode: 27 Apr-3 Mei 2026)',
    winners: ['Pemenang 1', 'Pemenang 2', 'Pemenang 3', 'Pemenang 4', 'Pemenang 5', 'Pemenang 6'],
  },
  {
    title: 'FINAL WINNER',
    isFinal: true,
    winners: [],
  },
];

function AccordionItem({ group, index }: { group: LeaderboardGroup; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="h-px bg-white/20 mb-5" />
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between text-left mb-4 gap-4"
      >
        <span className="text-white text-lg sm:text-xl font-normal leading-snug">
          {group.title}
        </span>
        <span className="flex-shrink-0 mt-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
            <path d="M2 5L8 11L14 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {group.isFinal ? (
              <div className="pb-6 space-y-4">
                <div>
                  <p className="text-white font-black text-sm mb-1">Kategori STUNT Template:</p>
                  {['Pemenang Pertama', 'Pemenang Kedua', 'Pemenang Favorit 1', 'Pemenang Favorit 2'].map((p, i) => (
                    <p key={i} className="text-white/70 text-sm">{p}</p>
                  ))}
                </div>
                <div>
                  <p className="text-white font-black text-sm mb-1">Kategori CORE Template:</p>
                  {['Pemenang Pertama', 'Pemenang Kedua', 'Pemenang Favorit 1', 'Pemenang Favorit 2'].map((p, i) => (
                    <p key={i} className="text-white/70 text-sm">{p}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pb-6">
                {group.winners.map((w, i) => (
                  <p key={i} className="text-white/70 text-sm leading-relaxed">{w}</p>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LeaderboardSection() {
  if (!WINNERS_ENABLED) return null;

  return (
    <section className="bg-black px-6 lg:px-16 py-10 lg:py-20">
      <div className="lg:max-w-4xl lg:mx-auto">
        <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-10">
          (→) LEADERBOARD
        </p>
        {groups.map((group, i) => (
          <AccordionItem key={i} group={group} index={i} />
        ))}
        <div className="h-px bg-white/20 mt-2" />
      </div>
    </section>
  );
}
