<template lang="pug">
  v-container
    v-row(justify="center").py-16
      generic-panel(
        hide-btn
        disable-parent-padding
      )
        v-row(justify="center")
          v-col(cols="12" sm="5")
            span.mc-h2 Watch how you can improve your patient attendance rate
            br
            br
            span.mc-b2.font-gray Want to reduce no-shows? Play the video to learn how the MYCURE Booking System engages your patients from booking to billing.
            br
            br
            div(:class="{ 'text-center': $isMobile }")
              signup-button(
                depressed
                color="primary"
                facility-type="clinic"
                class="rounded-lg"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
              ).text-none
                span.mc-btn1 Get Started Free
          v-spacer(v-if="!$isMobile")
          v-col(cols="12" sm="6")
            v-skeleton-loader(type="image" height="100%")
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
};
</script>

<style scoped>
</style>
