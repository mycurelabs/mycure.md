<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      //- IMAGE
      v-col(v-if="!$isMobile" cols="12" md="5" justify="center" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${outpatient.image}`)" :alt="outpatient.header" width="105%")
      //- DESCRIPTION
      v-col(cols="12" md="4" offset-md="1" align-self="center")
        h1.font-30.lh-title.pb-3.font-weight-light {{ outpatient.header }}
        p.text-justify.font-16.mt-3.font-gray {{ outpatient.description }}
        v-btn(text @click="onClick").mt-5.ml-n4.get-started-btn
          strong.font-18.text-capitalize.primary--text {{ outpatient.btnTxt }}
          v-icon.primary--text {{ outpatient.btnIcon }}
      //- IMAGE MOBILE
      v-col(v-if="$isMobile" cols="12" md="6" align="center")
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
</style>
