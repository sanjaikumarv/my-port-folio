import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#e1e1e1",
          400: "#b8b8b8",
          700: "#5f5f5f",
          800: "#4e4949",
          "800_bc": "#3b3b3bbc",
          "800_01": "#4f4949",
          "300_01": "#e2e2e2",
        },
        blue_gray: { 100: "#d5d5d5" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        light_blue: { 900: "#166592" },
      },
      fontFamily: {
        sans: ["var(--font-graphik)"],
        edusa: ["var(--font-edusa)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
