import Vue from 'vue';

export default (context) => {
  const mixin = {
    computed: {
      $isMobile () {
        console.warn('ctx from res ismobile', context);
        return context.$vuetify.breakpoint.width < 1015;
      },
      /* Used if you do not want changes to transcend to widescreens */
      $isRegularScreen () {
        return context.$vuetify.breakpoint.width > 1014 && context.$vuetify.breakpoint.width < 1904;
      },
      $isWideScreen () {
        return context.$vuetify.breakpoint.width > 1903;
      },
    },
  };
  if (!Vue.responsiveMixin) {
    console.warn('i used mixin');
    Vue.responsiveMixin = true;
    Vue.mixin(mixin);
  }
};
