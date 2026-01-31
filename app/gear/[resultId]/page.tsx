'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PersonalityResult } from '@/lib/results';
import Image from 'next/image';

export default function GearPage() {
  const params = useParams();
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = () => {
      try {
        const localData = localStorage.getItem(`personality_result_${params.resultId}`);
        if (localData) {
          const data = JSON.parse(localData);
          setResult(data.personality);
        } else {
          setResult(null);
        }
      } catch (error) {
        console.error('Error fetching result:', error);
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [params.resultId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-4xl mb-4">🤔</div>
          <h1 className="text-2xl font-bold text-black mb-4">Data Tidak Ditemukan</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-brand-red text-white font-bold rounded-full"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-lg font-medium">Back</span>
          </button>

          {/* SanDisk Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-black">San</span>
            <span className="text-brand-red">Disk</span>
            <span className="text-xs align-top">™</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-red mb-2 uppercase tracking-tight">
            YOUR BEST GEAR
          </h1>
          
          {/* Product Name */}
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">
            SANDISK PHONE DRIVE {result.gearCapacity || '32GB'} (PURPLE OPULENCE)
          </h2>
          
          {/* Model Number */}
          <p className="text-sm text-gray-600 mb-6">
            MODEL NUMBER: {result.gearModel || 'SDDDC6-032C-G46P0'}
          </p>

          {/* Product Image */}
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-6xl">💾</div>
            {/* Replace with actual image when available */}
            {/* <Image
              src={result.gearImage}
              alt={result.gear}
              fill
              className="object-contain p-8"
            /> */}
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🔌</div>
              <p className="text-xs text-gray-600 mb-1">INTERFACE</p>
              <p className="text-sm font-semibold text-black">{result.gearSpecs?.usb || 'USB 3.2 Gen 1'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="text-xs text-gray-600 mb-1">WARRANTY</p>
              <p className="text-sm font-semibold text-black">{result.gearSpecs?.warranty || '5-Year Limited Warranty'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💾</div>
              <p className="text-xs text-gray-600 mb-1">CAPACITY</p>
              <p className="text-sm font-semibold text-black">{result.gearCapacity || '32GB'}</p>
            </div>
          </div>

          {/* I NEED THIS Button */}
          <button className="w-full py-4 bg-brand-red hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl mb-6">
            I NEED THIS
          </button>

          {/* E-commerce Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href={result.gearLinks?.tokopedia || 'https://www.tokopedia.com/sandisk'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors"
            >
              <div className="text-2xl">🛍️</div>
            </a>
            <a
              href={result.gearLinks?.shopee || 'https://shopee.co.id/sandisk'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors"
            >
              <div className="text-2xl">🛒</div>
            </a>
            <a
              href={result.gearLinks?.tiktokshop || 'https://www.tiktok.com/@sandisk'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-brand-red transition-colors"
            >
              <div className="text-2xl">🎵</div>
            </a>
          </div>

          {/* Video/Banner */}
          <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm font-bold">SANDISK PHONE DRIVE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
