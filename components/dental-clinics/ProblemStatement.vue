<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="12").text-center
          h2(:class="titleClasses").mb-5 From your first extraction to full scale operation.
          p(:class="contentClasses").mb-10 MYCURE is designed to help you grow your practice.
          signup-button(
            depressed
            rounded
            color="success"
            class="rounded-pill"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
          ).text-none.mb-10
            span.generic-button-text Get Started
        v-col(cols="12")
          v-row(v-if="!$isMobile" justify="center")
            picture-source(
              image="Problem Statement"
              image-alt="Mother and child in the hospital, Patients waiting in line, and Dentist treating a patient artwork"
              image-file-extension=".webp"
              custom-path="clinics/dental/"
              :image-width="$isRegularScreen ? '945px' : '1446px'"
              :image-height="$isRegularScreen ? '314.89px' : '481.84px'"
            )
          v-row(v-else justify="center")
            v-col(cols="10")
              carousel(
                paginationColor="grey"
                autoplay
                loop
                navigationEnabled
                paginationEnabled
                :per-page="1"
                :navigationClickTargetSize="20"
                :paginationPadding="5"
              )
                slide(
                  v-for="(item, key) in images"
                  :key="key"
                  :data-index="index+1"
                ).pa-2
                  div(class="text-center")
                    picture-source(
                      :image="item.image"
                      :image-alt="item.alt"
                      image-file-extension=".webp"
                      custom-path="clinics/dental/"
                      image-width="200px"
                      image-height="212.2px"
                    )
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
    VueSlickCarousel,
  },
  data () {
    this.images = [
      { image: 'Kiosk', alt: 'Mother and child in the hospital artwork' },
      { image: 'Queueing', alt: 'Patients waiting in line artwork' },
      { image: 'Dentist', alt: 'Dentist treating a patient artwork' },
    ];
    this.titleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.contentClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    return {};
  },
};
</script>
