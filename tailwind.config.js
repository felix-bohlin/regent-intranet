/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/**/*.vue'],
  theme: {
    colors: {
      red: '#98040c',
      blue: '#3ec7f3',
      lightGray: '#deddef',
      darkGray: '#282934',
      white: '#fffff',
      black: '#fffff'
    },
    extend: {
      screens: {
        lg: '960px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
