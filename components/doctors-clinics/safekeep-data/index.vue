<template lang="pug">
  v-container
    v-row(justify="center").py-12
      v-col(align-self="center" v-if="!$isMobile" cols="12" md="5")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.png')"
          alt="Safekeep your important medical data"
        ).web-image
      v-col(align-self="center" cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light {{SAFEKEEP_MEDICAL_DATA.header}}
        br
        span.font-18.mt-3.font-gray {{SAFEKEEP_MEDICAL_DATA.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{SAFEKEEP_MEDICAL_DATA.btnTxt}}
          v-icon.primary--text {{SAFEKEEP_MEDICAL_DATA.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.png')"
        alt="Safekeep your important medical data"
        width="100%"
      )
</template>

<script>
import { SAFEKEEP_MEDICAL_DATA } from '../doctors-clinics-content';
export default {
  data () {
    this.SAFEKEEP_MEDICAL_DATA = SAFEKEEP_MEDICAL_DATA;
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
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
@media screen and (min-width: 1024px) {
  .web-image {
    margin-left: -20%;
    width: 115%;
  }
}
</style>
