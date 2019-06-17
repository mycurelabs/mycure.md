<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.mc-dark-grey
        v-container(justify-center)
          mc-toolbar-footer
          hr.mc-grey.mb-3
          v-layout(row wrap justify-center)
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type.pb-3
                router-link(:to="{name: 'home'}" title="MYCURE | Clinic Management System | Cloud EMR Philippines").link.white--text
                    strong HOME
              ul.no-style-type
                li CLINIC SOLUTIONS
                li
                  router-link(:to="{name: 'emr'}" title="MYCURE | Private Practice Electronic Medical Records (EMR)").link.white--text
                    span For Individual Doctors
                li.pb-3
                  router-link(:to="{name: 'cms'}" title="MYCURE | Multispecialty Clinic Management System (CMS)").link.white--text
                    span For Multispecialty Clinics
                li ABOUT
                li
                  router-link(:to="{name: 'our-story'}" title="MYCURE Our Story | Caring the Extra Mile").link.white--text 
                    span Our Story
                li 
                  router-link(:to="{ name: 'blog-link' }" title="MYCURE - Blog").link.white--text Blog 
                li 
                  router-link(:to="{ name: 'careers' }" title="MYCURE - Careers").link.white--text Careers
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li SUPPORT 
                li 
                  router-link(:to="{ name: 'faqs-link'}" title="MYCURE - FAQs").link.white--text FAQs
                li
                  router-link(:to="{name: 'pricing'}" title="MYCURE Pricing | Affordable EMR and Clinic Management System").link.white--text
                    span Pricing
                li.pb-3
                  a(href="https://calendly.com/mycure" target="_blank" title="MYCURE - Book A Demo").link.white--text Book A Demo
                li LEGAL
                li
                  router-link(:to="{name: 'terms'}" title="MYCURE Terms and Conditions").link.white--text 
                    span Terms
                li
                  router-link(:to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").link.white--text 
                    span Privacy Policy
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li CONTACT US
                li 
                  a(href="mailto:hello@mycure.md" style="color: #2e9fdf") hello@mycure.md
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
        img(width="100%" src="../../assets/images/mycure-home-web-sky-background-mobile.png" alt="Web Sky background")
      div(style="margin-bottom: -2%")
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")  
      div.mc-dark-grey.pa-4
        mc-toolbar-footer  
</template>

<script>
import mcToolbarFooter from "./mc-toolbar-footer";

export default {
  components: {
    mcToolbarFooter
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
