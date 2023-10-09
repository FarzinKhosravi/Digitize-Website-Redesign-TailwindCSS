/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        65: "260px",
      },

      inset: {
        38: "152px",
      },

      fontSize: {
        xxs: "0.7rem",
      },

      padding: {
        1.8: "0.45rem",
        4.5: "18px",
        3.4: "0.85rem",
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
