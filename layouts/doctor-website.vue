<template lang="pug">
  v-app#app
    //- NOTE: remove loading
    //- so solve seo issue
    //- do not remove yet
    //- div(v-if="!loading")
    div
      nuxt
    app-footer
</template>

<script>
// import Vue from 'vue';
// import ResponsiveMixins from '~/mixins/responsiveMixins';
import AppBar from '~/components/doctor-website/app-bar';
import AppFooter from '~/components/doctor-website/app-footer';

// Vue.mixin(ResponsiveMixins);

export default {
  components: {
    AppBar,
    AppFooter,
  },
};
</script>
