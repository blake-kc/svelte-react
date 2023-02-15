/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
