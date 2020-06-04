<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        align-left-column="start"
        :header="header"
        :descriptions="descriptions"
        :web-image="mediaImage"
        :custom-image-path="customPath"
        hide-image-mobile
      )
        div(slot="additional-content")
          v-btn(text @click="onGetStarted").text-none.get-started-btn
            strong.primary--text Get Started
            v-icon.primary--text mdi-arrow-right
      //- Bottom images
      v-container(v-if="!$isMobile")
        v-row
          v-col(cols="12" md="5")
            img(
              v-lazy="leftBottomImage"
              alt="Print prescription"
              width="100%"
            )
          v-col(cols="12" md="7")
            img(
              v-lazy="rightBottomImage"
              alt="Charting"
              width="100%"
            )
      //- div(v-else).panel-container.pt-5
      //-     v-row(justify="center").mx-2
      //-       p.font-18.text-center Record full medical history, vitals, and physical exam records according
      //-         |  to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10
      //-         | database, multiple image uploads, and more.
      //-     v-row(justify="center").add-spacing
      //-       img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
      //-     br
      //-     br
      //-     v-row(justify="center")
      //-       carousel(
      //-         :per-page="1"
      //-         autoplay
      //-         loop
      //-         adjustableHeight
      //-         paginationActiveColor="#3498db"
      //-         paginationColor="#808080"
      //-       )
      //-         slide(
      //-           v-for="(feature,index) in features"
      //-           :key="index"
      //-           :data-index="index+1"
      //-         ).pa-1
      //-           v-row(justify="center")
      //-             img(v-lazy="require(`~/assets/images/features/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" height="200px")
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.header = 'Designed for doctors, by doctors.';
    this.descriptions = [
      'Record full medical history, vitals, and physical exam records according to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.',
    ];
    this.panelImages = [
      'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription.png',
      'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting.png',
    ];
    this.customPath = 'features/';
    return {};
  },
  computed: {
    mediaImage () {
      return this.panelImages[0];
    },
    leftBottomImage () {
      return require(`~/assets/images/features/${this.panelImages[1]}`);
    },
    rightBottomImage () {
      return require(`~/assets/images/features/${this.panelImages[2]}`);
    },
  },
  methods: {
    onGetStarted () {
      // TODO: Go to signup
    },
  },
};
</script>

<style scoped>
.get-started-btn {
  margin-left: -3%;
}
</style>
