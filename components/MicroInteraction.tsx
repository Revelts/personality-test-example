'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface MicroInteractionProps {
  joke: string;
  emoji: string;
  onContinue: () => void;
}

export default function MicroInteraction({ 
  joke, 
  emoji, 
  onContinue 
}: MicroInteractionProps) {
  useEffect(() => {
    // Auto-continue after 4 seconds
    const timer = setTimeout(() => {
      onContinue();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={onContinue}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1.1, 1]
          }}
          transition={{ duration: 0.5 }}
          className="text-6xl text-center mb-4"
        >
          {emoji}
        </motion.div>

        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
          {joke}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Lanjut →
        </motion.button>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
          Otomatis lanjut dalam beberapa saat...
        </p>
      </motion.div>
    </motion.div>
  );
}
