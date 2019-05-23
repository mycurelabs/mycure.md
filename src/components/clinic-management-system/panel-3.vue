<template lang="pug"> 
  div.pt-5
    div(v-if="!$isMobile").px-5.mc-light-grey
      v-container.px-5
        v-layout(row wrap justify-center)
          span.font-l.pa-5 Why do clinics switch to MYCURE?
        v-layout(row wrap justify-center)
          span.font-s.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing.
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
            strong.font-m.right Other Providers
            br
            br
            img(src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" width="100%").mb-3
            b-col(xs="12" md="6").pl-5.pr-5.text-left
          v-flex(xs12 md6).px-5
            strong.font-m With MYCURE 
              span.font-mc-blue &nbsp ✓
            br
            br
            img(src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" width="100%").mb-3   
        v-layout(row wrap justify-center)
          v-btn(
          color="info"
          large
          ).mt-5 
            strong.font-s.text-none We got a solution
        p.text-xs-center.py-4.font-xs Have questions? Give us a call: 
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
  export default {
    data () {
      return {
        checkIcon: '../../assets/images/mycure-icon-check.png'
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

