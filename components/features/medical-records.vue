<template lang="pug">
  div
    div(v-if="!$isMobile").pt-10.panel-container
      v-container
        v-row(justify="center").text-center
          strong.font-21.primary--text MEDICAL RECORDS
        v-row(justify="center").add-spacing.text-center
          strong.font-40.font-work-sans Designed for doctors, by doctors.
        v-row(justify="center").add-spacing
          v-col(cols="7" align-self="center").text-center
            span.font-21 Record full medical history, vitals, and physical exam records according to SOAP charting.&nbsp;
              | Eliminate the haste of scribbling with Rx printing, ICD-10 database, multiple image uploads, and more.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        v-row(justify="center").add-spacing
          carousel(
            :per-page="1"
            :autoplay="true"
            :loop="true"
            paginationActiveColor="white"
            paginationColor="grey"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          ).text-center
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
              img(:src="require(`~/assets/images/features/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" width="70%")
    div(v-else).panel-container.pt-5
      v-container
        v-row(justify="center")
          strong.font-16.primary--text MEDICAL RECORDS
        br
        br
        v-row(justify="center").mx-2
          p.font-30.font-weight-bold.text-center.font-work-sans Designed for doctors, by doctors.
        br
        v-row(justify="center").mx-2
          p.font-18.text-center Record full medical history, vitals, and physical exam records according
            |  to SOAP charting. Eliminate the haste of scribbling with Rx printing, ICD-10
            | database, multiple image uploads, and more.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
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
          )
            slide(
              v-for="(feature,index) in features"
              :key="index"
              :data-index="index+1"
            ).pa-1
              v-row(justify="center")
                img(:src="require(`~/assets/images/features/mycure-web-features-mockup-01-${feature}.png`)" alt="Medical records" height="200px")
</template>

<script>
export default {
  data () {
    this.features = ['A', 'B', 'C'];
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
