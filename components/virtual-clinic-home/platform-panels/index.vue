<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{BRING_YOUR_PRACTICE_ONLINE.header}}
        br
        p.text-center.font-18.mt-3 {{BRING_YOUR_PRACTICE_ONLINE.description}}
    v-row(justify="center" align="center").py-5
      v-col(v-if="!isMobile" align="center" cols="12" md="6")
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
          height="350"
          alt="Start your physical and digital clinic journey"
        ).fit-size
      v-col(align-self="center" cols="12" md="6")
        h1.font-30.lh-title.pb-3.font-weight-light {{HOME_START_YOUR_PHYSICAL.header}}
        br
        span.font-16.mt-3 {{HOME_START_YOUR_PHYSICAL.description}}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}
      img(
        v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
        width="95%"
        alt="Start your physical and digital clinic journey"
        v-if="isMobile"
      )
    v-row(justify="center" align="center").py-5
      v-col(cols="12" md="6")
        h1.font-30.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        span.font-16 {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(align="center" cols="12" md="6")
        img(v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment.png')" alt="Your online clinic everywhere")
    v-row(justify="center" align="center").py-5
      v-col(v-if="!isMobile" align="center" cols="12" md="6")
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
          alt="Get more patients"
        ).fit-size
      v-col(align="center" cols="12" md="6").text-left
        h1.font-30.font-weight-light {{GET_MORE_PATIENTS.header}}
        br
        span.font-16 {{GET_MORE_PATIENTS.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text {{GET_MORE_PATIENTS.btnTxt}}
          v-icon.primary--text {{GET_MORE_PATIENTS.btnIcon}}
      img(
        v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
        alt="Get more patients"
        width="95%"
        v-if="isMobile"
      )
    v-row(justify="center" align="center").pt-5
      v-col(cols="12" md="6")
        h1.font-30.font-weight-light {{MANAGE_EVERYTHING_EASILY.header}}
        br
        span.font-16 {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(align="center" cols="12" md="6")
        img(v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.png')" alt="Manage everything easily" width="95%")
</template>

<script>
import {
  BRING_YOUR_PRACTICE_ONLINE,
  HOME_START_YOUR_PHYSICAL,
  YOUR_ONLINE_CLINIC,
  GET_MORE_PATIENTS,
  MANAGE_EVERYTHING_EASILY,
} from './home-content';
export default {
  data () {
    this.HOME_START_YOUR_PHYSICAL = HOME_START_YOUR_PHYSICAL;
    this.YOUR_ONLINE_CLINIC = YOUR_ONLINE_CLINIC;
    this.GET_MORE_PATIENTS = GET_MORE_PATIENTS;
    this.MANAGE_EVERYTHING_EASILY = MANAGE_EVERYTHING_EASILY;
    this.BRING_YOUR_PRACTICE_ONLINE = BRING_YOUR_PRACTICE_ONLINE;
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
