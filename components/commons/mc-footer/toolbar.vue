<template lang="pug">
  v-container
    v-row(v-if="!$isMobile")
      v-toolbar(flat).footer-grey
        nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-row.text-center
            img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" height="40" alt="MYCURE logo")
        v-spacer
        div(v-for="(account, key) in socMed" :key="key")
          a(:href="account.link" target="_blank")
            img(:src="require(`~/assets/images/${ account.icon }`)" height="35" :alt="account.name").px-5
    v-row(v-else justify="center").footer-grey
      nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
        v-row(align="center").text-center
          img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="130" alt="MYCURE logo")
      br
      br
      v-row(justify="center")
        div(v-for="(account,key) in socMed" :key="key")
          a(:href="account.link" target="_blank")
            img(:src="require(`~/assets/images/${ account.icon }`)" height="30" :alt="account.name").px-3
      br
      br
      v-expansion-panels(flat).footer-grey.elevation-0
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.iconMargin.font-18.feature-text CLINIC SOLUTIONS
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-menu-down
          v-expansion-panel-content.iconMargin
            template(v-for="solution in clinicSolutions").link.py-2
              nuxt-link(:to="{ name: solution.route }")
                span.py-2.font-18.link {{solution.name}}
              br
              br
            nuxt-link(id="footer-features-btn" :to="{ name: 'features' }" title="MYCURE | Features").link.py-2
              span.py-2.font-18 Features
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.iconMargin.font-18.feature-text ABOUT
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-menu-down
          v-expansion-panel-content.iconMargin
            nuxt-link(id="footer-our-story-btn" :to="{ name: 'our-story' }" title="MYCURE Our Story | Caring the Extra Mile").link.py-2
              span.py-2.font-18 Our Story
            br
            br
            a(href="http://blog.mycure.md/" target="_blank").py-2
              span.py-2.font-18 Blog
            br
            br
            a(href="https://culture.mycure.md/" target="_blank").py-2
              span.py-2.font-18 Careers
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.iconMargin.font-18.feature-text LEGAL
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-menu-down
          v-expansion-panel-content.iconMargin
            nuxt-link(id="footer-terms-btn" :to="{ name: 'terms' }" title="MYCURE Terms and Conditions").link.py-2
              span.py-2.font-18 Terms of Use
            br
            br
            nuxt-link(id="footer-privacy-policy-btn" :to="{ name: 'privacy-policy' }" title="MYCURE Privacy Policy").link.py-2
              span.py-2.font-18 Privacy Policy
        v-expansion-panel.footer-grey
          v-expansion-panel-header(:color="expansionPanelColor")
            span.iconMargin.font-18.feature-text CONTACT US
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-menu-down
          v-expansion-panel-content.iconMargin
            a(id="footer-email-btn" title="MYCURE - Email" href="mailto:hello@mycure.md").link.primary--text.py-2
              span.py-2.font-18.primary--text hello@mycure.md
            br
            span.py-2.font-18 (+632) 7799 6262
            br
            span.py-2.font-18 (+63) 917 303 4350
      br
      br
      br
      v-row(justify="center").text-center
        strong Copyright &copy; 2016 - {{new Date().getFullYear()}}
      v-row(justify="center").text-center
        nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          strong.primary--text &nbsp;MYCURE Inc.
      v-row(justify="center").text-center
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
    this.expansionPanelColor = '#f0f0f0';
    return {
      clinicSolutions: CLINIC_SOLUTIONS,
      clinicSol: false,
      about: false,
      support: false,
      legal: false,
      contact: false,
    };
  },
};
</script>

<style scoped>
.logo-img {
  height: 20%;
}
a:link {
  text-decoration: none;
  color: grey;
}
.link {
  color: grey;
}
.feature-text {
  color: grey;
}
.footer-grey {
  background-color: #f0f0f0 !important;
}
</style>
