/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "navy-blue": "#000080",
        "dark-grey": "#757575",
        "orange": "#d68127",
        "opaque-black": "rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81.66deg, #5E1C59 7.21%, #DBC22A 78.07%)",
        "gradient-rainblue": "linear-gradient(81.66deg, #DBC22A 7.21%, #5E1C59 78.07%)",
      }),
      fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('/assets/brush.svg')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
