/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
   extend: {
      colors: {
        'custom-gray': '#000000',
        'custom-header' : '#000000',
        f2bedf: '#F2BEDF',
        F7E5F2: '#F7E5F2',
        navbarbg: '#ECEDEF',
        D9C1A9: '#D9C1A9',
        colora: '#FEFCF3',
        colorb: '#EDF6FB',
        colorc: '#F5EBE0',
        secondb: '#FFFFF',
        COLORBUTTON: "#D4DAD8",
 
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
    fontFamily: { 
      signature: ['Montez'] 
    }
  },
  plugins: [
		require('tailwindcss-animated') /*https://www.tailwindcss-animated.com/configurator.html*/
	],
}

