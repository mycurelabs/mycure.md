<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).uspLeft 
            h1.font-weight-bold.font-18.font-mc-blue MYCURE for Multispecialty Clinics
            br
            p.lh-title.font-45 The ultimate clinic system that eases the process flows of your multispecialty clinic.
            br
            v-btn(
              id="cms-signup-btn"
              @click.stop="handleCmsSignupBtn"
              :href="`${signInURL}/signup/multi-specialty/step-1`" 
              target="_blank"
              color="#18c551"
            ).cta-btn
              strong.font-18.white--text.text-none Get Started Today
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner").right
    div(v-else).white
      v-container.pt-5
        v-layout(column justify-center)
          h1.font-weight-bold.font-18.font-mc-blue.text-xs-center.pb-2 MYCURE for Multispecialty Clinics
          br
          p.font-40.text-xs-center The ultimate clinic system that eases the process flows of your multispecialty clinic.
          br
          br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner").pb-5
      v-layout(row justify-center)
        v-btn(
          id="cms-signup-btn" 
          @click.stop="handleCmsSignupBtn" 
          :href="`${signInURL}/signup/multi-specialty/step-1`"
          target="_blank" 
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        ).uspBtn
          strong.font-25.white--text.text-none Get Started Today
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-cms-signup-btn',
          eventLabel: 'cms-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }

  .uspBtn {
    height: 70px;
  }
</style>

