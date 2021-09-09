<template lang="pug">
  v-container
    v-row(justify="center").pa-5
      v-card(:width="!$isMobile ? '60%' : '100%'" elevation="5" :class="{'px-0': $isMobile}").rounded-xl.pa-8.my-16
        v-card-text(:class="$isMobile ? 'px-0' : 'my-8'")
          v-row(justify="center")
            v-col(cols="10" align="center")
              span.font-weight-bold.mc-title-set-2.black--text {{ title }}
            v-col(cols="12").px-10
              div(v-for="paragraph in content")
                p(:class="$isWideScreen ? 'mb-8' : 'mb-5'").mc-content-set-3.font-gray.font-open-sans {{ paragraph }}
            //- v-col(cols="12" :class="{'px-0': $isMobile}" align="center")
            //-   signup-button(
            //-     depressed
            //-     color="success"
            //-     facility-type="clinic"
            //-     class="rounded-pill"
            //-     :width="!$isWideScreen ? '228px' : '300'"
            //-     :height="!$isWideScreen ? '59px' : '73.68'"
            //-   ).text-none
            //-     span.generic-button-text Get Started Now
</template>

<script>
// import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    //     PictureSource,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
