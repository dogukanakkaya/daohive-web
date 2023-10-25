import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      },
      colors: {
        'primary': '#431fd9',
        'header': 'var(--bg-header)',
        'proposal': '#14253d'
      }
    }
  },
  plugins: [typography]
}
