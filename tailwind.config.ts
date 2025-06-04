import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-oswald-variable)", "sans-serif"],
        body: ["var(--font-poppins-variable)", "sans-serif"]
      },
      colors: {
        accentColor2: "#45E0BC",
        accentColor: "#49EDC7",
        primaryColor: "#FF5CC3",
        primaryColorHover: "#FF77CD",
        neutralColor: "#FFFEF9",
        blackColor: "#2D081F",
      }
    },
  },
  plugins: [],
} satisfies Config;
