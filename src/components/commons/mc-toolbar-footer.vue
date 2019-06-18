<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat color="rgba(52, 58, 64, 1)")
        router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-footer-logo.png" height="25" alt="MYCURE logo")
        v-spacer
        div(v-for="(account,key) in socMed" :key="key")
          router-link(:to="{ name: `${ account.link }`}" :title="account.name")
            img(:src="require(`../../assets/images/${ account.icon }`)" height="25" :alt="account.name").px-2
    div(v-else).mc-dark-grey
      div
        router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-footer-logo.png" height="25" alt="MYCURE logo")
      br
      strong.white--text FOLLOW US
      br
      br
      v-layout(row justify-center)
        div(v-for="(account,key) in socMed" :key="key")
          router-link(:to="{ name: `${ account.link }`}" :title="account.name")
            img(:src="require(`../../assets/images/${ account.icon }`)" height="30" :alt="account.name").px-3
      br
      br
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey CLINIC SOLUTIONS
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'emr' }" title="MYCURE | Private Practice Electronic Medical Records (EMR)").link.white--text.py-2
                span.py-2 For Private Practice
              router-link(:to="{ name: 'cms' }" title="MYCURE | Multispecialty Clinic Management System (CMS)").link.white--text.py-2
                span.py-2 For Multispecialty Clinics
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey ABOUT
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'our-story' }" title="MYCURE Our Story | Caring the Extra Mile").link.white--text.py-2
                span.py-2 Our Story
              router-link(:to="{ name: 'blog-link' }" title="MYCURE - Blog").link.white--text.py-2
                span.py-2 Blog
              router-link(:to="{ name: 'careers' }" title="MYCURE - Careers").link.white--text.py-2
                span.py-2 Careers
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey SUPPORT
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'faqs-link' }" title="MYCURE - FAQs").link.white--text.py-2
                span.py-2 FAQs
              router-link(:to="{ name: 'pricing' }" title="MYCURE Pricing | Affordable EMR and Clinic Management System").link.white--text.py-2
                span.py-2 Pricing
              router-link(:to="{ name: 'calendly' }" title="MYCURE - Book A Demo").link.white--text.py-2
                span.py-2 Book a Demo
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey LEGAL
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'terms' }" title="MYCURE Terms and Conditions").link.white--text.py-2
                span.py-2 Terms
              router-link(:to="{ name: 'privacy-policy' }" title="MYCURE Privacy Policy").link.white--text.py-2
                span.py-2 Privacy Policy
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey CONTACT US
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              a(href="mailto:hello@mycure.md").link.font-mc-blue.py-2
                span.py-2 hello@mycure.md
              span.py-2.white--text (+632) 799 6262
              span.py-2.white--text (+63) 917 303 4350
      br
      br
      br
      v-layout(row justify-center)
        strong.white--text &copy; {{new Date().getFullYear()}}
         router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            strong.font-mc-blue &nbsp; MYCURE.  
            |
            strong.white--text All Rights Reserved.
      br
      br
</template>

<script>
export default {
  data () {
    return {
      clinicSol: false,
      about: false,
      support: false,
      legal: false,
      contact: false,
      socMed: [
        {
          name: 'MYCURE - Facebook',
          link: 'facebook-link',
          icon: 'mycure-homepage-wireframe-icon-fb-hover.png'
        },
        {
          name: 'MYCURE - YouTube',
          link: 'youtube-link',
          icon: 'mycure-homepage-wireframe-icon-ytube-hover.png'
        },
        {
          name: 'MYCURE - Instagram',
          link: 'instagram-link',
          icon: 'mycure-homepage-wireframe-icon-ig-hover.png'
        },
        {
          name: 'MYCURE - LinkedIn',
          link: 'linkedin-link',
          icon: 'mycure-homepage-wireframe-icon-linkedin-hover.png'
        },
        {
          name: 'MYCURE - Twitter',
          link: 'twitter-link',
          icon: 'mycure-homepage-wireframe-icon-twitter-hover.png'
        },
      ]
    };
  }
};
</script>

<style scoped>

.logo-img {
  height: 20%;
}

a:link {
  text-decoration: none;
}

</style>

