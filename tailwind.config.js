/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wash-purple": {
          50:  "#e9dcff",
          100: "#c8aaff",
          200: "#b58dff",
          300: "#9b5cff",
          400: "#893bff",
          500: "#6f00ff",
          600: "#6300e6",
          700: "#4c00b4",
          800: "#3a008c",
          900: "#2d006b",
        },

        "wash-blue": {
          50:  "#dee0ea",
          100: "#b0b4c9",
          200: "#8f92b2",
          300: "#6a6d9b",
          400: "#525886",
          500: "#343c6d", 
          600: "#2f3764",
          700: "#252b50",
          800: "#1b203e",
          900: "#141730",
        },

        "black": {
          0: "#000000",
          12: "#121212", 
          18: "#181818", 
          30: "#303030",
        }
      },

      fontFamily: {
        "desktop-h1": ["DM Sans"],
        "desktop-h2": ["DM Sans"],
        "desktop-h3": ["DM Sans"],
        "desktop-h4": ["DM Sans"],
        "desktop-h5": ["DM Sans"],
        "desktop-h6": ["DM Sans"],
        "desktop-p": ["DM Sans"],
        "desktop-xs": ["DM Sans"],
        "mobile-h1": ["DM Sans"],
        "mobile-h2": ["DM Sans"],
        "mobile-h3": ["DM Sans"],
        "mobile-h4": ["DM Sans"],
        "mobile-h5": ["DM Sans"],
        "mobile-h6": ["DM Sans"],
        "mobile-p": ["DM Sans"],
      },

      fontSize: {
        "desktop-h1": "80px",
        "desktop-h2": "61px",
        "desktop-h3": "47px",
        "desktop-h4": "36px",
        "desktop-h5": "27px",
        "desktop-h6": "21px",
        "desktop-p": "16px",
        "desktop-xs": "12px",
        "mobile-h1": "60px",
        "mobile-h2": "46px",
        "mobile-h3": "35px",
        "mobile-h4": "27px",
        "mobile-h5": "21px",
        "mobile-h6": "16px",
        "mobile-p": "12px",
      },
    },
  },
  plugins: [],
};