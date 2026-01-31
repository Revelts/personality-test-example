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
import MicroReactionPopup from '@/components/MicroReactionPopup';
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
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showMicroReaction, setShowMicroReaction] = useState(false);
  const [currentMicroReaction, setCurrentMicroReaction] = useState('');

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
    setSelectedAnswer(answerId);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    if (!selectedAnswer || isTransitioning) return;

    const answer = currentQuestion.answers.find(a => a.id === selectedAnswer);
    if (!answer) return;

    // Check if this is Q5, Q10, Q15, or Q20 (show micro reaction)
    const nextQuestionNumber = currentQuestionIndex + 1;
    const shouldShowMicroReaction = nextQuestionNumber % 5 === 0;

    if (shouldShowMicroReaction) {
      // Show micro reaction for this answer
      setCurrentMicroReaction(answer.microReaction);
      setShowMicroReaction(true);
    } else {
      // Skip micro reaction, proceed directly
      handleMicroReactionContinue();
    }
  }, [selectedAnswer, isTransitioning, currentQuestion, currentQuestionIndex]);

  const handleMicroReactionContinue = useCallback(() => {
    setShowMicroReaction(false);

    if (!selectedAnswer) return;

    const answer = currentQuestion.answers.find(a => a.id === selectedAnswer);
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
      [currentQuestionIndex]: selectedAnswer!  // Non-null assertion since we checked above
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
        
        setSelectedAnswer(null);
        setIsTransitioning(false);
      }
    }, 250);
  }, [selectedAnswer, currentQuestion, currentQuestionIndex, totalQuestions, scores, answers, userName, handleTestComplete]);

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
      className="min-h-screen bg-bg-primary relative flex flex-col"
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
      {/* Header with Back button and Logo */}
      <motion.header 
        className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-bg-secondary relative z-30"
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? -20 : 0
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-text-primary hover:text-brand-red transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base font-medium">Back</span>
        </button>

        {/* SanDisk Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 120 20" className="h-5 sm:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#E10600" letterSpacing="1">
              SANDISK™
            </text>
          </svg>
        </div>
      </motion.header>

      {/* Progress Bar */}
      <motion.div 
        className="relative z-20 px-4 sm:px-6 pt-4"
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <USBProgressBar 
          progress={(currentQuestionIndex / totalQuestions) * 100}
          showStatusText={false}
        />
      </motion.div>

      {/* Main content area - scrollable with bottom padding for fixed elements */}
      <motion.div 
        className="flex-1 overflow-y-auto px-4 sm:px-6 pb-72 sm:pb-80"
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <FuturisticQuestion
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
            isTransitioning={isTransitioning}
          />
        </AnimatePresence>
      </motion.div>

      {/* Fixed Bottom Section - Product Image + Next Button */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-border px-4 sm:px-6 py-4 sm:py-6 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isExiting ? 0 : 1, 
          y: isExiting ? 20 : 0 
        }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          {/* Product Image - SanDisk Phone Drive */}
          <div className="relative w-full h-32 sm:h-40 bg-gradient-to-br from-bg-surface to-bg-elevated rounded-xl overflow-hidden flex items-center justify-center border border-border">
            {/* Placeholder for product image */}
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2">📱💾</div>
              <p className="text-xs sm:text-sm font-semibold text-text-secondary tracking-wide">SANDISK PHONE DRIVE</p>
            </div>
          </div>

          {/* Next Button - Style matching ShareButton */}
          <motion.button
            onClick={handleNext}
            disabled={!selectedAnswer || isTransitioning}
            whileHover={selectedAnswer && !isTransitioning ? { scale: 1.02 } : {}}
            whileTap={selectedAnswer && !isTransitioning ? { scale: 0.98 } : {}}
            style={{
              borderRadius: '2px',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
            className={`w-full py-4 sm:py-5 font-bold text-base sm:text-lg tracking-wide uppercase transition-all duration-300 inline-flex items-center justify-center ${
              selectedAnswer && !isTransitioning
                ? 'bg-transparent border-2 border-border text-text-primary hover:border-brand-red hover:shadow-[inset_0_0_0_1px_rgba(225,6,0,0.3),0_0_16px_rgba(225,6,0,0.2)] hover:bg-[rgba(225,6,0,0.05)] cursor-pointer'
                : 'bg-transparent border-2 border-border/30 text-text-tertiary cursor-not-allowed opacity-40'
            }`}
          >
            Next
          </motion.button>
        </div>
      </motion.div>

      {/* Micro Reaction Popup - Only shows every 5 questions */}
      <MicroReactionPopup
        microReaction={currentMicroReaction}
        onContinue={handleMicroReactionContinue}
        isVisible={showMicroReaction}
      />

      {/* Break Session - Removed, using Micro Reaction instead */}
    </motion.div>
  );
}
