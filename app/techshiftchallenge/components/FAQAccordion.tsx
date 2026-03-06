'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Siapa yang bisa ikut challenge ini?',
    answer: 'Challenge terbuka untuk semua warga Indonesia berusia minimal 17 tahun dengan akun Instagram aktif.',
  },
  {
    question: 'Berapa durasi video yang dibutuhkan?',
    answer: 'Video harus berdurasi minimal 15 detik dan maksimal 90 detik. Pastikan kontenmu padat dan menarik!',
  },
  {
    question: 'Apakah ada persyaratan kualitas video?',
    answer: 'Video harus beresolusi minimal 720p (HD). Pastikan pencahayaan baik dan audio jelas untuk hasil terbaik.',
  },
  {
    question: 'Kapan deadline pengumpulan video?',
    answer: 'Challenge ditutup pada 31 Maret 2026 pukul 23:59 WIB. Jangan sampai ketinggalan!',
  },
  {
    question: 'Bagaimana proses penjurian dilakukan?',
    answer: 'Video akan dinilai berdasarkan kreativitas (40%), kesesuaian tema (30%), engagement (20%), dan kualitas produksi (10%).',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div className="h-px bg-white/20 mb-6" />
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full grid grid-cols-[3rem_1fr_1.5rem] items-start gap-x-2 text-left mb-4"
          >
            <span className="text-sm font-bold text-white pt-1">
              {String(index + 1).padStart(2, '0')}.
            </span>
            <span className="text-xl font-bold text-white leading-snug">
              {faq.question}
            </span>
            <span className="text-white text-base pt-1 text-right">
              {openIndex === index ? '∧' : '∨'}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-white/60 leading-relaxed pl-[3.5rem] pb-6">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
