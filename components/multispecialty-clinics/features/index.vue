<template lang="pug">
  div.main-container
    v-row(justify="center" align="center")
      v-col(cols="10").text-center
          h1(:class="[{'pre-white-space': !isMobile}, isMobile ? 'font-36' : 'font-40']").text-center.lh-title {{ title }}
          img(
            v-lazy="require(`~/assets/images/multispecialty/${image}.png`)"
            :alt="image"
            :width="$isMobile ? '100%' : '40%'"
          ).my-2
          p(:class="{'pre-white-space': !isMobile}").font-s.text-center.pt-3 {{ description }}
    v-row(justify="center" align="center").pt-4
      v-col(cols="12").text-center
        v-btn(
          color="blue"
          :to="{ name: 'features' }"
          :id="exploreFeaturesId"
          dark
          large
          @click.stop="handleExploreFeaturesBtn"
        ).text-none.font-21.font-weight-bold Explore the Features
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  data () {
    this.customPath = 'multispecialty/';
    this.exploreFeaturesId = 'multispecialty-explore-features-btn';
    this.image = 'mycure-best-multispecialty-service-system-badge';
    return {
      isMobile: true,
    };
  },
  computed: {
    title () {
      const title = 'Provide the best service to your patients';
      return parseTextWithNewLine(title, ['service']);
    },
    description () {
      const description = 'Your multispecialty clinic is everything your patients need. We help you make it extra easier to manage so you can focus more on patient care.';
      return parseTextWithNewLine(description, ['need.']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    handleExploreFeaturesBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-' : ''}${this.exploreFeaturesId}`,
        eventLabel: this.exploreFeaturesId,
      });
    },
  },
};
</script>

<style scoped>
.main-container {
  padding-top: 10vh;
  padding-bottom: 10vh;
  background-color: #f0f0f0;
}
</style>
