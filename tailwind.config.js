/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        spotify: {
          green: "#1DB954",
          light: "#1ED760",
          dark: "#191414",
          black: "#121212",
          gray: "#535353",
        },
        neon: {
          purple: "#B026FF",
          blue: "#4B96FF",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
