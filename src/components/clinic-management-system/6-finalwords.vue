<template lang="pug">
  div
    div(v-if="!$isMobile").py-5
      panelBeforeFooter
        img(slot="cms-img" style="max-width: 90%" src="../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
        span(slot="cms-txt").font-medium.lh-title Because we believe your clinic can stand out and be its best everyday.
        span(slot="cms-sub-txt").font-small Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="cms-signup-btn"
          @click.stop="handleCmsSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/multi-specialty/step-1`" 
          color="#18c551" 
          style="padding: 25px 30px 25px 30px"
          right
        ) 
          strong.text-none.white--text.font-small Get Started Today
    div(v-else).pa-3
      v-layout(column justify-center).pt-5
        v-layout(row align-center style="width: 100%")
          img(style="width: 100%" src="../../assets/images/../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
        br 
        span(style="font-size: 200%").text-xs-center.lh-title Because we believe your clinic can stand out and be its best everyday.
        br
        br
        span.font-m.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="cms-signup-btn"
            @click.stop="handleCmsSignupBtn"
            :href="`${signInURL}/signup/multi-specialty/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")  
            strong.font-m.white--text.text-none Get Started Today
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