module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f26f63",
          "secondary": "#edd163",
          "accent": "#ffccee",
          "neutral": "#33223A",
          "base-100": "#ffffff",
          "info": "#2A50EA",
          "success": "#13AA72",
          "warning": "#F0A856",
          "error": "#EE2F36",
        },
      },
      // "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
