/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        38: "152px",
      },
      fontSize: {
        xxs: "0.7rem",
      },
      padding: {
        1.8: "0.45rem",
        4.5: "18px",
      },
      height: {
        30: "7.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
