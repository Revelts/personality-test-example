/**
 * Prologue Page - Typing Animation Introduction
 * 
 * Design: Typewriter effect dari kiri atas, teks muncul satu per satu
 * Setelah selesai, muncul tombol "Start the Test"
 */

'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Typewriter Text Component
function TypewriterText({ 
  text, 
  speed = 30,
  isActive = true 
}: { 
  text: string; 
  speed?: number;
  isActive?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText(text);
      return;
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isActive]);

  return (
    <span>
      {displayedText}
      {isActive && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-brand-red ml-0.5 sm:ml-1 align-middle"
        />
      )}
    </span>
  );
}

export default function ProloguePage() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [userName, setUserName] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Momen-momen seru itu ikut ke mana pun kamu pergi.",
    "Bayangin semua file digital kamu sebagai barang bawaan di perjalanan hidupmu.",
    "Ada yang disimpan rapi, ada yang numpuk, ada juga yang hampir terlupa.",
    "Cara kamu simpan momen dan file digital bisa nunjukin kepribadianmu.",
    "Yuk, cari tahu storage yang siap ngikutin hidupmu hari ini."
  ];

  useEffect(() => {
    // Get user name from localStorage
    const name = localStorage.getItem('test_taker_name');
    if (!name) {
      router.push('/');
      return;
    }
    setUserName(name);
  }, [router]);

  useEffect(() => {
    // Move to next text after current one finishes typing
    if (currentTextIndex < texts.length - 1) {
      const currentText = texts[currentTextIndex];
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, 800 + currentText.length * 30); // Reduced: 800ms base + 30ms per char
      return () => clearTimeout(timer);
    } else if (currentTextIndex === texts.length - 1) {
      // All texts done, show button after a shorter delay
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1500); // Reduced from 3000ms to 1500ms
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStartTest = () => {
    router.push('/test');
  };

  const handleSkip = () => {
    setCurrentTextIndex(texts.length - 1);
    setShowButton(true);
  };

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Stars Background - Subtle */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* SanDisk Logo - Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="relative h-5 sm:h-6 md:h-8 w-auto">
          <Image
            src="/images/sandisk-logo.png"
            alt="SanDisk"
            width={150}
            height={40}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Typing Text Container - Centered */}
      <div className="relative w-full flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 py-24 sm:py-32">
        <div className="max-w-5xl w-full space-y-4 sm:space-y-6 md:space-y-8 text-center">
          {texts.map((text, index) => {
            if (index > currentTextIndex) return null;
            
            const isLast = index === texts.length - 1;
            
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed ${
                  isLast 
                    ? 'text-brand-red font-semibold' 
                    : index === 3
                    ? 'text-text-secondary font-light'
                    : 'text-text-primary font-light'
                }`}
              >
                <TypewriterText 
                  text={text} 
                  speed={30}
                  isActive={index === currentTextIndex}
                />
              </motion.p>
            );
          })}
        </div>
      </div>

      {/* Start Button - Appears after animation */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-20 px-4 sm:px-6"
        >
          <div className="max-w-sm sm:max-w-md mx-auto">
            <motion.button
              onClick={handleStartTest}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                borderRadius: '2px',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
              className="w-full py-3 sm:py-4 md:py-5 bg-transparent border-2 border-brand-red text-text-primary font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase transition-all duration-300 hover:shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)] hover:bg-[rgba(225,6,0,0.05)]"
            >
              Start the Test
            </motion.button>
            
            <p className="text-xs sm:text-sm text-text-tertiary text-center mt-2 sm:mt-3">
              Siap untuk memulai, {userName}?
            </p>
          </div>
        </motion.div>
      )}

      {/* Skip button - Optional */}
      {!showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="fixed top-16 sm:top-20 md:top-24 right-4 sm:right-6 text-xs sm:text-sm text-text-tertiary hover:text-text-primary transition-colors z-20"
        >
          Skip intro →
        </motion.button>
      )}
    </div>
  );
}
