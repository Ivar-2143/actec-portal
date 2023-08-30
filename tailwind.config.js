/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary: '#1473E6',
        lightPrimary: '#AACDF8',
        transparentPrimary: 'rgba(20,115,230,0.2)',
        secondary: '#1D5599',
        darkGreen:'#70B309',
        lightGreen: '#A5FF19',
        warning: '#FFB904',
        error: '#E63D2C',
        errorVariant: 'FF4419',
        gray: '#8C8CA1',
        plat: '#e6e6e6',
        night: '#0e0e0e',
        darkGray: '#30303B'
      }
    },
  },
  plugins: [],
}
