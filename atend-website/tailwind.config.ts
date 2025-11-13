import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#E6F7FF",
          100: "#B3E5FF",
          200: "#80D3FF",
          300: "#4DC1FF",
          400: "#1AAFEF",
          500: "#068CCF",
          600: "#0570A6",
          700: "#04547D",
          800: "#033854",
          900: "#021C2B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
