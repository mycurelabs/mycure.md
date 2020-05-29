<template lang="pug">
  div.main-container.blue.white--text
    v-container
      v-row(v-if="!isMobile").px-4
        v-col(cols="11").pt-2.text-center
          | {{ bannerText }}
          u.font-weight-bold impacts of COVID.19
      v-row(v-else).pl-3
        v-col(cols="10").text-center
          | {{ bannerText }}
          u.font-weight-bold impacts of COVID.19
</template>

<script>
// components
import CookieLaw from 'vue-cookie-law';
export default {
  components: {
    CookieLaw,
  },
  data () {
    this.bannerText = 'The world needs independent businesses. Learn about the actions we\'re taking to address the ';
    return {
      isMobile: true,
    };
  },
  computed: {
    position () {
      return 'top';
    },
    bannerClasses () {
      const webClasses = ['font-16', 'py-3'];
      return this.isMobile
        ? ['py-1']
        : webClasses;
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
.main-container {
  width: 100%
}
</style>
