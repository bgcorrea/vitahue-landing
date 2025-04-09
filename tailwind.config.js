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
        // Colores base para el tema de construcción y maquinaria
        'acero': {
          50: '#f5f7f8',
          100: '#e6eaed',
          200: '#cbd5db',
          300: '#a4b3bd',
          400: '#778a97',
          500: '#5c6b77', // Color principal - gris acero
          600: '#4a5661',
          700: '#3d464f',
          800: '#333a41',
          900: '#2c3137',
        },
        'tierra': {
          50: '#f8f6f3',
          100: '#ebe6e0',
          200: '#d7cdc3',
          300: '#bcaea0',
          400: '#a08f7d',
          500: '#8b7762', // Color principal - tierra natural
          600: '#726251',
          700: '#5e5043',
          800: '#4e4238',
          900: '#423830',
        },
        'maquinaria': {
          50: '#f9f7f4',
          100: '#f0e9e2',
          200: '#e1d3c5',
          300: '#cdb7a3',
          400: '#b99b81',
          500: '#a58466', // Color principal - naranja maquinaria
          600: '#8c6d54',
          700: '#745a46',
          800: '#614b3c',
          900: '#523f33',
        },
        'hormigon': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666', // Color principal - gris hormigón
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
      },
    },
  },
  plugins: [],
} 