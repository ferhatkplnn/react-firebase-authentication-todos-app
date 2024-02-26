/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        xs: "380px",
        sm: "600px",
        md: "1024px",
        lg: "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
};
