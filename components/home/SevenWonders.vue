<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '300px' : '325px' }"
      :class="{ 'pt-10': $isMobile }"
    )
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Make Healthcare Accessible to All
        p(:class="{ 'font-m' : !$isMobile, 'font-xs' : $isMobile }").grey--text THE&nbsp;
          strong.primary--text SEVEN WONDERS&nbsp;
          span.grey--text OF HEALTHCARE
          br
          | EMPOWERED BY&nbsp;
          strong.primary--text MYCURE
      v-col(cols="12" md="4")
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12" md="10")
        vue-slick-carousel(
          :arrows="false"
          :dots="false"
          infinite
          :slidesToShow="4"
          :slidesToScroll="1"
          autoplay
          :speed="2000"
          :autoplaySpeed="500"
        )
          div(v-for="(wonder, key) in wonders" :key="key")
            wonder(:wonder="wonder").ma-1
      v-row(v-else justify="center")
        v-col(cols="6" v-for="(wonder, key) in wonders" :key="key")
          wonder(:wonder="wonder")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import Wonder from './Wonder';
export default {
  components: {
    Wonder,
    VueSlickCarousel,
  },
  data () {
    this.wonders = [
      {
        title: 'Physicians',
        description: 'Easily create digital medical records',
        infoLink: 'doctors-clinics',
        image: 'Doctor',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
        infoLink: 'clinics',
        image: 'Outpatient',
      },
      {
        title: 'Diagnostics',
        description: 'Convert online booking to online results',
        infoLink: 'diagnostics',
        image: 'diagnostic',
      },
      {
        title: 'Pharmacy',
        description: 'Make medicines available anytime, anywhere',
        comingSoon: true,
        image: 'Pharmacy',
      },
      {
        title: 'Hospitals',
        description: 'Take control of a more streamlined inpatient care',
        infoLink: 'hospitals',
        comingSoon: true,
        image: 'hospitals',
      },
      {
        title: 'Patient Relationship',
        description: 'Build continuity of care for your patients.',
        infoLink: 'patients',
        comingSoon: true,
        image: 'PRM',
      },
      {
        title: 'Compliance, security, interoperability',
        description: 'Implement health international health IT standards',
        infoLink: 'csi',
        image: 'security',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 50px;
}
.line-spacing-title {
  line-height: 1.25em;
}
</style>
