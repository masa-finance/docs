/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      gold: "#F3BF6C",
      bggray: "#313233",
      bgwhite: "#F7F7F7",
      cream: "#f4f2eb",
      darkGray: "#666666",
      darkerGray: "#4d4e4f",
      gray: "#999999",
      lighterGray: "#CDCECF",
      lightGray: "#D6D6D6",
      lightGreen: "#CFD9C8",
      lightPeach: "#E9D1A3",
      peach: "#E8A28E",
    },
    extend: {
      fontFamily: {
        ezra: ["Ezra"],
        inter: ["Inter"],
        alumni: ["Alumni Sans"],
      },
    },
  },
  plugins: [],
};
