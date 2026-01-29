'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { trackShare } from '@/lib/analytics';

interface ShareButtonProps {
  resultId: string;
}

export default function ShareButton({ resultId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const localData = localStorage.getItem(`personality_result_${resultId}`);
    
    if (localData) {
      try {
        const data = JSON.parse(localData);
        const compressed = {
          p: data.personality.id,
          s: data.scores,
          t: data.timestamp
        };
        const encoded = btoa(JSON.stringify(compressed));
        setShareUrl(`${window.location.origin}/result/${resultId}?data=${encoded}`);
      } catch (error) {
        console.error('Error encoding result:', error);
        setShareUrl(`${window.location.origin}/result/${resultId}`);
      }
    } else {
      setShareUrl(`${window.location.origin}/result/${resultId}`);
    }
  }, [resultId]);

  const copyToClipboard = async () => {
    if (!shareUrl) return;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      
      const localData = localStorage.getItem(`personality_result_${resultId}`);
      if (localData) {
        const data = JSON.parse(localData);
        trackShare('copy_link', data.personality.id, resultId);
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={copyToClipboard}
      disabled={!shareUrl}
      className="btn btn-secondary min-w-[120px] sm:min-w-[140px] text-sm sm:text-base py-3"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="hidden sm:inline">Tersalin!</span>
          <span className="sm:hidden">OK!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </>
      )}
    </motion.button>
  );
}
