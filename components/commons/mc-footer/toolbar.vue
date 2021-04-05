<template lang="pug">
  v-container
    v-row(v-if="$isMobile" justify="center").footer-grey
      v-col(cols="12" align="center").pa-0
        nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          img(src="~/assets/images/mycure-footer-logo.png" width="130" alt="MYCURE logo")
      v-col(cols="12" align="center")
        template(v-for="(account,key) in socMed")
          a(:href="account.link" target="_blank" rel="noopener noreferrer")
            img(:src="require(`~/assets/images/${ account.icon }`)" height="30" :alt="account.name").px-2
      v-expansion-panels(flat).footer-grey.elevation-0
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.feature-text FOR PROVIDERS
            template(v-slot:actions)
              v-icon(color="grey") mdi-menu-down
          v-expansion-panel-content.iconMargin.pl-3
            template(v-for="solution in clinicSolutions").link.py-2
              nuxt-link(:to="{ name: solution.route }")
                span.font-18.link {{ solution.name }}
              br
              br
            //- nuxt-link(id="footer-features-btn" :to="{ name: 'features' }" title="MYCURE | Features").link.py-2
            //-   span.font-18 Features
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.feature-text FOR PATIENTS
            template(v-slot:actions)
              v-icon(color="grey") mdi-menu-down
          v-expansion-panel-content.pl-3
            a(:href="patientPortalSite" target="_blank" rel="noopener noreferrer").link.py-2
              span.font-18.new-link Patient Portal
            br
            br
            //- nuxt-link(id="footer-directory-doctors-link" :to="{ name: 'directory-doctors' }" title="MYCURE Doctor's Directory").link.py-2
              span.py-2.font-18.new-link Doctor's Directory
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.feature-text LEGAL
            template(v-slot:actions)
              v-icon(color="grey") mdi-menu-down
          v-expansion-panel-content.pl-3
            nuxt-link(id="footer-terms-btn" :to="{ name: 'terms' }" title="MYCURE Terms and Conditions").link.py-2
              span.font-18.link Terms of Use
            br
            br
            nuxt-link(id="footer-privacy-policy-btn" :to="{ name: 'privacy-policy' }" title="MYCURE Privacy Policy").link.py-2
              span.font-18.link Privacy Policy
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.feature-text ABOUT
            template(v-slot:actions)
              v-icon(color="grey") mdi-menu-down
          v-expansion-panel-content.pl-3
            nuxt-link(id="footer-our-story-btn" :to="{ name: 'our-story' }" title="MYCURE Our Story | Caring the Extra Mile").link.py-2
              span.font-18.link Our Story
            br
            br
            a(href="http://blog.mycure.md/" target="_blank" rel="noopener noreferrer").link.py-2
              span.font-18.link Blog
            br
            br
            a(href="https://culture.mycure.md/" target="_blank" rel="noopener noreferrer").link.py-2
              span.font-18.link Careers
            br
            br
            nuxt-link(id="footer-fight-covid-19-link" :to="{ name: 'fight-covid-19' }" title="Fight COVID-19: Free EMR").link.py-2
              span.font-18.link Fight COVID-19: Free EMR
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.feature-text CONTACT US
            template(v-slot:actions)
              v-icon(color="grey") mdi-menu-down
          v-expansion-panel-content.pl-3
            a(id="footer-email-btn" title="MYCURE - Email" href="mailto:hello@mycure.md").link.primary--text.py-2
              span.font-18.primary--text hello@mycure.md
            br
            span.call-number.font-18.link (+632) 7799 6262
            br
            span.call-number.font-18.link (+63) 917 303 4350
      br
      br
      br
      v-row(justify="center").text-center.copyright-text
        strong Copyright &copy; 2016 - {{ new Date().getFullYear() }}
      v-row(justify="center").text-center
        nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          strong.primary--text &nbsp;MYCURE Inc.
      v-row(justify="center").text-center.copyright-text
        strong All Rights Reserved.
      br
      br
</template>

<script>
// - constants
import { CLINIC_SOLUTIONS } from './constants';
export default {
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
    this.expansionPanelColor = '#343a40';
    return {
      clinicSolutions: CLINIC_SOLUTIONS,
      clinicSol: false,
      about: false,
      support: false,
      legal: false,
      contact: false,
    };
  },
  computed: {
    patientPortalSite () {
      return process.env.PX_PORTAL_URL;
    },
  },
};
</script>

<style scoped>
.call-number {
  color: #aaaaaa
}
.logo-img {
  height: 20%;
}
a:link {
  text-decoration: none;
  color: grey;
}
.link {
  color: white;
}
.feature-text {
  color: grey;
  font-size: 14px;
}
.new-link {
  position: relative;
}
.new-link:after {
  content: '';
  position: absolute;
  background-color: red;
  top: 14px;
  right: -13px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.footer-grey {
  background-color: #343a40 !important;
}
.copyright-text {
  color: #aaaaaa;
}
</style>
