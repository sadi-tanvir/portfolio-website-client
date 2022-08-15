/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff9f1a",
          secondary: "#f53b57"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}