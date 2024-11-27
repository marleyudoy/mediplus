/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
  container: {
    center: true,
    padding: {
      DEFAULT : "5px",
      "md" : "10px",
      "lg" : "20px",
      "xl" : "20px"
    }
  },

  screens: {
    "sm" : "540px",
    "md" : "768px",
    "lg" : "1024px",
    "xl" : "1280px"
  },
    extend: {
      colors: {
        primaryColor: "#1b76d1",
        textColor : "rgb(138, 138, 138)"
      },
      fontSize: {
        smallFont : "14px",
        mediumFont: "20px",
        semiMedium: "30px",
        largeText : "40px"
      },
    },
  },
  plugins: [],
}

