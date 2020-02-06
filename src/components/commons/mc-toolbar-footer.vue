<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat).footer-grey
        router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-footer-logo.png" height="40" alt="MYCURE logo")
        v-spacer
        div(v-for="(account,key) in socMed" :key="key")
          router-link(:to="{ name: `${ account.link }`}" :title="account.name" :id="account.id")
            img(:src="require(`../../assets/images/${ account.icon }`)" height="25" :alt="account.name").px-2
    div(v-else).footer-grey.font-mc-grey
      div
        router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-footer-logo.png" height="25" alt="MYCURE logo")
      br
      strong FOLLOW US
      br
      br
      v-layout(row justify-center)
        div(v-for="(account,key) in socMed" :key="key")
          router-link(:to="{ name: `${ account.link }`}" :title="account.name" :id="account.id")
            img(:src="require(`../../assets/images/${ account.icon }`)" height="30" :alt="account.name").px-3
      br
      br
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text CLINIC SOLUTIONS
            template(v-slot:actions)
              v-icon.iconMargin mdi-chevron-down
            v-layout(column)
              router-link(
                v-for="(solution, key) in clinicSolutions"
                :key="key"
                :to="{ name: solution.learnLink }"
              ).link.py-2
                span.py-2 {{ solution.header }}
              router-link(id="footer-features-btn" :to="{ name: 'features' }" title="MYCURE | Features").link.py-2
                span.py-2 Features
              
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text ABOUT
            template(v-slot:actions)
              v-icon.iconMargin mdi-chevron-down
            v-layout(column)
              router-link(id="footer-csr-btn" :to="{ name: 'csr' }" title="MYCURE | Corporate Social Responsibility").link.py-2
                span.py-2 Corporate Social Responsibility
              router-link(id="footer-our-story-btn" :to="{ name: 'our-story' }" title="MYCURE Our Story | Caring the Extra Mile").link.py-2
                span.py-2 Our Story
              router-link(id="footer-blog-btn" :to="{ name: 'blog-link' }" title="MYCURE - Blog").link.py-2
                span.py-2 Blog
              router-link(id="footer-careers-btn" :to="{ name: 'careers' }" title="MYCURE - Careers").link.py-2
                span.py-2 Careers
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text SUPPORT
            template(v-slot:actions)
              v-icon.iconMargin mdi-chevron-down
            v-layout(column)
              //- router-link(id="footer-faqs-btn" :to="{ name: 'faqs-link' }" title="MYCURE - FAQs").link.py-2
                span.py-2 FAQs
              //- router-link(id="footer-pricing-btn" :to="{ name: 'pricing' }" title="MYCURE Pricing | Affordable EMR and Clinic Management System").link.py-2
                span.py-2 Pricing
              router-link(id="footer-book-a-demo-btn" :to="{ name: 'calendly' }" title="MYCURE - Book A Demo").link.py-2
                span.py-2 Book a Demo
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text LEGAL
            template(v-slot:actions)
              v-icon.iconMargin mdi-chevron-down
            v-layout(column)
              router-link(id="footer-terms-btn" :to="{ name: 'terms' }" title="MYCURE Terms and Conditions").link.py-2
                span.py-2 Terms
              router-link(id="footer-privacy-policy-btn" :to="{ name: 'privacy-policy' }" title="MYCURE Privacy Policy").link.py-2
                span.py-2 Privacy Policy
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content.footer-grey
            template(v-slot:header)
              span.iconMargin.font-18.feature-text CONTACT US
            template(v-slot:actions)
              v-icon.iconMargin mdi-chevron-down
            v-layout(column)
              a(id="footer-email-btn" title="MYCURE - Email" href="mailto:hello@mycure.md").link.font-mc-blue.py-2
                span.py-2 hello@mycure.md
              span.py-2 (+632) 7799 6262
              span.py-2 (+63) 917 303 4350
      br
      br
      br
      v-layout(row justify-center)
        strong.font-mc-white &copy; 2016 - {{new Date().getFullYear()}}
         router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            strong.font-mc-blue &nbsp; MYCURE.  
            |
            strong.font-mc-white All Rights Reserved.
      br
      br
</template>

<script>
import { HEALTH_SUITES_ITEMS } from '../home/health-suites/constants';
export default {
  data () {
    return {
      clinicSolutions: HEALTH_SUITES_ITEMS,
      clinicSol: false,
      about: false,
      support: false,
      legal: false,
      contact: false,
      socMed: [
        {
          name: 'MYCURE - Facebook',
          link: 'facebook-link',
          icon: 'mycure-homepage-wireframe-icon-fb.png',
          id: 'footer-fb-btn'
        },
        {
          name: 'MYCURE - YouTube',
          link: 'youtube-link',
          icon: 'mycure-homepage-wireframe-icon-ytub-e.png',
          id: 'footer-yt-btn'
        },
        {
          name: 'MYCURE - Instagram',
          link: 'instagram-link',
          icon: 'mycure-homepage-wireframe-icon-ig.png',
          id: 'footer-ig-btn'
        },
        {
          name: 'MYCURE - LinkedIn',
          link: 'linkedin-link',
          icon: 'mycure-homepage-wireframe-icon-linkedin.png',
          id: 'footer-linkedin-btn'
        },
        {
          name: 'MYCURE - Twitter',
          link: 'twitter-link',
          icon: 'mycure-homepage-wireframe-icon-twitter.png',
          id: 'footer-twitter-btn'
        },
      ]
    };
  },
  methods: {
    // 
  }
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
</style>

