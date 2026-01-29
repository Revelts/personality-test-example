/**
 * Progress Storage Utility
 * 
 * Handles localStorage operations for auto-saving test progress
 * Includes 24h expiry logic and safe client-side access
 */

import { Scores } from './results';

const STORAGE_KEY = 'personality_test_progress';
const EXPIRY_HOURS = 24;

export interface TestProgress {
  userName: string;
  currentQuestionIndex: number;
  scores: Scores;
  answers: Record<number, string>; // questionIndex -> answerId
  timestamp: number;
  version: string; // For future compatibility
}

/**
 * Check if code is running on client-side
 */
const isClient = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Check if saved progress has expired (> 24 hours)
 */
const isExpired = (timestamp: number): boolean => {
  const now = Date.now();
  const hoursPassed = (now - timestamp) / (1000 * 60 * 60);
  return hoursPassed > EXPIRY_HOURS;
};

/**
 * Save current progress to localStorage
 * Auto-saves on every answer
 */
export const saveProgress = (progress: TestProgress): void => {
  if (!isClient()) return;

  try {
    const data = {
      ...progress,
      timestamp: Date.now(),
      version: '1.0',
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log('✅ Progress saved:', data);
  } catch (error) {
    console.error('❌ Failed to save progress:', error);
    // Silently fail - don't break user experience
  }
};

/**
 * Load saved progress from localStorage
 * Returns null if no progress, expired, or invalid
 */
export const loadProgress = (): TestProgress | null => {
  if (!isClient()) return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const progress: TestProgress = JSON.parse(stored);

    // Check expiry
    if (isExpired(progress.timestamp)) {
      console.log('⏰ Progress expired, clearing...');
      clearProgress();
      return null;
    }

    // Validate structure
    if (
      !progress.userName ||
      typeof progress.currentQuestionIndex !== 'number' ||
      !progress.scores ||
      !progress.answers
    ) {
      console.log('⚠️ Invalid progress structure, clearing...');
      clearProgress();
      return null;
    }

    console.log('✅ Progress loaded:', progress);
    return progress;
  } catch (error) {
    console.error('❌ Failed to load progress:', error);
    clearProgress();
    return null;
  }
};

/**
 * Clear saved progress from localStorage
 * Called after test completion or on expiry
 */
export const clearProgress = (): void => {
  if (!isClient()) return;

  try {
    localStorage.removeItem(STORAGE_KEY);
    console.log('🗑️ Progress cleared');
  } catch (error) {
    console.error('❌ Failed to clear progress:', error);
  }
};

/**
 * Check if there is any saved progress
 * Useful for showing "Continue Test" vs "Start Test"
 */
export const hasProgress = (): boolean => {
  if (!isClient()) return false;
  return loadProgress() !== null;
};

/**
 * Get human-readable time since last save
 */
export const getTimeSinceLastSave = (): string | null => {
  const progress = loadProgress();
  if (!progress) return null;

  const minutesPassed = Math.floor((Date.now() - progress.timestamp) / (1000 * 60));
  
  if (minutesPassed < 1) return 'Just now';
  if (minutesPassed === 1) return '1 minute ago';
  if (minutesPassed < 60) return `${minutesPassed} minutes ago`;
  
  const hoursPassed = Math.floor(minutesPassed / 60);
  if (hoursPassed === 1) return '1 hour ago';
  return `${hoursPassed} hours ago`;
};
