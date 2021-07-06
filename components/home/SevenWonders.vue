<template lang="pug">
  div
    div.container
      //- picture-source(
      //-   image="Homepage USP BG"
      //-   image-alt="MYCURE Seven wonders of healthcare"
      //-   image-file-extension=".webp"
      //-   custom-path="home/"
      //- ).background
      img(
        src="~/assets/images/home/Homepage USP BG.png"
        alt="Bushes and clouds background artwork"
        width="100%"
      ).background
      v-container.content.ml-n6
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").text-center.text-container
              v-row(justify="center")
                v-col(cols="12" md="8" xl="12")
                  h1(:class="headerClasses").mb-10 Enterprise-Grade Healthcare Solutions
                  v-row(justify="center")
                    v-col(cols="12" md="10")
                      p(:class="{ 'font-24' : !$isMobile, 'font-s' : $isMobile }").primary--text.font-weight-bold.mb-10 At a fraction of the cost.
                  signup-button(
                    depressed
                    rounded
                    :x-large="$isWideScreen"
                    :large="$isRegularScreen"
                    color="success"
                  ).text-none.font-s
                    span Get Started
            template(v-if="!$isMobile")
              v-col(cols="8" md="3" xl="3" v-for="(wonder, key) in wonders" :key="key")
                wonder(:wonder="wonder")
            template(v-else)
              v-col(cols="10")
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
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
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
    height: 1000px;
  }
  .background {
    height: 1050px;
  }
}
@media screen and (min-width: 1920px) {
  .text-container {
    margin-bottom: 90px;
  }
  .container {
    height: 950px;
  }
  .background {
    height: 1000px;
  }
}
</style>
