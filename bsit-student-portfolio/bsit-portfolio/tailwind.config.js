/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      maxWidth: { '8xl': '88rem' },
      boxShadow: { soft: '0 16px 48px rgba(15,23,42,.08)' }
    }
  },
  plugins: []
}
