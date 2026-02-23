/**
 * FAQ Accordion Component
 * Expandable FAQ items with smooth animations
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

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
  {
    question: 'Kapan pemenang diumumkan?',
    answer: 'Pemenang akan diumumkan maksimal 14 hari setelah periode challenge berakhir melalui Instagram @SanDiskID.',
  },
  {
    question: 'Apakah boleh submit lebih dari satu video?',
    answer: 'Ya! Kamu bisa submit sebanyak yang kamu mau. Semakin banyak submission, semakin besar peluangmu!',
  },
  {
    question: 'Apakah ada biaya untuk mengikuti challenge?',
    answer: 'Tidak ada biaya sama sekali! Challenge ini 100% gratis untuk semua peserta.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
      className="space-y-3 sm:space-y-4"
    >
      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: reducedMotion ? 0.1 : 0.4, delay: index * 0.05 }}
          className="card overflow-hidden"
        >
          {/* Question Header */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left hover:bg-bg-elevated transition-colors duration-200"
          >
            <span className="text-base sm:text-lg font-semibold text-text-primary pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-brand-red text-xl sm:text-2xl"
            >
              ▼
            </motion.div>
          </button>

          {/* Answer Content */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reducedMotion ? 0.1 : 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0">
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed border-t border-border-subtle pt-4">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
