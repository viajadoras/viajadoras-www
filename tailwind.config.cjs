/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7F50",
          50: "#FFF5F0",
          100: "#FFEAE0",
          200: "#FFD4C0",
          300: "#FFB8A0",
          400: "#FF9A7F",
          500: "#FF7F50",
          600: "#FF6B40",
          700: "#FF5730",
          800: "#E63C1F",
          900: "#CC2800",
        },
        secondary: {
          DEFAULT: "#FADBC5",
          50: "#FFFAF8",
          100: "#FDF8F5",
          200: "#FDE5DC",
          300: "#FDD2C8",
          400: "#FDBFB3",
          500: "#FADBC5",
          600: "#F5C4AD",
          700: "#EDAB91",
          800: "#E09176",
          900: "#D37660",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        success: {
          DEFAULT: "#16A34A",
          500: "#22C55E",
          600: "#16A34A"
        },
        warning: {
          DEFAULT: "#D97706",
          500: "#F59E0B",
          600: "#D97706"
        },
        error: {
          DEFAULT: "#DC2626",
          500: "#EF4444",
          600: "#DC2626"
        },
        coral: {
          50: "#FFF5F0",
          100: "#FFEAE0",
          200: "#FFD4C0",
          300: "#FFB8A0",
          400: "#FF9A7F",
          500: "#FF7F50",
          600: "#FF6B40",
          700: "#FF5730",
          800: "#E63C1F",
          900: "#CC2800",
        },
        peach: {
          50: "#FFFAF8",
          100: "#FDF8F5",
          200: "#FDE5DC",
          300: "#FDD2C8",
          400: "#FDBFB3",
          500: "#FADBC5",
          600: "#F5C4AD",
          700: "#EDAB91",
          800: "#E09176",
          900: "#D37660",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        lavender: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        text: {
          main: "#171717", // neutral-900
          light: "#525252", // neutral-600
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display-lg': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        'soft': '0 20px 60px -15px rgba(255, 127, 80, 0.15)',
        'soft-lg': '0 30px 80px -20px rgba(255, 127, 80, 0.2)',
        'glow': '0 0 60px -10px rgba(139, 92, 246, 0.4)',
        'primary': '0 20px 60px -15px rgba(255, 127, 80, 0.25)',
        'secondary': '0 20px 60px -15px rgba(250, 219, 197, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(15, 100%, 65%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(270, 80%, 70%, 0.15) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(15, 100%, 70%, 0.15) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(15, 95%, 75%, 0.15) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(15, 100%, 65%, 0.15) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(270, 80%, 75%, 0.15) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(15, 100%, 68%, 0.15) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
