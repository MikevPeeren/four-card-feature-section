module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#EA5454",
        cyan: "#44D3D2",
        orange: "#FCAE4A",
        blue: "#549EF2",
        gray: "#4D4F62",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
