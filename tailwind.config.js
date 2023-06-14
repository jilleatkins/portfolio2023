/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#443235",
      secondary: "#EEE7E1",
      border: "#443235be",
      background: "rgb(230, 221, 222)",
      background2: "#1A1818",
      icon: "#ffffff3f",
      darkhover: "rgba(108, 108, 108, 0.051)",
      lighthover: "#292727",
    },
    blur: {
      xs: "2px",
    },
    fontFamily: {
      primary: "'grandslangroman', 'sans-serif'",
      secondary: "'Hanken Grotesk', 'sans-serif'",
      tertiary: "'Montserrat', 'sans-serif'",
      chakraPetch: "'Chakra Petch', 'sans-serif'",
      didotRoman: "'DidotLTPro-Roman', 'serif'",
    },
    fontSize: {
      header: "16rem",
      subheader: "10rem",
    },
    keyframes: {
      vGrow: {
        "0%": { transform: "scaleY(0)" },
        "10%": { transform: "scaleY(0.1)" },
        "20%": { transform: "scaleY(0.2)" },
        "30%": { transform: "scaleY(0.3)" },
        "40%": { transform: "scaleY(0.4)" },
        "50%": { transform: "scaleY(0.5)" },
        "60%": { transform: "scaleY(0.6)" },
        "70%": { transform: "scaleY(0.7)" },
        "80%": { transform: "scaleY(0.8)" },
        "90%": { transform: "scaleY(0.9)" },
        "100%": { transform: "scaleY(1)" },
      },
      hGrow: {
        "0%": { transform: "scaleX(0)" },
        "10%": { transform: "scaleX(0.1)" },
        "20%": { transform: "scaleX(0.2)" },
        "30%": { transform: "scaleX(0.3)" },
        "40%": { transform: "scaleX(0.4)" },
        "50%": { transform: "scaleX(0.5)" },
        "60%": { transform: "scaleX(0.6)" },
        "70%": { transform: "scaleX(0.7)" },
        "80%": { transform: "scaleX(0.8)" },
        "90%": { transform: "scaleX(0.9)" },
        "100%": { transform: "scaleX(1)" },
      },
    },
    animation: {
      "side-line-grow": "vGrow 1s linear",
      "top-line-grow": "hGrow 1.1s linear",
    },
    backgroundImage: {
      nomnom: "url('../assets/NomNom1.png')",
      powerpong: "url('./assets/PowerPongLeague.png')",
      goldenbasket: "url('./assets/GoldenBasket2.png')",
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [
  require("tailwindcss-animation-delay", require("@tailwindcss/aspect-ratio")),
];
