/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Make Roboto the default sans font
      },
    },
    colors: {
      "primary-white": "#ffffff",
      "primary-black": "#343a40",
      "secondary-black": "#495057",
      "primary-teal": "#1dbbc3",
      "secondary-teal": "#17ddd6",
      "tertiary-teal": "#0c8599",
      "primary-cyan": "#e3fafc",
      "primary-green": "#20c997",
      "secondary-green": "#ebfbee",
      "primary-red": "#d9480f",
      "secondary-red": "#ffe3e3",
      "primary-gray": "#868e96",
      "primary-pink": "#d6336c",
      "primary-grape": "#be4bdb",
      "primary-violate": "#7048e8",
      "primary-orange": "#f76707",
    },
  },
  plugins: [],
};
