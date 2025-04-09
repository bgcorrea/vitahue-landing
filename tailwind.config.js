/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores base para el tema de construcción
        'arena': {
          50: '#faf6f2',
          100: '#f5ede6',
          200: '#ebd9cc',
          300: '#e0c5b3',
          400: '#d6b199',
          500: '#cc9d80', // Color principal
          600: '#c28966',
          700: '#b8754d',
          800: '#ae6133',
          900: '#a44d1a',
        },
        'piedra': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666', // Color principal
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
        'tierra': {
          50: '#f5f3f0',
          100: '#e6e2dd',
          200: '#d0c7be',
          300: '#b3a699',
          400: '#968574',
          500: '#7d6b5a', // Color principal
          600: '#665748',
          700: '#524639',
          800: '#42372d',
          900: '#362d25',
        },
      },
    },
  },
  plugins: [],
} 