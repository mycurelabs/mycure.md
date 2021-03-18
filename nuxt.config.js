const redirectSSL = require('redirect-ssl');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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
  head: {
    titleTemplate: '%s',
    title: 'MYCURE Advanced Complete Clinic Management System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: 'https://app.heyflow.co/pixel/Ol00Wv3kMUxpaalI',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2e9fdf', throttle: 0 },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/main.js',
    '~/plugins/vue-fragment.js',
    '~/plugins/vue-media-query-mixin.js',
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~plugins/crisp.js', mode: 'client' },
    { src: '~/plugins/vue-analytics.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/vue-social-sharing.js', mode: 'client' },
    { src: '~/plugins/vue-typer.js', mode: 'client' },
    { src: '~/plugins/vue-morphling.js', mode: 'client' },
    '~/plugins/vue-lazyload.js',
    { src: '~/plugins/amplitude.js', mode: 'client' },
    { src: '~/plugins/mycure.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: process.env.GA_ID,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: [
        'Poppins:400', 
        'Open Sans:300,400',
      ],
    },
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
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
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-clamp', 'resize-detector'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production',
    }),
  ],
};
