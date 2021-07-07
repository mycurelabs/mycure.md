<template lang="pug">
  div.footer-gray
    v-container
      v-row(justify="center" align="center" no-gutters)
        v-col.text-center
          img(
            src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
            alt="MYCURE Logo"
            width="150"
          ).mt-4
      v-row(justify="center" align="center")
        v-col(
          :class="{ 'order-first' : $isMobile }"
          cols="12"
          md="6"
        ).text-center
          template(v-for="(account, key) in socMed")
            a(:href="account.link" target="_blank" rel="noopener noreferrer")
              img(:src="require(`~/assets/images/${ account.icon }`)" height="35" :alt="account.name").ma-4
      hr
      v-row(align="center" no-gutters)
        v-col(
          :class="{ 'text-center' : $isMobile }"
          cols="12"
          md="5"
        )
          strong.call-number.grey--text Copyright &copy; {{ new Date().getFullYear() }}
            a(href="https://mycure.md" rel="noopener noreferrer").grey--text &nbsp;MYCURE Inc.&nbsp;
          strong.call-number.grey--text #[br(v-if="$isMobile")] All Rights Reserved.
        v-spacer
        v-col
        v-btn(
          to="/terms"
          color="primary"
          text
          :block="$isMobile"
        ).text-none.font-16.letter-spacing-normal Terms of Use
        v-btn(
          to="/privacy-policy"
          color="primary"
          text
          :block="$isMobile"

        ).text-none.font-16.letter-spacing-normal Privacy Policy
        v-btn(
          color="primary"
          text
          :block="$isMobile"
          href="http://culture.mycure.md/"
          rel="noreferrer noopener"
        ).text-none.font-16.letter-spacing-normal Careers
        v-btn(
          color="primary"
          text
          :block="$isMobile"
          href="https://blog.mycure.md/"
          rel="noreferrer noopener"
        ).text-none.font-16.letter-spacing-normal Blog
</template>

<script>
export default {
  data () {
    return {
      socMed: [
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
      ],
    };
  },
};
</script>

<style scoped>
.footer-gray {
  background-color: #f0f0f0 !important;
}
a {
  text-decoration: none !important;
}

.v-expansion-panel-header__icon i{
  color: #009fdf;
}
</style>
