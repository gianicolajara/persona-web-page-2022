const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          hard: "#1F1F1F",
          normal: "#222222",
          light: "#393838",
          extralight: "#979696",
          hardlight: "#D7D7D7",
        },
      },
    },
  },
  plugins: [],
};
