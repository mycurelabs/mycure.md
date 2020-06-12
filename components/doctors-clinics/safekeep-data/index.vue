<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(align-self="center" cols="12" md="6" v-if="!$isMobile")
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp')"
          alt="Safekeep your important medical data" width="100%"
        ).web-image
      v-col(align-self="center" cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light {{SAFEKEEP_MEDICAL_DATA.header}}
        br
        p.text-justify.font-18.mt-3.font-gray {{SAFEKEEP_MEDICAL_DATA.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{SAFEKEEP_MEDICAL_DATA.btnTxt}}
          v-icon.primary--text {{SAFEKEEP_MEDICAL_DATA.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp')"
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
