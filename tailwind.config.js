/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'offwhite' : '#F9F7F7',
        'background-blue' : '#112D4E',
        'lightest-blue' : '#DBE2EF',
        'dark-blue' : '#3F72AF',
        'light-blue' : '#73A8E7',
        'off-blue' : '#81A3CB',
      },
    },
  },
  plugins: [],
}
