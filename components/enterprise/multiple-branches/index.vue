<template lang="pug">
  v-container.py-12.content
    v-row(justify="center")
      v-col(cols="12" md="6" align="center" v-if="!$isMobile")
        img(v-lazy="require(`~/assets/images/enterprise/${branches.image}`)" :alt="branches.header").branches-image
      v-col(cols="12" md="6" align-self="center" v-if="!$isMobile").pl-10.branches-description
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.font-18.mt-3.font-gray {{branches.description}}
        v-btn(text).mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{branches.btnTxt}}
          v-icon.primary--text {{branches.btnIcon}}
      v-col(cols="12" md="6" align-self="center" v-if="$isMobile")
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.font-18.mt-3.font-gray {{branches.description}}
        v-btn(text).mt-5.ml-n4.get-started-btn
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
};
</script>

<style scoped>
@media screen and (device-width: 1024px) {
  .branches-image {
    width: 100%;
  }
}
</style>
