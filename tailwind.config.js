/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/**/*.vue'],
  darkMode: 'class',
  theme: {
    colors: {
      red: '#98040c',
      blue: '#3ec7f3',
      lightGray: '#deddef',
      darkGray: '#282934',
      white: '#ffffff',
      black: '#000000'
    },
    extend: {
      screens: {
        lg: '960px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
