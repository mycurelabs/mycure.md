<template lang="pug">
  div.pt-5
    div(v-if="!$isMobile")
      div.pt-5
        center
          v-layout(row justify-center style="width: 60%")
            span.font-l.text-xs-center Join thousands of other health professionals who enjoy the benefits of using technology in their practice
          v-layout(row wrap justify-center).py-5
            v-btn(large style="width: 250px" color="info")
              strong.text-none Get Started with MYCURE 
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-before-footer-panel-background.png")
      div.mc-dark-grey
        v-container(justify-center)
          mc-navbar-footer
          hr.mc-grey.mb-3
          v-layout(row wrap justify-center)
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li CLINIC SOLUTIONS
                li 
                  router-link(:to="{name: 'home'}").link.white--text
                    span HOME
                li
                  router-link(:to="{name: 'electronic-medical-records'}").link.white--text
                    span For Individual Doctors
                li.pb-3
                  router-link(:to="{name: 'clinic-management-system'}").link.white--text
                    span For Multispecialty Clinics
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
                li 
                  a(href="mailto:hello@mycure.md") hello@mycure.md
                li (+632) 799 6262
                li (+63) 917 303 4350
          hr.mc-grey.my-4  
          v-layout(row wrap justify-center)  
            span.white--text &copy; {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                span.font-mc-blue &nbsp; MYCURE.  
                |
                span.white--text All Rights Reserved.
    div(v-else).pt-5
      center
        v-layout(column justify-center style="width: 90%")
          span(style="font-size: 200%").text-xs-center Join thousands of other health professionals who enjoy the benefits of using technology in their practice
      br
      br
      div 
        img(width="100%" height="50%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png")  
      div(style="height: 75px").mc-blue
        v-layout(row justify-center style="margin-top:-2%")
          a(style="padding: 20px 0")
            strong(style="font-size: 25px").white--text Get Started Today
      div.mc-dark-grey.pa-4
        mc-navbar-footer  
</template>

<script>
import mcNavbarFooter from "./mc-navbar-footer";

export default {
  components: {
    mcNavbarFooter
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
