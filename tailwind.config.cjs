/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary": '#3CB815',
        "secondary": '#F65005',
        "light": '#F7F8FC',
        "dark": '#111111',
        "darkBackground": '#1a1a1a', // Example dark background color
        "darkText": '#ffffff', // White text color
        "darkBlue":"#0D1B2A"
      }
    },

  },
  plugins: [],
}
