<template lang="pug">
  //- TODO: used on clinic website; can be used on doctor directory;
  generic-container.my-10.text-center
      p(:class="{ 'd-inline-block mr-10': !$isMobile, 'mb-4': $isMobile }").mb-1 {{social.title}}
      template(v-for="(soc, key) in social.icons")
        a(
          :href="soc.link"
          target="_blank"
          rel="noopener noreferrer"
        ).pr-4
          v-icon.font-30.primary--text {{soc.icon}}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  props: {
    social: {
      type: Object,
      default: () => ({
        title: '',
        icons: [
          { icon: 'mdi-facebook', link: 'https://facebook.com/' },
          { icon: 'mdi-twitter', link: 'https://twitter.com/' },
          { icon: 'mdi-email', link: 'mailto:' },
          { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
        ],
      }),
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
