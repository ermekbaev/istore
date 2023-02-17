/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "20rem",
      },
      height: {
        home: "42.9rem",
      },
      padding: {
        8.5: "2.2rem",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        L: "1440px",
        M: "425px",
        M2: "375px",
        smallM: "320px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
