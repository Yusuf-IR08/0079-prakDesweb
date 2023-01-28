/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        trycol:{
          light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
        }
      }
    },
  },
  varriants: {
    extend:{
      display:['group-hover']
    },
  },
  plugins: [],
}
