<template lang="pug">
  div
    //- FIXME: PLEASE ORGANIZE THIS CODE!
    //- TODO: MOBILE VIEW
    //- TODO: UPDATE CONTENTS
    div(v-if="!$isMobile")
      div.mc-gradient-grey
        v-container(justify-center)
          mc-toolbar-footer
          v-layout(row wrap justify-center)
            v-flex(xs12 md3)
              ul.no-style-type
                li.pt-3.feature-text CLINIC SOLUTIONS
                li(v-for="(solution, key) in clinicSolutions")
                  router-link(:to="{ name: solution.learnLink }").link
                    | {{ solution.header }}
                //- li
                //-   router-link(id="footer-multispecialty-link" @click.stop="handleFooterCmsLink" :to="{name: 'cms'}" title="MYCURE | Multispecialty Clinic Management System (CMS)").link
                //-     span Multispecialty Clinics
                //- li
                //-   router-link(id="footer-group-link" @click.stop="handleFooterGroupLink" :to="{name: 'group'}" title="MYCURE | Multispecialty Clinic Management System (CMS)").link
                //-     span Group Clinics
                //- li
                //-   router-link(id="footer-private-practice-link" @click.stop="handleFooterEmrLink" :to="{name: 'emr'}" title="MYCURE | Individual Practice Electronic Medical Records (EMR)").link
                //-     span Individual Practice
                //- li.pb-3
                //-   a(id="footer-solo-link" @click.stop="handleFooterSoloLink" href="https://solo.mycure.md" target="_blank" title="MYCURE - Solo | Patient Records Organizer (PRO)").link
                //-     span Solo by MYCURE
                li.pt-3
                  router-link(id="footer-features-link" @click.stop="handleFooterFeaturesLink" :to="{name: 'features'}" title="MYCURE Features").link FEATURES
                li.pb-3
                  router-link(id="footer-csr-link" @click.stop="handleFooterCsrLink" :to="{name: 'csr'}" title="MYCURE Corporate Social Responsibility").link CORPORATE SOCIAL RESPONSIBILITY
                li.feature-text ABOUT
                li
                  router-link(id="footer-our-story-link" @click.stop="handleFooterOurStoryLink" :to="{name: 'our-story'}" title="MYCURE Our Story | Caring the Extra Mile").link 
                    span Our Story
                li 
                  router-link(id="footer-blog-link" @click.stop="handleFooterBlogLink" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link Blog 
                li 
                  router-link(id="footer-careers-link" @click.stop="handleFooterCareersLink" :to="{ name: 'careers' }" title="MYCURE - Careers").link Careers
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li.feature-text SUPPORT 
                //- li 
                  router-link(id="footer-faqs-link" @click.stop="handleFooterFaqsLink" :to="{ name: 'faqs-link'}" title="MYCURE - FAQs").link FAQs
                //- li
                  router-link(id="footer-pricing-link" @click.stop="handleFooterPricingLink" :to="{name: 'pricing'}" title="MYCURE Pricing | Affordable EMR and Clinic Management System").link
                    span Pricing
                li.pb-3
                  router-link(id="footer-book-a-demo-link" @click.stop="handleFooterBookADemoLink" :to="{ name: 'calendly' }" title="MYCURE - Book A Demo").link Book A Demo
                li.feature-text LEGAL
                li
                  router-link(id="footer-terms-link" @click.stop="handleFooterTermsLink" :to="{name: 'terms'}" title="MYCURE Terms and Conditions").link 
                    span Terms
                li
                  router-link(id="footer-privacy-policy-link" @click.stop="handleFooterPrivacyPolicyLink" :to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").link 
                    span Privacy Policy
              
            v-flex(xs12 md3 offset-md1).font-mc-grey
              ul.no-style-type
                li.feature-text CONTACT US
                li 
                  a(id="footer-email-link" @click.stop="handleFooterEmailLink" title="MYCURE - Email" href="mailto:hello@mycure.md")
                    span.font-mc-blue hello@mycure.md
                li (+632) 7799 6262
                li (+63) 917 303 4350
          hr.mc-grey.my-4  
          v-layout(row wrap justify-center)  
            span &copy; 2016 - {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                span.font-mc-blue &nbsp; MYCURE.  
                |
                span All Rights Reserved.
    div(v-else).mc-gradient-grey.pa-4
      mc-toolbar-footer  
</template>

<script>
import mcToolbarFooter from "./mc-toolbar-footer";
import { HEALTH_SUITES_ITEMS } from "../home/health-suites/constants";

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
      signInURL: process.env.VUE_APP_SIGNIN_URL,
      clinicSolutions: HEALTH_SUITES_ITEMS
    };
  },
  methods: {
    handleFooterFeaturesLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-features-link',
        eventLabel: 'footer-features-link'
      });
    },
    handleFooterEmrLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-private-practice-link',
        eventLabel: 'footer-private-practice-link'
      });
    },
    handleFooterGroupLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-group-clinics-link',
        eventLabel: 'footer-group-clinics-link'
      });
    },
    handleFooterCmsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-multispecialty-link',
        eventLabel: 'footer-multispecialty-link'
      });
    },
    handleFooterSoloLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-solo-link',
        eventLabel: 'footer-solo-link'
      });
    },
    handleFooterOurStoryLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-our-story-link',
        eventLabel: 'footer-our-story-link'
      });
    },
    handleFooterBlogLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-blog-link',
        eventLabel: 'footer-blog-link'
      });
    },
    handleFooterCareersLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-careers-link',
        eventLabel: 'footer-careers-link'
      });
    },
    handleFooterFaqsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-faqs-link',
        eventLabel: 'footer-faqs-link'
      });
    },
    handleFooterPricingLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-pricing-link',
        eventLabel: 'footer-pricing-link'
      });
    },
    handleFooterBookADemoLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-book-a-demo-link',
        eventLabel: 'footer-book-a-demo-link'
      });
    },
    handleFooterTermsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-terms-link',
        eventLabel: 'footer-terms-link'
      });
    },
    handleFooterPrivacyPolicyLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-privacy-policy-link',
        eventLabel: 'footer-privacy-policy-link'
      });
    },
    handleFooterEmailLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-email-link',
        eventLabel: 'footer-email-link'
      });
    },
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
    color: grey;
  }
  .link {
    color: grey;
  }
  .center {
    padding: auto;
  }

  .font-mc-blue {
    color: #2e9fdf
  }

  .feature-text {
    color: #3a3838
  }
</style>
