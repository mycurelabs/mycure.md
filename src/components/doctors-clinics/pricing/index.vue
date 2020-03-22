<template lang="pug">
  div.panel-bg-color.pt-3
    v-container
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-40.font-work-sans {{ pricingTitle }}
            p(:class="{'pre-white-space': !$isMobile}" v-if="description").text-xs-center.pt-1.font-21.font-source-sans {{ description }}
        v-layout(row :wrap="$isMobile" fill-height justify-center).pt-5
          v-flex(
            v-for="(item, key) in pricingItems"
            :key="key"
            xs12
            :class="[{ 'mx-4' : !$isMobile }, { 'my-3' : $isMobile }]"
          )
            v-card(
              height="100%"
              :class="[{ 'px-5' : !$isMobile}, {'py-3' : !$isMobile}, {'pt-3' : $isMobile}]")
              v-card-text#pricingContent.text-xs-center
                v-layout(row wrap)
                  v-flex(xs12 md6)
                    img(
                      :src="require(`@/assets/images/doctors-clinics/${item.image}.png`)" 
                      :alt="item.image"
                      width="95%"
                    )
                    h1(:class="[{'pt-5': !$isMobile }]").font-40.font-work-sans.lh-title {{ item.title }}
                    p(:class="{'pre-white-space' : !$isMobile}").font-18 {{ parseDescription(item) }}
                  v-flex(xs12 md6)
                    v-container.text-xs-left
                      v-layout(row justify-center)
                        v-flex(xs12 md10)
                          p(:class="[{'text-xs-center': $isMobile }, $isMobile ? 'font-l' : 'font-xl']").font-mc-blue {{ item.type === 'solo' ? 'Always' : 'Starts at' }}&nbsp;
                            strong(v-if="item.type === 'solo'") {{ item.priceText }}
                            strong(v-else)
                              span $&nbsp;
                              span {{ item.priceText }}
                              span &nbsp;/clinic/month
                      v-layout(row justify-center)
                        v-flex(xs12 md10)
                          p(v-for="(inclusion, key) in item.inclusions" :key="key").font-18 {{ inclusion }}
                    v-btn(
                      :color="$mcColors.mcBlue"
                      :to="{ name: item.btnLink}"
                      :id="`${item.type}-practice-btn`"
                      @click="handlePricingBtn(item.type)"
                      dark
                      large
                      :top="!$isMobile"
                      block
                    ).text-none.font-weight-bold.font-18 {{ item.btnText }}
        //- v-layout(row align-center).pt-3
        //-   v-flex(xs12 md12).text-xs-center
        //-     v-btn(
        //-       :color="$mcColors.mcBlue"
        //-       flat
        //-       @click.stop="handlePricingMatrixBtn"
        //-     ).text-none.font-weight-bold.font-work-sans.font-18 See Full Pricing Matrix
    pricing-matrix(v-model="pricingMatrixDialog")
</template>

<script>
//- utils
import { parseTextWithNewLine } from '@/utils';
//- constants
import PRICING_ITEMS from './pricing-items.json';
//- components
import PricingMatrix from './pricing-matrix';

export default {
  components: {
    PricingMatrix
  },
  data () {
    return {
      pricingTitle: 'Affordable Pricing',
      pricingItems: PRICING_ITEMS,
      pricingMatrixDialog: false,
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

      this.pricingMatrixDialog = true;
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