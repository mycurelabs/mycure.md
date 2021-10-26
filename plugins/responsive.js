import Vue from 'vue';

export default (context) => {
  const mixin = {
    computed: {
      $isMobile () {
        return context.$screen.width < 1015;
      },
      /* Used if you do not want changes to transcend to widescreens */
      $isRegularScreen () {
        return context.$screen.width > 1014 && context.$screen.width < 1904;
      },
      $isWideScreen () {
        return context.$screen.width > 1903;
      },
    }
  };

  Vue.mixin(mixin);
};
