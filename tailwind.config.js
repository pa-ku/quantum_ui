/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-500': 'var(--primary-500)',
        'primary-400': 'var(--primary-400)',
        'primary-300': 'var(--primary-300)',
      },
      fontFamily: {
        monserrat: 'Monserrat',
      },
      animation: {
        glow: 'glow 4s linear infinite',
      },
      boxShadow: {
        bottom: '0px 0.25em var(--primary-700)',
      },
   
    },
    plugins: [],
  },
}
