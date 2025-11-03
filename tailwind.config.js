/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007BFF',
          light: '#3395FF',
          dark: '#0056B3',
        },
        secondary: {
          DEFAULT: '#00C68E',
          light: '#00E5A0',
          dark: '#00A076',
        },
        background: {
          DEFAULT: '#0C1220',
          light: '#151D2E',
          dark: '#070B14',
        },
        accent: {
          DEFAULT: '#FFD166',
          light: '#FFE099',
          dark: '#E6B84D',
        },
        text: {
          DEFAULT: '#EAF2F8',
          secondary: '#B8C5D0',
          muted: '#8A96A3',
        }
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
}
