import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff7fb',
          100: '#dcedf6',
          200: '#b9dbee',
          300: '#8cc3e0',
          400: '#57a3cb',
          500: '#337fb0',
          600: '#256493',
          700: '#1f5178',
          800: '#1e4363',
          900: '#1c3a54',
          950: '#112536',
        },
        coral: {
          50: '#fff3ed',
          100: '#ffe4d4',
          200: '#ffc6a8',
          300: '#ffa070',
          400: '#ff7a45',
          500: '#fa5a1f',
          600: '#eb4110',
          700: '#c22f0d',
          800: '#9a2812',
          900: '#7d2412',
          950: '#440f07',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        blob: 'blob 14s infinite',
        'pulse-slow': 'pulse-slow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        sway: 'sway 10s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'pulse-ring-delayed': 'pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) 1.1s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2.5%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '70%': { transform: 'scale(1.7)', opacity: '0' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
