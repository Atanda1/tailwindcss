module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#34495E",
          grey: "#212121",
          normal: "hsl(233, 13%, 49%)",
          dark: "hsl(232, 13%, 33%)",
          white: "#FFFFFF"
        },
      },
      width: {
        custom: "31%",
      },
    },
    fontFamily: {
      'sans': ["Montserrat", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
