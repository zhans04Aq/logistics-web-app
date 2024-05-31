/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainBg:"#F4EEEA",
        primaryNavy:"#213F99",
        whiteTint:"#ffffff99",
        creamColor: "#C9ABA7"
      },
      fontFamily:{
        Oswald:['"Oswald"',"sans-serif"],
        Quicksand:['"Quicksand"',"sans-serif"],
      },
      backgroundImage:{
        'firstSectionBg':"url('https://orlando1464.hocoos.com/_ipx/f_webp,q_90/https://img2.hocoos.com/cache/img-pack/1324/w-1900/h-720/ww-1900/wh-720/img-pack/1324/clay-banks-xvs-ukuouao-unsplash.jpg')" 
      },
      minHeight:{
        sxtScreenVh:"60vh",
        svntScreenVh:"70vh",
        eghtScreenVh:"80vh",
        nintysxScreenVh:"96vh",
      }
    },
  },
  plugins: [],
}

