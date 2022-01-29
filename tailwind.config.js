module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spiral': "url('src/assets/line_spiral.svg')"
      }
    },
  },
  plugins: [],
}
