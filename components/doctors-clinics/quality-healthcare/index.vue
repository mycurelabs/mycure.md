<template lang="pug">
  v-container.quality-healthcare-contents
    v-row(justify="center").py-12
      v-col(align-self="center" cols="12" md="5" v-if="!$isMobile")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-E-patient-portal.webp')"
          alt="Access quality healthcare"
        ).web-image
      v-col(align-self="center" cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light {{ACCESS_QUALITY_HEALTHCARE.header}}
        br
        span.font-18.mt-3.font-gray {{ACCESS_QUALITY_HEALTHCARE.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{ACCESS_QUALITY_HEALTHCARE.btnTxt}}
          v-icon.primary--text {{ACCESS_QUALITY_HEALTHCARE.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-E-patient-portal.webp')"
        alt="Access quality healthcare"
        width="100%"
      )
</template>

<script>
import { ACCESS_QUALITY_HEALTHCARE } from '../doctors-clinics-content';
export default {
  data () {
    this.ACCESS_QUALITY_HEALTHCARE = ACCESS_QUALITY_HEALTHCARE;
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
@media screen and (device-width: 1024px) {
  .web-image {
    width: 100%;
  }
  .quality-healthcare-contents {
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1024px) {
  .web-image {
    margin-left: -20%;
    width: 115%;
  }
}
</style>
