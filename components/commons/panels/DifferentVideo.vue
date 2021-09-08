<template lang="pug">
  div(:class="$isMobile? 'video-bg-mobile' : 'video-bg'").mx-n3
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12").text-center
            h1.mc-title-set-1.font-weight-bold Here's How MYCURE is Different
          v-col(cols="12").text-center
            iframe(
              align="middle"
              id="ytplayer"
              type="text/html"
              :width="$isMobile ? '280' : $isRegularScreen ? '560' : '840'"
              :height="$isMobile ? '157.5' : $isRegularScreen ? '315' : '472.5'"
              src="https://www.youtube.com/embed/r7oewF5qDz4"
              frameborder="0"
              allowfullscreen
            )
            //- width="560" height="315"
            br
            signup-button(
              depressed
              color="primary"
              event-label="signup"
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none.mt-5
              span.generic-button-text Get Started Free
              v-icon(small right) mdi-arrow-right
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    GenericPanel,
    SignupButton,
  },
};
</script>

<style scoped>
.video-bg {
  /* height: 1000px; */
  background-image: url('~/assets/images/commons/MYCURE - Video Banner BG.webp');
  background-position: center top;
  background-size: 100%;
}
.video-bg-mobile {
  /* height: 1000px; */
  background-image: url('~/assets/images/commons/MYCURE - Video Banner BG.webp');
  background-position: center top;
}
</style>
