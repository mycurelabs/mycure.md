<template lang="pug">
  //-TODO: Confirm if we are reverting back to the old product card
  div#emrproduct
    div(v-if="!$isMobile").transparent
      v-container
        v-layout(row justify-center align-center)
          v-flex(xs12)
            br
            v-layout(row justify-center)
              v-card(height="508px" width="80%" flat).elevation-10.image-rounded-corner
                v-layout(row justify-center)
                  v-flex(xs5)
                    img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-private.png" alt="Private clinic pricing")
                  v-flex(xs8).text-xs-left.pa-5
                    strong.font-30.pb-2 For Individual Practice
                    br
                    br
                    span.font-18 {{ private_title }}
                    br
                    br
                    v-layout(row v-for="(feature,index) in privateFeatures" :key="index")
                      span.font-18 &#10003 &nbsp 
                      span.font-18 {{ feature }}
                      br
                    v-layout(row wrap).py-4
                      v-btn(
                        :href="`${signInURL}/signup/choose`" 
                        target="_blank"
                        color="#18c551"
                        large
                      ).text-none
                        strong.font-18.white--text Sign Up Now
    div(v-else).py-3.transparent
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png" alt="Private clinic pricing")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        p.pb-2.font-18 {{ private_title }}
        v-layout(row v-for="(feature,index) in privateFeatures" :key="index")
          span.font-18.pb-2 &#10003; &nbsp; 
          span.font-18 {{ feature }}
      v-layout(row justify-center)
        v-btn(
          color="#18c551"
          :href="`${signInURL}/signup/choose`"
          target="_blank"
        ).cta-btn
          strong.font-18.white--text.text-none Sign Up Now
</template>

<script>
  // import panel6a from './panel-6a';
  // import filler from '../commons/filler';

  export default {
    components: {
      // panel6a,
      // filler
    },
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        private_title: 'Designed for private practitioners who run their clinic alone or with a trusty secretary.',
        privateFeatures: [
          'Create unlimited number of virtual clinics',
          'Access using multiple devices',
          'Full Access to the CMS Core Modules',
          'Start FREE up to 1GB storage',
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Electronic Medical Records for Private Practice.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
    }
  };
</script>

<style scoped>
  #panel6x {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  a:link {
    text-decoration: none
  }

  .price-card{
    border-radius: 0 10px 10px 0;
  }

  .image-rounded-corner {
    border-radius: 10px !important;
  }

  .pointer:hover {
    cursor: pointer;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>