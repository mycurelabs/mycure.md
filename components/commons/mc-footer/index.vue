<template lang="pug">
  div
    div(v-if="!$isMobile")
      div.footer-grey
        v-container.justify-center
          mc-footer-toolbar
          hr.my-4
          v-row(justify="center").py-5
            v-layout(
              d-flex
              column
              space-between
            ).pl-5
              h3 CLINIC SOLUTIONS
              v-layout(
                v-for="(solution, key) in clinicSolutions"
              )
                nuxt-link(
                  :to="{ name: solution.learnLink }"
                  @click.stop="handleFooterSolution(solution.learnLink)"
                ).link {{solution.header}}
              nuxt-link(
                id="footer-features-link"
                @click.stop="handleFooterFeaturesLink"
                :to="{name: 'features'}"
                title="MYCURE Features"
              ).link Features
            v-layout(
              d-flex
              column
            ).px-12
              h3 ABOUT
              nuxt-link(
                id="footer-our-story-link"
                @click.stop="handleFooterOurStoryLink"
                :to="{name: 'our-story'}"
                title="MYCURE Our Story | Caring the Extra Mile"
              ).link Our Story
              a(href="http://blog.mycure.md/" target="_blank").link Blog
              a(href="https://culture.mycure.md/" target="_blank").link Careers
            v-layout(
              d-flex
              column
            ).px-12
              h3 LEGAL
              nuxt-link(
                id="footer-terms-link"
                @click.stop="handleFooterTermsLink"
                :to="{name: 'terms'}"
                title="MYCURE Terms and Conditions"
              ).link Terms of Use
              nuxt-link(
                id="footer-privacy-policy-link"
                @click.stop="handleFooterPrivacyPolicyLink"
                :to="{name: 'privacy-policy'}"
                itle="MYCURE Privacy Policy"
              ).link Privacy Policy
            v-layout(
              d-flex
              column
            )
              h3 CONTACT US
              a(
                id="footer-email-link"
                @click.stop="handleFooterEmailLink"
                title="MYCURE - Email"
                href="mailto:hello@mycure.md"
              ) hello@mycure.md
              span (+632) 7799 6262
              span (+63) 917 303 4350
          v-divider(color="black")
          hr.my-4
          v-row(justify="center")
            span Copyright &copy; 2016 - {{new Date().getFullYear()}}
              a(href="https://mycure.md")
                strong &nbsp;MYCURE Inc.&nbsp;
                span All Rights Reserved.
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
  color: inherit;
}
a:link {
  color: inherit;
  text-decoration: none;
}
.link:hover {
  color: #aaaaaa;
}
.center {
  padding: auto;
}
.feature-text {
  font-weight: bold;
  color: inherit;
}
.footer-grey {
  background-color: #f0f0f0 !important;
}
</style>
