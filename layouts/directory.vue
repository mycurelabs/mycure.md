<template lang="pug">
  v-app#app.pa-0
    directory-app-bar
    nuxt
</template>

<script>
// import Vue from 'vue';
// import ResponsiveMixins from '~/mixins/responsiveMixins';
import DirectoryAppBar from '~/components/directory/DirectoryAppBar';

// Vue.mixin(ResponsiveMixins);

export default {
  components: {
    DirectoryAppBar,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
};
</script>
