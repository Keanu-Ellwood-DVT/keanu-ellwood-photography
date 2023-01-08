/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'header': ['"Eb Garamond"', '"serif"'],
      'body': ['"Libre Baskerville"', '"serif"'],
      'meta': ['"Overpass Mono"', '"monospace"'],
    }
  },
  plugins: [],
}
