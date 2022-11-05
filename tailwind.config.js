/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: "jit",
  content: [
    './build/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        darkBlue: "#1F2F61",
      },
      fontSize: {
        '100': '100%',
        '70': '70%'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '& > *');
    }),
  ],
}
