export default {
  computed: {
    $isMobile () {
      return this.$vuetify.breakpoint.width < 1015;
    },
    /* Used if you do not want changes to transcend to widescreens */
    $isRegularScreen () {
      return this.$vuetify.breakpoint.width > 1014 && this.$vuetify.breakpoint.width < 1904;
    },
    $isWideScreen () {
      return this.$vuetify.breakpoint.width > 1903;
    },
  },
};

// Vue.mixin({
//   computed: {
//     $isMobile () {
//       return this.wXS || this.wSM;
//     },
//     /* Used if you do not want changes to transcend to widescreens */
//     $isRegularScreen () {
//       return this.wMD || this.wLG;
//     },
//     $isWideScreen () {
//       return this.wXL;
//     },
//   },
// });
