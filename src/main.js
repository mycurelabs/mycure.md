// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Vuefity from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';
import './mixins';
import VueMorphling from 'vue-morphling';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'kidlat-css/css/kidlat.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

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

Vue.use(VueScrollTo,  {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
