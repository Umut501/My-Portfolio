/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",    
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
   extend: {
      colors: {
        'custom-gray': 'rgb(64, 64, 64)',
        'custom-header' : 'rgb(64, 64, 64)',
        navbarbg: '#ECEDEF',
        purple: '#AE8FDB',
        green: '#35E0AA',
        yellow: '#FEF8B4',
        blue:'#838dea',
        grayishwhite: '#F6F4F6',
        COLORBUTTON: "#D4DAD8",
        red:'#D35B65',
        greenhaze:'#029355',
        darkbg:'#0F0F0F',
 
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

