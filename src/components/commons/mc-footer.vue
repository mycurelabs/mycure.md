<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.mc-dark-grey
        v-container(justify-center)
          mc-navbar-footer
          hr.mc-grey.mb-3
          v-layout(row wrap justify-center)
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type.pb-3
                router-link(:to="{name: 'home'}").link.white--text
                    strong HOME
              ul.no-style-type
                li CLINIC SOLUTIONS
                li
                  router-link(:to="{name: 'electronic-medical-records'}").link.white--text
                    span For Individual Doctors
                li.pb-3
                  router-link(:to="{name: 'clinic-management-system'}").link.white--text
                    span For Multi-specialty Clinics
                li ABOUT
                li
                  router-link(:to="{name: 'our-story'}").link.white--text 
                    span Our Story
                li 
                  a(href="http://blog.mycure.md/" target="_blank").link.white--text Blog 
                li 
                  a(href="https://culture.mycure.md/" target="_blank").link.white--text Careers
              
            v-flex(xs12 md3 offset-md1).font-mc-grey 
              ul.no-style-type
                li SUPPORT 
                li 
                  a(href="http://blog.mycure.md/frequently-asked-questions/" target="_blank").link.white--text FAQs
                li
                  router-link(:to="{name: 'pricing'}").link.white--text
                    span Pricing
                li.pb-3
                  a(href="https://calendly.com/mycure" target="_blank").link.white--text Book A Demo
                li LEGAL
                li
                  router-link(:to="{name: 'terms'}").link.white--text 
                    span Terms
                li
                  router-link(:to="{name: 'privacy-policy'}").link.white--text 
                    span Privacy Policy
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li CONTACT US
                li 
                  a(href="mailto:hello@mycure.md") hello@mycure.md
                li.white--text (+632) 799 6262
                li.white--text (+63) 917 303 4350
          hr.mc-grey.my-4  
          v-layout(row wrap justify-center)  
            span.white--text &copy; {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                span.font-mc-blue &nbsp; MYCURE.  
                |
                span.white--text All Rights Reserved.
    div(v-else :style="webSky ? 'margin-top: -250%; z-index: -1' : 'margin-top: 0'").pt-5.transparent
      div(v-if="webSky" style="margin-bottom: -140%").pt-5
        img(width="100%" src="../../assets/images/mycure-home-web-sky-background-mobile.png")
      div(style="margin-bottom: -2%")
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png")  
      div(style="height: 75px").mc-green
        v-layout(row justify-center)
          a(:href="`${siginURL}/signup/private/step-1`" style="padding: 20px 0")
            strong(style="font-size: 25px").white--text Sign Up Now
      div.mc-dark-grey.pa-4
        mc-navbar-footer  
</template>

<script>
import mcNavbarFooter from "./mc-navbar-footer";

export default {
  components: {
    mcNavbarFooter
  },
  props: {
    webSky: {
      type: Boolean,
      default: true,
    }
  },
  data () {
    return {
      siginURL: process.env.VUE_APP_SIGNIN_URL
    };
  }
};
</script>


<style scoped>

hr {
  height: 1px;
  color: #616161;
  background-color: #616161;
  border: none;
}

.no-style-type {
    list-style-type: none;
    padding-left: 0;
  }

a:link {
  text-decoration: none;
  color: white;
}

.center {
  padding: auto;
}

.font-mc-blue {
	color: #2e9fdf
}
</style>
