import 'babel-polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/mycure-sdk';
import App from './App.vue';
import router from './router';
import store from './store';
import './mixins';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
