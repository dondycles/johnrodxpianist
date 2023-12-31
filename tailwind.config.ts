import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#cea490",
            secondary: "#38bdf8",
            background: "#efefef",
            foreground: "#0d0d0d",
          },
        },
        dark: {
          colors: {
            primary: "#cea490",
            secondary: "#38bdf8",
            background: "#0d0d0d",
            foreground: "#efefef",
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
  ],
};
export default config;
