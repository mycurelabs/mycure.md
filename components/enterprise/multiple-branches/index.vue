<template lang="pug">
  v-container.py-12.content-panel-branches
    v-row(justify="center")
      v-col(cols="12" md="6" align="center" v-if="!$isMobile")
        img(v-lazy="require(`~/assets/images/enterprise/${branches.image}`)" :alt="branches.header" width="100%").branches-image
      v-col(cols="12" md="4" lg="4" align-self="center" v-if="!$isMobile").branches-description
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.font-18.mt-3.font-gray {{branches.description}}
        v-btn(@click="onGetStarted" text).mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{branches.btnTxt}}
          v-icon.primary--text {{branches.btnIcon}}
      v-col(cols="12" md="6" align-self="center" v-if="$isMobile")
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.font-18.mt-3.font-gray {{branches.description}}
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
@media screen and (device-width: 1024px) {
  .branches-image {
    width: 100%;
  }
}
@media screen and (min-width: 1366px) {
  .branches-image {
    margin-left: -60px;
  }
}
</style>
