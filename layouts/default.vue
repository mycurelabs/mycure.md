<template lang="pug">
  v-app#app
    mc-navbar
    div(style="padding-top: 35px")
      nuxt
    mc-footer
</template>

<script>
// - components
import McNavbar from '~/components/home/AppNavbar';
import McFooter from '~/components/commons/mc-footer';

export default {
  components: {
    McNavbar,
    McFooter,
  },
  data () {
    return {
      loading: true,
    };
  },
  created () {
    this.$vuetify.theme.dark = false;
  },
  mounted () {
    window.$crisp.push(['do', 'chat:show']);
  },
};
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
