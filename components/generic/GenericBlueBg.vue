<template lang="pug">
  div.mx-n3.main-container
    div
      //- img(
      //-   src="~/assets/images/commons/blue-gradient-bg.png"
      //-   alt="blue gradient background"
      //-   :style="backgroundStyle"
      //- )
      //- img(
      //-   src="~/assets/images/commons/dots-left.png"
      //-   alt="dots gradient"
      //- ).left-center
      //- img(
      //-   src="~/assets/images/commons/dots-right.png"
      //-   alt="dots gradient"
      //- ).right-center
      picture-source(
        image-file-extension="png"
        image="blue-gradient-bg"
        image-alt="blue gradient background"
        :image-styles="backgroundStyle"
        :extension-exclusive="true"
        custom-path="commons/"
      )
      picture-source(
        image-file-extension="png"
        image="dots-left"
        image-alt="dots gradient"
        :image-styles="backgroundStyle"
        :extension-exclusive="true"
        custom-path="commons/"
      ).left-center
      picture-source(
        image-file-extension="png"
        image="dots-right"
        image-alt="dots gradient"
        :image-styles="backgroundStyle"
        :extension-exclusive="true"
        custom-path="commons/"
      ).right-center
    div.content
      slot(name="default")
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    return {
      backgroundStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
        objectFit: 'cover',
      },
    };
  },
};
</script>

<style scoped>
.main-container {
  position: relative;
}
.content {
  position: relative;
  z-index: 3;
}
.left-center {
  position: absolute;
  top: 10%;
  left: 0;
  z-index: 2;
}
.right-center {
  position: absolute;
  bottom: 10%;
  right: 0;
  z-index: 2;
}
</style>
