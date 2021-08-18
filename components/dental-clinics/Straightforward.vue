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
        v-col(cols="12" sm="10").text-center
          h2(:class="titleClasses").mb-5 Straightforward and simple.
          p(:class="[...contentClasses, {'mx-16': !$isMobile}]").mb-10 Accurately track baseline and updated dental charts, proposed procedures, and the actual work done.
          signup-button(
            depressed
            rounded
            color="success"
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started
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
    this.btnClasses = ['mc-button-set-1'];
    this.contentClasses = ['mc-content-set-1', 'font-weight-semibold', 'secondary--text'];
    return {};
  },
};
</script>
