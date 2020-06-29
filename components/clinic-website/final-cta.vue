<template lang="pug">
  v-container(fluid).py-12
    v-row.panel-background
      v-col(cols="12" offset-md="1" md="4" :class="paddingClass")
        img(v-lazy="require(`~/assets/images/clinics-website/patient-portal-badge-appointment.png`)").ml-n2
        h2 {{contents.title}}
        p.py-5.font-18 {{contents.subtitle}}
        v-btn(height="55" color="primary").font-18 Book Appointment
</template>

<script>
export default {
  data () {
    return {
      contents: {
        title: 'Don\'t like waiting?',
        subtitle: 'Book an online appointment with one of the doctors of MYCURE Virtual Clinic. Book now!',
      },
    };
  },
  computed: {
    paddingClass () {
      return [{ 'pt-12': this.$isMobile }];
    },
  },
};
</script>

<style scoped>
.panel-background {
  height: 90vh;
  background-image: url('../../assets/images/clinics-website/mycure-final-cta-patient-portal-laptop-guy.png');
  background-size: contain;
  background-position: right bottom;
}
</style>
