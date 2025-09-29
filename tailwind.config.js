/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
    extend: {
      fontFamily: {
        Oxanium: ["Oxanium", "cursive"],
        Sora: ["Sora", " sans-serif"],
        anton: ["Anton", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        "satoshi-light": ["Satoshi-Light", "sans-serif"],
        "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
        "satoshi-black": ["Satoshi-Black", "sans-serif"],
        "source-code": ["Source-Code-Pro", "monospace"],
      },

      colors: {
        pink: "#D136F6",
        "neutral-primary": "#fff",
        "neutral-bg-02": "#252134",
        "neutral-secondary": "#ADA8C3",
        "neutral-tertiary": "#9D99AD",
        "neutral-bg-03": "#15131D",
        "neutral-bg-04": "#0E0C15",
        nightlyactivities: "#D0D4EA",
        powderlilac: "#BEC1CE",
      },
    },
  },
  plugins: [],
};
