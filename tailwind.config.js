/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black:       '#0a0809',
        deep:        '#100d14',
        'purple-dark': '#1a1025',
        'purple-mid':  '#2d1f45',
        'purple-glow': '#6b3fa0',
        gold:        '#c9a84c',
        'gold-light': '#e8cc7e',
        cream:       '#f0e6d3',
        muted:       '#9b8faa',
      },
      fontFamily: {
        display: ['Cormorant Garant', 'serif'],
        body:    ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}