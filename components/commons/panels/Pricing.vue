<template lang="pug">
  div(:class="panelBackground").mx-n3
    v-container
      v-row(justify="center")
        generic-panel(column="12" :row-bindings="{ justify: 'center'}")
          v-col(cols="12")
            v-row(justify="center")
              v-col(cols="12").text-center
                strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
                h2(:class="titleClasses").lh-title.font-weight-semibold.mb-5 {{ title }}
                p(:class="descriptionClasses").font-open-sans.mb-5 {{ description }}
            v-row(justify="center")
              v-col(cols="12" md="6" xl="4" :class="{'mb-10': !hasTrialOption}").text-center
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
              v-col(v-else cols="12" sm="8" md="6")
                carousel(
                  paginationColor="grey"
                  loop
                  navigationEnabled
                  paginationEnabled
                  :per-page="1"
                  :navigationClickTargetSize="25"
                )
                  slide(
                    v-for="(pack, index) in pricingPackages"
                    :key="index"
                    :data-index="index+1"
                  ).pa-2
                    pricing-card(
                      :has-trial-option="hasTrialOption"
                      :bundle="pack"
                      :payment-interval="paymentInterval"
                      :height="type === 'doctor' ? '700' : '850'"
                    ).elevation-3
</template>

<script>
import { getSubscriptionPackagesPricing } from '~/services/subscription-packages';
import GenericPanel from '~/components/generic/GenericPanel';
import PricingCard from '~/components/commons/PricingCard';
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
    this.titleClasses = ['mc-title-set-1'];
    this.descriptionClasses = ['mc-content-set-1'];
    this.metaTitleClasses = ['mc-metatitle-set-1'];
    return {
      loading: false,
      switchModel: false,
      paymentInterval: 'month', // month | year
      pricingPackages: [],
      canUseWebp: false,
    };
  },
  computed: {
    panelBackground () {
      return this.$isMobile
        ? 'pricing-bg-mobile'
        : this.canUseWebp
          ? 'pricing-bg-webp'
          : 'pricing-bg-png';
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
    await this.fetchPackages(this.type);
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

<style scoped>
.pricing-bg-png {
  width: 100vw;
  background-image: url('../../../assets/images/pricing/MYCURE-Pricing BG Wide.png');
  background-position: center center;
  background-size: 100% 100%;
}
.pricing-bg-webp {
  width: 100vw;
  background-image: url('../../../assets/images/pricing/MYCURE-Pricing BG Wide.webp');
  background-position: center center;
  background-size: 100% 100%;
}
.pricing-bg-mobile {
  background-image: url('../../../assets/images/pricing/MYCURE-Pricing BG Mobile.png');
  background-position: center bottom;
  background-size: 100% 100%;
}
</style>
