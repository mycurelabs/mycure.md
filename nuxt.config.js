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
  loading: { color: '#2e9fdf', throttle: 0},
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
    { src: '~/plugins/vue-analytics.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
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
    'nuxt-ssr-cache',
  ],
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/',
      '/doctors-clinics',
      '/specialized-clinics',
      '/multispecialty-clinics',
      '/features',
      '/our-story'
    ],
    
    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 10,
      // number of seconds to store this page in cache
      ttl: 60,
    },
  },
  webfontloader: {
    google: {
      families: ['Work+Sans:400,700,900', 'Source+Sans+Pro:400,700'],
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
