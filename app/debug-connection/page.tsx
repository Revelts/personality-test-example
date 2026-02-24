'use client';

import { useState } from 'react';
import ConnectionAnimation from '@/components/ConnectionAnimation';

export default function DebugConnectionPage() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleComplete = () => {
    console.log('Animation completed!');
    setShowAnimation(false);
    // Reset after 1 second
    setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Control Panel */}
      <div className="fixed top-4 left-4 z-[100] bg-bg-secondary p-4 rounded-lg border border-border">
        <h2 className="text-white font-bold mb-2">Debug Controls</h2>
        <button
          onClick={() => setShowAnimation(!showAnimation)}
          className="px-4 py-2 bg-brand-red text-white rounded hover:bg-red-700 transition-colors"
        >
          {showAnimation ? 'Hide' : 'Show'} Animation
        </button>
        <div className="mt-2 text-xs text-text-secondary">
          <p>Status: {showAnimation ? 'Running' : 'Stopped'}</p>
        </div>
      </div>

      {/* Connection Animation */}
      {showAnimation && (
        <ConnectionAnimation onComplete={handleComplete} />
      )}

      {/* Info Panel */}
      {!showAnimation && (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center text-text-primary">
            <h1 className="text-2xl font-bold mb-4">Animation Completed</h1>
            <p className="text-text-secondary">Restarting in 1 second...</p>
          </div>
        </div>
      )}
    </div>
  );
}
