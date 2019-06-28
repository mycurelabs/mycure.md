<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      panelBeforeFooter.pt-5
        img(slot="cms-img" width="90%" src="../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
        span(slot="cms-txt").font-48.lh-title We believe your clinic can stand out and be at its best, always.
        span(slot="cms-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="cms-signup-btn"
          @click.stop="handleCmsSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/multi-specialty/step-1`" 
          target="_blank"
          color="#18c551" 
          right
        ).cta-btn
          strong.text-none.white--text.font-18 Get Started Today
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
        br 
        p.font-25.text-xs-center.lh-title We believe your clinic can stand out and be at its best, always.
        p.font-18.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="cms-signup-btn"
            @click.stop="handleCmsSignupBtn"
            :href="`${signInURL}/signup/multi-specialty/step-1`"
            target="_blank"
            color="#18c551"
            large
          ).cta-btn  
            strong.font-18.white--text.text-none Get Started Today
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