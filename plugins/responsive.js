import Vue from 'vue';

export default (context, inject) => {
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
    },
  };
  inject('isMobile', mixin.computed.$isMobile());
  inject('isRegularScreen', mixin.computed.$isRegularScreen());
  inject('isWideScreen', mixin.computed.$isWideScreen());
  context.$isMobile = mixin.computed.$isMobile();
  context.$isRegularScreen = mixin.computed.$isRegularScreen();
  context.$isWideScreen = mixin.computed.$isWideScreen();

  Vue.mixin(mixin);
};
