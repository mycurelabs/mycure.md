<template lang="pug">
  v-app#app.pa-0
    v-row(align="start").pa-0.ma-0
      v-col.fill-height
        v-row(align="start")
          directory-app-bar(v-if="!loading" :class="$isMobile ? ['mt-3', 'ml-3'] : '' ")
        v-col.fill-height
          //- v-container(fluid).fill-height
          //-   v-row(justify="center").mb-16
          //-     v-col(cols="12" sm="8").mb-16.pb-16
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
