export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        bartle: ['"BBH Sans Bartle"', "sans-serif"],
        oswald: ['"Oswald"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        "ubuntu-mono": ['"Ubuntu Mono"', "monospace"],
      },
      colors: {
        tue: "#C72125",
        sunflower: {
          50: "#FFFBEA",
          400: "#FFC72C",
          700: "#8A6D0B",
        },
      },
    },
  },
  plugins: [],
}
