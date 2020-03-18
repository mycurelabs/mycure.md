<template lang="pug">
  div
    //- FIXME: PLEASE ORGANIZE THIS CODE!
    div(v-if="!$isMobile")
      div.footer-grey
        v-container(justify-center)
          mc-toolbar-footer
          v-layout(row wrap justify-center).pb-5
            v-flex(xs12 md2)
              ul.no-style-type
                li.feature-text CLINIC SOLUTIONS
                li(v-for="(solution, key) in clinicSolutions")
                  router-link(:to="{ name: solution.learnLink }" @click.stop="handleFooterSolution(solution.learnLink)").link
                    | {{ solution.header }}
                li.pb-3
                  router-link(id="footer-features-link" @click.stop="handleFooterFeaturesLink" :to="{name: 'features'}" title="MYCURE Features").link Features
            v-flex(xs12 md2 offset-md1)
              ul.no-style-type
                li.feature-text ABOUT
                li
                  router-link(id="footer-our-story-link" @click.stop="handleFooterOurStoryLink" :to="{name: 'our-story'}" title="MYCURE Our Story | Caring the Extra Mile").link 
                    span Our Story
                li 
                  router-link(id="footer-blog-link" @click.stop="handleFooterBlogLink" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link Blog 
                li 
                  router-link(id="footer-careers-link" @click.stop="handleFooterCareersLink" :to="{ name: 'careers' }" title="MYCURE - Careers").link Careers
            v-flex(xs12 md2)
              ul.no-style-type
                li.feature-text LEGAL
                li
                  router-link(id="footer-terms-link" @click.stop="handleFooterTermsLink" :to="{name: 'terms'}" title="MYCURE Terms and Conditions").link 
                    span Terms of Use
                li
                  router-link(id="footer-privacy-policy-link" @click.stop="handleFooterPrivacyPolicyLink" :to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").link 
                    span Privacy Policy
              
            v-flex(xs12 md2 offset-md2)
              ul.no-style-type
                li.feature-text CONTACT US
                li 
                  a(id="footer-email-link" @click.stop="handleFooterEmailLink" title="MYCURE - Email" href="mailto:hello@mycure.md")
                    span.font-mc-blue hello@mycure.md
                li.font-mc-white (+632) 7799 6262
                li.font-mc-white (+63) 917 303 4350
          hr.my-4  
          v-layout(row wrap justify-center)  
            span.font-mc-white Copyright &copy; 2016 - {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                span.font-mc-blue &nbsp; MYCURE Inc.
                | &nbsp;
                span.font-mc-white All Rights Reserved.
    div(v-else).footer-grey.pa-4
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
      clinicSolutions: HEALTH_SUITES_ITEMS
    };
  },
  methods: {
    handleFooterSolution (link) {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: `click-footer-${link}`,
        eventLabel: `footer-${link}`
      });
    },
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
    color: grey;
    background-color: grey;
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
  .link:hover {
    color: white;
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
    color: lightgrey;
  }
</style>
