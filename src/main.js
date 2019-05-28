import 'babel-polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/mycure-sdk';
import App from './App.vue';
import router from './router';
import store from './store';
import './mixins';
import '@mdi/font/css/materialdesignicons.css';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
