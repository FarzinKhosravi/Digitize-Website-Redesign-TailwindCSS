/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.7rem",
      },
      padding: {
        1.8: "0.45rem",
      },
      height: {
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
