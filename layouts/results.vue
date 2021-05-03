<template lang="pug">
  v-app#app
    app-bar(v-if="!loading")
    nuxt
</template>

<script>
import AppBar from '~/components/home/AppBar';
export default {
  components: {
    AppBar,
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
