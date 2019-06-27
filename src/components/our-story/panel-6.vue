<template lang="pug">
  div
    div.white.px-3
    div(v-if="!$isMobile")#panel6
      v-container
        v-layout(row wrap)
          v-flex(xs12 md12)
            v-layout(row wrap align-center justify-center)
              v-flex(xs12 md12).text-xs-center
                br
                br
                h3.font-18.font-mc-grey To further go the extra mile, we practice the following codes:
                br
                br
                br
                h1.font-48 8 Codes of Being
              v-flex(xs12 md12).text-xs-center
                p.font-18
                    br
                    | We are passionate, fun-loving, innovative people.
                    br
                    br
                    | We grow through continuous learning.
                    br
                    br
                    | We dare to challenge status quo and make things happen.
                    br
                    br
                    | We value diversity and respect everyone’s opinions.
                    br
                    br
                    | We practice honesty, transparency and highly value integrity.
                    br
                    br
                    | We truly care and deliver awesomeness to our customers.
                    br
                    br
                    | We commit to be grateful of life and remain humble in our successes.
                    br
                    br
                    | We promise to help each other and make this world a better place.
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
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
  #panel6 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto
  }
</style>


