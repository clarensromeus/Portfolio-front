/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1d1d1d",
        accent: "#D9C427",
        dark: {
          bg: '#121212',
          card: '#1F1F1F',
          text: '#FFFFFF'
        },
        light: {
          bg: '#FFFFFF',
          card: '#F3F4F6',
          text: '#1F1F1F'
        }
      },
      fontFamily: {
        russo: ["Russo", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
} 