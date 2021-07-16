<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="12").text-center
          h2(:class="titleClasses").mb-5 From your first sale to full scale.
          p(:class="contentClasses").mb-10 MYCURE is designed to help you grow your practice.
          signup-button(
            depressed
            rounded
            color="success"
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            :class="btnClasses"
          ).text-none.mb-10
            span Start Free
        v-col(cols="12")
          v-row(justify="center" no-gutters)
            v-col(v-for="(item, key) in images" :key="key" cols="8" lg="4")
              picture-source(
                :image="item.image"
                :image-alt="item.alt"
                image-file-extension=".webp"
                custom-path="clinics/dental/"
              )
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  data () {
    this.images = [
      { image: 'Kiosk', alt: 'Mother and child in the hospital artwork' },
      { image: 'Queueing', alt: 'Patients waiting in line artwork' },
      { image: 'Dentist', alt: 'Dentist treating a patient artwork' },
    ];
    this.titleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.contentClasses = ['mc-content-set-1', 'font-weight-semibold', 'secondary--text'];
    this.btnClasses = ['mc-button-set-1'];
    return {};
  },
};
</script>
