<template lang="pug">
  v-app#app
    //- app-bar(v-if="!loading")
    //- div(style="padding-top: 45px;")
    nuxt
    //- app-footer(v-if="!loading")
</template>

<script>
import AppBar from '~/components/doctor-website/app-bar';
import AppFooter from '~/components/doctor-website/app-footer';
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
  mounted () {
    this.loading = false;
  },
};
</script>
