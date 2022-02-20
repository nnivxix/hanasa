module.exports = {
	content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {

		colors : {
			"hanasa-blue-primary": "#1C6DD0",
			"hanasa-blue-dark": "#034078",
		},
		height: {
			"hv-70": "70vh",
			"vh-f" : "100vh",
			"auto" : "auto"
		},
		fontFamily: {
			'inter': [ 'Inter', 'sans-serif']
		},

    extend: {
			backgroundImage: {
			'spiral': "url('static/assets-nuxt/line_spiral.svg')"
		},
			theme: {

			}
		},
  },
  plugins: [],
}
