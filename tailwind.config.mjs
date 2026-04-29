import colors from 'tailwindcss/colors.js';
import { theme } from './src/data/theme.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [theme.fontFamily, 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Semantic tokens — static lookup for Tailwind purge-safe color resolution
        primary: {
          400: colors[theme.primaryColor][400],
          500: colors[theme.primaryColor][500],
          600: colors[theme.primaryColor][600],
        },
        neutral: {
          50: colors[theme.neutralColor][50],
          100: colors[theme.neutralColor][100],
          200: colors[theme.neutralColor][200],
          300: colors[theme.neutralColor][300],
          400: colors[theme.neutralColor][400],
          500: colors[theme.neutralColor][500],
          600: colors[theme.neutralColor][600],
          700: colors[theme.neutralColor][700],
          800: colors[theme.neutralColor][800],
          900: colors[theme.neutralColor][900],
          950: colors[theme.neutralColor][950],
        },
      },
      borderRadius: {
        brand: theme.borderRadius === 'sharp' ? '0px' : theme.borderRadius === 'soft' ? '0.75rem' : '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
