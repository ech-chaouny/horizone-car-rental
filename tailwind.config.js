/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        secondary: "#6E6E6E",
      },
      screens: {
        xs: "450px",
        sd: "860px",
      },
    },
  },
  plugins: [],
};
