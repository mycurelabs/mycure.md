import Vue from 'vue';
import OtpInput from '@bachdgvn/vue-otp-input';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.wXS || this.wSM;
    },
    /* Used if you do not want changes to transcend to widescreens */
    $isRegularScreen () {
      return this.wMD || this.wLG;
    },
    $isWideScreen () {
      return this.wXL;
    },
  },
});

Vue.component('VOtpInput', OtpInput);
