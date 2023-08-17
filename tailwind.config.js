/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    colors:{
      blueDark: '#06458c',
      backgrnd: '#03478e',
      textColor: '#fdffff',
      grayColor : '#9e9b9b',
      blue3: '#3944BC',
      blue2 : '#000F36',
      black : '#000000'

    },
    extend: {
      screens:{
        'sm': '640px',
      }
    },
  },
  plugins: [],
}

