/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1320px",
      }
    },
    extend: {
      colors: {
        primary: "#B47000",
        secondary: "#555555",
        base: "#F8F1E6",
      }
    },
  },
  plugins: [],
}