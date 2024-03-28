/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    screens:{
      'very-sm':'320px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

