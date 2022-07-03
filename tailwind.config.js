const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/*.css',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
