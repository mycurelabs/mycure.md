<template lang="pug">
  div.white
    v-container(:class="{'pa-5': !$isMobile}")
      v-layout(row wrap align-center justify-center)
        v-flex(xs12 md12).text-xs-center
          h2.font-21.font-mc-grey.pb-5 To further go the extra mile, we practice the following codes:
          h2.font-40.font-work-sans 8 Codes of Being
      v-layout(row wrap fill-height).pt-3
        template(v-if="!$isMobile")
          v-flex(xs12 md6)
            v-list(two-line).check-list
              v-list-tile(v-for="(code, key) in codes.slice(0,4)" :key="key")
                v-list-tile-action
                    img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                    span.font-18 {{ code }}
          v-flex(xs12 md6)
            v-list(two-line).check-list
              v-list-tile(v-for="(code, key) in codes.slice(4,8)" :key="key")
                v-list-tile-action
                    img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                    span.font-18 {{ code }}
        v-flex(xs12 v-else)
          v-list(two-line).check-list
            v-list-tile(v-for="(code, key) in codes" :key="key").pb-3
              v-list-tile-action
                  img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
              v-list-tile-content
                  span.font-18 {{ code }}
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
        checkIcon: 'mycure-web-bullet-check',
        codes: [
          'We are passionate, fun-loving, innovative people.',
          'We grow through continuous learning.',
          'We dare to challenge status quo and make things happen.',
          'We value diversity and respect everyone’s opinions.',
          'We practice honesty, transparency and highly value integrity.',
          'We truly care and deliver awesomeness to our customers.',
          'We commit to be grateful of life and remain humble in our successes.',
          'We promise to help each other and make this world a better place.'
        ]
      };
    }
  };
</script>

<style scoped>
.check-list {
  background-color: transparent !important;
}

</style>


