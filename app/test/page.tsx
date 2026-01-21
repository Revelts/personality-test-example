'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import MicroInteraction from '@/components/MicroInteraction';
import { questions } from '@/lib/questions';
import { getJoke } from '@/lib/jokes';
import { calculatePersonality, Scores } from '@/lib/results';

export default function TestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showJoke, setShowJoke] = useState(false);
  const [currentJoke, setCurrentJoke] = useState({ joke: '', emoji: '' });
  const [scores, setScores] = useState<Scores>({
    logical: 0,
    creative: 0,
    empathetic: 0,
    leader: 0,
    adventurer: 0
  });

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleSelectAnswer = useCallback((answerId: string) => {
    setSelectedAnswer(answerId);

    // Find the answer and update scores
    const answer = currentQuestion.answers.find(a => a.id === answerId);
    if (answer) {
      setScores(prevScores => ({
        ...prevScores,
        [answer.trait]: prevScores[answer.trait] + 1
      }));

      // Show joke/quote
      const joke = getJoke(currentQuestion.id, answerId);
      setCurrentJoke(joke);
      setShowJoke(true);
    }
  }, [currentQuestion]);

  const handleContinue = useCallback(() => {
    setShowJoke(false);
    setSelectedAnswer(null);

    // Check if we're at the last question
    if (currentQuestionIndex === totalQuestions - 1) {
      // Calculate personality and save result
      const personality = calculatePersonality(scores);
      
      // Generate unique ID
      const id = Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      
      // Save to localStorage with name
      const resultData = {
        personality,
        scores,
        userName,
        timestamp: Date.now()
      };
      
      localStorage.setItem(`personality_result_${id}`, JSON.stringify(resultData));
      
      // Redirect to result page
      router.push(`/result/${id}`);
    } else {
      // Move to next question
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions, scores, userName, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4 py-8">
      <div className="max-w-4xl mx-auto">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={totalQuestions} 
        />

        <AnimatePresence mode="wait">
          {!showJoke ? (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleSelectAnswer}
            />
          ) : (
            <MicroInteraction
              key={`joke-${currentQuestion.id}`}
              joke={currentJoke.joke}
              emoji={currentJoke.emoji}
              onContinue={handleContinue}
            />
          )}
        </AnimatePresence>

        {/* Back button */}
        {currentQuestionIndex > 0 && !showJoke && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            className="mt-8 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            ← Kembali ke pertanyaan sebelumnya
          </motion.button>
        )}
      </div>
    </div>
  );
}
