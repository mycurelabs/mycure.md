import Vue from 'vue';

export default (context) => {
  Vue.mixin({
    computed: {
      $isMobile () {
        return this.$screen.width < 1015;
      },
      /* Used if you do not want changes to transcend to widescreens */
      $isRegularScreen () {
        return this.$screen.width > 1014 && this.$screen.width < 1904;
      },
      $isWideScreen () {
        return this.$screen.width > 1903;
      },
    },
  });
};
