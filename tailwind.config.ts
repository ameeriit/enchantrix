import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "20px",
    },
    extend: {
      fontFamily: {
        mashan: ["Ma Shan Zheng", "cursive"],
        sedgwick: ["Sedgwick Ave Display", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
