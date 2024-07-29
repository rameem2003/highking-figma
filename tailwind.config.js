/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        hikeBlack: "#05060A",
        hikeSky: "#3E82FC",
        hikeLightSky: "#ECF3FF",
        hikeGray: "#5D616F",
        hikeRed: "#FE2C54",
      },

      backgroundImage: {
        bgScreen: "url(/background.png)",
        add1: "url(/add1.png)",
        add2: "url(/add2.png)",
        add3: "url(/add3.png)",
      },

      boxShadow: {
        custom: "0px 54px 104px 0px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
