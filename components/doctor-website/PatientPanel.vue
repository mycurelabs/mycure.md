<template lang="pug">
  div.red
    div.bg-container
      picture-source(
        image="Doctor Foreground"
        image-file-extension=".webp"
        custom-path="doctor-website/"
        image-alt="Doctor Foreground"
      ).bg
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
};
</script>

<style scoped>
.bg-container {
  min-height: 100%;
  width: 100vw;
  margin-top: -300px;
}
.bg {
  width: 100%;
  left: 0;
  object-fit: cover;
  overflow: hidden;
  position: relative;
}
</style>
