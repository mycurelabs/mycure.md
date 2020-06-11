<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="6" justify="center" align="center" v-if="!$isMobile")
        img(v-lazy="require(`~/assets/images/enterprise/${outpatient.image}`)" :alt="outpatient.header" width="100%").outpatient-image
      v-col(cols="12" md="5" lg="5" align-self="center").outpatient-description
        h1.font-30.lh-title.pb-3.font-weight-light {{outpatient.header}}
        p.font-18.mt-3.font-gray {{outpatient.description}}
        v-btn(text @click="onClick").mt-5.ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{outpatient.btnTxt}}
          v-icon.primary--text {{outpatient.btnIcon}}
      v-col(cols="12" md="6" align="center" v-if="$isMobile" )
        img(v-lazy="require(`~/assets/images/enterprise/${outpatient.image}`)" :alt="outpatient.header" width="100%")
</template>

<script>
import { OUTPATIENT } from '../enterprise-contents';
export default {
  data () {
    this.outpatient = OUTPATIENT;
    return {};
  },
  methods: {
    onClick () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
@media screen and (device-width: 1024px) {
  .outpatient-image {
    width: 100%;
  }
}
@media screen and (min-width: 1366px) {
  .outpatient-description {
    margin-left: 55px;
  }
}
</style>
