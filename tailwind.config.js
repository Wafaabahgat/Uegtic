/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        whiteColor: "#FFFFFF",
        whitColor: "#FFF9F9",
        textColor: "#C7C7C7",
        textNavColor: "#6A6A6A",
        blueColor: "#3B6BF2", //click
        mainNavColor: "#255AF1",
        redBgColor: "#84001C",
        mainBg: "#363636",
        borderColor: "#0945FF",
        lineColor: "#BCBCBC",
        bordergray: "#4D4D4D",
        uploadImg: "#919191",
        Color: "#525252",
      },
    },
    // gridTemplateColumns: {
    //   product: "repeat(auto-fit, minmax(100px, 1fr))",
    // },
  },
  plugins: [],
};
