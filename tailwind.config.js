/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        categrycolor: "#a98c3c", 
        backcolor: "#e8eae9",
        back2: "#f4f4f4",
        bordercolor: "#01478b",
        popupcolor: "#c9b286",
      },
      zIndex: {
        'max': '9999',
      },
    },
  },
  plugins: [],
};
