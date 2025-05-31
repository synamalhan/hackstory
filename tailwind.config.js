/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sepia: "#f4e3c3", // soft light dull brown
      },
    },
  },
  plugins: [],
};
