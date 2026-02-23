/**
 * Custom Red Play Button Cursor - Optimized Version
 * Using base64 encoded SVG for better performance
 */

'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Create optimized SVG cursor with minimal code
    const cursorSVG = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4444"/><stop offset=".5" stop-color="#E10600"/><stop offset="1" stop-color="#B80500"/></linearGradient></defs><path d="M4 2L4 22L20 12Z" fill="url(#g)" stroke="#000" stroke-width=".5" stroke-opacity=".2" filter="drop-shadow(1px 1px 2px rgba(0,0,0,.4))"/></svg>`;

    // Use btoa for base64 encoding (faster and more reliable)
    const base64SVG = btoa(cursorSVG);
    const cursorURL = `data:image/svg+xml;base64,${base64SVG}`;

    // Create style element with higher specificity
    const styleId = 'custom-cursor-style';
    let style = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }

    // Apply with !important and high specificity to prevent fallback
    style.textContent = `
      * {
        cursor: url("${cursorURL}") 4 12, pointer !important;
      }
      html, body, a, button, input, textarea, select, [role="button"], [role="link"] {
        cursor: url("${cursorURL}") 4 12, pointer !important;
      }
    `;

    // Also apply directly to body for redundancy
    document.body.style.setProperty('cursor', `url("${cursorURL}") 4 12, pointer`, 'important');

    // Force reflow to ensure cursor is cached
    document.body.offsetHeight;

    // Cleanup
    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
      document.body.style.cursor = '';
    };
  }, []);

  return null;
}

