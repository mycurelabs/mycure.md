<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
      v-layout(row justify-center)
        v-card(height="508px" width="70vw" flat).elevation-10.rounded-corner 
          v-layout(row justify-center)
            v-flex(xs5)
              img(width="auto" height="508vh" src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features")
            v-flex(xs8).text-xs-left.pa-5
              strong.font-30.pb-2 SOLO by MYCURE
              br
              br
              span.font-18 {{ MYCURE_SOLO_description }}
              br
              br
              div(v-for="(feature,index) in soloFeatures" :key="index")
                span.font-18 &#10003 &nbsp {{ feature }}
                br
    div(v-else)
      v-container.px-3.py-5
        v-layout(row wrap)
          v-flex(xs12).pa-2
              img(
                width="100%" 
                src="@/assets/images/mycure-web-banner-pricing-panel-solo.png" alt="Solo features"
              ).rounded-corner
              br
              br
              v-layout(row justify-center)
                strong.font-40.pb-2 SOLO by MYCURE
              p.font-16.text-xs-center {{ MYCURE_SOLO_description }}
              br
              v-layout(row v-for="(feature,index) in soloFeatures" :key="index").pl-3
                p.font-16 &#10003; &nbsp;
                p.font-16 {{ feature }}
              br
</template>

<script>
  export default {
    data () {
      return {
        MYCURE_SOLO_description: 'Solo is a free-forever version of MYCURE CMS — a standalone clinic management system for those who want to store their data in their own device, with the option to sync and back-up data in their personal cloud.',
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        popUp: false,

        soloFeatures: [
          'Full Access to the CMS Core Modules',
          'Records are stored in your own database',
          'No internet needed',
          'No monthly fees'
        ]
      };
    }
  };
</script>


<style scoped>
  .rounded-corner {
    border-radius: 10px !important;
  }
</style>
