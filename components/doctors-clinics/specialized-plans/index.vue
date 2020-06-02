<template lang="pug">
  v-container
    v-row(justify="center").py-12
      v-col(cols="12" md="7")
        h1.font-30.lh-title.pb-3.font-weight-light.text-center {{SPECIALIZED_PLANS.header}}
    v-row(justify="center" align="start")
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-01-skin.png')" alt="Skin and Aesthetic")
        h1.font-22.lh-title.pb-3.font-weight-medium {{SKIN_AND_AESTHETHIC.header}}
        span.font-18.mt-3 {{SKIN_AND_AESTHETHIC.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-02-pediatrics.png')" alt="Pediatrics")
        h1.font-22.lh-title.pb-3.font-weight-medium {{PEDIATRICS.header}}
        span.font-18.mt-3 {{PEDIATRICS.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-03-maternity.png')" alt="Maternity Care")
        h1.font-22.lh-title.pb-3.font-weight-medium {{MATERNITY_CARE.header}}
        span.font-18.mt-3 {{MATERNITY_CARE.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-04-dental.png')" alt="Dental")
        h1.font-22.lh-title.pb-3.font-weight-medium {{DENTAL.header}}
        span.font-18.mt-3 {{DENTAL.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-05-diagnostic.png')" alt="Diagnostic")
        h1.font-22.lh-title.pb-3.font-weight-medium {{DIAGNOSTIC.header}}
        span.font-18.mt-3 {{DIAGNOSTIC.description}}
    v-row(justify="center").py-12
      v-col(cols="12" md="6")
        h1.font-18.font-weight-light.text-center.font-italic {{SPECIALIZED_PLANS.description}}
</template>

<script>
import {
  SPECIALIZED_PLANS,
  SKIN_AND_AESTHETHIC,
  PEDIATRICS,
  MATERNITY_CARE,
  DENTAL,
  DIAGNOSTIC,
} from '../doctors-clinics-content';
export default {
  data () {
    this.SPECIALIZED_PLANS = SPECIALIZED_PLANS;
    this.SKIN_AND_AESTHETHIC = SKIN_AND_AESTHETHIC;
    this.PEDIATRICS = PEDIATRICS;
    this.MATERNITY_CARE = MATERNITY_CARE;
    this.DENTAL = DENTAL;
    this.DIAGNOSTIC = DIAGNOSTIC;
    return {
      isMobile: true,
    };
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
</style>
