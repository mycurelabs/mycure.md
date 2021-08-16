<template lang="pug">
  div.video-bg.mx-n3
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12").text-center
            iframe(
              align="middle"
              id="ytplayer"
              type="text/html"
              :width="$isMobile ? '100%' : '620'"
              height="393"
              src="https://www.youtube.com/embed/9gxJX_eokC0?loop=1&showinfo=0&rel=0&modestbranding=1"
              frameborder="0"
              allowfullscreen
            )
            br
            signup-button(
              depressed
              rounded
              color="primary"
              event-label="signup"
              width="228px"
              height="59px"
            ).text-none.mt-10
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
  width: 100vw;
  background-image: url('../../assets/images/telehealth/Telehealth Video Banner.png');
  background-position: center center;
  background-size: 100% 100%;
}
</style>
