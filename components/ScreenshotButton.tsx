'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toPng } from 'html-to-image';

export default function ScreenshotButton() {
  const [loading, setLoading] = useState(false);

  const captureScreenshot = async () => {
    setLoading(true);
    try {
      const element = document.getElementById('result-card');
      if (!element) return;

      const dataUrl = await toPng(element, {
        quality: 0.95,
        pixelRatio: 2,
      });

      // Create download link
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={captureScreenshot}
      disabled={loading}
      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
    >
      {loading ? (
        <>
          <span className="animate-spin">⏳</span>
          <span>Menyimpan...</span>
        </>
      ) : (
        <>
          <span>📸</span>
          <span>Simpan Gambar</span>
        </>
      )}
    </motion.button>
  );
}
