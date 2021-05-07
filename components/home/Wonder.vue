<template lang="pug">
  v-card(flat color="#fafafa" :height="wonderHeight")
    v-card-text.text-center
      img(
        :src="require(`~/assets/images/home/${wonder.image}.png`)"
        width="80%"
        :alt="wonder.title"
      )
      br
      br
      h1.font-s {{ wonder.title }}
      p {{ wonder.description }}
</template>

<script>
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
  },
};
</script>
