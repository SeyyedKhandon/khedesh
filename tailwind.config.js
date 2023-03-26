/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          from: { transform: "translateX(-100px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        fadeInRight: {
          from: { transform: "translateX(100px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "fade-in-left": "fadeInLeft 1s linear",
        "fade-in-right": "fadeInRight 1s linear",
      },
    },
  },
  plugins: [],
};
