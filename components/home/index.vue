<template lang="pug">
  v-container(fluid)
    v-row(
      justify="center"
      d-flex
      )
      v-col(
        align="center"
        xs12
      )
        img(
          src="@/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png"
        )
      v-col(
        align="center"
        xs12
      ).content
        h1 {{HOME_START_YOUR_PHYSICAL.header}}
        span {{HOME_START_YOUR_PHYSICAL.description}}
        v-btn(
          flat
        )
          label(text-left).primary--text {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}

    v-row(
      justify="center"
      d-flex
      )
      v-col(
        align="center"
        xs12
      ).content
        h1 {{YOUR_ONLINE_CLINIC.header}}
        span {{YOUR_ONLINE_CLINIC.description}}
        v-btn(
          flat
        )
          label(text-left).primary--text {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(
        align="center"
        xs12
      )
        img(
          src="@/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment.png"
        )

    v-row(
      justify="center"
      d-flex
      )
      v-col(
        align="center"
        xs12
      )
        img(
          src="@/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website.png"
        )
      v-col(
        align="center"
        xs12
      ).content
        h1 {{GET_MORE_PATIENTS.header}}
        span {{GET_MORE_PATIENTS.description}}
        v-btn(
          flat
        )
          label(text-left).primary--text {{GET_MORE_PATIENTS.btnTxt}}
          v-icon.primary--text {{GET_MORE_PATIENTS.btnIcon}}

    v-row(
      justify="center"
      d-flex
      )
      v-col(
        align="center"
        xs12
      ).content
        h1 {{MANAGE_EVERYTHING_EASILY.header}}
        span {{MANAGE_EVERYTHING_EASILY.description}}
        v-btn(
          flat
        )
          label(text-left).primary--text {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(
        align="center"
        xs12
      )
        img(
          src="@/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary.png"
        )
</template>

<script>
import {
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
    return {
    };
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.image = HOME_START_YOUR_PHYSICAL.image;
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
.content {
  text-align: left;
}
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
</style>
