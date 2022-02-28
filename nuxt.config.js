export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nnivxix a.k.a Hanasa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A man shifting-shape from graphic designer to front-end web developer.' },
      { name: 'format-detection', content: 'telephone=no' },
			//facebook or OpenGraph
			{ property: 'og:type', content: 'website'},
			{ property: 'og:url', content: 'https://hansoflast.com'},
			{ property: 'og:title', content: 'Hanasa' },
			{ property: 'og:description', content: 'A man shifting-shape from graphic designer to front-end web developer.'},
			{ property: 'og:image', content:'/meta-img.png'},
			//Twitter
			{ property: 'twitter:card', content:'summary_large_image'},
			{ property: 'twitter:url', content: 'https://hansoflast.com'},
			{ property: 'twitter:title', content: 'Hanasa' },
			{ property: 'twitter:description', content: 'A man shifting-shape from graphic designer to front-end web developer.'},
			{ property: 'twitter:image', content:'/meta-img.png'},


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
			},
			{
				rel: 'stylesheet',
				href: "https://fonts.googleapis.com/icon?family=Material+Icons"
			}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
		'@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		'@/plugins/helper'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
		'@nuxt/postcss8',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://go.nuxtjs.dev/content
    '@nuxt/content',


  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
		icon: {
			source: 'src/static/icon.png',
			purpose: 'maskable',
			targetDir: 'icons'
		},
		meta: {
			name: 'Hanasa',
			description: 'A man shifting-shape from graphic designer to front-end web developer.',
			theme_color: '#1C6DD0',

		},
    manifest: {
			name: "Hanasa",
			short_name: 'Hanasa',
      lang: 'en',
			description: 'A man shifting-shape from graphic designer to front-end web developer.',
			background_color: '#ffffff',
			theme_color: '#1C6DD0',
    },
		workbox: {
			importScripts: [
				'sw.js'
			],
			runtimeCaching: [
				{
					urlPattern: 'https://fonts.googleapis.com/.*',
					strategyOptions: {
						cacheName: 'fonts-cache',
					},
					strategyPlugins: [{
						 use: 'Expiration',
						 config: {
							 maxEntries: 10,
							 maxAgeSeconds: 300
						 }
					 }]
				}
			]
		}
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
		postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
