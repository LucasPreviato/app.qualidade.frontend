/* eslint-disable @typescript-eslint/no-var-requires */
const { tealDark, grayDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: tealDark.teal1,
          2: tealDark.teal2,
          3: tealDark.teal3,
          4: tealDark.teal4,
          5: tealDark.teal5,
          6: tealDark.teal6,
          7: tealDark.teal7,
          8: tealDark.teal8,
          9: tealDark.teal9,
          10: tealDark.teal10,
          11: tealDark.teal11,
          12: tealDark.teal12,
        },
        base: {
          1: grayDark.gray1,
          2: grayDark.gray2,
          3: grayDark.gray3,
          4: grayDark.gray4,
          5: grayDark.gray5,
          6: grayDark.gray6,
          7: grayDark.gray7,
          8: grayDark.gray8,
          9: grayDark.gray9,
          10: grayDark.gray10,
          11: grayDark.gray11,
          12: grayDark.gray12,
        },
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
