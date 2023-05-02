/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171923',
        secondary: "#191f2c",
        glass: "rgba(24,29,40, 0.92)"
      }
    },
  },
  plugins: [],
}