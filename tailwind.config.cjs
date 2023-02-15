/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main-dektop': "url('/assets/bg-main-desktop.png')",
        'bg-main-mobile': "url('/assets/bg-main-mobile.png')",
        'bg-card-front': "url('/assets/bg-card-front.png')",
        'bg-card-back': "url('/assets/bg-card-back.png')",
      },
      colors: {
        '_gradient-1': '#6448fe',
        '_gradient-2': '#600594',
        '_error-red': '#ff5252',
        '_light-grayish-violet': '#dedddf',
        '_dark-grayish-violet': '#8e8593',
        '_very-dark-violet': '#21092f',
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
