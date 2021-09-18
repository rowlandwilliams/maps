const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "inter-light": ["Inter-Light"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
};
