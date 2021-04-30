<template lang="pug">
  v-card(flat color="#fafafa" height="100%")
    v-card-text.text-center
      picture-source(
        :image="wonder.image"
        image-file-extension=".png"
        extension-exclusive
        custom-path="home/"
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
};
</script>
