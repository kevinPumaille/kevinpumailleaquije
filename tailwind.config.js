/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Agrega tus colores personalizados aquí
        fondoSection: '#451952',
        fondoNav: '#662549',
        letraPrincipal: '#7DB1C5',
        letraSecundario:'#BABA20',
        blueviolet:'#8a2be2'
      },
    },
  },
  plugins: [],
}

