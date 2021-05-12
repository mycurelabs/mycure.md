<template lang="pug">
  v-card(flat color="#fafafa" :height="wonderHeight")
    v-card-text.text-center
      img(
        :src="require(`~/assets/images/home/${wonder.image}.png`)"
        width="75%"
        :alt="wonder.title"
      )
      br
      br
      h1(:class="wonderHeaderClasses") {{ wonder.title }}
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
      return '325';
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
