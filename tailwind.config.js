/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",
        "secondary-1": "var(--secondary-1)"
      }
    }
  },
  plugins: []
};
