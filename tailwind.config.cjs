/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        purple: "#8600e6",
        red: "#DC4492",
        yellow: "#f7be22",
        grey: "#ededed",
        "deep-blue": "#010026",
        "navy-blue": "#000080",
        "dark-grey": "#757575",
        "orange": "#d68127",
        "opaque-black": "rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81.66deg, #8600e6 7.21%, #f7be22 70.07%)",
        "gradient-rainblue": "linear-gradient(81.66deg, #f7be22 10.21%, #8600e6 90.07%)",
      }),
      fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-#8600e6serif"],
      },
      content: {
        brush: "url('/assets/svg/brush.svg')",
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
