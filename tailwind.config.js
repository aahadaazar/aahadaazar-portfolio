const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-fira)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
