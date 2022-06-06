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
              :image-width="$isMobile ? '226px' : ($isRegularScreen ? '666.66px' : '1200px')"
              :image-height="$isMobile ? '169.19px' : ($isRegularScreen ? '380.95px' : '668.08px')"
            )
        v-col(cols="12" sm="10" :class="{'text-center': !$isMobile}")
          h2(:class="titleClasses").mb-5 Straightforward and simple.
          p(:class="[...contentClasses, {'mx-16': !$isMobile}]").mb-10 MYCURE Dental comes with its own chat feature, allowing everyone in your clinic to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can communicate with other doctors at your practice quickly.
          div.text-center
            signup-button(
              depressed
              color="primary"
              class="rounded-md"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.mc-btn1 Get Started
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
    this.titleClasses = ['mc-h2'];
    this.btnClasses = ['mc-btn1'];
    this.contentClasses = ['mc-b2'];
    return {};
  },
};
</script>
