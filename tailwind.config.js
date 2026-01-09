/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        app: {
          background: '#ffffff',
          'background-dark': '#131314',
        },
        card: {
          background: 'whitesmoke',
          'background-dark': '#1e1f20',
        }
      },
    },
  },
  plugins: [],
}
