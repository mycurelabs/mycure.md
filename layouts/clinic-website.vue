<template lang="pug">
  v-app
    nuxt
</template>

<script>
import 'babel-polyfill';
import Vue from 'vue';
import sdk from '@mycure/sdk-js';
Vue.sdk = Vue.prototype.$sdk = sdk;

if (process.browser) {
  sdk.initialize(process.env.API_URL, {
    storage: window.localStorage,
  });
}

export default {
};
</script>

<style>
.font-50 {
  font-size: 50px !important;
}
.font-32 {
  font-size: 32px !important;
}
.font-26 {
  font-size: 26px !important;
}
.font-20 {
  font-size: 20px !important;
}

.letter-spacing-normal {
  letter-spacing: normal !important;
}
</style>
