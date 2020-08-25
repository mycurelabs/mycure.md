import Vue from 'vue';
const amplitude = require('amplitude-js');

export default ({ app }) => {
  Vue.prototype.$amplitude = amplitude.getInstance();
  Vue.prototype.$amplitude.init(process.env.AMPLITUDE_API_KEY);

  app.router.afterEach((to, from) => {
    if (app.router.history.current.name === 'signin') {
      Vue.prototype.$amplitude.logEvent('RET001 Page > Sign in');
    }
  });
};
