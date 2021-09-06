<template lang="pug">
  v-app#app
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
.topper{
  position: absolute;
  width: 1440px;
  height: 656.78px;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #EBEDFF 0%, #F7E8E6 100%);
}
</style>
