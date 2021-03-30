import 'babel-polyfill';
import sdk from '@mycure/sdk-js';

export default (context, inject) => {
  if (context.$sdk) {
    return;
  }
  sdk.initialize(process.env.API_URL, {
    storage: window.localStorage,
  });
  inject('sdk', sdk);
  context.$sdk = sdk;
};
