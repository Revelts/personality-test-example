'use client';

import { motion } from 'framer-motion';
import { PersonalityResult } from '@/lib/results';

interface ResultCardProps {
  result: PersonalityResult;
  userName?: string;
}

export default function ResultCard({ result, userName }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="result-card"
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${result.color} p-8 text-white text-center`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-8xl mb-4"
        >
          {result.emoji}
        </motion.div>
        {userName && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl opacity-90 mb-2"
          >
            {userName}, kamu adalah...
          </motion.p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{result.title}</h1>
        <p className="text-xl md:text-2xl opacity-90 italic">"{result.tagline}"</p>
      </div>

      <div className="p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {result.description}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Karakter Kamu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <span className="text-indigo-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{trait}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Kekuatan Kamu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {result.strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <span className="text-purple-500">★</span>
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
