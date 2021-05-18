<template lang="pug">
  v-row(justify="center")
    generic-panel(:row-bindings="{ justify: 'center' }")
      v-col(cols="12").text-center
        v-row(justify="center")
          v-col(sm="12" md="6" xl="7")
            h1(:class="headerClasses").mb-10 Make Healthcare Accessible to All
            p(:class="{ 'font-m' : !$isMobile, 'font-s' : $isMobile }").primary--text.font-weight-medium.mb-10 THE SEVEN WONDERS OF HEALTHCARE EMPOWERED BY MYCURE
      v-col(cols="12" md="3" xl="2" v-for="(wonder, key) in wonders" :key="key")
        wonder(:wonder="wonder")
      //-   //- v-col(v-if="!$isMobile" cols="12")
      //-     //- vue-slick-carousel(
      //-     //-   :arrows="false"
      //-     //-   :dots="false"
      //-     //-   infinite
      //-     //-   :slidesToShow="5"
      //-     //-   :slidesToScroll="1"
      //-     //-   autoplay
      //-     //-   :speed="2000"
      //-     //-   :autoplaySpeed="500"
      //-     //-   swipeToSlide
      //-     //- )
      //-     //-   div(v-for="(wonder, key) in wonders" :key="key")
      //-     //-     wonder(:wonder="wonder").ma-1
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import Wonder from './Wonder';
import GenericPanel from '~/components/generic/GenericPanel';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    Wonder,
    // VueSlickCarousel,
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
      // {
      //   title: 'Pharmacy',
      //   description: 'Make medicines available anytime, anywhere',
      //   comingSoon: true,
      //   image: 'Pharmacy',
      // },
      // {
      //   title: 'Hospitals',
      //   description: 'Take control of a more streamlined inpatient care',
      //   infoLink: 'hospitals',
      //   comingSoon: true,
      //   image: 'hospitals',
      // },
      // {
      //   title: 'Patient Relationship',
      //   description: 'Build continuity of care for your patients',
      //   infoLink: 'patients',
      //   comingSoon: true,
      //   image: 'PRM',
      // },
      // {
      //   title: 'Health IT',
      //   description: 'Compliance, security, and interoperability standards',
      //   infoLink: 'csi',
      //   image: 'security',
      // },
    ];
    return {};
  },
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-l'],
        regular: ['font-xl'],
        wide: ['font-2xl'],
      });
    },
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
