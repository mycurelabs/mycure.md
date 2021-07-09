<template lang="pug">
  v-hover(v-slot="{ hover }")
    v-card(
      color="#fafafa"
      height="100%"
      rounded="xl"
      :to="wonder.infoLink"
      :elevation="hover ? 16 : 5"
    )
      v-card-text.text-center
        picture-source(
          :image="wonder.image"
          :image-width="imageWidth"
          :image-alt="wonder.title"
          custom-path="home/"
          image-file-extension=".webp"
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
    imageWidth () {
      if (this.$isMobile) return '60%';
      if (this.$isRegularScreen) return '65%';
      return '50%';
    },
  },
};
</script>
