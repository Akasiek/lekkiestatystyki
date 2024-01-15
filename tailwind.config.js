/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      display: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
};
