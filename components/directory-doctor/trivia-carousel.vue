<template lang="pug">
  v-container(fluid :class="{ 'py-12': !$isMobile }").primary
    v-row(justify="center" align="center" no-gutters)
      v-col(cols="12" sm="12" md="12" lg="10" xl="8")
        v-carousel(:height="$isMobile ? '250' : '300'" show-arrows-on-hover hide-delimiters)
          v-carousel-item(v-for="(slide, i) in slideContent" :key="i")
            v-row(align="center" justify="center" class="fill-height").text-center
              div(:class="containerClass")
                h3(:class="headerClasses").mb-2 {{ slide.header }}
                h1(:class="contentClasses").mb-2.white--text {{ slide.content }}
                p(:class="sourceClasses").white--text {{ slide.source }}
</template>

<script>
export default {
  props: {
    slideContent: {
      type: Array,
      default: () => ([]),
    },
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
