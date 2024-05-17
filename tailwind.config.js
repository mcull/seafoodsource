import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "public/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "public/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});