/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        info: "linear-gradient(320deg, rgba(66,21,29,0.99) 17%, rgba(129,35,79,1) 57%, rgba(41,37,36,1) 86%)",
        navbardark:
          "linear-gradient(67deg, rgba(41,37,36,1) 42%, rgba(129,35,79,1) 100%)",
        newarrivaldark:
          "linear-gradient(102deg, rgba(41,37,36,1) 15%, rgba(58,36,44,1) 89%)",
        newarrivallight:
          "linear-gradient(69deg, rgba(148,51,234,1) 15%, rgba(175,55,195,1) 100%)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
