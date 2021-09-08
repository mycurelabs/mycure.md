import Vue from 'vue';
import OtpInput from '@bachdgvn/vue-otp-input';

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

Vue.mixin({
  computed: {
    $isMobile () {
      return this.$vuetify.breakpoint.width < 1041;
    },
    /* Used if you do not want changes to transcend to widescreens */
    $isRegularScreen () {
      return this.$vuetify.breakpoint.width > 1040 && this.$vuetify.breakpoint.width < 1904;
    },
    $isWideScreen () {
      return this.$vuetify.breakpoint.width > 1903;
    },
  },
});

Vue.component('VOtpInput', OtpInput);
