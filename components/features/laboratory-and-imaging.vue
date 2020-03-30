<template lang="pug">
  div
    client-only
      div(v-if="!isMobile").lab-container.py-10
        v-container
          v-row(justify="center").text-center
            strong.font-21.primary--text LABORATORY &amp; IMAGING
          v-row(justify="center").add-spacing
            h1.font-40.text-center.font-work-sans.pre-white-space {{ primaryDescription }}
          v-row(justify="center").add-spacing
            span.font-21.text-center MYCURE can communicate with modern diagnostic machines through
              br
              | HL7 interfacing and PACS configurations.&nbsp;
              br
              br
              | Doctors can view DICOM images remotely or within clinic premises, while&nbsp;
              br
              | patients can view their lab & imaging results through an online portal.
          v-row(justify="center").add-spacing
            img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
          v-row(justify="center").add-spacing
            carousel(
              :key="isMobile"
              :per-page="1"
              :autoplay="true"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            ).text-center
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
                img(:src="require(`~/assets/images/features/mycure-web-features-mockup-04-${feature}.png`)" alt="Clinic Laboratory and Imaging" width="75%")
      div(v-else).lab-container.pt-5
        v-container
          v-row(justify="center")
            strong.font-16.primary--text LABORATORY &amp; IMAGING
          br
          br
          v-row(justify="center")
            p.font-weight-bold.font-30.text-center.font-work-sans Record and retrieve
              br
              | diagnostic results
              br
              | right where you
              br
              | need them.
          br
          v-row(justify="center").mx-2
            p.font-18.text-center MYCURE can communicate with modern diagnostic machines through HL7 interfacing and PACS configurations.
              br
              br
              | Doctors can view DICOM images remotely or within clinic premises, while patients can view their lab & imaging results through an online portal.
          v-row(justify="center").add-spacing
            img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png")
          br
          br
          v-row(justify="center")
            carousel(
              :per-page="1"
              autoplay
              loop
              adjustableHeight
              paginationActiveColor="#3498db"
              paginationColor="#808080"
            ).pa-1
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                v-row(justify="center")
                  img(v-lazy="require(`~/assets/images/features/mycure-web-features-mockup-04-${feature}.png`)" alt="Clinic Laboratory and Imaging" height="200px")
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    this.features = ['A', 'B'];
    return {};
  },
  computed: {
    primaryDescription () {
      const desc = 'Record and retrieve diagnostic results right where you need them.';
      return this.$isMobile ? desc : parseTextWithNewLine(desc, ['results']);
    },
  },
};
</script>

<style scoped>
.lab-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.add-spacing {
  padding-top: 32px;
}
</style>
