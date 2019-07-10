<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md8 align-self-center).uspLeft
            h1.font-weight-bold.font-18.font-mc-blue MYCURE Complete Clinic Management System
            br
            h2.font-weight-regular.lh-60.font-45 A platform that helps organize and secure patients' medical records.
            br
            v-btn(
              :href="`${signInURL}/signup/choose`" 
              target="_blank"
              color="#18c551" 
              id="home-signup-btn"
              @click.stop="handleHomeSignupBtn"
            ).cta-btn
              strong.font-18.text-none.white--text Sign Up Now
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="90%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner").right
    div(v-else).white
      v-container.pt-4
        v-layout(column justify-center).pb-4
          h1.font-weight.bold.font-18.font-mc-blue.text-xs-center.pb-2 MYCURE Complete Clinic 
            br
            | Management System
          br            
          h2.font-weight-regular.lh-title.font-40.text-xs-center A platform that helps organize and secure patients' medical records.
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner")
      v-layout(row justify-center)
        v-btn(
          id="home-signup-btn" 
          @click.stop="handleHomeSignupBtn" 
          :href="`${signInURL}/signup/choose`" 
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
      handleHomeSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-signup-btn',
          eventLabel: 'home-signup-btn'
        });
      },
    }
  };
</script>

<style scoped>
  .uspBtn {
    height: 75px;
  }
</style>
