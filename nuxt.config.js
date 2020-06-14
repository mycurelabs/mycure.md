module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
    SIGNIN_URL: process.env.SIGNIN_URL,
    CMS_URL: process.env.CMS_URL,
    IPSTACK_API: process.env.IPSTACK_API,
    IPSTACK_API_KEY: process.env.IPSTACK_API_KEY,
    STRIPE_PK: process.env.STRIPE_PK,
    STRIPE_CHECKOUT_SUCCESS_URL: process.env.STRIPE_CHECKOUT_SUCCESS_URL,
    STRIPE_CHECKOUT_CANCEL_URL: process.env.STRIPE_CHECKOUT_CANCEL_URL,
    GA_ID: process.env.GA_ID,
    PX_PORTAL_URL: process.env.PX_PORTAL_URL,
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
    { src: '~/plugins/vue-morphling.js', mode: 'client' },
    '~/plugins/vue-lazyload.js',
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
      families: ['Poppins:400,700,900'],
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
            primary: '#2e9fdf',
            accent: '#82B1FF',
            secondary: '#424242',
            info: '#2196F3',
            warning: '#FFC107',
            error: '#f75a5f',
            success: '#7fad33',
          },
          dark: {
            primary: '#2e9fdf',
            accent: '#82B1FF',
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  // generate: {
  //   routes: [
  //     '/doctors/jofftiquez',
  //     '/doctors/jeanrivera',
  //     '/doctors/william',
  //     '/doctors/paulette',
  //     '/doctors/telehealth',
  //   ],
  // },
};
