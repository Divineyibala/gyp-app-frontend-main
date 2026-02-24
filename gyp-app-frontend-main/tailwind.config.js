/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4ADE80',
          500: '#22C55E',
        },
        purple: {
          600: '#9333EA',
        },
      },
    },
  },
  plugins: [],
}