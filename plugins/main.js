import Vue from 'vue';
import OtpInput from '@bachdgvn/vue-otp-input';
import CanUseWebp from '~/utils/can-use-webp.js';

export default (context, inject) => {
  const useWebp = async () => await CanUseWebp();
  inject('useWebp', useWebp);
  context.$useWebp = useWebp;
  context.$screen = Vue.prototype.$screen;
  inject('isMobile', context.$device.isMobileOrTablet);
  inject('isRegularScreen', context.$device.isDesktop);
  inject('isWideScreen', false);

  // if (process.client) {
  //   Vue.mixin({
  //     computed: {
  //       $isMobile () {
  //         return context.$screen.width < 1015;
  //       },
  //       /* Used if you do not want changes to transcend to widescreens */
  //       $isRegularScreen () {
  //         return context.$screen.width > 1014 && context.$screen.width < 1904;
  //       },
  //       $isWideScreen () {
  //         return context.$screen.width > 1903;
  //       },
  //     },
  //   });
  // }

  Vue.component('VOtpInput', OtpInput);
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
