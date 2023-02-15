/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        '_gradient-1': '#6448fe',
        '_gradient-2': '#600594',
        '_red': '#ff5252',
        '_light-grayish-violet': '#dedddf',
        '_dark-grayish-violet': '#8e8593',
        '_very-dark-violet': '#21092f',
      },
      fontFamily: {
        'sans': ['"Space Grotesk"', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}


// ## Colors

// ### Primary

// - Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
// - Red (input errors): hsl(0, 100%, 66%)

// ### Neutral

// - White: hsl(0, 0%, 100%)
// - Light grayish violet: hsl(270, 3%, 87%)
// - Dark grayish violet: hsl(279, 6%, 55%)
// - Very dark violet: hsl(278, 68%, 11%)
