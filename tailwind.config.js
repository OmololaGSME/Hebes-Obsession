/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        sm:'425px',
        md:'768px',
        slg:'1024px',
        lg:'1440px',
        xlg:'2560px'
      },
      fontFamily:{
        poppins:["Poppins", ...defaultTheme.fontFamily.sans]
      }
  },
  },
  plugins: [],
}

