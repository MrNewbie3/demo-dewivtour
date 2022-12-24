/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        blueButton: "#3E5CB8",
        textDisabled: "#797A7A",
        buttonDisabled: "#F1F3F4",
        semiOrange: "#F0623E",
        cream: "#FFBE83",
        blueMain: "#DDE4FB"
      },
      backgroundImage: {
        "home-pattern": "url('/src/assets/title_image.png')",
        "front-content": "url('/src/assets/village_images.png')",
        "back-content": "url('/src/assets/village_images2.png')",
        "triple-images": "url('/src/assets/group_image_18.png')",
      },
      boxShadow: {
        "3xl": "0px 4px 10px 2px rgba(50, 50, 50, 0.14)",
      },
      height: {
        480: "480px",
      },
      width: {
        480: "600px",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), { tailwindcss: {} }],
};
