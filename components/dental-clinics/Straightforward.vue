<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="10").text-center
            picture-source(
              image-alt="Dental chart in MYCURE clinic management system"
              image-file-extension=".png"
              custom-path="clinics/dental/"
              extensionExclusive
              :image="`Straightforward${$isMobile ? '-mobile' : ''}`"
            )
        v-col(cols="12").text-center
          h2(:class="titleClasses").mb-5 Straightforward and simple.
          p(:class="contentClasses").mb-10 Accurately track baseline and updated dental charts, proposed procedures, and the actual work done.
          signup-button(
            depressed
            rounded
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            color="success"
          ).text-none.font-s
            span Get Started
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
          mobile: ['font-s'],
          regular: ['font-m'],
          wide: ['font-l'],
        }),
        'secondary--text',
        'font-weight-semibold',
      ];
      return contentClasses;
    },
  },
};
</script>
