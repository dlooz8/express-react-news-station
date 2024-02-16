/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#f5f5f5',
        'primary75': '#F81539' 
      },
    },
  },
  plugins: [],
}