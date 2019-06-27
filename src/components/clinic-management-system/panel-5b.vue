<template lang="pug">
  div
    panelBeforeFooter
      img(slot="cms-img" style="max-width: 90%" src="../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
      span(slot="cms-txt").font-48.lh-title Because we believe your clinic can stand out and be its best everyday.
      span(slot="cms-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
      v-btn(
        id="cms-signup-btn"
        @click.stop="handleCmsSignupBtn"
        slot="sign-up-button"
        :href="`${signInURL}/signup/multi-specialty/step-1`" 
        target="_blank"
        color="#18c551" 
        style="padding: 25px 30px 25px 30px"
        right
      ) 
        strong.text-none.white--text.font-18 Sign Up Now
    v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
</template>

<script>
  import panelBeforeFooter from '../commons/panel-before-footer';

  export default {
    components: {
      panelBeforeFooter,
      
    },
    data () {
      return {
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