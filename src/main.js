import '@babel/polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';
import './mycure';
import './mixins';
import './directives';
import './visitor-country';
import VueMorphling from 'vue-morphling';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'kidlat-css/css/kidlat.css';
import VueHtmlToPaper from './mixins/vue-html-to-paper';
import VImgFallback from 'v-img-fallback';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueMediaQueryMixin from 'vue-media-query-mixin';

Vue.use(VueMediaQueryMixin, {framework: 'bootstrap'});

Vue.use(VueYouTubeEmbed);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueHtmlToPaper, {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
});
Vue.use(VImgFallback, {
  loading: require('./assets/images/loading-2.gif'),
  error: 'https://firebasestorage.googleapis.com/v0/b/mycure-ab311.appspot.com/o/assets%2Fperson-placeholder.png?alt=media&token=04673547-7572-40dc-81f6-007d7a58056d'
});

// Vue.use(Vuefity, {
//   theme: {
//     primary: '#039BE5',
//     secondary: '#29B6F6',
//     accent: '#7CB342',
//     error: '#f44336',
//     warning: '#ffeb3b',
//     info: '#2196f3',
//     success: '#7CB342'
//   }
// });

Vue.use(VueMorphling);

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
