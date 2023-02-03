/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tit': ['Titillium Web', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

