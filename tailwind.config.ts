import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "hsl(46, 100%, 50%)",
          // 50: 'hsl(46, 100%, 50%)',
          // 100: 'hsl(46, 100%, 50%)',
          // 200: 'hsl(46, 100%, 50%)',
          // 300: 'hsl(46, 100%, 50%)',
          dark: "hsl(47, 100%, 6%)",
        },
        background: {
          DEFAULT: "hsl(0, 0%, 97%)",
          dark: "hsl(0, 0%, 5%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
