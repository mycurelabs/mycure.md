<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(align-self="center" cols="12" md="5")
        h1.pre-white-space.font-30.lh-title.pb-3.font-weight-light {{TAKE_PRACTICE_ONLINE.header}}
        br
        p.text-justify.font-16.mt-3.font-gray {{TAKE_PRACTICE_ONLINE.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4.get-started-btn
          strong.text-capitalize.primary--text {{TAKE_PRACTICE_ONLINE.btnTxt}}
          v-icon.primary--text {{TAKE_PRACTICE_ONLINE.btnIcon}}
      v-col(align-self="center" cols="12" md="6").panel-image
        picture-source(
          custom-path="doctors-clinics/"
          :image="panelMainImage"
          image-alt="Take your practice online"
          image-file-extension=".webp"
        )
</template>

<script>
// constants
import { TAKE_PRACTICE_ONLINE } from '../doctors-clinics-content';
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: { PictureSource },
  data () {
    this.TAKE_PRACTICE_ONLINE = TAKE_PRACTICE_ONLINE;
    this.panelMainImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice';
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
@media screen and (min-width: 1024px) {
  .panel-image {
    margin-left: 4%;
  }
}
</style>
