/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        dark: {
          200: "var(--dark-200)",
        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
          1000: "var(--primary-1000)",
        },
        secundary: {
          100: "var(--secundary-100)",
          200: "var(--secundary-200)",
          300: "var(--secundary-300)",
          400: "var(--secundary-400)",
          500: "var(--secundary-500)",
          600: "var(--secundary-600)",
          700: "var(--secundary-700)",
          800: "var(--secundary-800)",
          900: "var(--secundary-900)",
          950: "var(--secundary-950)",
          1000: "var(--secundary-1000)",
        },
      },

      fontFamily: {
        monserrat: "Monserrat",
      },
      animation: {
        glow: "glow 4s linear infinite",
        opacity: "opacity 500ms forwards",
      },
      boxShadow: {
        bottom: "0px 0.25em var(--secundary-700)",
        center: "0px 0px 20px",
        "center-10": "0px 0px 10px ",
      },
    },
    plugins: [],
  },
};
