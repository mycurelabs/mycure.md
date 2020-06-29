<template lang="pug">
  v-container(fluid :class="{ 'py-12': !$isMobile }").primary
    v-carousel(:height="$isMobile ? '250' : '300'" show-arrows-on-hover hide-delimiters)
      v-carousel-item(v-for="(slide, i) in slides" :key="i")
        v-row(align="center" justify="center" class="fill-height").text-center
          div(:class="containerClass")
            h3(:class="headerClasses").mb-2 {{ slide[0] }}
            h1(:class="contentClasses").mb-2.white--text {{ slide[1] }}
            p(:class="sourceClasses").white--text {{ slide[2] }}
</template>

<script>
export default {
  data () {
    return {
      slides: [
        [
          'MYCURE 1',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 2',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 3',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 4',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 5',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
      ],
    };
  },
  computed: {
    containerClass () {
      // return !this.$isMobile ? ['web-container'] : ['mobile-container'];
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return ['mobile-container'];
        case 'sm': return ['mobile-container'];
        case 'md': return ['tablet-container'];
      }
      return ['web-container'];
    },
    headerClasses () {
      return !this.$isMobile ? ['font-32'] : ['font-24'];
    },
    contentClasses () {
      return !this.$isMobile ? ['font-56'] : ['font-30'];
    },
    sourceClasses () {
      return !this.$isMobile ? ['font-20'] : ['font-16'];
    },
  },
};
</script>

<style scoped>
.web-container {
  width: 60%;
}
.tablet-container {
  width: 75%;
}
.mobile-container {
  width: 90%;
}
</style>
