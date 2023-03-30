module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#ccc",
        bgGray: "#f1f1f1",
        bgFooter: "#4c4c4c",
        orangePrimary: "#ff5f17",
      },
    },
  },
  plugins: [],
};
