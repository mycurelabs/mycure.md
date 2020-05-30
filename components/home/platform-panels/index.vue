<template lang="pug">
  v-container
    v-row(
      justify="center"
      d-flex
    ).py-12
      v-col(
        align="center"
        xs12
      )
        img(
          src="@/assets/images/home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth.png"
        )
      v-col(
        align-self="center"
        xs12
      ).content
        h1.font-40.lh-title.pb-3.font-weight-light {{HOME_START_YOUR_PHYSICAL.header}}
        br
        span.font-s.mt-3 {{HOME_START_YOUR_PHYSICAL.description}}
        br
        br
        v-btn(
          text
          @click="onGetStarted"
        )
          label.text-capitalize.primary--text {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}

    v-row(
      justify="center"
      d-flex
    ).py-12
      v-col(
        offset="1"
        align="center"
        xs12
      ).content
        h1.font-40.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        span.font-s {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(
          text
          @click="onGetStarted"
        )
          label.text-capitalize.primary--text {{YOUR_ONLINE_CLINIC.btnTxt}}
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
      ).py-12
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
        h1.font-40.font-weight-light {{GET_MORE_PATIENTS.header}}
        br
        span.font-s {{GET_MORE_PATIENTS.description}}
        br
        br
        v-btn(
          @click="onGetStarted"
          text
        )
          label.text-capitalize.primary--text {{GET_MORE_PATIENTS.btnTxt}}
          v-icon.primary--text {{GET_MORE_PATIENTS.btnIcon}}

    v-row(
      justify="center"
      d-flex
    ).pt-12
      v-col(
        offset="1"
        align="center"
        xs12
      ).content
        h1.font-40.font-weight-light {{MANAGE_EVERYTHING_EASILY.header}}
        br
        span.font-s {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(
          @click="onGetStarted"
          text
        )
          label.text-capitalize.primary--text {{MANAGE_EVERYTHING_EASILY.btnTxt}}
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
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
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
