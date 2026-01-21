'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStartTest = () => {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError('Nama wajib diisi ya! 😊');
      return;
    }

    if (trimmedName.length < 2) {
      setError('Nama terlalu pendek. Minimal 2 karakter ya!');
      return;
    }

    // Save name to localStorage
    localStorage.setItem('test_taker_name', trimmedName);
    
    // Navigate to test page
    router.push('/test');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-8xl mb-6"
        >
          🎯
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Temukan
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tipe Kepribadianmu
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Ikuti tes interaktif 20 pertanyaan dan temukan kekuatan unik, 
          karakter, dan apa yang bikin kamu spesial!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Apa yang Bakal Kamu Dapat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Cepat & Seru
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                20 pertanyaan dengan jokes lucu di setiap jawaban
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Personal Banget
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hasil yang sesuai dengan kepribadian unik kamu
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Bisa Dishare
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share hasil kamu ke temen dengan mudah
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">
              Siapa nama kamu? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && name.trim()) {
                  handleStartTest();
                }
              }}
              placeholder="Masukkan nama kamu..."
              className={`w-full px-4 py-3 rounded-lg border-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 transition-all ${
                error 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
              }`}
              maxLength={50}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 text-center"
              >
                {error}
              </motion.p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              Nama kamu akan muncul di hasil tes
            </p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: name.trim() ? 1.05 : 1 }}
          whileTap={{ scale: name.trim() ? 0.95 : 1 }}
          onClick={handleStartTest}
          disabled={!name.trim()}
          className={`text-xl font-bold py-4 px-12 rounded-full shadow-2xl transition-all ${
            name.trim()
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-3xl cursor-pointer'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          Mulai Tes Sekarang →
        </motion.button>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Gak perlu daftar • Cuma 5 menit
        </p>
      </motion.div>
    </div>
  );
}
