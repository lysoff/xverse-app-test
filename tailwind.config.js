const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        ...colors,
        gray: {
          500: "#24252C",
          600: "#1A1A1A",
        },
        blue: {
          500: "#465AE9",
        },
      },
    },
  },
  plugins: [],
};
