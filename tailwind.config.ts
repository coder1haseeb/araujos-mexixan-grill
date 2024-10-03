import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        reddish: "#eb0029",
        dark: "#2F2F2F",
        light: "#838991",
        box_bg: "#f9f6f1",
        img_light_bg: "#fae4ca",
        img_dark_bg: "#ffb541",
      },
      fontFamily: {
        lobster: ['"Lobster Two"', "cursive"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      screens: {
        '2xl': { max: '1520px' }, // Adjusted from 1536px
        'xl': { max: '1260px' },  // Adjusted from 1280px
        'lg': { max: '980px' },   // Adjusted from 1024px
        'md': { max: '750px' },   // Adjusted from 768px
        'sm': { max: '620px' },   // Adjusted from 640px
        'xs': { max: '540px' },   // Adjusted from 550px
        'xxs': { max: '440px' },  // Adjusted from 450px
      },
    },
  },
  plugins: [],
};

export default config;
