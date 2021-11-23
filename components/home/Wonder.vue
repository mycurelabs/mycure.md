<template lang="pug">
  v-hover(v-slot="{ hover }")
    v-card(
      color="#fafafa"
      rounded="xl"
      :height="cardHeight"
      :to="wonder.infoLink"
      :elevation="hover ? 16 : 5"
      :class="cardPadding"
    ).ma-1
      v-card-text.text-center
        picture-source(
          :image="wonder.image"
          :image-width="( $isMobile ? '107px' : '115px')"
          :image-height="( $isMobile ? '145px' : '165px')"
          :image-alt="wonder.title"
          custom-path="home/"
          extension-exclusive
          image-file-extension=".png"
        )
        //-   :image-file-extension="$useWebp? '.webp' : '.png'"
        //- )
        br
        br
        h2.mc-h4.black--text {{ wonder.title }}
        p.mc-b4.mt-2 {{ wonder.description }}
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
    cardHeight () {
      if (this.$isWideScreen) return '400';
      if (this.wLG) return '350';
      if (this.wSM) return '350';
      return '380';
    },
    cardPadding () {
      if (this.$isWideScreen) return 'pt-6';
      if (this.wLG) return 'pt-6';
      if (this.wSM) return 'pt-6';
      return 'pt-3';
    },
  },
};
</script>
