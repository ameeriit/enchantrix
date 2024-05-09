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
      boxShadow: {
        top: "-1px -1px 6px 0 rgba(0, 0, 0, .12), inset 0 -1px 0 0 #dadce0",
      },
      animation: {
        "rotate-infinite": "rotate 1s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
