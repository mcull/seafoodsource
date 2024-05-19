import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    flowbite.content(),
  ],
  plugins: [
    require("flowbite/plugin")
  ],
};