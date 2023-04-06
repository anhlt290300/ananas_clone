module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#a5a5a5",
        bgGray: "#f1f1f1",
        bgFooter: "#4c4c4c",
        orangePrimary: "#ff5f17",
      },
      boxShadow: {
        innerbox: "inset 0 0 10px rgba(0,0,0,0.3)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadein: "fadein 1.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
