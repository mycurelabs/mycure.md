<template lang="pug">
  v-container
    v-row(justify="center" align="center").py-5.platform-panels
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{BRING_YOUR_PRACTICE_ONLINE.header}}
        br
        p.text-center.font-18 {{BRING_YOUR_PRACTICE_ONLINE.description}}
    v-row(justify="center" align="center").py-12
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
          width="100%"
          alt="Start your physical and digital clinic journey"
        ).pr-12
      v-col(align-self="center" cols="12" md="6" lg="4").second-column
        h1.font-30.lh-title.pb-3.font-weight-light {{HOME_START_YOUR_PHYSICAL.header}}
        br
        span.font-16.mt-3 {{HOME_START_YOUR_PHYSICAL.description}}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png')"
        width="95%"
        alt="Start your physical and digital clinic journey"
      )
    v-row(justify="center" align="center").py-12
      v-col(cols="12" md="6" lg="4").first-column.img-online-clinic
        h1.font-30.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        span.font-16 {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(justify="end" align="center" cols="12" md="5" v-if="!$isMobile").second-column
        img(v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment.png')" width="90%" alt="Your online clinic everywhere").pl-12
    v-row(justify="center" align="center").py-12
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
          width="100%"
          alt="Get more patients"
        ).pr-12
      v-col(align="center" cols="12" md="6" lg="4").text-left.second-column
        h1.font-30.font-weight-light {{GET_MORE_PATIENTS.header}}
        br
        span.font-16 {{GET_MORE_PATIENTS.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text {{GET_MORE_PATIENTS.btnTxt}}
          v-icon.primary--text {{GET_MORE_PATIENTS.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
        alt="Get more patients"
        width="95%"
      ).pr-n12
    v-row(justify="center" align="center").py-12
      v-col(cols="12" md="6" lg="4").first-column
        h1.font-30.font-weight-light {{MANAGE_EVERYTHING_EASILY.header}}
        br
        span.font-16 {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(align="center" cols="12" md="5" v-if="!$isMobile").second-column.img-manage-easily
        img(v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.png')" alt="Manage everything easily" width="110%")
      img(v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.png')" alt="Manage everything easily" width="100%" v-if="$isMobile")
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
@media screen and (device-width: 768px) {
  .platform-panels {
    margin-top: 0%;
  }
}
@media screen and (device-width: 1024px) {
  .platform-panels {
    margin-top: -125%;
  }
}
@media screen and (min-width: 1366px) {
  .first-column {
    margin-left: -5%;
  }
  .second-column {
    margin-left: 5%;
  }
  .img-online-clinic {
    margin-left: 5%;
  }
  /* .img-manage-easily {
    margin-right: -5%;
  } */
}
</style>
