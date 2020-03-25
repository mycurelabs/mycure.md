<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.footer-grey
        v-container.justify-center
          mc-footer-toolbar
          v-row(justify="center").pb-5
            v-col(cols="12" md="2")
              ul.no-style-type
                li.feature-text CLINIC SOLUTIONS
                li(v-for="(solution, key) in clinicSolutions")
                  nuxt-link(:to="{ name: solution.learnLink }" @click.stop="handleFooterSolution(solution.learnLink)").link
                    | {{solution.header}}
                li.pb-3
                  nuxt-link(id="footer-features-link" @click.stop="handleFooterFeaturesLink" :to="{name: 'features'}" title="MYCURE Features").link Features
            v-col(cols="12" md="2" offset-md="1")
              ul.no-style-type
                li.feature-text ABOUT
                li
                  nuxt-link(id="footer-our-story-link" @click.stop="handleFooterOurStoryLink" :to="{name: 'our-story'}" title="MYCURE Our Story | Caring the Extra Mile").link
                    span Our Story
                li
                  nuxt-link(id="footer-blog-link" @click.stop="handleFooterBlogLink" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link Blog
                li
                  nuxt-link(id="footer-careers-link" @click.stop="handleFooterCareersLink" :to="{ name: 'careers' }" title="MYCURE - Careers").link Careers
            v-col(cols="12" md="2")
              ul.no-style-type
                li.feature-text LEGAL
                li
                  nuxt-link(id="footer-terms-link" @click.stop="handleFooterTermsLink" :to="{name: 'terms'}" title="MYCURE Terms and Conditions").link
                    span Terms of Use
                li
                  nuxt-link(id="footer-privacy-policy-link" @click.stop="handleFooterPrivacyPolicyLink" :to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").link
                    span Privacy Policy
            v-col(cols="12" md="2" offset-md="2")
              ul.no-style-type
                li.feature-text CONTACT US
                li
                  a(id="footer-email-link" @click.stop="handleFooterEmailLink" title="MYCURE - Email" href="mailto:hello@mycure.md")
                    span.primary--text hello@mycure.md
                li.white--text (+632) 7799 6262
                li.white--text (+63) 917 303 4350
          hr.my-4
          v-row(justify="center")
            span.white--text Copyright &copy; 2016 - {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                span.primary--text &nbsp;MYCURE Inc.&nbsp;
                span.white--text All Rights Reserved.
    div(v-else).footer-grey.pa-4
      mc-footer-toolbar
</template>

<script>
// - components
import McFooterToolbar from './toolbar';
// - constants
import { HEALTH_SUITES_ITEMS } from '~/components/home/health-suites/constants';

export default {
  components: {
    McFooterToolbar,
  },
  data () {
    return {
      clinicSolutions: HEALTH_SUITES_ITEMS,
    };
  },
  methods: {
    handleFooterSolution (link) {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: `click-footer-${link}`,
        eventLabel: `footer-${link}`,
      });
    },
    handleFooterFeaturesLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-features-link',
        eventLabel: 'footer-features-link',
      });
    },
    handleFooterEmrLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-private-practice-link',
        eventLabel: 'footer-private-practice-link',
      });
    },
    handleFooterGroupLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-group-clinics-link',
        eventLabel: 'footer-group-clinics-link',
      });
    },
    handleFooterCmsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-multispecialty-link',
        eventLabel: 'footer-multispecialty-link',
      });
    },
    handleFooterSoloLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-solo-link',
        eventLabel: 'footer-solo-link',
      });
    },
    handleFooterOurStoryLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-our-story-link',
        eventLabel: 'footer-our-story-link',
      });
    },
    handleFooterBlogLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-blog-link',
        eventLabel: 'footer-blog-link',
      });
    },
    handleFooterCareersLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-careers-link',
        eventLabel: 'footer-careers-link',
      });
    },
    handleFooterTermsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-terms-link',
        eventLabel: 'footer-terms-link',
      });
    },
    handleFooterPrivacyPolicyLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-privacy-policy-link',
        eventLabel: 'footer-privacy-policy-link',
      });
    },
    handleFooterEmailLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-email-link',
        eventLabel: 'footer-email-link',
      });
    },
  },
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
.feature-text {
  color: lightgrey;
}
.footer-grey {
  background-color: #343a40 !important
}
</style>
