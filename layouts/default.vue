<template lang="pug">
  v-app#app
    mc-navbar
    div(style="padding-top: 35px")
      nuxt
    mc-footer
    mc-cookie-prompt(v-if="!isCookieAccepted")
</template>

<script>
// - components
import McNavbar from '~/components/home/AppNavbar';
import McFooter from '~/components/commons/mc-footer';
import McCookiePrompt from '~/components/commons/McCookiePrompt';

export default {
  components: {
    McNavbar,
    McFooter,
    McCookiePrompt,
  },
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    isCookieAccepted () {
      return process.browser ? localStorage.getItem('accept-cookie') : false;
    },
  },
  created () {
    this.$vuetify.theme.dark = false;
  },
  // mounted () {
  //   window.Intercom('show');
  // },
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
.page-container {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
