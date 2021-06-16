<template lang="pug">
  div
    div.bg-container
      picture-source(
        image="Doctor Foreground"
        image-file-extension=".webp"
        custom-path="doctor-website/"
        image-alt="Doctor Foreground"
      ).bg
      v-container.content
        v-row(justify="center").text-center
          v-col(v-if="patientsTotal <= 10 && patientsTotal > 0" cols="3" md="1")
            picture-source(
              image="Patient 1"
              image-file-extension=".webp"
              custom-path="doctor-website/"
              image-alt="Patient"
              image-width="75%"
            )
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    metrics: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    patientsTotal () {
      return this.metrics.patients || 0;
    },
  },
};
</script>

<style scoped>
.bg-container {
  min-height: 100%;
  width: 100vw;
  margin-top: -300px;
  position: relative;
}
.bg {
  width: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  overflow: hidden;
  position: relative;
}
.content {
  position: absolute;
  top: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>
