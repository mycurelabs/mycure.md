import Vue from 'vue';

export default (context) => {
  Vue.mixin({
    computed: {
      $isMobile () {
        if (process.client) return this.$screen.width < 1015;
        return false;
      },
      /* Used if you do not want changes to transcend to widescreens */
      $isRegularScreen () {
        if (process.client) return this.$screen.width > 1014 && this.$screen.width < 1904;
        return false;
      },
      $isWideScreen () {
        if (process.client) return this.$screen.width > 1903;
        return false;
      },
    },
  });
};
