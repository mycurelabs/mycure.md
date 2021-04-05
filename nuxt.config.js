import colors from 'vuetify/es5/util/colors'

export default {
  env: {
    AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY,
    API_URL: process.env.API_URL,
    CMS_URL_BASE: process.env.CMS_URL_BASE,
    CMS_URL: process.env.CMS_URL,
    CRISP_WEBSITE_ID: process.env.CRISP_WEBSITE_ID,
    ENV: process.env.ENV,
    GA_ID: process.env.GA_ID,
    IPSTACK_API_KEY: process.env.IPSTACK_API_KEY,
    IPSTACK_API: process.env.IPSTACK_API,
    PX_PORTAL_URL: process.env.PX_PORTAL_URL,
    SIGNIN_URL: process.env.SIGNIN_URL,
    STRIPE_CHECKOUT_CANCEL_URL: process.env.STRIPE_CHECKOUT_CANCEL_URL,
    STRIPE_CHECKOUT_SUCCESS_URL: process.env.STRIPE_CHECKOUT_SUCCESS_URL,
    STRIPE_PK: process.env.STRIPE_PK,
    WEB_MAIN_URL: process.env.WEB_MAIN_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'MYCURE Advanced Clinic Management System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Progress bar loader
  loading: { color: '#2e9fdf', throttle: 0 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/main.js',
    '~/plugins/vue-fragment.js',
    '~/plugins/vue-media-query-mixin.js',
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~plugins/crisp.js', mode: 'client' },
    { src: '~/plugins/vue-social-sharing.js', mode: 'client' },
    { src: '~/plugins/vue-morphling.js', mode: 'client' },
    '~/plugins/vue-lazyload.js',
    { src: '~/plugins/mycure.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],
  webfontloader: {
    google: {
      families: [
        'Poppins:400', 
        'Open Sans:300,400',
      ],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    frameworkOptions: {
      theme: {
        themes: {
          light: {
            primary: '#04B1E7',
            accent: '#7fad33',
            secondary: '#424242',
            info: '#2196F3',
            warning: '#FFC107',
            error: '#f75a5f',
            success: '#7fad33',
          },
          dark: {
            primary: '#04B1E7',
            accent: '#7fad33',
            secondary: '#424242',
            info: '#2196F3',
            warning: '#FFC107',
            error: '#f75a5f',
            success: '#7fad33',
          },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-clamp', 'resize-detector'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
};
