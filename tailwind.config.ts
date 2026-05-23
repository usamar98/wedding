import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "oklch(var(--color-ivory) / <alpha-value>)",
        champagne: "oklch(var(--color-champagne) / <alpha-value>)",
        linen: "oklch(var(--color-linen) / <alpha-value>)",
        ink: "oklch(var(--color-ink) / <alpha-value>)",
        espresso: "oklch(var(--color-espresso) / <alpha-value>)",
        gold: "oklch(var(--color-gold) / <alpha-value>)",
        moss: "oklch(var(--color-moss) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 24px 80px -48px oklch(var(--color-espresso) / 0.45)",
        gold: "0 18px 60px -42px oklch(var(--color-gold) / 0.7)"
      },
      backgroundImage: {
        "silk-light":
          "linear-gradient(135deg, oklch(var(--color-ivory)) 0%, oklch(var(--color-linen)) 46%, oklch(var(--color-champagne)) 100%)",
        "nocturne":
          "linear-gradient(135deg, oklch(var(--color-ink)) 0%, oklch(var(--color-espresso)) 58%, oklch(0.23 0.026 61) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
