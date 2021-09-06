<template lang="pug">
  div.mx-n3.mt-n5.main-container
    div
      picture-source(
        image-file-extension=".webp"
        image="Homepage USP BG"
        image-alt="Bushes and clouds background artwork"
        custom-path="home/"
        :image-styles="backgroundStyle"
      )
      //- img(
      //-   alt=""
      //-   width="100%"
      //-   :src="require(`~/assets/images/home/Homepage USP BG.${isWebp ? 'webp' : 'png'}`)"
      //- ).background
    v-container(:class="{'ml-n6': !$isMobile}").content
      v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '115vh', width: '100vw'}")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12").text-center.text-container
            v-row(justify="center").mb-5
              v-col(cols="12" md="7" xl="8")
                h1(:class="headerClasses").mb-2 Enterprise-Grade
                  br
                  | Healthcare Solutions
                v-row(justify="center")
                  v-col(cols="12" md="10")
                    p.mc-metatitle-set-1.font-weight-semibold.font-gray.mb-8.font-open-sans MYCURE provides a wide array of modern healthcare management solutions that are custom-built for doctors, clinics, diagnostic labs and hospitals at a fraction of the cost.
                signup-button(
                  depressed
                  rounded
                  width="228px"
                  height="59px"
                  color="success"
                ).text-none.mc-button-set-1
                  span.generic-button-text Get Started
            v-row(justify="center")
              v-col(v-if="!$isMobile" cols="12" xl="10")
                vue-slick-carousel(
                  autoplay
                  draggable
                  infinite
                  :arrows="false"
                  :dots="false"
                  :slidesToShow="4",
                  :speed="500"
                )
                  div(v-for="(wonder,key) in wonders" :key="key")
                    wonder(:wonder="wonder").mx-2
              //- v-col(cols="8" md="3" xl="3" v-for="(wonder, key) in wonders" :key="key")
              //-   wonder(:wonder="wonder")
              v-col(v-else cols="10" sm="8" md="10")
                carousel(
                  navigationNextLabel=" "
                  navigationPrevLabel=" "
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
                    wonder(:wonder="wonder")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import Wonder from './Wonder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
import canUseWebp from '~/utils/can-use-webp';

export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
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
        image: 'Diagnostics',
      },
      {
        title: 'Booking',
        description: 'Book and schedule appointments efficiently',
        infoLink: 'booking',
        image: 'Booking',
      },
      {
        title: 'Telehealth',
        description: 'Everything you need to build your virtual practice',
        infoLink: 'telehealth',
        image: 'Telehealth',
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
    this.headerClasses = ['mc-title-set-4', 'lh-title'];
    return {
      isWebp: false,
    };
  },
  computed: {
    backgroundStyle () {
      return {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
        objectFit: 'cover',
      };
    },
  },
  async mounted () {
    this.isWebp = await canUseWebp();
  },
};
</script>

<style scoped>
.main-container {
  position: relative;
}
.content {
  z-index: 2;
  position: relative;
}
.line-spacing-title {
  line-height: 1.25em;
}
/* .background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  object-fit: cover;
} */
.container {
  width: 100vw;
}
.text-container {
  margin-bottom: 65px;
}
/* .content {
  position: absolute;
  width: 100vw;
} */
</style>
