<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat color="rgba(52, 58, 64, 1)")
        router-link(:to="{ name: 'home' }")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-header-logo.png" height="25")
            //- strong.pl-2.font-mc-grey MYCURE
        v-spacer
        router-link(:to="{ name: 'fb-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-fb.png" height="25").px-2
        router-link(:to="{ name: 'youtube-link'}")  
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ytub-e.png" height="25").px-2
        router-link(:to="{ name: 'ig-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ig.png" height="25").px-2
        router-link(:to="{ name: 'linkedin-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-linkedin.png" height="25").px-2
        router-link(:to="{ name: 'twitter-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-twitter.png" height="25").px-2
    div(v-else).mc-dark-grey
      div
        router-link(:to="{ name: 'home' }")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-header-logo.png" height="25")
            //- strong.pl-2.font-mc-grey MYCURE
      br
      strong.white--text FOLLOW US
      br
      br
      v-layout(row justify-center)
        router-link(:to="{ name: 'fb-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-fb.png" height="30").px-3
        router-link(:to="{ name: 'youtube-link'}")  
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ytub-e.png" height="30").px-3
        router-link(:to="{ name: 'ig-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-ig.png" height="30").px-3
        router-link(:to="{ name: 'linkedin-link'}")
          img(src="../../assets/images/mycure-homepage-wireframe-icon-linkedin.png" height="30").px-3
        router-link(:to="{ name: 'twitter-link'}")
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
              router-link(:to="{ name: 'blog-link' }").link.white--text.py-2
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

