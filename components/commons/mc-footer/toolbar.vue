<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat).footer-grey
        nuxt-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-row(align="center").text-center
            img(src="~/assets/images/mycure-footer-logo.png" height="40" alt="MYCURE logo")
        v-spacer
        div(v-for="(account,key) in socMed" :key="key")
          nuxt-link(:to="{ name: `${ account.link }`}" :title="account.name" :id="account.id")
            img(:src="require(`~/assets/images/${ account.icon }`)" height="25" :alt="account.name").px-2
    div(v-else).footer-grey.secondary--text
      div
        nuxt-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-row(align="center").text-center
            img(src="~/assets/images/mycure-footer-logo.png" height="25" alt="MYCURE logo")
      br
      strong FOLLOW US
      br
      br
      v-row(justify="center")
        div(v-for="(account,key) in socMed" :key="key")
          nuxt-link(:to="{ name: `${ account.link }`}" :title="account.name" :id="account.id")
            img(:src="require(`~/assets/images/${ account.icon }`)" height="30" :alt="account.name").px-3
      br
      br
      v-row
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text CLINIC SOLUTIONS
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-chevron-down
            v-col
              nuxt-link(
                v-for="(solution, key) in clinicSolutions"
                :key="key"
                :to="{ name: solution.learnLink }"
              ).link.py-2
                span.py-2.font-18.white--text {{ solution.header }}
              nuxt-link(id="footer-features-btn" :to="{ name: 'features' }" title="MYCURE | Features").link.py-2
                span.py-2.font-18.white--text Features

      v-row
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text ABOUT
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-chevron-down
            v-col
              nuxt-link(id="footer-our-story-btn" :to="{ name: 'our-story' }" title="MYCURE Our Story | Caring the Extra Mile").link.py-2
                span.py-2.font-18.white--text Our Story
              nuxt-link(id="footer-blog-btn" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link.py-2
                span.py-2.font-18.white--text Blog
              nuxt-link(id="footer-careers-btn" :to="{ name: 'careers' }" title="MYCURE - Careers").link.py-2
                span.py-2.font-18.white--text Careers
      v-row
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text LEGAL
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-chevron-down
            v-col
              nuxt-link(id="footer-terms-btn" :to="{ name: 'terms' }" title="MYCURE Terms and Conditions").link.py-2
                span.py-2.font-18.white--text Terms of Use
              nuxt-link(id="footer-privacy-policy-btn" :to="{ name: 'privacy-policy' }" title="MYCURE Privacy Policy").link.py-2
                span.py-2.font-18.white--text Privacy Policy
      v-row
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text CONTACT US
            template(v-slot:actions)
              v-icon(color="grey").iconMargin mdi-chevron-down
            v-col
              a(id="footer-email-btn" title="MYCURE - Email" href="mailto:hello@mycure.md").link.font-mc-blue.py-2
                span.py-2.font-18.white--text hello@mycure.md
              span.py-2.font-18.white--text (+632) 7799 6262
              span.py-2.font-18.white--text (+63) 917 303 4350
      br
      br
      br
      v-row(justify="center").text-center
        strong.white--text Copyright &copy; 2016 - {{new Date().getFullYear()}}
         nuxt-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            strong.font-mc-blue &nbsp;MYCURE Inc.
            br
            strong.white--text All Rights Reserved.
      br
      br
</template>

<script>
// - constants
import { HEALTH_SUITES_ITEMS } from '~/components/home/health-suites/constants';
export default {
  data () {
    this.socMed = [
      {
        name: 'MYCURE - LinkedIn',
        link: 'linkedin-link',
        icon: 'mycure-homepage-wireframe-icon-linkedin.png',
        id: 'footer-linkedin-btn',
      },
      {
        name: 'MYCURE - Facebook',
        link: 'facebook-link',
        icon: 'mycure-homepage-wireframe-icon-fb.png',
        id: 'footer-fb-btn',
      },
      {
        name: 'MYCURE - YouTube',
        link: 'youtube-link',
        icon: 'mycure-homepage-wireframe-icon-ytub-e.png',
        id: 'footer-yt-btn',
      },
      {
        name: 'MYCURE - Instagram',
        link: 'instagram-link',
        icon: 'mycure-homepage-wireframe-icon-ig.png',
        id: 'footer-ig-btn',
      },
      {
        name: 'MYCURE - Twitter',
        link: 'twitter-link',
        icon: 'mycure-homepage-wireframe-icon-twitter.png',
        id: 'footer-twitter-btn',
      },
    ];
    return {
      clinicSolutions: HEALTH_SUITES_ITEMS,
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
.expansionPanelBg {
  background-color: #343a40 !important;
}
.iconMargin {
  margin-left: -24px;
}
.footer-grey {
  background-color: #343a40 !important
}
</style>
