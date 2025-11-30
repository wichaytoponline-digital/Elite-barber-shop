/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'elite-green': '#25D366',
        'elite-teal': '#128C7E',
        'elite-dark': '#2c3e50',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #25D366, #128C7E)',
      }
    },
  },
  plugins: [],
}