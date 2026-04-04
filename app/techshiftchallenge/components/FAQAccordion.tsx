'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: 'Apakah harus menggunakan template yang tersedia?',
    answer: 'Ya. Untuk mengikuti challenge ini, kamu perlu menggunakan template resmi yang sudah disediakan.',
  },
  {
    question: 'Apakah template boleh diubah atau dimodifikasi?',
    answer: 'Tidak. Template tid  ak boleh diubah atau dimodifikasi, terutama pada elemen visual di dalamnya. Template sudah dirancang agar format video tetap konsisten dan memudahkan proses kurasi serta penilaian. Namun, peserta diperbolehkan untuk menyesuaikan atau mengubah bagian teks sesuai kebutuhan konten.',
  },
  {
    question: 'Bagaimana cara memilih template?',
    answer: (
      <span>
        Pilih template yang paling sesuai dengan momen yang ingin kamu tampilkan:<br />
        • Aksi random dengan transisi kreatif, atau<br />
        • Momen sehari-hari yang spontan tapi lucu.
      </span>
    ),
  },
  {
    question: 'Apa yang perlu dilakukan setelah upload video TikTok??',
    answer: (
      <span>
        Setelah upload video TikTok, isi <strong>nama akun,
        nomor HP yang aktif,</strong> <strong>dan link video TikTok</strong> kamu melalui tombol <strong>“Ikuti Sekarang”</strong> pada Google Form yang ada di halaman utama website.

        Pilih template yang paling sesuai dengan momen yang ingin kamu tampilkan:<br />
        • Aksi random dengan transisi kreatif, atau<br />
        • Momen sehari-hari yang spontan tapi lucu.
      </span>
    ),
  },
  {
    question: 'Bagaimana sistem pemenangnya?',
    answer: (
      <span>
        Setiap minggu akan dipilih <strong>6 pemenang</strong> (<strong>3 dari setiap template</strong>) untuk memenangkan <strong>voucher belanja</strong> dan masuk ke <strong>final Grand Prize</strong>.<br /><br />
        Di babak final, akan dipilih <strong>6 pemenang utama</strong> (<strong>3 dari setiap template</strong>) yang berkesempatan memenangkan <strong>Grand Prize iPhone 17 Pro</strong> serta hadiah lainnya.
      </span>
    ),
  },
  {
    question: 'Bagaimana proses penilaian dilakukan?',
    answer: (
      <span>
        Semua video yang masuk akan melalui proses kurasi dan penilaian oleh Penyelenggara berdasarkan beberapa aspek berikut:<br />
        • Kreativitas isi konten - 60%<br />
        • Pemakaian template yang benar - 30%<br />
        • Interaksi pada video (likes &amp; komentar) - 10%
      </span>
    ),
  },
  {
    question: 'Kapan pemenang akan diumumkan?',
    answer: (
      <span>
        Pemenang akan diumumkan melalui akun resmi Sandisk Indonesia di Facebook, Instagram, dan TikTok setelah proses penilaian selesai.<br /><br />
        Untuk weekly winners, pengumuman akan dilakukan pada tanggal 15, 22, 29 April 2026 dan 11 Mei 2026. Sedangkan grand winners akan diumumkan pada 18 Mei 2026.
      </span>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div className="h-px bg-black/15 mb-6" />
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full grid grid-cols-[3rem_1fr_1.5rem] lg:grid-cols-[5rem_1fr_2rem] items-start gap-x-6 lg:gap-x-8 text-left mb-4"
          >
            <span className="text-base lg:text-lg font-bold text-black pt-0.5">
              {String(index + 1).padStart(2, '0')}.
            </span>
            <span className="text-base lg:text-lg font-bold text-black leading-snug">
              {faq.question}
            </span>
            <span className="flex justify-end pt-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <path d="M2 5L8 11L14 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
                <p className="text-sm lg:text-base text-black/70 leading-relaxed pl-[calc(3rem+1.5rem)] lg:pl-[calc(5rem+2rem)] pb-6">
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
