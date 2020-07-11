<template lang="pug">
  v-container#multibranch-facilities.py-12.content-panel-branches
    v-row(justify="center")
      //- IMAGE
      v-col(v-if="!$isMobile" cols="12" md="5" align-self="center")
        img(v-lazy="require(`~/assets/images/enterprise/${branches.image}`)" :alt="branches.header" width="105%")
      //- DESCRIPTION
      v-col(cols="12" md="4" offset-md="1" align-self="center")
        p.font-16.mt-3.font-gray.primary--text {{ branches.subHeader }}
        h1.font-30.lh-title.pb-3.font-weight-light {{ branches.header }}
        p.text-justify.font-16.mt-3.font-gray {{ branches.description }}
        v-btn(@click="onGetStarted" text).mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ branches.btnTxt }}
          v-icon.primary--text {{ branches.btnIcon }}
      //- MOBILE IMAGE
      v-col(v-if="$isMobile" cols="12" md="6" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${branches.imageMobile}`)" :alt="branches.header" width="100%")
</template>

<script>
import { BRANCHES } from '../enterprise-contents';
export default {
  data () {
    this.branches = BRANCHES;
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.content-panel-branches {
  position: relative;
  z-index: 2;
}
</style>
