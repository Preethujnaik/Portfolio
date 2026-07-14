module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #6366f1, 0 0 30px #818cf8" },
          "50%": { boxShadow: "0 0 25px #6366f1, 0 0 50px #818cf8" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
