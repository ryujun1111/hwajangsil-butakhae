/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#087F8C',
        secondary: '#E8F7F8',
        text: '#172B36',
      },
    },
  },
  plugins: [],
}
