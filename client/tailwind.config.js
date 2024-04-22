const themeColors = {
  GRAY: '#F2F2F2'
  // Добавьте другие цвета и их значения
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/shared/assets/fonts/*.{ttf,otf}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: themeColors.GRAY
        },
        whiteCustomized: '#F9F9F9'
      },

      fontFamily: {
        sans: ['sans-serif']
      }
    }
  },
  plugins: []
}
