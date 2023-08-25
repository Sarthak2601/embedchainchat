import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      fontFamily: {
        sans: [`var(--font-montserrat)`, 'sans-serif'],
        serif: ['var(--font-display)', 'serif']
      },
      colors: {
        primary: colors.blue,
        secondary: colors.rose,
        neutral: colors.stone,
        alert: colors.amber,
        danger: colors.red
      }
    },
  },
  plugins: [],
}
