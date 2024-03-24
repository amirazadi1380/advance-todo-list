/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "golbe" : "#2a466e",
        "back": "#b8cce7",
        "abi" : "#4788f5"
      },
      fontFamily:{
        "poppins":"Poppins,sans-serif"
      }
    },
  },
  plugins: [],
}

