/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'olive': '#C0D22D',
        'green': '#14271D',
        'orange': '#EC8602',
      },
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
        mulish: ["'Mulish', sans-serif"],
      },
      backgroundImage: {
        'gradient-hover': 'linear-gradient(to right, #4CAF50, #8BC34A)',
      },
    },
  },
  plugins: [],
}