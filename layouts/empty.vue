<template lang="pug">
  v-app
    nuxt
</template>

<script>
import Vue from 'vue';
import ResponsiveMixins from '~/mixins/responsiveMixins';

Vue.mixin(ResponsiveMixins);

export default {};
</script>

<style>
#app {
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif, 'Arial';
}
/* --OTHER CSS-- */
.lh-title {
  line-height: 1.25em !important
}
.pre-white-space {
  white-space: pre;
}
</style>
