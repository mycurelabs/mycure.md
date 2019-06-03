<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-toolbar(flat color="rgba(52, 58, 64, 1)")
        a(href="/")
          v-layout(row wrap center)    
            img(src="../../assets/images/mycure-footer-logo.svg" height="25")
            strong.pl-2.font-mc-grey MYCURE
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
        a(href="/")
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
      v-layout(row).pb-1
        span.font-small.font-mc-grey CLINIC SOLUTIONS
        v-spacer
        v-icon(v-if="!clinicSol" @click="clinicSol=!clinicSol" dark) arrow_right
        v-icon(v-else @click="clinicSol=!clinicSol" dark) arrow_drop_down
      hr(style="border: 1px solid grey").mx-1
      div(v-if="clinicSol").py-3
        v-layout(column)
          a(href="/").link.white--text.py-2
            span.py-2 HOME
          a(href="/electronic-medical-records").link.white--text.py-2
            span.py-2 For Individual Doctors
          a(href="/clinic-management-system").link.white--text.py-2
            span.py-2 For Multispecialty Clinics
      br
      v-layout(row).pb-1
        span.font-small.font-mc-grey ABOUT
        v-spacer
        v-icon(v-if="!about" @click="about=!about" dark) arrow_right
        v-icon(v-else @click="about=!about" dark) arrow_drop_down
      hr(style="border: 1px solid grey").mx-1
      div(v-if="about").py-3
        v-layout(column)
          a(href="/our-story").link.white--text.py-2
            span.py-2 Our Story
          a(href="http://blog.mycure.md/" target="_blank").link.white--text.py-2
            span.py-2 Blog
          a(href="https://culture.mycure.md/" target="_blank").link.white--text.py-2
            span.py-2 Careers
      br
      v-layout(row).pb-1
        span.font-small.font-mc-grey SUPPORT
        v-spacer
        v-icon(v-if="!support" @click="support=!support" dark) arrow_right
        v-icon(v-else @click="support=!support" dark) arrow_drop_down
      hr(style="border: 1px solid grey").mx-1
      div(v-if="support").py-3
        v-layout(column)
          a(href="http://blog.mycure.md/frequently-asked-questions/" target="_blank").link.white--text.py-2
            span.py-2 FAQs
          a(href="/pricing").link.white--text.py-2
            span.py-2 Pricing
          a(href="https://calendly.com/mycure" target="_blank").link.white--text.py-2
            span.py-2 Book a Demo
      br
      v-layout(row).pb-1
        span.font-small.font-mc-grey LEGAL
        v-spacer
        v-icon(v-if="!legal" @click="legal=!legal" dark) arrow_right
        v-icon(v-else @click="legal=!legal" dark) arrow_drop_down
      hr(style="border: 1px solid grey").mx-1
      div(v-if="legal").py-3
        v-layout(column)
          a(href="/terms").link.white--text.py-2
            span.py-2 Terms
          a(href="/privacy-policy").link.white--text.py-2
            span.py-2 Privacy Policy
      br
      v-layout(row).pb-1
        span.font-small.font-mc-grey CONTACT
        v-spacer
        v-icon(v-if="!contact" @click="contact=!contact" dark) arrow_right
        v-icon(v-else @click="contact=!contact" dark) arrow_drop_down
      hr(style="border: 1px solid grey").mx-1
      div(v-if="contact").py-3
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
          a(href="https://mycure.md")
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

