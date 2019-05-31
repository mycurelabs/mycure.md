<template lang="pug"> 
  div
    div(v-if="!$isMobile").white
      v-container.px-5
        v-layout(row wrap justify-center)
          span.font-medium.pa-5 Why do clinics switch to MYCURE?
        v-layout(row wrap justify-center)
          span.font-small.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing.
            br
            | It simplifies record-keeping for everyone
            br
            br
            | Say goodbye to multiple, complicated systems!
            br
            br
            br
        v-layout(row wrap justify-center).py-3 
          v-flex(xs12 md6 style="border-right: 1px solid lightgray").px-5
            strong.font-small.right Other Providers
            br
            br
            img(max-width="500px" src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" width="100%").mb-3
          v-flex(xs12 md6).px-5
            strong.font-small With MYCURE 
              span.font-mc-blue &nbsp ✓
            br
            br
            img(max-width="500px" src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" width="100%").mb-3   
        v-layout(row wrap justify-center)
          v-btn(:href="`${siginURL}/signup/private/step-1`" color="#18c551" large).mt-5 
            strong.font-small.text-none.white--text Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? Give us a call: 
          strong (+63) 917 303 4350
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Why do clinics switch to MYCURE?
        br
        v-layout(row wrap justify-center)
          span.font-s.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing. 
            | It simplifies record-keeping for everyone. Say goodbye to multiple, complicated systems!
        br
        br
        v-layout(column)
          strong.font-m.text-xs-center Other Providers
          br
          img(src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" width="100%").mb-3
          br
          strong.font-m.text-xs-center With MYCURE 
              span.font-mc-blue &nbsp ✓
          br
          img(src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" width="100%").mb-3   
          
</template>

<script>
  import panel4 from './panel-4';

  export default {
    components: {
      panel4
    },
    data () {
      return {
        checkIcon: '../../assets/images/mycure-icon-check.png',
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f6f6f6;
  }

  
</style>

