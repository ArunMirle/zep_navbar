/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom scrollbar styles
      scrollbar: {
        DEFAULT: 'h-2 bg-gray-200',
        thumb: 'h-2 bg-gray-400 rounded',
        track: 'bg-gray-100 rounded',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
}

