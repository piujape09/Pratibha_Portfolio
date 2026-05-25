/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          void:    '#00000f',
          deep:    '#020212',
          dark:    '#04041a',
          mid:     '#080830',
          navy:    '#0a0a3a',
        },
        neon: {
          cyan:    '#00f5ff',
          blue:    '#1e90ff',
          purple:  '#8b5cf6',
          pink:    '#ff006e',
          green:   '#00ff88',
        },
        glass: {
          white:   'rgba(255,255,255,0.05)',
          blue:    'rgba(0,245,255,0.08)',
          purple:  'rgba(139,92,246,0.08)',
        },
      },
      fontFamily: {
        sans:    ['Manrope', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(0,245,255,0.6), 0 0 60px rgba(0,245,255,0.2)',
        'neon-blue':   '0 0 20px rgba(30,144,255,0.6), 0 0 60px rgba(30,144,255,0.2)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.6), 0 0 60px rgba(139,92,246,0.2)',
        'neon-pink':   '0 0 20px rgba(255,0,110,0.6), 0 0 60px rgba(255,0,110,0.2)',
        'glass':       '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card':        '0 0 0 1px rgba(0,245,255,0.12), 0 20px 60px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'nebula-1': 'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,245,255,0.1) 0%, transparent 50%)',
        'nebula-2': 'radial-gradient(ellipse at 70% 80%, rgba(255,0,110,0.1) 0%, transparent 40%), radial-gradient(ellipse at 10% 10%, rgba(30,144,255,0.12) 0%, transparent 50%)',
        'grid-space': 'linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '80px 80px',
      },
      keyframes: {
        'star-twinkle': {
          '0%,100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.4)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':     { transform: 'translateY(-12px) rotate(1deg)' },
          '66%':     { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(var(--orbit-r,80px)) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(var(--orbit-r,80px)) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 10px rgba(0,245,255,0.4)' },
          '50%':     { boxShadow: '0 0 30px rgba(0,245,255,0.9), 0 0 60px rgba(0,245,255,0.4)' },
        },
        meteor: {
          '0%':   { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(-800px) translateY(400px)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'scan-line': {
          '0%':   { top: '-2px' },
          '100%': { top: '100%' },
        },
        'border-spin': {
          from: { '--border-angle': '0deg' },
          to:   { '--border-angle': '360deg' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'star-twinkle':  'star-twinkle var(--tw-duration,3s) ease-in-out infinite',
        float:           'float 7s ease-in-out infinite',
        orbit:           'orbit var(--orbit-dur,10s) linear infinite',
        'pulse-glow':    'pulse-glow 2.5s ease-in-out infinite',
        meteor:          'meteor var(--meteor-dur,8s) linear infinite',
        shimmer:         'shimmer 3s linear infinite',
        'scan-line':     'scan-line 4s linear infinite',
        'fade-in-up':    'fadeInUp 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

