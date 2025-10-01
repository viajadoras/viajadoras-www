/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E6FFFB',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0F766E',
          700: '#0D5F59',
          800: '#0B4A45',
          900: '#073B36'
        },
        accent: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95'
        },
        info: { 500: '#3B82F6', 600: '#2563EB' },
        success: { 500: '#22C55E', 600: '#16A34A' },
        warning: { 500: '#F59E0B', 600: '#D97706' },
        error: { 500: '#EF4444', 600: '#DC2626' }
      },
      borderRadius: { xl: '1rem' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
