'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { PersonalityResult } from '@/lib/results';
import Image from 'next/image';

interface SliderCardProps {
  result: PersonalityResult;
  userName?: string;
}

export default function SliderCard({ result, userName }: SliderCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (info.offset.x < -swipeThreshold && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div id="result-card" className="w-full max-w-xl mx-auto">
      {/* White Container with Slider Inside */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex"
          >
            {/* Slide 1: YOUR BEST GEAR */}
            <div className="min-w-full p-4 sm:p-6 space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-red uppercase tracking-tight">
                YOUR BEST GEAR
              </h1>

              {/* Product Name */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-1">
                  SANDISK PHONE DRIVE {result.gearCapacity || '32GB'} (PURPLE OPULENCE)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  MODEL NUMBER: {result.gearModel || 'SDDDC6-032C-G46P0'}
                </p>
              </div>

              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-5xl sm:text-6xl">💾</div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl sm:text-3xl mb-1">🔌</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Interface
                  </p>
                  <p className="text-xs sm:text-sm text-black font-bold">
                    {result.gearSpecs?.usb || 'USB 3.2 Gen 1'}
                  </p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl sm:text-3xl mb-1">🛡️</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Warranty
                  </p>
                  <p className="text-xs sm:text-sm text-black font-bold">
                    {result.gearSpecs?.warranty || '5-Year Limited Warranty'}
                  </p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl sm:text-3xl mb-1">💾</div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Capacity
                  </p>
                  <p className="text-xs sm:text-sm text-black font-bold">
                    {result.gearCapacity || '32GB'}
                  </p>
                </div>
              </div>

              {/* I NEED THIS Button */}
              <button className="w-full py-3 sm:py-4 bg-brand-red hover:bg-red-700 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
                I NEED THIS
              </button>

              {/* E-commerce Links */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <a
                  href={result.gearLinks?.tokopedia || 'https://www.tokopedia.com/sandisk'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors p-2 shadow-sm"
                >
                  <Image
                    src="/images/tokopedia.png"
                    alt="Tokopedia"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </a>
                <a
                  href={result.gearLinks?.shopee || 'https://shopee.co.id/sandisk'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors p-2 shadow-sm"
                >
                  <Image
                    src="/images/shopee.png"
                    alt="Shopee"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </a>
                <a
                  href={result.gearLinks?.tiktokshop || 'https://www.tiktok.com/@sandisk'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors p-2 shadow-sm"
                >
                  <Image
                    src="/images/tiktok.png"
                    alt="TikTok Shop"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Slide 2: Personality Result */}
            <div className="min-w-full p-4 sm:p-6 space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                {result.title}
              </h1>

              {/* Overall Character Result */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                  Overall Result Karakter
                </h2>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* Piece Quote / Poem */}
              <div className="border-l-4 border-gray-300 pl-3 sm:pl-4">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
                  Piece Quote / Poem
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 italic leading-relaxed">
                  {result.quote}
                </p>
              </div>

              {/* Elemen */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
                  Elemen
                </h3>
                <p className="text-xs sm:text-sm text-gray-800">
                  {result.element}
                </p>
              </div>

              {/* Warna */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
                  Warna
                </h3>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm" 
                    style={{ backgroundColor: result.colorHex }}
                  />
                  <p className="text-xs sm:text-sm text-gray-800 font-medium">
                    {result.colorName}
                  </p>
                </div>
              </div>

              {/* Kenangan Paling Penting */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
                  Kenangan Paling Penting
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                  {result.mostImportant}
                </p>
              </div>

              {/* Music */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-1.5">
                  Music
                </h3>
                <p className="text-xs sm:text-sm text-gray-800">
                  {result.musicArtist} – {result.music}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators - Inside white container */}
        <div className="px-4 pb-4 pt-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-brand-red'
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">
              {currentSlide === 0 ? 'Swipe untuk lihat hasil tes →' : '← Swipe untuk lihat produk'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
