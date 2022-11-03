/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        inter: ['inter']
      }
    },
  },
  plugins: [],
}
