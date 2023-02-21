/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      height:{
        '350':"350px",
      },
      width:{
        
        '49':'49%'
      },
      colors:{
        "main":'#01959a',
        'footer':'#fafafa'
      },
      screens: {
        '2xl': {'max': '1535px'},
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily:{
        'poppins':['Poppins", sans-serif']
      }
    },
  },
  plugins: [],
}
