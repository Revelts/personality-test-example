'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ResultCard from '@/components/ResultCard';
import ShareButton from '@/components/ShareButton';
import ScreenshotButton from '@/components/ScreenshotButton';
import { PersonalityResult, personalityTypes } from '@/lib/results';

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = () => {
      try {
        // Try localStorage first
        const localData = localStorage.getItem(`personality_result_${params.id}`);
        if (localData) {
          const data = JSON.parse(localData);
          setResult(data.personality);
          setUserName(data.userName || '');
          return;
        }
        
        // Try URL-encoded data (for shared links)
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
        
        // Fallback: direct type ID in URL params
        const typeId = urlParams.get('type');
        if (typeId) {
          const personality = personalityTypes.find(p => p.id === typeId);
          if (personality) {
            setResult(personality);
            return;
          }
        }
        
        // No result found
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-4"
          >
            ⏳
          </motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Memuat hasil kamu...
          </p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🤔</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Hasil Tidak Ditemukan
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hasil ini tidak ada atau sudah expired.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg"
          >
            Ikuti Tes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          {userName && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-2"
            >
              Halo, {userName}! 👋
            </motion.p>
          )}
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Hasil Tes Kepribadian Kamu
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ini yang kita temukan tentang kamu!
          </p>
        </motion.div>

        <ResultCard result={result} userName={userName} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <ShareButton resultId={params.id as string} />
          <ScreenshotButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => router.push('/')}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            ← Ikuti tes lagi
          </button>
        </motion.div>
      </div>
    </div>
  );
}
