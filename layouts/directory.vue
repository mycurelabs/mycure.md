<template lang="pug">
  v-app#app.pa-0
    directory-app-bar(v-if="!loading")
    nuxt
</template>

<script>
import DirectoryAppBar from '~/components/directory/DirectoryAppBar';
export default {
  components: {
    DirectoryAppBar,
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
