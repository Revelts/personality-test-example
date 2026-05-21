'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { WINNERS_ENABLED } from '../config';

interface LeaderboardGroup {
  title: string;
  winners: string[];
  isFinal?: boolean;
}

//  : https://www.tiktok.com/@amelll.ia29/video/7627401977571331346?is_from_webapp=1&sender_device=pc
//  : https://www.tiktok.com/@gebbymerinda/video/7627428548046900500?is_from_webapp=1&sender_device=pc
//  : https://www.tiktok.com/@arif.ikhwani/video/7627631058669866260?is_from_webapp=1&sender_device=pc
//  : https://www.tiktok.com/@pinkku223/video/7627404271599766804?is_from_webapp=1&sender_device=pc
//  : https://www.tiktok.com/@airyn631/video/7627439343220854037?is_from_webapp=1&sender_device=pc
//  : https://www.tiktok.com/@andriani.53/video/7627429261858671893?is_from_webapp=1&sender_device=pc

const groups: LeaderboardGroup[] = [
  {
    title: 'WEEKLY WINNER I (Periode: 06 Apr-12 Apr 2026)',
    winners: ['Amel', 'Gabby', 'Arif', 'Pinku', 'Airin', 'Andriani'],
  },
  {
    title: 'WEEKLY WINNER II (Periode: 12 Apr-18 Apr 2026)',
    winners: ['Ayank', 'Rahman', 'Nanda', 'Scalau', 'Callmeleak'],
  },
  {
    title: 'WEEKLY WINNER III (Periode: 18 Apr-24 Apr 2026)',
    winners: ['Danu', 'Dede', 'Wida', 'Kharizma', 'Shazfa', 'Anjel'],
  },
  {
    title: 'WEEKLY WINNER IV (Periode: 24 Apr-30 Apr 2026)',
    winners: ['Selfi', 'Raisin', 'Koko', 'Naysha', 'Sugarbaby', 'Gaskins'],
  },
  {
    title: 'FINAL WINNER',
    isFinal: true,
    winners: ['@raisin.scone', '@arif.ikhwani', '@kokotorwibawa', '@scclauu0', '@atuluv06', '@gebbymerinda'],
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
                  {['@raisin.scone', '@arif.ikhwani', '@kokotorwibawa'].map((name, i) => (
                    <p key={i} className="text-white/70 text-sm">{name}</p>
                  ))}
                </div>
                <div>
                  <p className="text-white font-black text-sm mb-1">Kategori CORE Template:</p>
                  {['@scclauu0', '@atuluv06', '@gebbymerinda'].map((name, i) => (
                    <p key={i} className="text-white/70 text-sm">{name}</p>
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
