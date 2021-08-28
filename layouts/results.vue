<template lang="pug">
  v-app#app
    app-bar(v-if="!loading")
    nuxt(:class="$isMobile? 'mobile-margin' : ['mb-16', 'pb-10']")
    results-footer(v-if="!loading").footer
</template>

<script>
export default {
  components: {
    AppBar: () => import('~/components/home/AppBar'),
    ResultsFooter: () => import('~/components/facilities-directory/ResultsFooter'),
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
.footer {
  position: absolute;
  bottom: 0;
}
.mobile-margin{
  margin-bottom: 360px;
}
</style>
