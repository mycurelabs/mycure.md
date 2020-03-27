const colors = require('vuetify/es5/util/colors').default;

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
    { src: "~plugins/crisp.js", mode: 'client' },
    // '~/plugins/vue-cookie-law.js',
    // '~/plugins/vue-analytics.js',
    // { src: '~/plugins/ga.js', mode: 'client' }
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
  ],
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
            accent: '#7fad33',
            secondary: '#616161',
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: '#ff5252',
            success: colors.green.accent3,
          },
          dark: {
            primary: '#2e9fdf',
            accent: '#7fad33',
            secondary: '#616161',
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: '#ff5252',
            success: colors.green.accent3,
          }
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
};
