const amplitude = require('amplitude-js');

export default ({ app }) => {
  window.$amplitude = amplitude.getInstance();
  window.$amplitude.init(process.env.AMPLITUDE_API_KEY);
};
