'use client';

import { motion } from 'framer-motion';

interface PixelDecorationProps {
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'quiz' | 'result';
}

export default function PixelDecoration({ 
  animated = true,
  size = 'md',
  variant = 'default'
}: PixelDecorationProps) {
  const pixelSize = size === 'sm' ? 8 : size === 'md' ? 12 : 16;
  
  const corners = variant === 'quiz' ? [
    { id: 'top-right', position: 'top-6 right-6' },
    { id: 'bottom-left', position: 'bottom-[210px] sm:bottom-[350px] left-6' },
    { id: 'bottom-right', position: 'bottom-[210px] sm:bottom-[350px] right-6' },
  ] : variant === 'result' ? [
    { id: 'top-left', position: 'top-14 sm:top-16 left-6' },
    { id: 'top-right', position: 'top-14 sm:top-16 right-6' },
    { id: 'bottom-left', position: 'bottom-6 left-6' },
    { id: 'bottom-right', position: 'bottom-6 right-6' },
  ] : [
    { id: 'top-left', position: 'top-6 left-6' },
    { id: 'top-right', position: 'top-6 right-6' },
    { id: 'bottom-left', position: 'bottom-6 left-6' },
    { id: 'bottom-right', position: 'bottom-6 right-6' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {corners.map((corner, index) => (
        <div
          key={corner.id}
          className={`absolute bg-brand-red opacity-90 ${corner.position}`}
          style={{
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
          }}
        />
      ))}
    </div>
  );
}
