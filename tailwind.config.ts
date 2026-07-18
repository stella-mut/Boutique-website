import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        paper: "#FFFFFF",
        bone: "#FAF6F3",
        // Ink / text
        ink: "#2B2422",
        "ink-soft": "#7A6E6A",
        // Rose gold family — the brand's signature metal
        "rose-50": "#FBF1EF",
        "rose-100": "#F3DEDC",
        "rose-200": "#E8C4C4",
        "rose-300": "#D5A3A3",
        "rose-400": "#C08790",
        "rose-500": "#B76E79",
        "rose-600": "#9C5B65",
        "rose-700": "#7E4750",
        "rose-900": "#4A2B31",
        line: "#EDE3DF",
      },
      fontFamily: {
        lato: ["var(--font-lato)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      backgroundImage: {
        "rose-gradient": "linear-gradient(135deg, #E8C4C4 0%, #B76E79 50%, #9C5B65 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
