import Vue from 'vue';
const amplitude = require('amplitude-js');

export default ({ app }) => {
  Vue.prototype.$amplitude = amplitude.getInstance();
  Vue.prototype.$amplitude.init(process.env.AMPLITUDE_API_KEY);
};
