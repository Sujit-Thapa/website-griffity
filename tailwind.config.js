/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "9.8125rem", // 157px
        h2: "6.875rem", // 110px
        h3: "3.75rem", // 60px
        h4: "2.8125rem", // 45px
        h5: "1.875rem", // 30px
        base: "1.25rem", // 20px for regular paragraph
      },
      colors: {
        primary: "#DBA039",
        body: "#081C26",
        white: "#FFFFFF",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px", // modified 2xl to 1440px
      },
    },
  },
  plugins: [],
};
