<template lang="pug">
  v-container(fluid).footer-dark
    v-container(v-if="!$isMobile")
      mc-footer-toolbar
      v-row(justify="center").pb-8
        v-col(cols="2" align="center")
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            img(src="~/assets/images/mycure-footer-logo.png" height="40" alt="MYCURE logo")
          img(src="~/assets/images/HIPAA Badge.png" width="80%" alt="HIPAA Badge")
        v-col(cols="2")
          ul
            li #[h3.primary--text.footer-header FOR PROVIDERS]
            li(
              v-for="(solution, key) in clinicSolutions"
              :key="key"
            )
              nuxt-link(
                :to="{ name: solution.route }"
                @click.stop="handleFooterSolution(solution.route)"
              ).link {{ solution.name }}
        v-col(cols="2")
          div
            h3.primary--text.footer-header FOR PATIENTS
            a(:href="patientPortalSite" target="_blank" rel="noopener noreferrer").link.new-link Patient Portal
            span(style="border-radius: 10px;").ml-2.px-1.white--text.red.font-weight-bold.font-14.pill NEW
            //- directory / doctor
            //- nuxt-link(
            //-   id="footer-directory-doctors-link"
            //-   @click.stop="handleFooterDirectoryDoctorsLink"
            //-   :to="{name: 'directory-doctors'}"
            //-   title="MYCURE Doctor's Directory"
            //- ).link.new-link Doctor's Directory
        v-col(cols="2")
          div
            h3.primary--text.footer-header LEGAL
            nuxt-link(
              id="footer-terms-link"
              title="MYCURE Terms and Conditions"
              :to="{ name: 'terms' }"
              @click.stop="handleFooterTermsLink"
            ).link Terms of Use
            br
            nuxt-link(
              id="footer-privacy-policy-link"
              title="MYCURE Privacy Policy"
              :to="{ name: 'privacy-policy' }"
              @click.stop="handleFooterPrivacyPolicyLink"
            ).link Privacy Policy
        v-col(cols="2")
          h3.primary--text.footer-header ABOUT
          nuxt-link(
            id="footer-our-story-link"
            title="MYCURE Our Story | Caring the Extra Mile"
            :to="{ name: 'our-story' }"
            @click.stop="handleFooterOurStoryLink"
          ).link Our Story
          br
          a(href="http://blog.mycure.md/" target="_blank" rel="noopener noreferrer").link Blog
          br
          a(href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer").link Careers
          br
          nuxt-link(
            id="footer-fight-covid-19-link"
            title="Fight COVID-19: Free EMR"
            :to="{ name: 'fight-covid-19' }"
            @click.stop="handleFooterPrivacyPolicyLink"
          ).link
            span Fight COVID-19:
            br
            span Free EMR
        v-col(cols="2")
          h3.primary--text.footer-header CONTACT US
          a(
            id="footer-email-link"
            title="MYCURE - Email"
            href="mailto:hello@mycure.md"
            @click.stop="handleFooterEmailLink"
          ).link hello@mycure.md
          br
          span.call-number (+632) 7799 6262
          br
          span.call-number (+63) 917 303 4350
      hr.my-5
      v-row(align="center" no-gutters)
        v-col(cols="7")
          span.call-number Copyright &copy; 2016 - {{ new Date().getFullYear() }}
            a(href="https://mycure.md" rel="noopener noreferrer")
              strong.primary--text &nbsp;MYCURE Inc.&nbsp;
          span.call-number All Rights Reserved.
        v-col(cols="5" align="end")
          template(v-for="(account, key) in socMed")
            a(:href="account.link" target="_blank" rel="noopener noreferrer")
              img(:src="require(`~/assets/images/${ account.icon }`)" height="35" :alt="account.name").pl-8
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
  data () {
    this.socMed = [
      {
        name: 'MYCURE - Instagram',
        link: 'https://www.instagram.com/mycure.md/',
        icon: 'mycure-homepage-wireframe-icon-ig.png',
        id: 'footer-ig-btn',
      },
      {
        name: 'MYCURE - LinkedIn',
        link: 'https://www.linkedin.com/company/mycure',
        icon: 'mycure-homepage-wireframe-icon-linkedin.png',
        id: 'footer-linkedin-btn',
      },
      {
        name: 'MYCURE - YouTube',
        link: 'https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg',
        icon: 'mycure-homepage-wireframe-icon-ytub-e.png',
        id: 'footer-yt-btn',
      },
      {
        name: 'MYCURE - Facebook',
        link: 'https://www.facebook.com/mycure.md',
        icon: 'mycure-homepage-wireframe-icon-fb.png',
        id: 'footer-fb-btn',
      },
      {
        name: 'MYCURE - Twitter',
        link: 'https://twitter.com/mycureapp',
        icon: 'mycure-homepage-wireframe-icon-twitter.png',
        id: 'footer-twitter-btn',
      },
    ];
    return {};
  },
  computed: {
    patientPortalSite () {
      return process.env.PX_PORTAL_URL;
    },
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
    handleFooterFightCovidLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-fight-covid-19-link',
        eventLabel: 'footer-fight-covid-19-link',
      });
    },
    handleFooterDirectoryDoctorsLink () {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: 'click-footer-directory-doctors-link',
        eventLabel: 'footer-directory-doctors-link',
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
.footer-header {
  font-size: 14px;
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
