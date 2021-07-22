<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="10").text-center
            picture-source(
              image-alt="Dental chart in MYCURE clinic management system"
              custom-path="clinics/dental/"
              :image-file-extension="$isMobile ? '.png' : '.webp'"
              :extension-exclusive="$isMobile"
              :image="`Straightforward${$isMobile ? '-mobile' : ''}`"
              :image-width="$isMobile ? '226px' : ($isRegularScreen ? '875px' : '1200px')"
              :image-height="$isMobile ? '169.19px' : ($isRegularScreen ? '500px' : '668.08px')"
            )
        v-col(cols="12").text-center
          h2(:class="titleClasses").mb-5 Straightforward and simple.
          p(:class="contentClasses").mb-10 Accurately track baseline and updated dental charts, proposed procedures, and the actual work done.
          signup-button(
            depressed
            rounded
            color="success"
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            :class="btnClasses"
          ).text-none
            span Get Started
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
    this.titleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.contentClasses = ['mc-title-set-2', 'font-weight-semibold', 'secondary--text'];
    this.btnClasses = ['mc-button-set-1'];
    return {};
  },
};
</script>
