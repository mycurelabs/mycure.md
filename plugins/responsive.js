import Vue from 'vue';

export default (context) => {
  const mixin = {
    computed: {
      $isMobile () {
        const width = context.$vuetify.breakpoint.width || context.$vuetify.breakpoint.framework.breakpoint.width;
        return width < 1015;
      },
      /* Used if you do not want changes to transcend to widescreens */
      $isRegularScreen () {
        const width = context.$vuetify.breakpoint.width || context.$vuetify.breakpoint.framework.breakpoint.width;
        return width > 1014 && width < 1904;
      },
      $isWideScreen () {
        const width = context.$vuetify.breakpoint.width || context.$vuetify.breakpoint.framework.breakpoint.width;
        return width > 1903;
      },
    },
  };
  if (!Vue.responsiveMixin) {
    console.warn('i used mixin');
    Vue.responsiveMixin = true;
    Vue.mixin(mixin);
  }
};
