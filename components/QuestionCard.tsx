'use client';

import { motion } from 'framer-motion';
import { Question } from '@/lib/questions';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
}

export default function QuestionCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer 
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        {question.text}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <motion.button
            key={answer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectAnswer(answer.id)}
            className={`
              p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-105
              ${selectedAnswer === answer.id
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:shadow-xl border-2 border-gray-200 dark:border-gray-700'
              }
            `}
          >
            <span className="text-lg font-medium">{answer.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
