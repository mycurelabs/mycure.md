<template lang="pug">
  div.white.my-10
    client-only
      v-container
        v-row(align="center" justify="center")
          v-col(cols="12").text-center
            h2.font-21.grey--text.pb-5 To further go the extra mile, we practice the following codes:
            h2(:class="codesOfBeingClasses") 8 Codes of Being
        v-row(justify="center").fill-height.pt-3
          template(v-if="!isMobile")
            v-col(cols="12" md="4")
              v-list(two-line).check-list
                v-list-item(v-for="(code, key) in codes.slice(0,4)" :key="key")
                  v-list-item-action
                      img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                      span.font-18 {{ code }}
            v-col(cols="12" md="4")
              v-list(two-line).check-list
                v-list-item(v-for="(code, key) in codes.slice(4,8)" :key="key")
                  v-list-item-action
                      img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                      span.font-18 {{ code }}
          v-col(cols="12" v-else)
            v-list(two-line).check-list
              v-list-item(v-for="(code, key) in codes" :key="key").pb-3
                v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-item-content
                    span.font-18 {{ code }}
</template>

<script>

export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    this.checkIcon = 'mycure-web-bullet-check';
    this.codes = [
      'We are passionate, fun-loving, innovative people.',
      'We grow through continuous learning.',
      'We dare to challenge the status quo and make things happen.',
      'We value diversity and respect everyone’s opinions.',
      'We practice honesty, transparency and highly value integrity.',
      'We truly care and deliver awesomeness to our customers.',
      'We commit to be grateful of life and remain humble in our successes.',
      'We promise to help each other and make this world a better place.',
    ];
    return {};
  },
  computed: {
    codesOfBeingClasses () {
      return [this.$isMobile ? 'font-36' : 'font-40'];
    },
  },
};
</script>

<style scoped>
.check-list {
  background-color: transparent !important;
}
</style>
