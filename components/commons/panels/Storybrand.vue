<template lang="pug">
  v-container.my-8
    v-row(justify="center").pa-5
      v-card(:width="!$isMobile ? '80%' : '100%'" elevation="1" :class="{'px-0': $isMobile}").rounded-xl.pa-10.my-16.gray-bg
        v-card-text(:class="$isMobile ? 'px-0' : ''")
          v-col.pa-0
            v-row(justify="center")
              v-col(cols="10" align="center")
                span.mc-h2.black--text.mb-16 {{ title }}
              v-col(cols="12").px-10
                div(v-for="paragraph in content")
                  p(:class="$isWideScreen ? 'mb-8' : 'mb-5'").mc-b2.font-gray.font-open-sans {{ paragraph }}
              v-col(cols="12" :class="$isMobile || isCenter ? 'text-center' : 'text-right'")
                signup-button(
                  depressed
                  color="primary"
                  class="rounded-lg"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                ).text-none
                  span.generic-button-text Get Started Now

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
    isCenter: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.gray-bg {
  background: #F8F8F8;
}
</style>
