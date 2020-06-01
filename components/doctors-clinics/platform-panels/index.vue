<template lang="pug">
  v-container
    v-row(justify="center").pt-11
      v-col(cols="12" md="10" fluid)
        img(
          v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
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

    v-row(justify="center")
      v-col(cols="12" md="8")
        h1.font-40.font-weight-light.text-center {{}}
        br
        p.text-center.font-s.mt-3 {{}}
    v-row(justify="center").py-12
      v-col(v-if="!isMobile" align="center" cols="12" md="6")
        img(
          v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
          height="350"
          alt="Start your physical and digital clinic journey"
        ).fit-size
      v-col(align-self="center" cols="12" md="6")
        h1.font-40.lh-title.pb-3.font-weight-light {{}}
        br
        span.font-s.mt-3 {{}}
        br
        br
        v-btn(text @click="onGetStarted")
          strong.text-capitalize.primary--text {{}}
          v-icon.primary--text {{}}
      img(
        v-lazy="require('~/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
        width="95%"
        alt="Start your physical and digital clinic journey"
        v-if="isMobile"
      )
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
