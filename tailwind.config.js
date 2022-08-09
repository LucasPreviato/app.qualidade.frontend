/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#FFFFFF',
          200: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#202024',
          800: '#121214',
        },
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
