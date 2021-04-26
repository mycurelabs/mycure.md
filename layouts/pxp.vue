<template lang="pug">
  v-app#app
    pxp-app-bar(v-if="!loading")
    nuxt
    pxp-footer(v-if="!loading")
</template>

<script>
import PxpAppBar from '~/components/home/AppBar';
import PxpFooter from '~/components/commons/mc-footer';
export default {
  components: {
    PxpAppBar,
    PxpFooter,
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
