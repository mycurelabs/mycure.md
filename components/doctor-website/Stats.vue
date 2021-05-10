<template lang="pug">
  div(:class="{ 'vid-container': !$isMobile }")
    v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '500px' }")
      v-col(cols="12" md="10")
        v-row(justify="center")
          v-col(
            v-for="(metric, key) in metrics"
            :key="key"
            cols="4"
            md="2"
          )
            v-card(color="#fafafa" height="100%" flat)
              v-card-text.text-center
                picture-source(
                  extension-exclusive
                  :image="metric.icon"
                  :image-alt="metric.title"
                  custom-path="doctor-website/"
                  image-file-extension=".png"
                  :image-width="$isMobile ? '50%' : '80%'"
                )
                h1.mt-3 {{ metricData[metric.value] }}
                br
                h3 {{ metric.title }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    this.metrics = [
      {
        icon: 'Lives',
        title: 'Lives Saved',
        value: 'patients',
      },
      {
        icon: 'Records',
        title: 'Medical Records',
        value: 'records',
      },
      {
        icon: 'Views',
        title: 'Page Views',
        value: 'websiteVisits',
      },
    ];
    return {};
  },
  computed: {
    metricData () {
      return {
        patients: this.data.patients,
        records: this.data.records,
        websiteVisits: this.data.websiteVisits,
      };
    },
  },
};
</script>

<style scoped>
.vid-container {
  height: 475px;
  width: 100vw;
  background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
  background-position: center center;
  background-size: 100% 100%;
}
</style>
