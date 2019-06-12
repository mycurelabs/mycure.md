<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat color="rgba(52, 58, 64, 1)")
        a(:to="{ name: 'home' }" href="")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-header-logo.png" height="25")
            //- strong.pl-2.font-mc-grey MYCURE
        v-spacer
        a(href="https://www.facebook.com/mycure.md" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-fb.png" height="25" href="https://google.com").px-2
        a(href="https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ytub-e.png" height="25").px-2
        a(href="https://www.instagram.com/mycure.md/" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ig.png" height="25").px-2
        a(href="https://www.linkedin.com/company/mycure" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-linkedin.png" height="25").px-2
        a(href="https://twitter.com/mycureapp" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-twitter.png" height="25").px-2
    div(v-else).mc-dark-grey
      div
        a(:to="{ name: 'home' }" href="")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-header-logo.png" height="25")
            //- strong.pl-2.font-mc-grey MYCURE
      br
      strong.white--text FOLLOW US
      br
      br
      v-layout(row justify-center)
        a(href="https://www.facebook.com/mycure.md" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-fb.png" height="30" href="https://google.com").px-3
        a(href="https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ytub-e.png" height="30").px-3
        a(href="https://www.instagram.com/mycure.md/" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ig.png" height="30").px-3
        a(href="https://www.linkedin.com/company/mycure" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-linkedin.png" height="30").px-3
        a(href="https://twitter.com/mycureapp" target="_blank")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-twitter.png" height="30").px-3
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
              router-link(:to="{ name: 'emr' }").link.white--text.py-2
                span.py-2 For Individual Doctors
              router-link(:to="{ name: 'cms' }").link.white--text.py-2
                span.py-2 For Multispecialty Clinics
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey ABOUT
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'our-story' }").link.white--text.py-2
                span.py-2 Our Story
              a(href="http://blog.mycure.md/" target="_blank").link.white--text.py-2
                span.py-2 Blog
              a(href="https://culture.mycure.md/" target="_blank").link.white--text.py-2
                span.py-2 Careers
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey SUPPORT
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              a(href="http://blog.mycure.md/frequently-asked-questions/" target="_blank").link.white--text.py-2
                span.py-2 FAQs
              router-link(:to="{ name: 'pricing' }").link.white--text.py-2
                span.py-2 Pricing
              a(href="https://calendly.com/mycure" target="_blank").link.white--text.py-2
                span.py-2 Book a Demo
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey LEGAL
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              router-link(:to="{ name: 'terms' }").link.white--text.py-2
                span.py-2 Terms
              router-link(:to="{ name: 'privacy-policy' }").link.white--text.py-2
                span.py-2 Privacy Policy
      v-layout(row)
        v-expansion-panel.elevation-0
          v-expansion-panel-content(style="background-color: #343a40")
            template(v-slot:header)
              span(style="margin-left: -24px").font-small.font-mc-grey CONTACT US
            template(v-slot:actions)
              v-icon(style="margin-right: -24px" color="white") mdi-chevron-down
            v-layout(column)
              a(href="mailto:hello@mycure.md").link.white--text.py-2
                span.py-2 hello@mycure.md
              span.py-2.white--text (+632) 799 6262
              span.py-2.white--text (+63) 917 303 4350
      br
      br
      br
      v-layout(row justify-center)
        strong.white--text &copy; {{new Date().getFullYear()}}
         router-link(:to="{ name: 'home' }")
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
      contact: false
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

