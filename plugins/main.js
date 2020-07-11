import Vue from 'vue';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.wXS || this.wSM;
    },
    /* Used if you do not want changes to transcend to widescreens */
    $isRegularScreen () {
      return this.wMD || this.wLG;
    },
  },
});
