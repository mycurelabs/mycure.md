<template lang="pug">
  div.white.py-3
    div
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png" alt="Multispecialty banner")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        div(v-for="(feature,index) in multiFeatures" :key="feature")
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center)
        v-btn(
          id="cms-signup-btn"
          @click.stop="handleCmsSignupBtn"
          :href="`${signInURL}/signup/multi-specialty/step-1`"
          style="background-color: #18c551; width: 80%; height: 60px")
            strong.font-m.white--text.text-none Sign Up Now
</template>

<script>
  export default {
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        multiFeatures: [
          'Queuing & Registration',
          'Patient Medical Records',
          'Billing & Collection',
          'Laboratory & Imaging',
          'Materials Management'
        ]
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
  a:link {
    text-decoration: none
  }

  .price-card{
    border-radius: 0 10px 10px 0;
  }

  .image-rounded-corner {
    border-radius: 10px 0px 0px 10px;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>