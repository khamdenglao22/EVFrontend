/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color-first': '#004535',
        'bg-color-secondary': '#00896A',
        'bg-color-three': '#007471',
        'bg-color-four': '#F0F2F1',
        'text-color-first': '#FFFFFF',
        'text-color-secondary':'#000000',
        'text-color-three':'#707070',
      },
    },
  },
  plugins: [],
}

