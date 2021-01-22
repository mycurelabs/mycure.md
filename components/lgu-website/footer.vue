<template lang="pug">
  v-container(fluid).footer-dark
    v-container(v-if="!$isMobile")
      v-row(align="center" no-gutters)
        v-col(cols="7")
          span.call-number Copyright &copy; 2016 - {{ new Date().getFullYear() }}
            a(href="https://mycure.md" rel="noopener noreferrer")
              strong.primary--text &nbsp;MYCURE Inc.&nbsp;
          span.call-number All Rights Reserved.
        v-col(cols="5" align="end")
          template(v-for="(account, key) in socMed")
            a(:href="account.link" target="_blank" rel="noopener noreferrer")
              img(:src="require(`~/assets/images/${ account.icon }`)" height="35" :alt="account.name").pl-8
</template>

<script>
export default {
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
    return {};
  },
};
</script>

<style scoped>
.no-style-type {
  list-style-type: none;
  padding-left: 0;
}
.footer-header {
  font-size: 14px;
}
a {
  color: #aaaaaa;
}
a:link {
  color: #aaaaaa;
  text-decoration: none;
}
li {
  list-style: none;
}
.link {
  color: #aaaaaa;
}
.link:hover {
  color: #ffffff;
}
.center {
  padding: auto;
}
.feature-text {
  font-weight: bold;
  color: inherit;
}
.footer-dark {
  z-index: 5;
  background-color: #343a40 !important;
}
.call-number {
  color: #aaaaaa;
}
</style>
