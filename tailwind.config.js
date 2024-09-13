/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f39c0b",
        secondary:"#e86f00",
        primaryDark:"#d65609",
        dark:"#656565"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
      
    },
  },
  plugins: [],
}

