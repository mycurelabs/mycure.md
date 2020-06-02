<template lang="pug">
  v-container
    v-row(justify="center").pt-11
      v-col(cols="12" md="10" fluid)
        img(
          v-lazy="require('~/assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
          width="100%"
          alt="Medical records"
        )
      v-col(justify="center" cols="12" md="5")
        h1.font-40.lh-title.pb-3.font-weight-light {{INCREASE_YOUR_REVENUE.header}}
        br
        span.font-s.mt-3 {{INCREASE_YOUR_REVENUE.description}}
        br
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{INCREASE_YOUR_REVENUE.btnTxt}}
          v-icon.primary--text {{INCREASE_YOUR_REVENUE.btnIcon}}
      v-col(justify="center" cols="12" md="5")
        h1.font-40.lh-title.pb-3.font-weight-light {{BUILD_YOUR_CLIENTELE.header}}
        br
        span.font-s.mt-3 {{BUILD_YOUR_CLIENTELE.description}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{BUILD_YOUR_CLIENTELE.btnTxt}}
          v-icon.primary--text {{BUILD_YOUR_CLIENTELE.btnIcon}}
    v-row(justify="center").py-12
      img(
        v-lazy="require('~/assets/images/doctors-clinics/safekeep.png')"
        alt="Safekeep your important medical data"
      )
      v-col(align-self="center" cols="12" md="6").pl-10
        h1.font-40.lh-title.pb-3.font-weight-light {{SAFEKEEP_MEDICAL_DATA.header}}
        br
        span.font-s.mt-3 {{SAFEKEEP_MEDICAL_DATA.description}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{SAFEKEEP_MEDICAL_DATA.btnTxt}}
          v-icon.primary--text {{SAFEKEEP_MEDICAL_DATA.btnIcon}}
    v-row(justify="center").py-12
      v-col(align-self="center" cols="12" md="6")
        h1.font-40.lh-title.pb-3.font-weight-light {{TAKE_PRACTICE_ONLINE.header}}
        br
        span.font-s.mt-3 {{TAKE_PRACTICE_ONLINE.description}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{TAKE_PRACTICE_ONLINE.btnTxt}}
          v-icon.primary--text {{TAKE_PRACTICE_ONLINE.btnIcon}}
      img(v-lazy="require('~/assets/images/doctors-clinics/practice.png')"
        alt="Safekeep your important medical data"
      ).pl-10
    v-row(justify="center").py-12
      v-col(cols="12" md="7")
        h1.font-40.lh-title.pb-3.font-weight-light.text-center {{SPECIALIZED_PLANS.header}}
    v-row(justify="center" align="center")
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/skin-aesthetic.png')" alt="Skin and Aesthetic" width="30%")
        h1.font-30.lh-title.pb-3.font-weight-light {{SKIN_AND_AESTHETHIC.header}}
        span.font-s.mt-3 {{SKIN_AND_AESTHETHIC.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/pediatrics.png')" alt="Pediatrics" width="30%")
        h1.font-30.lh-title.pb-3.font-weight-light {{PEDIATRICS.header}}
        span.font-s.mt-3 {{PEDIATRICS.description}}
      v-col(cols="12" md="4")
        img(v-lazy="require('~/assets/images/doctors-clinics/maternity.png')" alt="Maternity Care" width="30%")
        h1.font-30.lh-title.pb-3.font-weight-light {{MATERNITY_CARE.header}}
        span.font-s.mt-3 {{MATERNITY_CARE.description}}
      v-col(cols="12" md="4").pl-12
        img(v-lazy="require('~/assets/images/doctors-clinics/dental.png')" alt="Dental" width="30%")
        h1.font-30.lh-title.pb-3.font-weight-light {{DENTAL.header}}
        span.font-s.mt-3 {{DENTAL.description}}
      v-col(cols="12" md="4").pl-12
        img(v-lazy="require('~/assets/images/doctors-clinics/diagnostic.png')" alt="Diagnostic" width="30%")
        h1.font-30.lh-title.pb-3.font-weight-light {{DIAGNOSTIC.header}}
        span.font-s.mt-3 {{DIAGNOSTIC.description}}
      //-
      //-
    v-row(justify="center")
      v-col(cols="12" md="8")
        h1.font-40.font-weight-light.text-center {{}}
        br
        p.text-center.font-s.mt-3 {{}}
    v-row(justify="center").py-12
      v-col(cols="12" md="6")
        h1.font-40.font-weight-light {{}}
        br
        span.font-s {{}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{}}
          v-icon.primary--text {{}}
      v-col(align="center" cols="12" md="6")
        img(v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment.png')" alt="Your online clinic everywhere")
    v-row(justify="center").py-12
      v-col(v-if="!isMobile" align="center" cols="12" md="6")
        img(
          v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
          alt="Get more patients"
        ).fit-size
      v-col(align="center" cols="12" md="6").text-left
        h1.font-40.font-weight-light {{}}
        br
        span.font-s {{}}
        br
        br
        v-btn(@click="onGetStarted" text)
          strong.text-capitalize.primary--text {{}}
          v-icon.primary--text {{}}
      img(
        v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
        alt="Get more patients"
        width="95%"
        v-if="isMobile"
      )
    v-row(justify="center").pt-12
      v-col(cols="12" md="6")
        h1.font-40.font-weight-light {{}}
        br
        span.font-s {{}}
        br
        br
        v-btn(@click="onGetStarted" text)
          strong.text-capitalize.primary--text {{}}
          v-icon.primary--text {{}}
      v-col(align="center" cols="12" md="6")
        img(v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.png')" alt="Manage everything easily" width="95%")
</template>

<script>
import {
  INCREASE_YOUR_REVENUE,
  BUILD_YOUR_CLIENTELE,
  SAFEKEEP_MEDICAL_DATA,
  TAKE_PRACTICE_ONLINE,
  ACCESS_QUALITY_HEALTHCARE,
  SPECIALIZED_PLANS,
  SKIN_AND_AESTHETHIC,
  PEDIATRICS,
  MATERNITY_CARE,
  DENTAL,
  DIAGNOSTIC,
} from '../doctors-clinics-content';
export default {
  data () {
    this.INCREASE_YOUR_REVENUE = INCREASE_YOUR_REVENUE;
    this.BUILD_YOUR_CLIENTELE = BUILD_YOUR_CLIENTELE;
    this.SAFEKEEP_MEDICAL_DATA = SAFEKEEP_MEDICAL_DATA;
    this.TAKE_PRACTICE_ONLINE = TAKE_PRACTICE_ONLINE;
    this.ACCESS_QUALITY_HEALTHCARE = ACCESS_QUALITY_HEALTHCARE;
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
</style>
