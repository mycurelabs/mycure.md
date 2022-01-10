<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(column="10" :row-bindings="{ justify: 'center'}")
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12").text-center
              strong(v-if="metaTitle" :class="metaTitleClasses") {{ metaTitle }}
              h2(:class="titleClasses").mb-5 {{ title }}
              p(:class="descriptionClasses").mb-5 {{ description }}
          v-row(justify="center")
            v-col(cols="12" md="6" xl="5").text-center.mb-10
              div.d-flex.align-center.justify-center
                strong(:class="descriptionClasses").font-open-sans.black--text.mr-3 Billed Monthly
                v-switch(
                  v-model="switchModel"
                  inset
                  color="info"
                )
                strong(:class="descriptionClasses").font-open-sans.black--text Billed Annually
          //- v-row(justify="center" v-if="hasTrialOption")
          //-   v-col(cols="12").text-center.mb-10.mt-n5
          //-     strong(:class="descriptionClasses").font-open-sans.mb-5 or
          //-     br
          //-     signup-button(
          //-       depressed
          //-       rounded
          //-       event-category="Pricing"
          //-       color="primary"
          //-       :event-label="`click-pricing-${type}-trial`"
          //-       :queryOps="{ trial: true }"
          //-     ).mc-button-set-1.font-weight-semibold.text-none Start a Trial
          v-row(v-if="loading" justify="center" dense).text-center
            v-col(cols="12")
              v-progress-circular(
                color="primary"
                indeterminate
                size="150"
              )
          v-row(v-else justify="center" dense)
            template(v-if="!$isMobile && $vuetify.breakpoint.width > 1240")
              v-col(
                v-for="(pack, key) in pricingPackages"
                :key="key"
                v-bind="columnBindings"
              )
                pricing-card(
                  :has-trial-option="hasTrialOption"
                  :bundle="pack"
                  :payment-interval="paymentInterval"
                  :height="type === 'doctor' ? '750' : '850'"
                ).elevation-3
            v-col(v-else cols="10" sm="8" md="6")
              carousel(
                paginationColor="grey"
                loop
                navigationEnabled
                paginationEnabled
                :per-page="1"
              )
                slide(
                  v-for="(pack, index) in mobilePricingItems"
                  :key="index"
                  :data-index="index+1"
                ).pa-2
                  pricing-card(
                    center-items
                    :has-trial-option="hasTrialOption"
                    :bundle="pack"
                    :payment-interval="paymentInterval"
                    :height="type === 'doctor' ? '700' : '850'"
                  ).elevation-3
</template>

<script>
import { getSubscriptionPackagesPricing } from '~/services/subscription-packages';
import GenericPanel from '~/components/generic/GenericPanel';
import PricingCard from '~/components/commons/NewPricingCard';
import SignupButton from '~/components/commons/SignupButton';
import canUseWebp from '~/utils/can-use-webp';
export default {
  components: {
    GenericPanel,
    PricingCard,
    SignupButton,
  },
  props: {
    /**
     * @type {String} type
     * @example 'doctor'
     * @example 'clinic'
     * @example 'diagnostic',
     */
    type: {
      type: String,
      default: 'clinic',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: null,
    },
    metaTitle: {
      type: String,
      default: '',
    },
    columnBindings: {
      type: Object,
      default: () => ({
        cols: '12',
        md: '3',
        xl: '3',
      }),
    },
    hasTrialOption: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.titleClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.metaTitleClasses = ['mc-h7'];
    return {
      loading: false,
      switchModel: false,
      paymentInterval: 'month', // month | year
      pricingPackages: [],
      canUseWebp: false,
    };
  },
  async fetch () {
    this.pricingPackages = await getSubscriptionPackagesPricing(this.type) || [];
  },
  computed: {
    mobilePricingItems () {
      if (!this.pricingPackages?.length) return [];
      const packs = [...this.pricingPackages];
      const popular = packs.find(pack => pack.isRecommended);
      if (!popular) return this.pricingPackages;
      const indexPopular = packs.indexOf(popular);
      packs[indexPopular] = packs[0];
      packs[0] = popular;
      return packs;
    },
  },
  watch: {
    switchModel (val) {
      if (val) {
        this.paymentInterval = 'year';
        return;
      }
      this.paymentInterval = 'month';
    },
  },
  async created () {
    // fetch packages
    // await this.fetchPackages(this.type);
    this.canUseWebp = await canUseWebp();
  },
  methods: {
    async fetchPackages (type) {
      try {
        this.loading = true;
        this.pricingPackages = await getSubscriptionPackagesPricing(type) || [];
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    modeBtnBindings (mode) {
      if (mode === this.paymentInterval) return;
      return { outlined: true };
    },
  },
};
</script>
