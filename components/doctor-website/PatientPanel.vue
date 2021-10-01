<template lang="pug">
  div
    div.bg-container
      picture-source(
        image="Doctor Website - Foreground Hills and Clinics"
        :image-file-extension="$useWebp? '.webp' : '.png'"
        custom-path="doctor-website/"
        image-alt="Clinic in the middle of hills artwork"
      ).bg
      v-container.content
        v-row(justify="center").text-center
          //- TODO: Refactoring needed in creatives side
          //- v-col(v-if="patientsTotal <= 10 && patientsTotal > 0" cols="3" md="1")
          //-   picture-source(
          //-     image="Patient 1"
          //-     :image-file-extension="$useWebp? '.webp' : '.png'"
          //-     custom-path="doctor-website/"
          //-     image-alt="Patient vector art"
          //-     image-width="75%"
          //-   )
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
  margin-top: -450px;
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

@media screen and (max-width: 700px) {
  .bg-container {
    margin-top: -300px;
  }
}
</style>
