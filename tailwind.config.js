/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#191B21",
      },
      fontFamily: {
        body: "Rethink Sans",
      },
      borderColor: {
        gradient: "linear-gradient(45deg, #ff0057, #8b0fff, #0061ff, #00f7ff)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-gradient": {
          border: "2px solid transparent",
          "border-radius": "50%",
          "background-image":
            "linear-gradient(white, white), linear-gradient(45deg, #ff0057, #8b0fff, #0061ff, #00f7ff)",
          "background-origin": "border-box",
          "background-clip": "content-box, border-box",
        },
      });
    },
  ],
};
