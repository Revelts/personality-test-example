'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PixelDecorationProps {
  density?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

interface Pixel {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

export default function PixelDecoration({ 
  density = 'medium',
  animated = true 
}: PixelDecorationProps) {
  const pixelCount = density === 'low' ? 15 : density === 'medium' ? 25 : 40;
  
  // Generate pixels only on client to avoid hydration mismatch (Math.random differs on server vs client)
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    setPixels(
      Array.from({ length: pixelCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() > 0.7 ? 8 : Math.random() > 0.4 ? 6 : 4,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 3,
      }))
    );
  }, [pixelCount]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pixels.map((pixel) => (
        animated ? (
          <motion.div
            key={pixel.id}
            className="absolute bg-brand-red"
            style={{
              left: pixel.left,
              top: pixel.top,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
            }}
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: pixel.duration,
              repeat: Infinity,
              delay: pixel.delay,
              ease: "easeInOut"
            }}
          />
        ) : (
          <div
            key={pixel.id}
            className="absolute bg-brand-red opacity-50"
            style={{
              left: pixel.left,
              top: pixel.top,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
            }}
          />
        )
      ))}
    </div>
  );
}
