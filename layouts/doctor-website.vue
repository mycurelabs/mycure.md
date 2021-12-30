<template lang="pug">
  v-app#app
    //- NOTE: remove loading
    //- so solve seo issue
    //- do not remove yet
    //- div(v-if="!loading")
    div
      nuxt
    app-footer(v-if="!loading")
</template>

<script>
import AppBar from '~/components/doctor-website/app-bar';
import AppFooter from '~/components/clinic-website/AppFooter';
export default {
  components: {
    AppBar,
    AppFooter,
  },
  data () {
    return {
      loading: true,
    };
  },
  created () {
    this.loading = false;
  },
};
</script>
