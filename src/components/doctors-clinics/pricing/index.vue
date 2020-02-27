<template lang="pug">
  div.panel-bg-color.pt-3
    v-container
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-40.font-work-sans {{ pricingTitle }}
            p(:class="{'pre-white-space': !$isMobile}" v-if="description").text-xs-center.pt-1.font-21.font-source-sans {{ description }}
        v-layout(row :wrap="$isMobile" fill-height).pt-5
          v-flex(
            v-for="(item, key) in pricingItems"
            :key="key"
            xs12
            md6
            :class="[{ 'mx-4' : !$isMobile }, { 'my-3' : $isMobile }]"
          )
            v-card(height="100%" :class="{ 'px-5' : !$isMobile}").py-3
              v-card-text#pricingContent.text-xs-center
                img(
                  :src="require(`@/assets/images/${item.image}.png`)" 
                  :alt="item.image" 
                  :width="item.type === 'solo' ? '75%' : '76.5%'"
                )
                h1(:class="{'pre-white-space' : !$isMobile}").font-40.font-work-sans.lh-title {{ item.title }}
                p(:class="{'pre-white-space' : !$isMobile}").font-18 {{ parseDescription(item) }}
                span.font-m.font-mc-blue {{ item.type === 'solo' ? 'Always' : 'Starts at' }}
                br
                strong(v-if="item.type === 'solo'").font-mc-blue.font-xl {{ item.priceText }}
                strong(v-else).font-mc-blue
                  span.font-m $&nbsp;
                  span.font-xl {{ item.priceText }}
                  span.font-m &nbsp;/clinic/month
                br
                v-container.text-xs-left
                  v-layout(row justify-center)
                    v-flex(xs12 md8)
                      p(v-for="(inclusion, key) in item.inclusions" :key="key").font-18 {{ inclusion }}
              v-btn(
                :color="$mcColors.mcBlue"
                :to="{ name: item.btnLink}"
                :id="`${item.type}-practice-btn`"
                @click="handlePricingBtn(item.type)"
                dark
                block
              ).text-none.font-weight-bold.font-18 {{ item.btnText }}
        v-layout(row align-center).pt-3
          v-flex(xs12 md12).text-xs-center
            v-btn(
              :color="$mcColors.mcBlue"
              flat
              :to="{ name: 'pricing'}"
              @click.stop="handlePricingMatrixBtn"
            ).text-none.font-weight-bold.font-work-sans.font-18 See Full Pricing Matrix
</template>

<script>
//- utils
import { parseTextWithNewLine } from '@/utils';
import VueScrollTo from 'vue-scrollto';
//- constants
import PRICING_ITEMS from './pricing-items.json';
export default {
  data () {
    return {
      pricingTitle: 'Affordable Pricing',
      pricingItems: PRICING_ITEMS,
      expandInclusions: false
    };
  },
  computed: {
    description () {
      const desc = 'Start free with no credit card required. Pay only for what you need.';
      return !this.$isMobile ? parseTextWithNewLine(desc, ['required.']) : desc;
    }
  },
  methods: {
    parseTitle (item) {
      const { title } = item;
      if (this.$isMobile) return title;
      return item.type === 'solo'
        ? parseTextWithNewLine(title, ['Solo '])
        : parseTextWithNewLine(title, ['Group ']);
    },
    parseDescription (item) {
      const { description } = item;
      if (this.$isMobile) return description;
      return parseTextWithNewLine(description, ['your ']);
    },
    handlePricingBtn (type) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-doctors-${type}-practice-btn`,
        eventLabel: `doctors-${type}-practice-btn`
      }); 
    },
    handlePricingMatrixBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-doctors-pricing-matrix',
        eventLabel: 'doctors-pricing-matrix'
      });
    },
  },
};
</script>

<style scoped>
.offset-container {
  height: 30px;
}
.panel-bg-color {
  background-color: #fafafa !important;
}
</style>