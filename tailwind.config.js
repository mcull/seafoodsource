import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    flowbite.content(), // For Netlify, I also just turn purging off
  ],
  plugins: [
    require("flowbite/plugin")
  ],
};