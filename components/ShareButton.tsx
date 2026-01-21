'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ShareButtonProps {
  resultId: string;
}

export default function ShareButton({ resultId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Get the result from localStorage
    const localData = localStorage.getItem(`personality_result_${resultId}`);
    
    if (localData) {
      try {
        const data = JSON.parse(localData);
        // Encode result data in URL for sharing
        const compressed = {
          p: data.personality.id,
          s: data.scores,
          t: data.timestamp
        };
        const encoded = btoa(JSON.stringify(compressed));
        setShareUrl(`${window.location.origin}/result/${resultId}?data=${encoded}`);
      } catch (error) {
        console.error('Error encoding result:', error);
        // Fallback to simple URL
        setShareUrl(`${window.location.origin}/result/${resultId}`);
      }
    } else {
      // Fallback to simple URL
      setShareUrl(`${window.location.origin}/result/${resultId}`);
    }
  }, [resultId]);

  const copyToClipboard = async () => {
    if (!shareUrl) return;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={copyToClipboard}
      disabled={!shareUrl}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg
        ${copied 
          ? 'bg-green-500 text-white' 
          : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {copied ? (
        <>
          <span>✓</span>
          <span>Link Tersalin!</span>
        </>
      ) : (
        <>
          <span>🔗</span>
          <span>Share Hasil</span>
        </>
      )}
    </motion.button>
  );
}
