/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#404040",
        light: "#fce7f3",
        darkPink: "#C12366",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(141, 10, 65, 0.7) 1px, #fce7f3 5px,#fce7f3 100px);",

        circularDark:
          "repeating-radial-gradient(rgb(252,231,243,0.7) 1px, #030712 8px,#030712 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(141, 10, 65, 0.7) 1px, #fce7f3 5px,#fce7f3 80px);",
        circularDarkLg:
          "repeating-radial-gradient(rgb(252,231,243,0.7) 1px, #030712 8px,#030712 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(141, 10, 65, 0.7) 1px, #fce7f3 5px,#fce7f3 60px);",
        circularDarkMd:
          "repeating-radial-gradient(rgb(252,231,243,0.7) 1px, #030712 8px,#030712 60px);",
        circularLightSm:
          "repeating-radial-gradient(rgba(141, 10, 65, 0.7) 1px, #fce7f3 5px,#fce7f3 40px);",
        circularDarkSm:
          "repeating-radial-gradient(rgb(252,231,243,0.7) 1px, #030712 8px,#030712 40px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
