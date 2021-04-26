<template lang="pug">
  generic-container.mb-10
    v-row(
      :justify="$isMobile ? 'center' : 'start'"
      :class="{ 'panel-background-web': !$isMobile, 'panel-background-mobile': $isMobile }"
    ).panel-background
      v-col(cols="12" sm="12" md="4")
        img(v-lazy="require(`~/assets/images/clinics-website/patient-portal-badge-appointment.png`)").ml-n2
        h2 {{contents.title}}
        p.py-5.font-18 {{contents.subtitle}}
        v-btn(block large color="amber" @click="$emit('book')").white--text Book Appointment

</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  data () {
    return {
      contents: {
        title: 'Don\'t like waiting?',
        subtitle: 'Book an online appointment with one of the doctors of MYCURE Virtual Clinic. Book now!',
      },
    };
  },
};
</script>

<style scoped>
.panel-background {
  background-image: url('../../assets/images/clinics-website/mycure-final-cta-patient-portal-laptop-guy.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.panel-background-web {
  height: 50vh;
  background-size: 50%;
  background-position: right bottom;
}
.panel-background-mobile {
  height: 100vh;
  background-size: 90%;
  background-position: center bottom;
}
</style>
