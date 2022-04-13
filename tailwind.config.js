module.exports = {
  content: ["./pages/*", "./components/*"],
  theme: {
    extend: {
      keyframes: {
        underline: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        underline: "underline 3s linear 1",
      },
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        timberwolf: "#EADEDA",
        darkliver: "#483C46",
        orangeCrayola: "#FF773D",
      },
    },
  },
  plugins: [],
};
