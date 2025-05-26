/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      fontFamily: {
        Alegreya: ["var(--Alegreya-font)"],
        Sans: ["var(--Sans-font)"],
      },
      colors: {
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        secondAccent: "var(--second-accent)",
        bg: "var(--bg)",
        bgNav: "var(--bg-nav)",
        secondBg: "var(--second-bg)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        text: "var(--text)",
        footerText: "var(--footer-text)",
        wRgb: "var(--white-rgb)",
      },
      blur: {
        mainBlur: "var(--main-blur)",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        bounceFate: "bounce-fate 3s linear infinite",
      },
    },
  },
  plugins: [],
};
