<template lang="pug">
  v-container.platform-panels
    v-row(justify="center" align="center").py-5
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{BRING_YOUR_PRACTICE_ONLINE.header}}
        br
        p.text-center.font-18.font-gray {{BRING_YOUR_PRACTICE_ONLINE.description}}
    v-row(justify="center" align="center").py-12.line-below
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/webp/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.webp')"
          width="100%"
          alt="Start your physical and digital clinic journey"
        ).pr-12
      v-col(align-self="center" cols="12" md="6" lg="4").second-column
        h1.font-30.lh-title.pb-3.font-weight-light {{HOME_START_YOUR_PHYSICAL.header}}
        br
        p.font-16.font-gray.text-justify.my-0 {{HOME_START_YOUR_PHYSICAL.description}}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text.font-18 {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}
      img(
        v-if="$isMobile"
        v-lazy="require('~/assets/images/virtual-clinic-home/webp/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.webp')"
        width="95%"
        alt="Start your physical and digital clinic journey"
      )
    v-row(justify="center" align="center").py-12.line-below
      v-col(cols="12" md="6" lg="4").first-column.img-online-clinic
        h1.font-30.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(justify="end" align="center" cols="12" md="5" v-if="!$isMobile").second-column
        img(v-lazy="require('~/assets/images/virtual-clinic-home/webp/MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment.webp')" width="90%" alt="Your online clinic everywhere").pl-12
    v-row(justify="center" align="center").py-12.line-below
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        img(
          v-lazy="require('~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png')"
          width="100%"
          alt="Get more patients"
        ).pr-12
      v-col(align="center" cols="12" md="6" lg="4").text-left.second-column
        h1.font-30.font-weight-light {{GET_MORE_PATIENTS.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{GET_MORE_PATIENTS.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{GET_MORE_PATIENTS.btnTxt}}
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
        p.font-16.font-gray.text-justify.mb-0 {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(align="center" cols="12" md="5" v-if="!$isMobile").second-column.img-manage-easily
        img(v-lazy="require('~/assets/images/virtual-clinic-home/webp/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.webp')" alt="Manage everything easily" width="110%")
      img(v-lazy="require('~/assets/images/virtual-clinic-home/webp/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.webp')" alt="Manage everything easily" width="100%" v-if="$isMobile")
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
.line-below{
  position: relative;
}
.line-below:after{
  content: '';
  position: absolute;
  display: inline-block;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 97vw;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
}
.platform-panels{
  margin-top: 55%;
}
@media screen and (max-width: 1037px) {
  .platform-panels{
    margin-top: 5%;
  }
}
@media screen and (device-width: 768px) and (orientation: portrait)  {
  .platform-panels {
    margin-top: 5%;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait)  {
  /* ipad pro */
  .platform-panels {
    margin-top: 55%;
  }
}
@media screen and (device-width: 1024px) and (orientation: landscape)  {
  /* ipad */
  .platform-panels {
    margin-top: 55%;
  }
}
@media screen and (min-width: 1366px) {
  .first-column {
    margin-left: -5%;
  }
  .second-column {
    margin-left: 5%;
  }
}
</style>
