<template lang="pug">
  v-app#app
    app-bar(v-if="!loading")
    nuxt
    results-footer(v-if="!loading")
</template>

<script>
import AppBar from '~/components/home/AppBar';
import ResultsFooter from '~/components/services/ResultsFooter';
export default {
  components: {
    AppBar,
    ResultsFooter,
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
