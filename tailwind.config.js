/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-default)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-default)',
          light: 'var(--color-secondary-light)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary-default)',
          light: 'var(--color-tertiary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-default)',
          light: 'var(--color-accent-light)',
        },
        grey: {
          DEFAULT: 'var(--color-grey-default)',
        },
        slate: {
          DEFAULT: 'var(--color-slate-default)',
        },
        dark: {
          DEFAULT: 'var(--color-dark-default)',
        },
        light: {
          DEFAULT: 'var(--color-light-default)',
        },
        overlay: 'var(--color-overlay)',
        screen: {
          DEFAULT: '#ffffff',
          dark: '#131314',
        },
        card: {
          DEFAULT: '#f5f5f5',
          dark: '#1e1f20',
        },
        border: {
          DEFAULT: '#e5e5e5',
          dark: '#2a2b2c',
        },
      },
    },
  },
  plugins: [],
}
