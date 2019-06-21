<template lang="pug">
  div#panel7.pt-3.transparent
    v-layout(row align-center)
      v-layout(column justify-center style="width: 90%").pt-5
        img(style="max-width: 80%" src="../../assets/images/../../assets/images/mycure_web_banner_last_panel_doctor.png" alt="Clinic best version")
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
            :href="`${siginURL}/signup/multi-specialty/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")  
            strong.font-m.white--text.text-none Sign Up Now  
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
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