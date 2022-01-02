<template lang="pug">
  v-app#app
    //- NOTE: remove loading
    //- so solve seo issue
    //- do not remove yet
    //- div(v-if="!loading")
    div
      h1 foo
      //- nuxt
    app-footer(v-if="!loading")
</template>

<script>
import 'babel-polyfill';
import AppFooter from '~/components/clinic-website/AppFooter';
export default {
  components: {
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

<style scoped>
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
