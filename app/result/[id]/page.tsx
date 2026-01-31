'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ResultCard from '@/components/ResultCard';
import ShareButton from '@/components/ShareButton';
import ScreenshotButton from '@/components/ScreenshotButton';
import { PersonalityResult, personalityTypes } from '@/lib/results';
import { trackResultView } from '@/lib/analytics';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = () => {
      try {
        const localData = localStorage.getItem(`personality_result_${params.id}`);
        if (localData) {
          const data = JSON.parse(localData);
          setResult(data.personality);
          setUserName(data.userName || '');
          trackResultView(data.personality.id, params.id as string, data.userName);
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
            Memuat hasil kamu...
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
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Back Button & Logo */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-base font-medium">Back</span>
            </button>

            {/* SanDisk Logo */}
            <div className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">San</span>
              <span className="text-brand-red">Disk</span>
            </div>
          </div>

          {/* Result Card */}
          <ResultCard result={result} userName={userName} />

          {/* Red Button - Your Best Gear */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-4 sm:mt-5"
          >
            <button
              onClick={() => router.push(`/gear/${params.id}`)}
              className="w-full py-3 sm:py-4 bg-brand-red hover:bg-red-700 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Your best gear
            </button>
          </motion.div>

          {/* White Button - Download & Share */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-3 flex items-center gap-2 sm:gap-3"
          >
            <ScreenshotButton elementId="result-card" />
            <ShareButton resultId={params.id as string} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
