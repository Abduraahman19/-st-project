/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(55, 55, 55)', // Adding a custom gray color
      },
    },
  },
  plugins: [],
}
