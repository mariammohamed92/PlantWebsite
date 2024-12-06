/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
   
    extend: {
      backgroundImage:{
        "main":"url('./assets/img/floral-1.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
  darkMode:'class'

}

