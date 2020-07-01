<template lang="pug">
  v-container#multibranch-facilities.py-12.content-panel-branches
    v-row(justify="center")
      v-col(cols="12" md="6" align="center" v-if="!$isMobile").panel-image
        img(v-lazy="require(`~/assets/images/enterprise/${branches.image}`)" :alt="branches.header" width="100%")
      v-col(cols="12" md="5" lg="5" align-self="center" v-if="!$isMobile").branches-description
        p.font-16.mt-3.font-gray.primary--text {{branches.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.text-justify.font-16.mt-3.font-gray {{branches.description}}
        v-btn(@click="onGetStarted" text).mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{branches.btnTxt}}
          v-icon.primary--text {{branches.btnIcon}}
      v-col(cols="12" md="6" align-self="center" v-if="$isMobile")
        p.font-16.mt-3.font-gray.primary--text {{branches.subHeader}}
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.text-justify.font-16.mt-3.font-gray {{branches.description}}
        v-btn(@click="onGetStarted" text).mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{branches.btnTxt}}
          v-icon.primary--text {{branches.btnIcon}}
      v-col(cols="12" md="6" align="center" v-if="$isMobile")
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
@media screen and (min-width: 1024px) {
  .panel-image {
    margin-right: 4%;
  }
}
</style>
