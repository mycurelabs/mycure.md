<template lang="pug">
  div.main-container.pb-5
    v-layout(row justify-center align-center)
      v-flex(xs10 md10).text-xs-center
          h1(:class="[{'pre-white-space': !$isMobile}, $isMobile ? 'font-36' : 'font-40']").text-xs-center.font-work-sans.lh-title {{ title }}
          img(
            :src="require(`@/assets/images/multispecialty/${image}.png`)"
            :alt="image"
            :width="$isMobile ? '100%' : '40%'"
          ).my-2
          p(:class="{'pre-white-space': !$isMobile}").font-s.text-xs-center.pt-3 {{ description }}
    v-layout(row justify-center align-center).pt-4
      v-flex(xs12).text-xs-center
        v-btn(
          :color="$mcColors.mcBlue"
          :to="{ name: 'features' }"
          :id="exploreFeaturesId"
          dark
          large
          @click.stop="handleExploreFeaturesBtn"
        ).text-none.font-21.font-weight-bold Explore the Features
</template>

<script>
import { parseTextWithNewLine } from '@/utils';

export default {
  data () {
    return {
      customPath: 'multispecialty/',
      customSlidePath: 'multispecialty/',
      exploreFeaturesId: 'multispecialty-explore-features-btn',
      image: 'mycure-best-multispecialty-service-system-badge',
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
    }
  },
  methods: {
    handleExploreFeaturesBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-': ''}${this.exploreFeaturesId}`,
        eventLabel: this.exploreFeaturesId
      });
    }
  }
};
</script>

<style scoped>
.main-container {
  padding-top: 10vh;
  background-color: #f0f0f0;
}
</style>