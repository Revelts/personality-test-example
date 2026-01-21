import { PersonalityResult } from './results';

export interface StoredResult {
  personality: PersonalityResult;
  scores: {
    logical: number;
    creative: number;
    empathetic: number;
    leader: number;
    adventurer: number;
  };
  userName?: string;
  timestamp: number;
}

// Generate a unique ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

// Save result to localStorage
export function saveResult(id: string, result: StoredResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(`personality_result_${id}`, JSON.stringify(result));
    
    // Clean up old results (keep only last 10)
    cleanOldResults();
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

// Get result from localStorage
export function getResult(id: string): StoredResult | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const data = localStorage.getItem(`personality_result_${id}`);
    if (!data) return null;
    
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

// Clean up old results
function cleanOldResults(): void {
  if (typeof window === 'undefined') return;
  
  try {
    const keys = Object.keys(localStorage).filter(key => 
      key.startsWith('personality_result_')
    );
    
    if (keys.length > 10) {
      // Sort by timestamp and remove oldest
      const results = keys.map(key => {
        const data = localStorage.getItem(key);
        if (!data) return null;
        try {
          const parsed = JSON.parse(data);
          return { key, timestamp: parsed.timestamp };
        } catch {
          return null;
        }
      }).filter(Boolean) as { key: string; timestamp: number }[];
      
      results.sort((a, b) => a.timestamp - b.timestamp);
      
      // Remove oldest entries
      const toRemove = results.slice(0, results.length - 10);
      toRemove.forEach(item => localStorage.removeItem(item.key));
    }
  } catch (error) {
    console.error('Error cleaning localStorage:', error);
  }
}

// Encode result data for URL sharing
export function encodeResultForUrl(result: StoredResult): string {
  try {
    const compressed = {
      p: result.personality.id,
      s: result.scores,
      t: result.timestamp
    };
    return btoa(JSON.stringify(compressed));
  } catch (error) {
    console.error('Error encoding result:', error);
    return '';
  }
}

// Decode result data from URL
export function decodeResultFromUrl(encoded: string): StoredResult | null {
  try {
    const decoded = JSON.parse(atob(encoded));
    // We'll need to reconstruct the full personality object from the ID
    return {
      personality: decoded.p as any, // Will be resolved in the component
      scores: decoded.s,
      timestamp: decoded.t
    };
  } catch (error) {
    console.error('Error decoding result:', error);
    return null;
  }
}
