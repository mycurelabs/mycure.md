import 'babel-polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/mycure-sdk';
import './plugins/vue-fragment';
import App from './App.vue';
import router from './router';
import store from './store';
import './mixins';
import '@mdi/font/css/materialdesignicons.css';
import VueCarousel from 'vue-carousel';
import CookieLaw from 'vue-cookie-law';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(CookieLaw);
Vue.use(VueAnalytics, {
  id: 'UA-78838129-8',
  debug: {
    sendHitTask: process.env.VUE_APP_ENV === 'production'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
