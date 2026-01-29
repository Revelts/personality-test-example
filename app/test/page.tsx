/**
 * Test Page - SanDisk-Inspired Design (Fully Responsive)
 * 
 * Design Philosophy:
 * - Industrial tech aesthetic
 * - Near-black background
 * - Red only for signals & interactions
 * - One question at a time
 * - Fully responsive for all devices
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import FuturisticQuestion from '@/components/FuturisticQuestion';
import USBProgressBar from '@/components/USBProgressBar';
import ConnectionAnimation from '@/components/ConnectionAnimation';
import { questions } from '@/lib/questions';
import { calculatePersonality, Scores } from '@/lib/results';
import { trackTestStart, trackQuestionAnswer, trackTestComplete } from '@/lib/analytics';
import { saveProgress, loadProgress, clearProgress } from '@/lib/progressStorage';

export default function TestPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [resultId, setResultId] = useState<string>('');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<Scores>({
    logical: 0,
    creative: 0,
    empathetic: 0,
    leader: 0,
    adventurer: 0
  });
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);
  const [showRestoredNotice, setShowRestoredNotice] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Load saved progress on mount (refresh/back button recovery)
  useEffect(() => {
    // Check if user has entered name
    const name = localStorage.getItem('test_taker_name');
    if (!name) {
      router.push('/');
      return;
    }
    setUserName(name);

    // Try to load saved progress
    const savedProgress = loadProgress();
    
    if (savedProgress && savedProgress.userName === name) {
      // Restore saved state
      console.log('🔄 Restoring progress from question', savedProgress.currentQuestionIndex + 1);
      setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
      setScores(savedProgress.scores);
      setAnswers(savedProgress.answers);
      
      // Show "Progress Restored" notice
      setShowRestoredNotice(true);
      setTimeout(() => setShowRestoredNotice(false), 4000); // Hide after 4s
    } else {
      // Fresh start - track test start
      trackTestStart(name);
    }

    setIsLoadingProgress(false);
  }, [router]);

  const handleTestComplete = useCallback(() => {
    const personality = calculatePersonality(scores);
    const id = Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
    
    trackTestComplete(userName, personality.id, id, scores);
    
    const resultData = {
      personality,
      scores,
      userName,
      timestamp: Date.now()
    };
    
    localStorage.setItem(`personality_result_${id}`, JSON.stringify(resultData));
    setResultId(id);
    
    // Clear saved progress (test is complete)
    clearProgress();
    console.log('✅ Test completed - progress cleared');
    
    // Step 1: Trigger exit animation (fade out test page)
    setIsExiting(true);
    
    // Step 2: After exit animation + progress bar plug-in complete, show connection animation
    setTimeout(() => {
      setIsConnecting(true);
    }, 1800); // 1.8s: 1s for progress bar plug-in + 0.8s for fade out
  }, [scores, userName]);

  const handleConnectionComplete = useCallback(() => {
    // This will be called after 5 seconds of connection animation
    router.push(`/result/${resultId}`);
  }, [router, resultId]);

  const handleSelectAnswer = useCallback((answerId: string) => {
    if (isTransitioning) return;

    const answer = currentQuestion.answers.find(a => a.id === answerId);
    if (!answer) return;

    // Update scores
    const newScores = {
      ...scores,
      [answer.trait]: scores[answer.trait] + 1
    };
    setScores(newScores);

    // Save answer mapping
    const newAnswers = {
      ...answers,
      [currentQuestionIndex]: answerId
    };
    setAnswers(newAnswers);

    // Track analytics
    trackQuestionAnswer(
      currentQuestion.id,
      currentQuestion.text,
      answer.id,
      answer.text,
      answer.trait
    );

    setIsTransitioning(true);

    setTimeout(() => {
      if (currentQuestionIndex === totalQuestions - 1) {
        // Last question - complete test
        handleTestComplete();
      } else {
        // Move to next question
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        
        // Auto-save progress after moving to next question
        saveProgress({
          userName,
          currentQuestionIndex: nextIndex,
          scores: newScores,
          answers: newAnswers,
          timestamp: Date.now(),
          version: '1.0'
        });
        
        setIsTransitioning(false);
      }
    }, 250);
  }, [currentQuestion, currentQuestionIndex, totalQuestions, isTransitioning, handleTestComplete, scores, answers, userName]);

  // Loading progress from localStorage
  if (isLoadingProgress) {
    return (
      <div className="h-full flex items-center justify-center bg-bg-primary">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-5xl mb-4"
          >
            ⏳
          </motion.div>
          <p className="text-base text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  if (!userName) {
    return null;
  }

  // Show connection animation when test is complete
  if (isConnecting) {
    return <ConnectionAnimation onComplete={handleConnectionComplete} />;
  }

  return (
    <motion.div 
      className="h-full bg-bg-primary relative"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 0.95 : 1
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Progress Restored Notification */}
      {/* <AnimatePresence>
        {showRestoredNotice && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-bg-surface border border-brand-red/60 rounded-lg shadow-elevation-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-brand-red text-lg">🔄</span>
              <p className="text-sm sm:text-base text-text-primary font-medium">
                Progress restored! Continuing from question {currentQuestionIndex + 1}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* USB Progress Bar - At top */}
      <motion.div 
        className="relative z-30 pt-4 sm:pt-6 px-4 sm:px-6 md:px-8"
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? -20 : 0
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <USBProgressBar 
            progress={(currentQuestionIndex / totalQuestions) * 100}
            showStatusText={false}
          />
        </div>
      </motion.div>

      {/* Main content - Centered vertically */}
      <motion.div 
        className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12"
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? 20 : 0
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <FuturisticQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            onSelectAnswer={handleSelectAnswer}
            isTransitioning={isTransitioning}
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
