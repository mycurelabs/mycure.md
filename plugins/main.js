import Vue from 'vue';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.wXS || this.wSM;
    }
  }
});
