<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '70vh' }"
    )
      v-col(cols="8" md="5" offset-md="1" :class="{ 'order-last' : !$isMobile }")
        picture-source(
          image="MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr"
          image-file-extension=".webp"
          image-alt="Patient List"
          custom-path="features/"
        )
      v-col(cols="11" md="4" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").lh-title Simple and powerful
        p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").grey--text Say goodbye to paperwork and hello to an easy, compact database.
        p.font-xs.font-open-sans MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
          | &nbsp;to another -- you probably won't even consider using pen and paper ever again.
        v-row(dense v-for="(service, key) in services" :key="key")
          v-col(col="4")
            nuxt-link(:to="{ name: service.route }").primary--text.service-link.font-xs.font-open-sans
              v-icon(small left color="primary") mdi-chevron-right
              span {{ service.text }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.services = [
      {
        text: 'For Physicians',
        route: 'doctors-clinics',
      },
      {
        text: 'For Clinics',
        route: 'clinics',
      },
      // - TODO: Bring back when page is visible
      // {
      //   text: 'For Hospitals',
      //   route: 'hospitals',
      // },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}

.service-link {
  text-decoration: none;
}
</style>
