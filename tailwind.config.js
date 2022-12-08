/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'window': '1200px',

      },
      backgroundColor: {
        window: '#f4f4f4',
        primary: '#00483D',
        hover: '#009981',
        orange: '#FF6801',
        'orange-yellow': '#f7941e',
        'btn-content': 'transparent linear-gradient(90deg,#009981 0%,#00483d 100%) 0% 0% no-repeat',
        'full-gray': '#E5E5E5',
      },
      cursor: {
        'pointer': 'pointer'
      },
      
      dropShadow: {
        primary: '0 4px 6px #ccc',
        second: '0 4px 6px #00000029',
        'bag': '0 4px 6px #00000029',
        'box': '0 4px 6px #ccc'
      },
      borderColor: {
        instagram: 'transparent linear-gradient(50deg,#fbe18a 0%,#fcbb45 21%,#f75274 38%,#d53692 52%,#8f39ce 74%,#ad63a0 100%) 0% 0% no-repeat',
        primary: '#00483D'
      },
      textColor: {
        hover: '#009981',
        price: '#FD475A',
        'orange-yellow': '#f7941e',
        primary: '#00483D',

      }
    },
  },
  plugins: [],
}