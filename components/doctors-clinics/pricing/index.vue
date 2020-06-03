<template lang="pug">
  div.panel-bg-color.pt-3
    v-container
      v-container
        v-row(align="center")
          v-col(cols="12").text-center
            h1(:class="{'pre-white-space': !$isMobile}").text-center.font-40 {{ pricingTitle }}
            p(:class="{'pre-white-space': !$isMobile}" v-if="description").text-center.pt-1.font-21 {{ description }}
        v-row(:class="{'flex-nowrap': $isMobile}" justify="center").pt-5.fill-height
          v-col(
            v-for="(item, key) in pricingItems"
            :key="key"
            cols="12"
            md="10"
            :class="[{ 'mx-4' : !$isMobile }, { 'my-3' : $isMobile }]"
          )
            v-card(
              height="100%"
              :class="[{ 'px-5' : !$isMobile}, {'py-3' : !$isMobile}, {'pt-3' : $isMobile}]")
              v-card-text#pricingContent.text-center
                v-row
                  v-col(cols="12" md="6")
                    img(
                      v-lazy="require(`@/assets/images/doctors-clinics/${item.image}.png`)"
                      :alt="item.image"
                      width="95%"
                    )
                    h1(:class="[{'pt-5': !$isMobile }]").font-40.lh-title.black--text {{ item.title }}
                    p(:class="{'pre-white-space' : !$isMobile}").font-18 {{ parseDescription(item) }}
                  v-col(cols="12" md="6")
                    v-container.text-left
                      v-row(justify="center")
                        v-col(cols="12" md="10")
                          p(:class="[{'text-center': $isMobile }, $isMobile ? 'font-l' : 'font-xl']").primary--text {{item.type === 'solo' ? 'Always' : 'Starts at'}}&nbsp;
                            strong(v-if="item.type === 'solo'") {{item.priceText}}
                            strong(v-else)
                              span $&nbsp;
                              span {{item.priceText}}
                              span &nbsp;/clinic/month
                      v-row(justify="center")
                        v-col(cols="12" md="10")
                          p(v-for="(inclusion, key) in item.inclusions" :key="key").font-18 {{inclusion}}
                    v-btn(
                      color="primary"
                      :to="{ name: item.btnLink}"
                      :id="`${item.type}-practice-btn`"
                      @click="handlePricingBtn(item.type)"
                      dark
                      large
                      block
                    ).text-none.font-weight-bold.font-18.mt-10 {{ item.btnText }}
</template>

<script>
// - constants
import PRICING_ITEMS from './pricing-items.json';
// - utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  data () {
    this.pricingTitle = 'Affordable Pricing';
    this.pricingItems = PRICING_ITEMS;
    return {
      isMobile: true,
    };
  },
  computed: {
    description () {
      const desc = 'Start free with no credit card required. Pay only for what you need.';
      return !this.$isMobile ? parseTextWithNewLine(desc, ['required.']) : desc;
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
    parseDescription (item) {
      const { description } = item;
      return this.$isMobile ? description : parseTextWithNewLine(description, ['your ']);
    },
    handlePricingBtn (type) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-doctors-${type}-practice-btn`,
        eventLabel: `doctors-${type}-practice-btn`,
      });
    },
    handlePricingMatrixBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-doctors-pricing-matrix',
        eventLabel: 'doctors-pricing-matrix',
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
