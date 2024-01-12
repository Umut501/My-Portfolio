/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
   extend: {
      colors: {
        'custom-gray': '#383838',
        f2bedf: '#F2BEDF',
        F7E5F2: '#F7E5F2',
        222222: '#222222',
        D9C1A9: '#D9C1A9',

        colora: '#FEFCF3',
        colorb: '#F0F0F0',
        colorc: '#F5EBE0',
        secondb: '#F6F6F6',
 
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

