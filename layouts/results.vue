<template lang="pug">
  v-app#app
    app-bar(v-if="!loading")
    nuxt
    results-footer(v-if="!loading")
</template>

<script>
export default {
  components: {
    AppBar: () => import('~/components/home/AppBar'),
    ResultsFooter: () => import('~/components/services/ResultsFooter'),
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
