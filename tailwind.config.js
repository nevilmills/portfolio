module.exports = {
  content: ["./pages/*", "./components/*/*", "./components/*"],
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
        charlestonGreen: "#272D2D",
        ghostWhite: "#F6F8FF",
        columbiaBlue: "#b8d4e3",
        davysGray: "#50514f",
        lemonYellow: "#F3FFB9",
        darkGreen: "#3C483E",
        offwhite: "#eaeaea",
        lightBlack: "#141414",
        lighterBlack: "#191919",
        lightestBlack: "#1e1e1e",
        lightGrey: "#b1b1b1",
        borderBlack: "#242424",
        lighterGrey: "#6c6c6c",
        lightestGrey: "#d9d9d9",
        greenHighlight: "#32a852",
      },
    },
  },
  plugins: [],
};
