/**
 * Analytics & Tracking Helper
 * Centralized dataLayer management for GTM → GA4 & Meta Pixel
 */

// TypeScript definitions for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Standard dataLayer event structure
export interface DataLayerEvent {
  event: string;
  page_name?: string;
  page_path?: string;
  page_type?: string;
  user_id?: string;
  user_name?: string;
  test_id?: string;
  personality_type?: string;
  question_number?: number;
  answer_id?: string;
  value?: number;
  currency?: string;
  [key: string]: any; // Allow additional properties
}

/**
 * Initialize dataLayer if not exists
 * Called once on app mount
 */
export const initializeDataLayer = (): void => {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  
  // Push initial state
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
};

/**
 * Generic function to push events to dataLayer
 * All tracking should use this function
 */
export const pushToDataLayer = (data: DataLayerEvent): void => {
  if (typeof window === 'undefined') return;
  
  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];
  
  // Add timestamp
  const enrichedData = {
    ...data,
    timestamp: new Date().toISOString(),
  };
  
  // Push to dataLayer
  window.dataLayer.push(enrichedData);
  
  // Debug log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 DataLayer Push:', enrichedData);
  }
};

/**
 * Standard Event Trackers
 * Pre-configured tracking functions for common events
 */

// 1. Page View (SPA-aware)
export const trackPageView = (pageName: string, pageType: string = 'default'): void => {
  pushToDataLayer({
    event: 'page_view',
    page_name: pageName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    page_type: pageType,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    page_referrer: typeof document !== 'undefined' ? document.referrer : '',
  });
};

// 2. Test Started
export const trackTestStart = (userName: string): void => {
  pushToDataLayer({
    event: 'test_start',
    page_name: 'Test Start',
    page_type: 'test',
    user_name: userName,
  });
};

// 3. Question Answered
export const trackQuestionAnswer = (
  questionNumber: number,
  questionText: string,
  answerId: string,
  answerText: string,
  trait: string
): void => {
  pushToDataLayer({
    event: 'question_answered',
    page_name: `Question ${questionNumber}`,
    page_type: 'test',
    question_number: questionNumber,
    question_text: questionText,
    answer_id: answerId,
    answer_text: answerText,
    trait: trait,
  });
};

// 4. Test Completed
export const trackTestComplete = (
  userName: string,
  personalityType: string,
  testId: string,
  scores: any
): void => {
  pushToDataLayer({
    event: 'test_complete',
    page_name: 'Test Complete',
    page_type: 'result',
    user_name: userName,
    personality_type: personalityType,
    test_id: testId,
    logical_score: scores.logical,
    creative_score: scores.creative,
    empathetic_score: scores.empathetic,
    leader_score: scores.leader,
    adventurer_score: scores.adventurer,
  });
};

// 5. Result Viewed
export const trackResultView = (
  personalityType: string,
  testId: string,
  userName?: string
): void => {
  pushToDataLayer({
    event: 'result_view',
    page_name: 'Result Page',
    page_type: 'result',
    personality_type: personalityType,
    test_id: testId,
    user_name: userName,
  });
};

// 6. Share Button Click
export const trackShare = (
  method: string,
  personalityType: string,
  testId: string
): void => {
  pushToDataLayer({
    event: 'share',
    page_name: 'Result Share',
    page_type: 'result',
    share_method: method,
    personality_type: personalityType,
    test_id: testId,
  });
};

// 7. Screenshot Download
export const trackScreenshot = (personalityType: string, testId: string): void => {
  pushToDataLayer({
    event: 'screenshot_download',
    page_name: 'Screenshot',
    page_type: 'result',
    personality_type: personalityType,
    test_id: testId,
  });
};

// 8. Button Click (Generic)
export const trackButtonClick = (
  buttonName: string,
  buttonLocation: string,
  additionalData?: Record<string, any>
): void => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  });
};

// 9. Form Submit (Generic)
export const trackFormSubmit = (
  formName: string,
  formData?: Record<string, any>
): void => {
  pushToDataLayer({
    event: 'form_submit',
    form_name: formName,
    ...formData,
  });
};

// 10. Error Tracking
export const trackError = (
  errorType: string,
  errorMessage: string,
  errorLocation: string
): void => {
  pushToDataLayer({
    event: 'error',
    error_type: errorType,
    error_message: errorMessage,
    error_location: errorLocation,
  });
};

/**
 * Enhanced Conversion Tracking
 * For future monetization or conversion goals
 */
export const trackConversion = (
  conversionName: string,
  value?: number,
  currency: string = 'IDR'
): void => {
  pushToDataLayer({
    event: 'conversion',
    conversion_name: conversionName,
    value: value,
    currency: currency,
  });
};

/**
 * User Identification
 * Call when user is identified (optional)
 */
export const identifyUser = (userId: string, userName?: string): void => {
  pushToDataLayer({
    event: 'user_identify',
    user_id: userId,
    user_name: userName,
  });
};

/**
 * Custom Event
 * For any custom tracking needs
 */
export const trackCustomEvent = (
  eventName: string,
  eventData: Record<string, any>
): void => {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  });
};
