/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7F50",
        secondary: "#FADBC5",
        "background-light": "#FDF8F5",
        "text-main": "#363636",
        "text-light": "#737373",
        accent: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        info: { 500: "#3B82F6", 600: "#2563EB" },
        success: { 500: "#22C55E", 600: "#16A34A" },
        warning: { 500: "#F59E0B", 600: "#D97706" },
        error: { 500: "#EF4444", 600: "#DC2626" },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
