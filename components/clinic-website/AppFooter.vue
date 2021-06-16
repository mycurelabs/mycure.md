<template lang="pug">
  div
    v-footer(v-if="!$isMobile" dark color="#343A40").pa-5
        v-row.d-flex
          v-col.font-14
            div.d-flex
              p.ml-5.mt-1 #[b Powered by]
              img(
                height="30"
                src="~/assets/images/mycure-footer-logo.png"
                alt="MYCURE"
                @click="$nuxt.$router.push({ name: 'index' })"
              ).ml-2
            p.ml-5 Copyright &#169;{{new Date().getFullYear()}} All Rights Reserved.
          v-col.d-flex
            nuxt-link(to="/terms").font-14 Terms of Use
            | &nbsp;|&nbsp;
            nuxt-link(to="/privacy-policy").font-14 Privacy Policy
            | &nbsp;|&nbsp;
            a(
              :href="feedbackLink"
              target="_blank"
              rel="noopener noreferrer"
            ).font-14 Send us your feedback
          v-col.d-flex.text-center
            nuxt-link(to="/directory/results").font-14 See more Health Facilities
            | &nbsp;|&nbsp;
            nuxt-link(to="/signup/health-facilities").font-14 Create my own Health Facility Website
    v-footer(v-else dark color="#343A40").pa-5
      v-row(justify="center" align="center")
        v-col(cols="12" align="center")
          div.d-flex.justify-center.white--text
            nuxt-link(to="/terms").white--text.font-14 Terms of Use
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/privacy-policy").white--text.font-14 Privacy Policy
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            a(
              :href="feedbackLink"
              target="_blank"
              rel="noopener noreferrer"
            ).white--text.font-14 Send us your feedback
        v-col(cols="10" align="center")
          div.d-flex.white--text
            nuxt-link(to="/directory/results").white--text.font-14 See more Health Facilities
            | &nbsp;&nbsp;|&nbsp;&nbsp;
            nuxt-link(to="/signup/health-facilities").white--text.font-14 Create my own Health Facility Website
        v-col(cols="10" align="center")
          div.d-flex.justify-center
            img(
              height="26"
              src="~/assets/images/MYCURE-logo-white.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            )
            p.white--text.font-14.ml-4.mt-1 &#169;{{new Date().getFullYear()}} All Rights Reserved.
</template>

<script>
export default {
  data () {
    this.feedbackLink = 'https://airtable.com/shrgkdR8ASEdbQ1Pa';
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    return {};
  },
};
</script>
