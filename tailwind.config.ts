import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      
      colors: {
        // SanDisk Cyber-Tech Design System
        
        // Background System (Darker for cyber-punk)
        bg: {
          primary: '#0A0A0C',      // Deep black base
          secondary: '#111113',    // Dark charcoal
          surface: '#18181B',      // Card/panel surface
          elevated: '#1F1F23',     // Elevated surface
        },
        
        // Brand Colors (SanDisk Red + Neon)
        brand: {
          red: {
            DEFAULT: '#E10600',    // Primary SanDisk Red
            light: '#FF1F0F',      // Hover state
            dark: '#B80500',       // Active/pressed state
            muted: '#D32F2F',      // Error/warning (softer)
            neon: '#FF0F0F',       // Neon accent
          },
        },
        
        // Accent Colors (Cyber-punk palette)
        accent: {
          cyan: '#00F0FF',         // Neon cyan
          purple: '#B026FF',       // Neon purple
          yellow: '#FFE500',       // Neon yellow
        },
        
        // Text System (Higher contrast)
        text: {
          primary: '#F5F5F5',      // Bright white, main text
          secondary: '#9E9E9E',    // Muted gray, secondary text
          tertiary: '#5A5A5A',     // Low contrast, disabled
          inverse: '#0A0A0C',      // Text on light backgrounds
        },
        
        // Border & Divider
        border: {
          DEFAULT: '#2A2A2E',      // Default border
          subtle: '#1A1A1E',       // Subtle divider
          base: '#2A2A2E',         // Alias for compatibility
          focus: '#E10600',        // Focus state (red)
          hover: '#E1060040',      // Hover hint (red, 25% opacity)
          glow: 'rgba(225, 6, 0, 0.3)', // Glow effect
        },
        
        // State Colors
        state: {
          hover: '#252527',        // Hover background
          active: '#E10600',       // Active state (red)
          focus: '#E1060080',      // Focus glow (red, 50% opacity)
          disabled: '#18181B',     // Disabled background
          selected: '#E1060020',   // Selected background (red, 12% opacity)
          error: '#D32F2F',        // Error state
        },
        
        // Semantic Colors
        semantic: {
          success: '#4CAF50',      // Success state
          warning: '#FF9800',      // Warning state
          error: '#D32F2F',        // Error state (red variant)
          info: '#757575',         // Info/neutral
        },
        
        // Metallic Accent (Cyber-tech hardware)
        metallic: {
          DEFAULT: '#3A3A3C',      // Dark metallic
          light: '#4F4F51',        // Lighter metallic
        },
      },
      
      // Typography Scale (Neo-Grotesk tuned)
      fontSize: {
        'display': ['3.5rem', { 
          lineHeight: '1.05', 
          letterSpacing: '-0.03em', 
          fontWeight: '700' 
        }],
        'h1': ['2.5rem', { 
          lineHeight: '1.15', 
          letterSpacing: '-0.02em', 
          fontWeight: '700' 
        }],
        'h2': ['2rem', { 
          lineHeight: '1.25', 
          letterSpacing: '-0.015em', 
          fontWeight: '600' 
        }],
        'h3': ['1.5rem', { 
          lineHeight: '1.35', 
          letterSpacing: '-0.01em', 
          fontWeight: '600' 
        }],
        'body-lg': ['1.125rem', { 
          lineHeight: '1.55', 
          letterSpacing: '-0.005em',
          fontWeight: '400' 
        }],
        'body': ['1rem', { 
          lineHeight: '1.6', 
          letterSpacing: '0',
          fontWeight: '400' 
        }],
        'body-sm': ['0.875rem', { 
          lineHeight: '1.5', 
          letterSpacing: '0.01em',
          fontWeight: '400' 
        }],
        'caption': ['0.75rem', { 
          lineHeight: '1.4', 
          letterSpacing: '0.02em',
          fontWeight: '500' 
        }],
      },
      
      // Spacing System (8px base)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius (Sharp, minimal - cyber aesthetic)
      borderRadius: {
        'none': '0',
        'sm': '2px',         // Minimal
        'DEFAULT': '4px',    // Sharp corners
        'md': '6px',         // Slightly rounded
        'lg': '8px',         // Medium rounded
        'xl': '12px',        // Large rounded
        '2xl': '16px',       // Extra large
      },
      
      // Box Shadow (Cyber-tech elevation)
      boxShadow: {
        'glow-red': '0 0 20px rgba(225, 6, 0, 0.4), 0 0 40px rgba(225, 6, 0, 0.2)',
        'glow-red-sm': '0 0 12px rgba(225, 6, 0, 0.3)',
        'glow-red-md': '0 0 16px rgba(225, 6, 0, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'elevation-sm': '0 2px 8px rgba(0, 0, 0, 0.5)',
        'elevation-md': '0 4px 16px rgba(0, 0, 0, 0.6)',
        'elevation-lg': '0 8px 32px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      
      // Animation Timings
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // Cyber-Punk Animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'neon-flicker': 'neonFlicker 0.15s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(225, 6, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(225, 6, 0, 0.5), 0 0 40px rgba(225, 6, 0, 0.3)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
