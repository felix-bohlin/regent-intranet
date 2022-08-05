/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/**/*.vue'],
  theme: {
    extend: {
      screens: {
        lg: '960px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
