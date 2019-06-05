<template lang="pug">
  div.white
    div
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        div(v-for="(feature,index) in multiFeatures" :key="feature")
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center)
        v-btn(
          :href="`${siginURL}/signup/private/step-1`"
          style="background-color: #18c551; width: 80%; height: 60px")
            strong.font-m.white--text.text-none Sign Up Now
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,

        multiFeatures: [
          'Queuing & Registration',
          'Patient Medical Records',
          'Billing & Collection',
          'Laboratory & Imaging',
          'Materials Management'
        ]
      };
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