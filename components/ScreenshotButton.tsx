'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toPng } from 'html-to-image';
import { trackScreenshot } from '@/lib/analytics';
import { useParams } from 'next/navigation';

interface ScreenshotButtonProps {
  elementId?: string;
}

export default function ScreenshotButton({ elementId = 'result-card' }: ScreenshotButtonProps) {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const captureScreenshot = async () => {
    setLoading(true);
    try {
      const element = document.getElementById(elementId);
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 2,
      });

      const localData = localStorage.getItem(`personality_result_${params.id}`);
      if (localData) {
        const data = JSON.parse(localData);
        trackScreenshot(data.personality.id, params.id as string);
      }

      const link = document.createElement('a');
      link.download = 'my-personality-result.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to capture screenshot:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={captureScreenshot}
      disabled={loading}
      className="btn btn-ghost min-w-[120px] sm:min-w-[140px] text-sm sm:text-base py-3"
    >
      {loading ? (
        <>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </motion.svg>
          <span className="hidden sm:inline">Sedang...</span>
          <span className="sm:hidden">...</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="hidden sm:inline">Download</span>
          <span className="sm:hidden">Save</span>
        </>
      )}
    </motion.button>
  );
}
