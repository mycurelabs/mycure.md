<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).uspLeft
            h1.font-weight-bold.font-18.font-mc-blue MYCURE for Private Practice
            br
            p.lh-title.font-45 A clinic system designed specifically for private medical practitioners.
            br
            v-btn(  
              id="emr-signup-btn"
              @click.stop="handleEmrSignupBtn"
              :href="`${signInURL}/signup/private/step-1`" 
              target="_blank"
              color="#18c551"
            ).cta-btn
              strong.font-18.text-none.white--text Sign Up Now
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="90%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png" alt="Individual doctor").right
    div(v-else).white
      v-container.pt-5
        v-layout(column justify-center)
            h1.font-weight-bold.font-18.font-mc-blue.text-xs-center.pb-2 MYCURE for Private Practice
            br
            p.font-40.text-xs-center.lh-title A clinic system designed specifically for private medical practitioners.
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png" alt="Individual doctor").pb-5
      v-layout(row justify-center)
        v-btn(
          id="emr-signup-btn" 
          @click.stop="handleEmrSignupBtn" 
          :href="`${signInURL}/signup/private/step-1`" 
          target="_blank"
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        ).uspBtn
          strong.font-25.white--text.text-none Sign Up Now
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
      handleEmrSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-emr-signup-btn',
          eventLabel: 'emr-signup-btn'
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
