/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono"],
      },
      colors: {
        darkBlue: "#141C2F",
        semiDarkBlue: "#1F2A48",
        lightBlue: "#0079FE",
        royalBlue: "#004DA9",
        white: "#FEFEFE",
        gray: "#8E94A4",
        darkWhite: "#E4EAFA",
        stone: "#4F698C",
      },
    },
  },
  plugins: [],
};
