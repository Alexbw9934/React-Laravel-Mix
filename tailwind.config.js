/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./resources/js/*.{js, jsx, ts, tsx}",
    "./resources/js/**/*.{js, jsx, ts, tsx}",
    "./resources/view/*.balde.php",
    "./resources/view/**/*.blade.php",
    "./storage/framework/view/*.php"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
