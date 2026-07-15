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
          50: '#eefbf6',
          100: '#d6f5e8',
          200: '#aeead4',
          300: '#7bd9bc',
          400: '#48c2a0',
          500: '#26a583',
          600: '#18856b',
          700: '#146a58',
          800: '#125447',
          900: '#10453b',
          950: '#062720',
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
      },
    },
  },
  plugins: [],
};

export default config;
