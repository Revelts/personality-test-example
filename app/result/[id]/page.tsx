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
      className="h-full bg-bg-primary py-4 sm:py-6 md:py-8 px-4 sm:px-6 relative overflow-y-auto"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Result Card */}
          <ResultCard result={result} userName={userName} />

          {/* Actions - Responsive layout & spacing */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 mb-4">
            <ShareButton resultId={params.id as string} />
            <ScreenshotButton elementId="result-card" />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/')}
              className="btn btn-secondary text-sm sm:text-base py-3"
            >
              Mulai Test Baru
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
