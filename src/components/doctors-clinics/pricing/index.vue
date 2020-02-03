<template lang="pug">
  div.mc-gradient-grey.pt-5
    v-container
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-xl.font-work-sans {{ pricingTitle }}
            p(:class="{'pre-white-space': !$isMobile}").text-xs-center.pt-3.font-18.font-source-sans {{ description }}
        v-layout(row :wrap="$isMobile" fill-height).pt-5
          v-flex(
            v-for="(item, key) in pricingItems"
            :key="key"
            xs12
            md6
          ).mx-4
            v-card(height="100%").px-5.py-3
              v-card-text.font-source-sans
                h1.pre-white-space.font-xl.font-work-sans.lh-title {{ parseTitle(item) }}
                p.font-18.pre-white-space {{ parseDescription(item) }}
                br
                br
                span(v-if="item.type === 'solo'").font-m Always
                span(v-else).font-m Starts at
                br
                strong(v-if="item.type === 'solo'").font-mc-blue.font-xl {{ item.priceText }}
                strong(v-else).font-mc-blue
                  span.font-m $&nbsp;
                  span.font-xl {{ item.priceText }}
                  span.font-m &nbsp;monthly
                br
                br
                br
                strong.font-18 {{ item.inclusionsTitle }}
                br
                p(v-for="(inclusion, key) in item.inclusions" :key="key").font-18 {{ inclusion }}
                br
                v-btn(
                  v-if="item.type === 'solo'"
                  flat 
                  :color="$mcColors.mcBlue"
                  right
                ).text-none.font-18 See More
                div(v-else)
                  br
                br
                div.text-xs-center.mr-5.pt-4
                  v-btn(
                    :color="$mcColors.mcBlue"
                    dark
                    block
                  ).text-none.font-weight-bold.font-18 {{ item.btnText }}
        v-layout(row align-center).pt-3
          v-flex(xs12 md12).text-xs-center
            v-btn(
              :color="$mcColors.mcBlue"
              flat
            ).text-none.font-weight-bold.font-work-sans See Full Pricing Matrix
</template>

<script>
//- utils
import { parseTextWithNewLine } from '@/utils';
//- constants
import PRICING_ITEMS from './pricing-items.json';
export default {
  data () {
    return {
      pricingTitle: 'Affordable Pricing',
      description: 'Pay only for what you need.',
      pricingItems: PRICING_ITEMS
    };
  },
  methods: {
    parseTitle (item) {
      const { title } = item;
      return item.type === 'solo'
        ? parseTextWithNewLine(title, ['Solo '])
        : parseTextWithNewLine(title, ['Group ']);
    },
    parseDescription (item) {
      const { description } = item;
      return parseTextWithNewLine(description, ['your ']);
    }
  }
};
</script>