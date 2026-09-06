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
        "space-mono": ['"Space Mono"', "monospace"],
      },
      colors: {
        tue: "#C72125",
        sunflower: {
          50: "#FFFBEA",
          400: "#FFC72C",
          700: "#8A6D0B",
        },
      },
      keyframes: {
        // A single 5s play: sine-shaped rise to peak at 2s in, then eases
        // back over the remaining 3s. Not a loop — JS (Home.jsx) triggers
        // one play every 10s automatically, or immediately on hover/press,
        // resetting that 10s timer each time. Direction comes from the
        // --gx/--gy custom properties (a freshly randomized unit vector
        // picked per trigger), so the glitch axis rotates every play.
        chromaRed: {
          "0%, 100%": { opacity: "0", transform: "translate(0em, 0em)" },
          "40%": {
            opacity: "0.6",
            transform: "translate(calc(var(--gx, 1) * 0.1em), calc(var(--gy, 0) * 0.1em))",
          },
        },
        chromaYellow: {
          "0%, 100%": { opacity: "0", transform: "translate(0em, 0em)" },
          "40%": {
            opacity: "0.6",
            transform: "translate(calc(var(--gx, 1) * -0.1em), calc(var(--gy, 0) * -0.1em))",
          },
        },
      },
      animation: {
        "chroma-red": "chromaRed 5s cubic-bezier(0.445,0.05,0.55,0.95) 1 both",
        "chroma-yellow": "chromaYellow 5s cubic-bezier(0.445,0.05,0.55,0.95) 1 both",
      },
    },
  },
  plugins: [],
}
