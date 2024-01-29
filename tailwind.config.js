/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#000000",
        whiteColor: "#FFFFFF",
        textColor: "#C7C7C7",
        textNavColor: "#6A6A6A",
        blueColor: "#3B6BF2", //click
        mainNavColor: "#255AF1",
        redBgColor: "#84001C",
        mainBg: "#363636",
        borderColor: "#0945FF",
      },
    },
  },
  plugins: [],
};
