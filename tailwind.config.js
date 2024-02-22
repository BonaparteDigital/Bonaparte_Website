/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        push: {
          "0%, 100%": { transform: "-translateX(0.375rem) translateY(0.375rem)" },
        }
      },
      animation: {
        push: "push 200ms ease-in-out"
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        solid: '-8px 8px 0 var(--tw-shadow-color)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'olive': '#C0D22D',
        'olive-light': '#ECF2C0',
        'green': '#14271D',
        'green-light': '#9ACBB1',
        'orange': '#EC8602',
        'orange-light': '#FED39A',
      },
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(to right, #4CAF50, #8BC34A)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}