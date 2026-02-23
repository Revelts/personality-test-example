/**
 * Social Wall Component
 * 3x3 grid of mock social posts (ready for Instagram API integration)
 */

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import Image from 'next/image';

interface MockPost {
  id: number;
  username: string;
  imageUrl: string;
  category: 'STUNT' | 'CORE';
  likes: number;
}

const mockPosts: MockPost[] = [
  { id: 1, username: '@adventurer_id', imageUrl: '🏃', category: 'STUNT', likes: 234 },
  { id: 2, username: '@memorykeeper', imageUrl: '📸', category: 'CORE', likes: 189 },
  { id: 3, username: '@wildchild', imageUrl: '🏄', category: 'STUNT', likes: 456 },
  { id: 4, username: '@coreshots', imageUrl: '🌅', category: 'CORE', likes: 312 },
  { id: 5, username: '@adrenaline_jk', imageUrl: '🚴', category: 'STUNT', likes: 567 },
  { id: 6, username: '@precious_moments', imageUrl: '💝', category: 'CORE', likes: 423 },
  { id: 7, username: '@fearless99', imageUrl: '🪂', category: 'STUNT', likes: 678 },
  { id: 8, username: '@lifearchive', imageUrl: '🎭', category: 'CORE', likes: 201 },
  { id: 9, username: '@extremesports', imageUrl: '🏂', category: 'STUNT', likes: 789 },
];

export default function SocialWall() {
  const [selectedPost, setSelectedPost] = useState<MockPost | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {mockPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: reducedMotion ? 0.1 : 0.4, delay: index * 0.05 }}
            whileHover={reducedMotion ? {} : { scale: 1.03 }}
            onClick={() => setSelectedPost(post)}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
          >
            {/* Mock Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-surface flex items-center justify-center text-6xl sm:text-7xl">
              {post.imageUrl}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {post.username}
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  post.category === 'STUNT' 
                    ? 'bg-brand-red text-white' 
                    : 'bg-accent-cyan text-bg-primary'
                }`}>
                  {post.category}
                </span>
                <span className="text-xs text-text-secondary">
                  ❤️ {post.likes}
                </span>
              </div>
            </div>

            {/* Category Badge (Always Visible on Mobile) */}
            <div className="absolute top-2 right-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              <span className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded ${
                post.category === 'STUNT' 
                  ? 'bg-brand-red text-white' 
                  : 'bg-accent-cyan text-bg-primary'
              }`}>
                {post.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple Modal Preview */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="card max-w-lg w-full p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-text-primary">
                {selectedPost.username}
              </h3>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-text-tertiary hover:text-text-primary text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="aspect-square bg-gradient-to-br from-bg-elevated to-bg-surface rounded-lg flex items-center justify-center text-9xl mb-4">
              {selectedPost.imageUrl}
            </div>

            <div className="flex items-center justify-between">
              <span className={`text-sm font-semibold px-3 py-1.5 rounded ${
                selectedPost.category === 'STUNT' 
                  ? 'bg-brand-red text-white' 
                  : 'bg-accent-cyan text-bg-primary'
              }`}>
                {selectedPost.category}
              </span>
              <span className="text-base text-text-secondary">
                ❤️ {selectedPost.likes} likes
              </span>
            </div>

            <p className="text-sm text-text-tertiary mt-4 text-center">
              Click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
