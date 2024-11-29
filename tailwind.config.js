/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
        bgorg:"#f56028",
        bgwhite:"#dddddd"
      },
      backgroundImage: {
        bgliniar: "linear-gradient(to right, #ff6641 0%, #ff8563 51%, rgb(255 135 95) 100%);",
        bgliniarhover: "linear-gradient(to right, rgb(255, 75, 31) 0%, rgb(255, 144, 104) 51%, rgb(255, 75, 31) 100%)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
    },
  },  
  plugins: [],
};