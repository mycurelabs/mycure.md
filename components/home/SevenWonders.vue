<template lang="pug">
  div
    div.container
      img(
        src="~/assets/images/home/Homepage USP v2B.png"
        alt="MYCURE Seven wonders of healthcare"
      ).background
      v-container.content.ml-n6
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").text-center.text-container
              v-row(justify="center")
                v-col(cols="12" md="7" xl="10")
                  h1(:class="headerClasses").mb-10 Make Healthcare Accessible to All
                  v-row(justify="center")
                    v-col(cols="12" md="10")
                      p(:class="{ 'font-m' : !$isMobile, 'font-s' : $isMobile }").primary--text.font-weight-bold.mb-10 THE SEVEN WONDERS OF HEALTHCARE EMPOWERED BY MYCURE
            v-col(cols="8" md="3" xl="3" v-for="(wonder, key) in wonders" :key="key")
              wonder(:wonder="wonder")
    //- div(v-else).mobile-container.ml-n3
    //-   img(
    //-     src="~/assets/images/home/Homepage USP.png"
    //-     alt="MYCURE Seven wonders of healthcare"
    //-     width="100%"
    //-   )
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
        mobile: ['font-m'],
        regular: ['font-xl'],
        wide: ['font-2xl'],
      });
    },
  },
};
</script>

<style scoped>
/* .bg {
  background-image: url('../../assets/images/home/Homepage USP v2B.png');
  background-size: stretch;
} */
.line-spacing-title {
  line-height: 1.25em;
}
.background {
  width: 100%;
  height: 950px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  object-fit: cover;
}
.container {
  width: 100vw;
  height: 900px;
}
.text-container {
  margin-bottom: 65px;
}
.mobile-container {
  width: 100vw;
}
.content {
  position: absolute;
  width: 100vw;
}

@media screen and (max-width: 952px) {
  .container {
    height: 1500px;
  }
  .background {
    height: 1550px;
  }
}
@media screen and (min-width: 1920px) {
  .text-container {
    margin-bottom: 90px;
  }
}
</style>
