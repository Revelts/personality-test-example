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
      if (!element) {
        console.error('Element not found:', elementId);
        return;
      }

      // Temporarily show the hidden element for capture
      element.classList.remove('hidden');
      
      // Wait longer for proper rendering and layout
      await new Promise(resolve => setTimeout(resolve, 300));

      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        cacheBust: true,
      });

      // Hide it again
      element.classList.add('hidden');

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
      // Make sure to hide element even on error
      const element = document.getElementById(elementId);
      if (element) {
        element.classList.add('hidden');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      onClick={captureScreenshot}
      disabled={loading}
      whileHover={!loading ? { scale: 1.02 } : {}}
      whileTap={!loading ? { scale: 0.98 } : {}}
      className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-white text-black text-sm sm:text-base font-bold rounded-full transition-all duration-200 border-2 border-gray-300 hover:border-gray-900 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Menyimpan...</span>
        </>
      ) : (
        <>
          <span>Download</span>
        </>
      )}
    </motion.button>
  );
}
