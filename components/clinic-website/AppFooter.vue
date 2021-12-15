<template lang="pug">
  v-footer(dark color="#343A40" :class="$isMobile ? 'pb-mobile' : ''").pa-5
    v-container
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
            v-row(:class="{'flex-column text-center': $isMobile}").d-md-flex
              v-col.font-14
                div(:class="{'text-center justify-center': $isMobile}").d-flex
                  p.ml-5.mt-1 #[b Powered by]
                  img(
                    height="30"
                    src="~/assets/images/mycure-footer-logo.png"
                    alt="MYCURE logo"
                    @click="$nuxt.$router.push({ name: 'index' })"
                  ).ml-2
                p(v-if="!$isMobile").ml-5 Copyright &#169;{{new Date().getFullYear()}} All Rights Reserved.
              v-col(:class="{'flex-column text-center': $isMobile}").d-md-flex
                nuxt-link(to="/terms").font-14.white--text.text-center Terms of Use
                span(v-if="!$isMobile") &nbsp;|&nbsp;
                br(v-else)
                nuxt-link(to="/privacy-policy").font-14.white--text.text-center Privacy Policy
                span(v-if="!$isMobile") &nbsp;|&nbsp;
                br(v-else)
                a(
                  :href="feedbackLink"
                  target="_blank"
                  rel="noopener noreferrer"
                ).font-14.white--text.text-center Send us your feedback
                template(v-if="$isMobile")
                  br
                  p.ml-5.mt-5 Copyright &#169;{{new Date().getFullYear()}} All Rights Reserved.
              v-col(v-if="!$isMobile").d-flex.text-center
                nuxt-link(to="/directory/results?searchMode=organization").font-14 See more Health Facilities
                | &nbsp;|&nbsp;
                nuxt-link(to="/signup/health-facilities?type=clinic").font-14 Create my own Health Facility Website
</template>

<script>
import {
  mdiLinkedin,
  mdiFacebook,
  mdiTwitter,
  mdiEmail,
} from '@mdi/js';
export default {
  components: {
    GenericPanel: () => import('~/components/generic/GenericPanel'),
  },
  data () {
    this.feedbackLink = 'https://airtable.com/shrgkdR8ASEdbQ1Pa';
    this.icons = [
      { icon: mdiFacebook, link: 'https://facebook.com/' },
      { icon: mdiTwitter, link: 'https://twitter.com/' },
      { icon: mdiEmail, link: 'mailto:' },
      { icon: mdiLinkedin, link: 'https://www.linkedin.com/' },
    ];
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.pb-mobile {
  padding-bottom: 80px !important;
}
</style>
