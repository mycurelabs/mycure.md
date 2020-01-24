<template lang="pug">
  v-app(:dark="dayOrNight === 'night'")
    v-content
      v-container(
        fluid fill-height
        :class="dayOrNight === 'day' ? 'white' : 'night-sky'"
        :style="{ 'background-image': dayOrNight === 'day' ? `url(${require('../assets/images/mycure-onboarding-background.png')})` : `url(${require('../assets/images/mycure-onboarding-background-dark-mode.png')})` }"
      ).bg
        v-layout(row justify-center align-center)
          v-flex(xs12 md10)
            v-layout(row wrap justify-center)
              v-flex(xs12 md5).pa-3
                v-card(hover :to="{ name: 'signup-multispecialty' }" height="100%")
                  v-card-text.pa-4.text-xs-center
                    img(width="100%" src="../assets/images/mycure-signup-multispecialty-choose.png")
                    h2 For Multispecialty Clinics
                    p An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.
                  v-card-text.pa-4.text-xs-center
                    v-btn(
                      large
                      block
                      color="primary"
                    ) #[b LEARN MORE]
              v-flex(xs12 md5).pa-3
                v-card(hover :to="{ name: 'signup-individual' }" height="100%")
                  v-card-text.pa-4.text-xs-center
                    img(width="100%" src="../assets/images/mycure-signup-individual-choose.png")
                    h2 For Individual Practice
                    p A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
                  v-card-text.pa-4.text-xs-center
                    v-btn(
                      large
                      block
                      color="primary"
                    ) #[b GET MYCURE FREE]
</template> 

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {};
  }
};
</script>

<style scoped>
.bg {
  /* background-image: url('../assets/images/mycure-signup-062618-footer-BG.png'); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;
  /* background-size: 250px, contain; */
  /* background-position: bottom right 50px, bottom; */
}

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
</style>