<template lang="pug">
  generic-blue-bg
    v-container
      v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '100%'}").mb-n16
        generic-panel(:row-bindings="{ justify: 'center', align: 'center' }")
          v-col(cols="12").text-center.text-container
            v-row(justify="center" :class="{'wide-margin-top': $isWideScreen}").mb-5
              v-col(cols="12" md="9" xl="8")
                h1(:class="headerClasses").mb-2 Enterprise-Grade
                  br
                  | Clinic Management Solutions
                v-row(justify="center").mt-5
                  v-col(cols="12" xl="11")
                    p.mc-b1.mb-8.font-open-sans.white--text MYCURE is a modern practice management system specifically custom-built for multi-specialty clinics, diagnostic and health centers. Enjoy enterprise-grade features that even works online and offline - all at a fraction of the cost.
                signup-button(
                  depressed
                  class="rounded-md"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                  color="success"
                ).text-none
                  span.mc-btn1.white--text Get Started
            v-row(justify="center" v-if="!loading")
              v-col(v-if="!$isMobile" cols="12" xl="10")
                vue-slick-carousel(
                  autoplay
                  draggable
                  infinite
                  :slidesToShow="4",
                  :speed="1000"
                  @afterChange="(slideIndex) => currentSlide = slideIndex"
                )
                  template(slot="prevArrow")
                    v-btn(icon).ml-n4.custom-btn
                      v-icon(:large="!$isWideScreen" :x-large="$isWideScreen" color="white") {{ mdiChevronLeftCircle }}
                  template(slot="nextArrow")
                    v-btn(icon).mr-n4.custom-btn
                      v-icon(:large="!$isWideScreen" :x-large="$isWideScreen" color="white") {{ mdiChevronRightCircle }}
                  template(#customPaging="page")
                    v-icon(color="white" small).mt-5 {{ (page === currentSlide) ? mdiCircle : mdiCircleOutline }}
                  div(v-for="(wonder,key) in wonders" :key="key")
                    wonder(:wonder="wonder" :loading="loading").mx-2
              v-col(v-else cols="12" sm="8" md="10")
                carousel(
                  paginationColor="#f0f0f0"
                  autoplay
                  loop
                  navigationEnabled
                  paginationEnabled
                  :per-page="1"
                  :navigationClickTargetSize="50"
                )
                  slide(
                    v-for="(wonder,index) in wonders"
                    :key="index"
                    :data-index="index+1"
                  ).pa-2
                    wonder(:wonder="wonder" :loading="loading")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import { mdiChevronRightCircle, mdiChevronLeftCircle, mdiCircle, mdiCircleOutline } from '@mdi/js';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Wonder from './Wonder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
// import canUseWebp from '~/utils/can-use-webp';

export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
    Wonder,
    VueSlickCarousel,
    GenericBlueBg,
  },
  props: {
    // Can be triggered by consuming component for loading purposes
    loading: {
      type: Boolean,
      default: true,
    },
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
        title: 'Hospital OPD',
        description: 'Take control of a more streamlined inpatient care',
        infoLink: 'clinics/hospital',
        comingSoon: true,
        image: 'hospitals',
      },
      {
        title: 'Skin Clinics',
        description: 'Skin and Aesthetic Clinic Management System for a Flawless Experience',
        infoLink: 'clinics/skin',
        comingSoon: true,
        image: 'skin',
        imageWidth: '170px',
      },
      {
        title: 'Dental Clinics',
        description: 'An Advanced Clinic Management System for Dentists',
        infoLink: 'clinics/dental',
        comingSoon: true,
        image: 'dental',
        imageWidth: '150px',
      },
      {
        title: 'Corporate Clinics',
        description: 'Save Your Corporate Clinic from Chaos',
        infoLink: 'clinics/corporate',
        comingSoon: true,
        image: 'corporate',
        imageWidth: '140px',
      },
      {
        title: 'Diagnostics',
        description: 'Convert online booking to online results',
        infoLink: 'diagnostics',
        image: 'Diagnostics',
      },
      {
        title: 'OFW Clinics',
        description: 'The first and only medical software for OFW clinics',
        infoLink: 'diagnostics/ofw',
        comingSoon: true,
        image: 'ofw',
        imageWidth: '190px',
      },
      {
        title: 'Mobile Labs',
        description: 'The Simplest Clinic Management System for Mobile Labs',
        infoLink: 'diagnostics/mobile-labs',
        comingSoon: true,
        image: 'mobile-labs',
        imageWidth: '200px',
      },
      {
        title: 'Booking',
        description: 'Book and schedule appointments efficiently',
        infoLink: 'booking',
        image: 'Booking',
      },
      // TODO: bring back
      // {
      //   title: 'Telehealth',
      //   description: 'Everything you need to build your virtual practice',
      //   infoLink: 'telehealth',
      //   image: 'Telehealth',
      // },
      // {
      //   title: 'Pharmacy',
      //   description: 'Make medicines available anytime, anywhere',
      //   comingSoon: true,
      //   image: 'Pharmacy',
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
    this.headerClasses = ['mc-h1', 'lh-title', 'white--text'];
    return {
      isWebp: false,
      // Icons
      mdiChevronRightCircle,
      mdiChevronLeftCircle,
      mdiCircle,
      mdiCircleOutline,
      currentSlide: 0,
    };
  },
  // async mounted () {
  //   // TODO: Seems to not work correctly in homepage
  //   this.isWebp = await canUseWebp();
  // },
};
</script>

<style scoped>
.line-spacing-title {
  line-height: 1.25em;
}
.left-center {
  position: absolute;
  top: 10%;
  left: 0;
  z-index: 2;
}
.right-center {
  position: absolute;
  bottom: 10%;
  right: 0;
  z-index: 2;
}
.container {
  width: 100vw;
}
.margin-desktop {
  margin-bottom: 150px;
}
.wide-margin-top {
  margin-top: 30px;
}
.text-container {
  margin-bottom: 65px;
}
.video-bg {
  /* height: 1000px; */
  background-image: url('~/assets/images/home/homepage-usp-bg.png');
  background-position: left top;
  background-size: 100%;
}
.video-bg-mobile {
  /* height: 1000px; */
  background-image: url('~/assets/images/home/homepage-usp-bg-mobile.png');
  background-position: center bottom;
}
.custom-btn::before {
    color: transparent
}
.custom-btn:hover {
    color: grey;
}
.slick-dots >>> .slick-active {
  color: red;
}

.holiday-bg-png {
  background-size: cover;
  background-image: url('../../assets/images/special/Homepage-herobg-std.png');
}

.holiday-bg-webp {
  background-size: cover;
  background-image: url('../../assets/images/special/Homepage-herobg-std.webp');
}

@media screen and (min-width: 1920px) {
  .holiday-bg-png {
    background-image: url('../../assets/images/special/Homepage-herobg-wid.png');
  }
  .holiday-bg-webp {
    background-image: url('../../assets/images/special/Homepage-herobg-wid.webp');
  }
}
</style>
