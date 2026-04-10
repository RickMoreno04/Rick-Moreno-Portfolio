/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        neon: {
          green: '#00ff88',
          blue: '#00d4ff',
          purple: '#a855f7',
          cyan: '#22d3ee',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          card: '#12121a',
          elevated: '#1a1a2e',
        },
        border: {
          DEFAULT: '#1e293b',
          glow: 'rgba(0, 212, 255, 0.3)',
        },
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff88' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        slideIn: {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        pipelineFlow: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        countUp: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink 0.75s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        scanline: 'scanline 3s linear infinite',
        slideIn: 'slideIn 0.5s ease-out',
        pipelineFlow: 'pipelineFlow 3s linear infinite',
        countUp: 'countUp 0.6s ease-out',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}

