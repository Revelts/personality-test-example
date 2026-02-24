'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PixelDecoration from '@/components/PixelDecoration';
import { PersonalityResult, personalityTypes } from '@/lib/results';

export default function GearPage() {
  const params = useParams();
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = () => {
      try {
        const localData = localStorage.getItem(`personality_result_${params.id}`);
        if (localData) {
          const data = JSON.parse(localData);
          setResult(data.personality);
          return;
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        const encodedData = urlParams.get('data');
        
        if (encodedData) {
          try {
            const decoded = JSON.parse(atob(encodedData));
            const personality = personalityTypes.find(p => p.id === decoded.p);
            if (personality) {
              setResult(personality);
              return;
            }
          } catch (e) {
            console.error('Error decoding URL data:', e);
          }
        }
        
        const typeId = urlParams.get('type');
        if (typeId) {
          const personality = personalityTypes.find(p => p.id === typeId);
          if (personality) {
            setResult(personality);
            return;
          }
        }
        
        setResult(null);
      } catch (error) {
        console.error('Error fetching result:', error);
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [params.id]);

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full flex items-center justify-center bg-bg-primary"
      >
        <div className="text-center px-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-5xl sm:text-6xl mb-4"
          >
            ⏳
          </motion.div>
          <p className="text-base sm:text-lg text-text-secondary">
            Memuat produk...
          </p>
        </div>
      </motion.div>
    );
  }

  if (!result) {
    return (
      <div className="h-full flex items-center justify-center bg-bg-primary p-4 sm:p-6">
        <div className="text-center max-w-md">
          <div className="text-5xl sm:text-6xl mb-4">🤔</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
            Hasil Tidak Ditemukan
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mb-5 sm:mb-6">
            Link hasil test tidak valid atau sudah expired.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/')}
            className="btn btn-primary"
          >
            Mulai Test Baru
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-black py-3 sm:py-4 px-4 sm:px-6 relative overflow-y-auto"
    >
      {/* Pixel Decoration */}
      <PixelDecoration size="sm" animated={true} variant="result" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Back Button & Logo */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-base font-medium">Back</span>
            </button>

            {/* SanDisk Logo */}
            <div className="relative h-6 sm:h-8 w-auto">
              <Image
                src="/images/sandisk-logo.png"
                alt="SanDisk"
                width={150}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Your Best Gear Card */}
          <div className="mt-12 sm:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">

              {/* Product Name */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-black mb-1">
                  {result.gear.toUpperCase()}
                </h2>
              </div>

              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={result.gearImage}
                  alt={result.gear}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1">
                    <Image
                      src="/images/speed.png"
                      alt="Speed"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Kecepatan
                  </p>
                  <p className="text-[10px] sm:text-xs text-black font-bold leading-tight">
                    Baca hingga 100mb/s
                  </p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1">
                    <Image
                      src="/images/lifetime.png"
                      alt="Warranty"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Garansi
                  </p>
                  <p className="text-xs sm:text-sm text-black font-bold">
                    {result.gearSpecs?.warranty || '5-Year Limited Warranty'}
                  </p>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-3">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1">
                    <Image
                      src="/images/storage.png"
                      alt="Capacity"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-0.5 uppercase tracking-wide font-semibold">
                    Kapasitas
                  </p>
                  <p className="text-xs sm:text-sm text-black font-bold">
                    {result.gearCapacity || '32GB'}
                  </p>
                </div>
              </div>

              {/* Text Label Only */}
              <p className="text-brand-red text-sm sm:text-base font-bold text-center">
                BELI & KLAIM VOUCHER ↓
              </p>

              {/* E-commerce Links */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <a
                  href={result.gearLinks?.lazada || 'https://www.lazada.co.id/products/sandisk-phone-drive-for-android-usb-type-a-dan-otg-type-c-i8265588670-s14676420564.html'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors p-2 shadow-sm"
                >
                  <Image
                    src="/images/lazada.png"
                    alt="Lazada"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </a>
                <a
                  href={result.gearLinks?.shopee || 'https://shopee.co.id/SANDISK-Phone-Drive-for-Android-USB-Type-C-A-32GB-64GB-128GB-256GB-512GB-USB-3.2-Up-To-100MB-s-i.1657263.24536652989'}
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
                  href={result.gearLinks?.tiktokshop || 'https://vt.tokopedia.com/t/ZS91fMe6Xyvhb-TXgeb/'}
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
          </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
