<template lang="pug">
  div
    client-only
      generic-media-panel(
        content-align-right
        align-left-column="start"
        :header="header"
        :descriptions="descriptions"
        :web-image="panelImage"
        :custom-image-path="customPath"
        hide-image-mobile
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
    this.features = ['A', 'B', 'C'];
    this.header = 'Designed for doctors, by doctors.';
    this.descriptions = [
      'Record full medical history, vitals, and physical exam records according to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.',
    ];
    this.panelImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr.png';
    this.customPath = 'features/';
    return {};
  },
};
</script>

<style scoped>
.panel-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.add-spacing {
  padding-top: 32px;
}
</style>
