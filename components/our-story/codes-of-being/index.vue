<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="12").text-center
          h2(:class="descriptionClasses") To further go the extra mile, we practice the following codes:
          h2(:class="headerClasses") 8 Codes of Being
        template(v-if="!isMobile")
          v-col(cols="12" md="4")
            v-list(two-line).check-list
              v-list-item(v-for="(code, key) in codes.slice(0,4)" :key="key")
                v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon" width="29px" height="29px")
                v-list-item-content
                    span(:class="descriptionClasses") {{ code }}
          v-col(cols="12" md="4")
            v-list(two-line).check-list
              v-list-item(v-for="(code, key) in codes.slice(4,8)" :key="key")
                v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon" width="29px" height="29px")
                v-list-item-content
                    span(:class="descriptionClasses") {{ code }}
        v-col(cols="12" v-else)
          v-list(two-line).check-list
            v-list-item(v-for="(code, key) in codes" :key="key").pb-3
              v-list-item-action
                  img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon" width="29px" height="29px")
              v-list-item-content
                  span(:class="descriptionClasses") {{ code }}
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  props: {
    headerClasses: {
      type: [Array, Object],
      default: null,
    },
    descriptionClasses: {
      type: [Array, Object],
      default: null,
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
};
</script>

<style scoped>
.check-list {
  background-color: transparent !important;
}
</style>
