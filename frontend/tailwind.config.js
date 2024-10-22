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
    extend: {
      colors: {
        "navbar-bg": "#5d5d5d7e",
        "navbarButton-bg": "#505252",
        "text-color": "#ccd6f6",
        "text-color2": "#8892b0",
        "supportText-color": "#8892b0",
        "bg-color": "#0a192f",
        primaryCardBG: "#112240",
        "primary-color": "#f6c609",
      },
      borderRadius: {
        custom: "12px",
      },
      maxWidth: {
        "custom-1240": "1240px",
        "custom-1200": "1200px",
        "custom-1144": "1144px",
      },
      screens: {
        "1366px": { max: "1366px" },
        "1200px": { max: "1200px" },
        "550px": { max: "550px" },
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
        inter: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        profileAnimate: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        profileAnimate: "profileAnimate 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
