/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.{html,js}',
    './src/*.{html,js}',
  ],
  theme: {
    colors: {
      'blue': '#242A45',
      'purple': '#5267DF',
      'red': '#FA5959',
      'gray': '#9194A2',
      'white': '#F7F7F7',
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        }
      },
    },
  },
  plugins: [],
}
