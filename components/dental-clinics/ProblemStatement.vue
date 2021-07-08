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
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            color="success"
          ).text-none.font-s.mb-10
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
import classBinder from '~/utils/class-binder';
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
    return {};
  },
  computed: {
    titleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
      ];
      return titleClasses;
    },
    contentClasses () {
      const contentClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'secondary--text',
        'font-weight-semibold',
      ];
      return contentClasses;
    },
  },
};
</script>
