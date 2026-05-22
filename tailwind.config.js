const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-fira)', ...fontFamily.mono],
      },
      colors: {
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        "paper-3": "var(--color-paper-3)",
        rule: "var(--color-rule)",
        muted: "var(--color-muted)",
        neutral: "var(--color-neutral)",
        ink: "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        accent: "var(--color-accent)",
      }
    },
  },
  plugins: [],
};
