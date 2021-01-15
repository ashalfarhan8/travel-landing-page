module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      global: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        container: "90vw",
      },
    },
    colors: {
      primary: "#1AC6C6",
      secondary: "#01BAEF",
      accent: "#26081C",
      white: "#fff",
      black: "#000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
