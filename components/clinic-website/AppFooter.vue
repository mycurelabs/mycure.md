<template lang="pug">
  v-footer(color="white")
    v-container.my-3
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-col(cols="12").pa-0
            v-row(align="start" no-gutters width="100%")
              v-col(
                cols="12"
                md="7"
              ).text-center
                v-row(:justify="$isMobile ? 'center' : 'start'").pa-3
                  p.mt-1.mr-2 #[b Powered by]
                  img(
                    src="~/assets/images/MYCURE-logo.png"
                    width="120px"
                    height="34.46px"
                    alt="MYCURE logo"
                  ).ml-1
          v-col(v-if="!$isMobile" cols="12").pa-0
            v-row(no-gutters).mb-16
              v-col
                div(width="100%")
                  v-btn(
                    to="/signup/health-facilities?type=clinic"
                    text
                  ).text-none.px-0
                    span(style="color: #72727D") Create my own Clinic website
                div(width="100%")
                  v-btn(
                    to="/signup/health-facilities?type=doctor"
                    text
                  ).text-none.px-0
                    span(style="color: #72727D") Create my own MD website
              v-spacer
              v-col
                div(width="100%")
                  v-btn(
                    to="/directory/results?searchMode=organization"
                    text
                  ).text-none.px-2
                    span(style="color: #72727D") Discover more Clinics
                div(width="100%")
                  v-btn(
                    to="/directory/results?searchMode=account"
                    text
                  ).text-none.px-2
                    span(style="color: #72727D") Find more Doctors
              v-btn(
                text
                href="https://airtable.com/shrgkdR8ASEdbQ1Pa"
                target="_blank"
                rel="noopener noreferrer"
                @click="toggleChat"
              ).text-none.px-2
                span(style="color: #72727D") Send us your feedback
          v-col(v-if="!$isMobile" cols="12").pa-0
            v-row(align="center" no-gutters).mb-3.mt-8
              v-col(cols="12" md="9")
                v-row(align="center").pa-3
                  div
                    span Copyright &copy; {{ new Date().getFullYear() }}
                    span #[br(v-if="$isMobile")] All Rights Reserved.
                  v-spacer
                  v-btn(
                    to="/privacy-policy"
                    text
                  ).text-none
                    span(style="color: #72727D") Privacy Policy
                  v-btn(
                    to="/terms"
                    text
                  ).text-none
                    span(style="color: #72727D") Terms of Use
              v-col(
                :class="{ 'order-first text-center ' : $isMobile, 'text-right' : !$isMobile }"
                cols="12"
                md="3"
              )
                template(v-for="(account, key) in socMed")
                  a(:href="account.link" target="_blank" rel="noopener noreferrer")
                    img(:src="require(`~/assets/images/${ account.icon }`)" width="25" height="25" :alt="account.name" :class="$vuetify.breakpoint.width < 1250 ? 'mx-1' : 'mx-2'")
          v-row(v-else justify="center").mt-4
            v-col(v-for="(link, key) in links" :key="key" cols="12").py-1.text-center
              v-btn(
                v-if="!link.external"
                :to="link.to"
                text
              ).text-none.px-0
                span(style="color: #72727D") {{ link.text }}
              v-btn(
                v-else
                text
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                @click="toggleChat"
              ).text-none.px-0
                span(style="color: #72727D") {{ link.text }}
            v-col(cols="12").text-center
              v-row(justify="center").pa-2
                a(v-for="(account, key) in socMed" :href="account.link" target="_blank" rel="noopener noreferrer")
                  img(:src="require(`~/assets/images/${ account.icon }`)" width="25" height="25" :alt="account.name" :class="$vuetify.breakpoint.width < 1250 ? 'mx-1' : 'mx-2'")
            v-col(cols="12").text-center
              div
                span Copyright &copy; {{ new Date().getFullYear() }}
                span #[br(v-if="$isMobile")] All Rights Reserved.
</template>

<script>
export default {
  components: {
    GenericPanel: () => import('~/components/generic/GenericPanel'),
  },
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
    this.links = [
      {
        to: '/signup/health-facilities?type=clinic',
        text: 'Create my own Clinic website',
        external: false,
      },
      {
        to: '/signup/health-facilities?type=doctor',
        text: 'Create my own MD website',
        external: false,
      },
      {
        to: '/directory/results?searchMode=account',
        text: 'Discover more Clinics',
        external: false,
      },
      {
        to: '/directory/results?searchMode=account',
        text: 'Find more Doctors',
        external: false,
      },
      {
        to: 'https://airtable.com/shrgkdR8ASEdbQ1Pa',
        text: 'Send us your feedback',
        external: true,
      },
      {
        to: '/privacy-policy',
        text: 'Privacy Policy',
        external: false,
      },
      {
        to: '/terms',
        text: 'Terms of Use',
        external: false,
      },
    ];
    return {};
  },
  methods: {
    toggleChat () {
      window.Desku('show');
    },
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
