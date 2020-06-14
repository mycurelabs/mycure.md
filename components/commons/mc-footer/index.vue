<template lang="pug">
  v-container(fluid).footer-dark
    v-container(v-if="!$isMobile")
      mc-footer-toolbar
      hr.my-4
      v-row(justify="center" d-flex).py-5
        v-col(cols="3")
          ul
            li #[h3.primary--text CLINIC SOLUTIONS]
            li(
              v-for="(solution, key) in clinicSolutions"
              :key="key"
            )
              nuxt-link(
              :to="{ name: solution.route }"
              @click.stop="handleFooterSolution(solution.route)"
              ).link {{solution.name}}
            nuxt-link(
              id="footer-features-link"
              @click.stop="handleFooterFeaturesLink"
              :to="{name: 'features'}"
              title="MYCURE Features"
            ).link Features
        v-col(cols="3").pl-12
          h3.primary--text ABOUT
          nuxt-link(
            id="footer-our-story-link"
            @click.stop="handleFooterOurStoryLink"
            :to="{name: 'our-story'}"
            title="MYCURE Our Story | Caring the Extra Mile"
          ).link Our Story
          br
          a(href="http://blog.mycure.md/" target="_blank" rel="noopener noreferrer").link Blog
          br
          a(href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer").link Careers
        v-col(cols="3")
          h3.primary--text LEGAL
          nuxt-link(
            id="footer-terms-link"
            @click.stop="handleFooterTermsLink"
            :to="{name: 'terms'}"
            title="MYCURE Terms and Conditions"
          ).link Terms of Use
          br
          nuxt-link(
            id="footer-privacy-policy-link"
            @click.stop="handleFooterPrivacyPolicyLink"
            :to="{name: 'privacy-policy'}"
            title="MYCURE Privacy Policy"
          ).link Privacy Policy
        v-col(cols="3")
          h3.primary--text CONTACT US
          a(
            id="footer-email-link"
            @click.stop="handleFooterEmailLink"
            title="MYCURE - Email"
            href="mailto:hello@mycure.md"
          ).link hello@mycure.md
          br
          span.call-number (+632) 7799 6262
          br
          span.call-number (+63) 917 303 4350
      hr.my-4
      v-row(justify="center")
        span.call-number Copyright &copy; 2016 - {{new Date().getFullYear()}}
          a(href="https://mycure.md")
            strong.primary--text &nbsp;MYCURE Inc.&nbsp;
        span.call-number All Rights Reserved.
    v-container(v-else).footer-dark.pa-4
      mc-footer-toolbar
</template>

<script>
// - components
import McFooterToolbar from './toolbar';
// - constants
import { CLINIC_SOLUTIONS } from './constants';

export default {
  components: {
    McFooterToolbar,
  },
  created () {
    this.clinicSolutions = CLINIC_SOLUTIONS;
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
a {
  color: #aaaaaa;
}
a:link {
  color: #aaaaaa;
  text-decoration: none;
}
li {
  list-style: none;
}
.link {
  color: #aaaaaa;
}
.link:hover {
  color: #ffffff;
}
.clinic-header {
  font-size: 1.7em;
  font-weight: bold;
}
.center {
  padding: auto;
}
.feature-text {
  font-weight: bold;
  color: inherit;
}
.footer-dark {
  z-index: 5;
  background-color: #343a40 !important;
}
.call-number {
  color: #aaaaaa;
}
</style>
