const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "inter-light": ["Inter-Light"],
        "inter-medium": ["Inter-Medium"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        600: "600px",
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
