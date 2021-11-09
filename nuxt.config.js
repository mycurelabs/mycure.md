const redirectSSL = require('redirect-ssl');
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
    GMAPS_GEOCODING_API_KEY: process.env.GMAPS_GEOCODING_API_KEY,
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', type: 'image', href: '~/assets/images/home/homepage-usp-bg.webp' },
    ],
  },

  // Progress bar loader
  loading: { color: '#2e9fdf', throttle: 0 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/stylesheets/mycure-web.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-media-query-mixin.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/vue-gtag.js',
    '~/plugins/vue-screen.js',
    { src: '~/plugins/main.js' },
    { src: '~/plugins/responsive.js', mode: 'client' },
    { src: '~/plugins/vue-observe-visibility.js', mode: 'client' },
    { src: '~/plugins/mc-btn' },
    { src: '~/plugins/mc-image-viewer', mode: 'client' },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/crisp.js', mode: 'client' },
    { src: '~/plugins/amplitude.js', mode: 'client' },
    { src: '~/plugins/vue-morphling.js', mode: 'client' },
    { src: '~/plugins/mycure.js', mode: 'client' },
    { src: '~/plugins/vue-stripe.js', mode: 'client' },
    { src: '~/plugins/vue-browser-geolocation.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    'nuxt-animejs',
    'vue-social-sharing/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-screen/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    // Sitemap should always be declared last according to docs https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
  ],
  // Robots
  robots: [
    {
      UserAgent: '*',
      Disallow: () => '/payment',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
    // {
    //   UserAgent: '*',
    //   Disallow: () => '/signup',
    //   Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    // },
    {
      UserAgent: '*',
      Disallow: () => '/forgot-password',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
    // Temporary disallow CSI since content is not yet complete
    {
      UserAgent: '*',
      Disallow: () => '/csi',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
    // Hidden
    {
      UserAgent: '*',
      Disallow: () => '/hospitals',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
    {
      UserAgent: '*',
      Disallow: () => '/pharmacy',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
    {
      UserAgent: '*',
      Disallow: () => '/directory/results',
      Sitemap: `${process.env.WEB_MAIN_URL}/sitemap.xml`,
    },
  ],
  // Google Web Font Loader Module
  webfontloader: {
    google: {
      families: [
        'Poppins:400,500,600,700,900',
        'Open Sans:400,600',
      ],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: './vuetify.options.js',
  },

  // Google Analytics Module
  googleAnalytics: {
    id: process.env.GA_ID,
    autoTracking: {
      screenview: true,
    },
    debug: {
      sendHitTask: true,
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GA_ID,
      autoTracking: {
        screenview: true,
      },
    },
  },
  sitemap: {
    lastmod: '2021-10-26',
    hostname: process.env.WEB_MAIN_URL,
    gzip: true,
    exclude: [
      // '/signup/*',
      '/payment/*',
      '/forgot-password',
      '/csi',
      '/hospitals',
      '/pharmacy',
      '/directory/results',
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vue-clamp',
      'resize-detector',
    ],
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
