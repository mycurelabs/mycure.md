<template lang="pug"> 
  div
    div(v-if="!$isMobile").white
      v-container.px-5
        v-layout(row wrap justify-center)
          span.font-medium.pa-5 Designed for Multi-specialty Clinics
        br
        br
        br
        v-layout(row wrap justify-center).py-3 
          v-flex(xs12 md6 style="border-right: 1px solid lightgray").px-5
            v-layout(row)
              v-flex(xs7)
                span.font-small.left Say goodbye to multiple, complicated systems!
              v-flex(xs5)
                strong.font-small.right Other Providers
            br
            img(max-width="500px" src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" width="100%").mb-3
          v-flex(xs12 md6).px-5
            v-layout(row)
              v-flex(xs5)
                strong.font-small With MYCURE 
                  span.font-mc-blue &nbsp ✓
              v-flex(xs7)
                span.font-small.left Say hello to a simplified record-keeping for everyone.
            br
            img(max-width="500px" src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" width="100%").mb-3   
        br
        v-layout(row wrap justify-center)
          v-btn(
            color="#18c551"
            :href="`${siginURL}/signup/private/step-1`"
            style="height: 60px; width: 250px"
          ).mt-3
            strong.font-small.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? Give us a call: 
          strong (+63) 917 303 4350
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Designed for Multi-specialty Clinics
        br
        //- v-layout(row wrap justify-center)
        //-   span.font-s.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing. 
        //-     | It simplifies record-keeping for everyone. Say goodbye to multiple, complicated systems!
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

