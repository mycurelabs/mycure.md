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
                li
                  router-link(id="footer-features-btn" :to="{name: 'features'}" title="MYCURE Features").link.white--text Features
              ul.no-style-type
                li.feature-text CLINIC SOLUTIONS
                li
                  router-link(id="footer-private-practice-btn" :to="{name: 'emr'}" title="MYCURE | Private Practice Electronic Medical Records (EMR)").link.white--text
                    span For Private Practice
                li.pb-3
                  router-link(id="footer-multispecialty-btn" :to="{name: 'cms'}" title="MYCURE | Multispecialty Clinic Management System (CMS)").link.white--text
                    span For Multispecialty Clinics
                li.feature-text ABOUT
                li
                  router-link(id="footer-our-story-btn" :to="{name: 'our-story'}" title="MYCURE Our Story | Caring the Extra Mile").link.white--text 
                    span Our Story
                li 
                  router-link(id="footer-blog-btn" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link.white--text Blog 
                li 
                  router-link(id="footer-careers-btn" :to="{ name: 'careers' }" title="MYCURE - Careers").link.white--text Careers
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li.feature-text SUPPORT 
                li 
                  router-link(id="footer-faqs-btn" :to="{ name: 'faqs-link'}" title="MYCURE - FAQs").link.white--text FAQs
                li
                  router-link(id="footer-pricing-btn" :to="{name: 'pricing'}" title="MYCURE Pricing | Affordable EMR and Clinic Management System").link.white--text
                    span Pricing
                li.pb-3
                  router-link(id="footer-book-a-demo-btn" :to="{ name: 'calendly' }" title="MYCURE - Book A Demo").link.white--text Book A Demo
                li.feature-text LEGAL
                li
                  router-link(id="footer-terms-btn" :to="{name: 'terms'}" title="MYCURE Terms and Conditions").link.white--text 
                    span Terms
                li
                  router-link(id="footer-privacy-policy-btn" :to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").link.white--text 
                    span Privacy Policy
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li.feature-text CONTACT US
                li 
                  a(id="footer-email-btn" title="MYCURE - Email" href="mailto:hello@mycure.md" style="color: #2e9fdf") hello@mycure.md
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

  .feature-text {
    color: #999999
  }
</style>
