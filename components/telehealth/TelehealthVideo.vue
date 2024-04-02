<template lang="pug">
  div(:class="$isMobile? 'video-bg-mobile' : 'video-bg'").mx-n3
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12" :class="{'py-16': !$isMobile}").text-center
            a(v-if="!showVideo" @click="showVideo = true")
              img(
                v-lazy="require('~/assets/images/telehealth/Booking Video still.png')"
                :width="$isMobile ? '100%' : '620'"
                height="393"
                alt="Booking Video still"
              )
            iframe(
              v-else
              align="middle"
              id="ytplayer"
              type="text/html"
              :width="$isMobile ? '100%' : '620'"
              height="393"
              allow="autoplay;"
              src="https://www.youtube.com/embed/9gxJX_eokC0?autoplay=1&loop=1&showinfo=0&rel=0&modestbranding=1"
              frameborder="0"
              allowfullscreen
            )
            br
            slot(name="cta-button")
              signup-button(
                depressed
                color="primary"
                event-label="signup"
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
              ).text-none.mt-10
                span.generic-button-text Contact Us
                v-icon(small right) {{ mdiArrowRight }}
</template>

<script>
import { mdiArrowRight } from '@mdi/js';
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    GenericPanel,
    SignupButton,
  },
  data () {
    return {
      showVideo: false,
      mdiArrowRight,
    };
  },
};
</script>

<style scoped>
.video-bg {
  /* height: 1000px; */
  background-image: url('~/assets/images/commons/mycure-video-banner-bg.png');
  background-position: center bottom;
  background-size: 100%;
}
.video-bg-mobile {
  /* height: 1000px; */
  background-image: url('~/assets/images/commons/mycure-video-banner-bg-mobile.png');
  background-position: center bottom;
  background-size: 100%;
}
</style>
