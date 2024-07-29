/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'miniCrossword-sm': '669px', //Goal is 429px
      },
    },
  },
  plugins: [],
}
