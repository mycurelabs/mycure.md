<template lang="pug">
  div.white
    v-container.pa-5
      v-layout(row wrap align-center justify-center)
        v-flex(xs12 md12).text-xs-center
          h2.font-18.font-mc-grey.pb-5 To further go the extra mile, we practice the following codes:
          h2.font-48.font-work-sans 8 Codes of Being
        v-flex(xs12 md12).text-xs-center.pt-5
          p We are passionate, fun-loving, innovative people.
          p We grow through continuous learning.
          p We dare to challenge status quo and make things happen.
          p We value diversity and respect everyone’s opinions.
          p We practice honesty, transparency and highly value integrity.
          p We truly care and deliver awesomeness to our customers.
          p We commit to be grateful of life and remain humble in our successes.
          p We promise to help each other and make this world a better place.
    v-layout(row justify-center)
      img(v-if="!$isMobile" width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
      img(v-else width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
</template>

<script>
  import panel6a from './panel-6a';

  export default {
    components: {
      panel6a
    },
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>
  p {
    font-size: 18px;
    padding-bottom: 15px;
  }
</style>


