<template lang="pug">
  v-card(flat color="#fafafa" height="100%" rounded="xl")
    v-card-text.text-center
      img(
        :src="require(`~/assets/images/home/${wonder.image}.png`)"
        :width="$isMobile ? '60%' : '75%'"
        :alt="wonder.title"
      )
      br
      br
      h2(:class="wonderHeaderClasses").font-weight-bold.lh-title {{ wonder.title }}
      p(:class="wonderDescriptionClasses").mt-2 {{ wonder.description }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    wonder: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    wonderHeight () {
      if (this.$isWideScreen) return '400';
      if (this.$isRegularScreen) return '325';
      return '300';
    },
    wonderHeaderClasses () {
      return classBinder(this, {
        wide: ['font-m'],
        regular: ['font-s'],
      });
    },
    wonderDescriptionClasses () {
      return classBinder(this, {
        wide: ['font-s'],
      });
    },
  },
};
</script>
