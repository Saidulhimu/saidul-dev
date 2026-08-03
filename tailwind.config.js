/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070A12',
          900: '#0B0F17',
          850: '#0F172A',
          800: '#131B2E',
          700: '#1E293B',
          600: '#273449',
          500: '#334155',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F3EFE8',
          300: '#E8E2D8',
          400: '#D6CFC2',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        cyan: {
          glow: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.18), 0 8px 40px -12px rgba(16,185,129,0.35)',
        'glow-cyan': '0 0 0 1px rgba(6,182,212,0.18), 0 8px 40px -12px rgba(6,182,212,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -16px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'drift-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'drift-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(1.15)' },
        },
        'drift-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 50px) scale(0.9)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-6deg)' },
          '75%': { transform: 'rotate(6deg)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '60%': { opacity: '1', transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
        'flip-in': {
          '0%': { opacity: '0', transform: 'perspective(800px) rotateX(-12deg) translateY(20px)' },
          '100%': { opacity: '1', transform: 'perspective(800px) rotateX(0deg) translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'drift-1': 'drift-1 18s ease-in-out infinite',
        'drift-2': 'drift-2 22s ease-in-out infinite',
        'drift-3': 'drift-3 26s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'draw-line': 'draw-line 0.8s ease-out both',
        'gradient-flow': 'gradient-flow 4s ease infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.7s ease-out both',
        'slide-in-right': 'slide-in-right 0.7s ease-out both',
        'pop-in': 'pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'flip-in': 'flip-in 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
