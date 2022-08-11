<template lang="pug">
   v-card(width="100%").rounded-lg.pa-5
      v-card-text.font-open-sans.px-0
        div.general-info-container
          v-row(align="center").pa-3
            picture-source(
              custom-path="pricing/"
              :image-file-extension="$useWebp? '.webp' : '.png'"
              image-alt="Health facility pricing icon"
              :image="bundle.image"
              :image-width="iconSize"
              :image-height="iconSize"
            )
            p.mc-h4.ml-2.title--text.mb-0 {{ bundle.title }}
          span.description-line-height.mc-b5 {{ bundle.description }}
        v-divider(width="100%").mb-4.mt-3
        div#price-container
          p(
            :style="opacity"
          ).title--text
            v-icon(color="success" small left) {{ isRecommended ? mdiTag : mdiTagOutline }}
            strong.grey--text.savings.font-16 {{ bundle.currency }} {{ bundle.monthlyPrice | getYearly }}
            v-chip(color="success" :small="!$isWideScreen").white--text.ml-1.font-weight-medium Save {{ savingsPercentage }}%
          p(
            v-if="!bundle.requireContact"
          ).font-weight-black.title--text
            v-tabs-items(v-if="bundle.monthlyPrice > 0" v-model="paymentInterval" transition="slide-y-transition")
              v-tab-item(value="year" transition="slide-y-transition")
                span(:class="currencyClass").currency.font-open-sans {{ bundle.currency }}&nbsp;
                span(:class="priceClass") {{ kFormatter(bundle.annualMonthlyPrice) }}
                span.slash &nbsp;/
                span(:class="{'mc-b4': !minimizePriceFont, 'font-12': minimizePriceFont}") clinic
                span.slash /
                span(:class="{'mc-b4': !minimizePriceFont, 'font-12': minimizePriceFont}") year
              v-tab-item(value="month" transition="slide-y-transition").title--text
                span(:class="currencyClass").currency.font-open-sans {{ bundle.currency }}&nbsp;
                span(:class="priceClass") {{  kFormatter(bundle.monthlyPrice) }}
                span.slash &nbsp;/
                span(:class="{'mc-b4': !minimizePriceFont, 'font-12': minimizePriceFont}") clinic
                span.slash /
                span(:class="{'mc-b4': !minimizePriceFont, 'font-12': minimizePriceFont}") month
            span(v-else :class="priceClass") FREE
          p(v-else :class="{'my-7': !$isWideScreen}")
            strong(:class="priceClass").title--text Contact Us
      v-card-text.card-actions.px-0
        slot(name="card-btn")
          template(v-if="bundle.requireContact")
            mc-btn(
              depressed
              block
              event-category="Pricing"
              :outlined="!isRecommended"
              :height="!$isWideScreen ? '59px' : '73.68'"
              :color="btnColor"
              :event-label="`click-pricing-${bundle.title}`"
              @click="sendCrispMessage"
            ).mc-btn1.font-weight-semibold.text-none.rounded-lg {{ bundle.btnText }}
          template(v-else)
            signup-button(
              depressed
              block
              :height="!$isWideScreen ? '59px' : '73.68'"
              event-category="Pricing"
              :outlined="!isRecommended"
              :color="btnColor"
              :event-label="`click-pricing-${bundle.title}`"
              :pricing-bundle="bundle.id"
              :query-ops="getQueryOps(bundle)"
            ).mc-btn1.font-weight-semibold.text-non.rounded-lg.text-none {{ getBtnText(bundle) }}
        v-row(justify="center").mt-5
          v-col(cols="12" xl="12")
            div(v-for="(inclusion, key) in mainInclusions" :key="key").mb-3
              v-icon(:color="getInclusionIconColor(inclusion.valid)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid) }}
              span(:class="[textFontSize, {'font-weight-medium': isRecommended}]").font-open-sans.list-item {{ inclusion.text }}
            div(v-for="(inclusion, key) in additionalInclusions" :key="key").mb-2
              template(v-if="inclusion.valid")
                v-icon(:color="getInclusionIconColor(inclusion.valid)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid, true) }}
                span(:class="[textFontSize]").font-open-sans.list-item {{ inclusion.text }}
</template>

<script>
import {
  mdiCheckboxMarkedCircle,
  mdiClose,
  mdiCloseCircle,
  mdiPlusCircle,
  mdiTag,
  mdiTagOutline,
} from '@mdi/js';
import SignupButton from '~/components/commons/SignupButton';
import PictureSource from '~/components/commons/PictureSource';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton,
    PictureSource,
  },
  filters: {
    getYearly (amount) {
      if (!amount) return 0;
      return (amount * 12).toLocaleString();
    },
  },
  props: {
    bundle: {
      type: Object,
      default: () => ({}),
    },
    /**
     * @example 'month'
     * @example 'year'
     */
    paymentInterval: {
      type: String,
      default: 'month',
    },
    height: {
      type: String,
      default: null,
    },
    // - If non-inclusions will be included
    hideInvalidItems: {
      type: Boolean,
      default: false,
    },
    // - If has trial
    hasTrialOption: {
      type: Boolean,
      default: false,
    },
    // Force center items
    centerItems: {
      type: Boolean,
      default: false,
    },
    // Make price text sizes smaller, usually used for pricing with 4 packages on STD screen
    minimizePriceFont: Boolean,
  },
  data () {
    return {
      showList: false,
      // icons
      mdiCheckboxMarkedCircle,
      mdiClose,
      mdiCloseCircle,
      mdiPlusCircle,
      mdiTag,
      mdiTagOutline,
    };
  },
  computed: {
    savingsPercentage () {
      const yearly = (this.bundle?.monthlyPrice * 12) || 0;
      const saveAmount = yearly - this.bundle.annualMonthlyPrice;
      const percentage = (saveAmount / yearly) * 100;
      return Math.round(percentage);
    },
    mainInclusions () {
      return this.bundle?.inclusions?.slice(0, 3) || [];
    },
    additionalInclusions () {
      const length = this.bundle?.inclusions?.length;
      if (!length) return [];
      return this.bundle?.inclusions.slice(3, length) || [];
    },
    iconSize () {
      return this.$isWideScreen ? '85px' : '65px';
    },
    cardType () {
      return this.bundle.value;
    },
    isRecommended () {
      return this.bundle.isRecommended;
    },
    normalTextColor () {
      return 'black--text';
    },
    priceColor () {
      return 'black--text';
    },
    btnColor () {
      return 'primary';
    },
    cardHeight () {
      // if (!this.showList) return '500';
      return this.height || '800';
    },
    priceClass () {
      if (this.minimizePriceFont) {
        return { 'font-28': !this.$isWideScreen, 'font-48': this.$isWideScreen };
      }
      return 'mc-h2';
    },
    currencyClass () {
      if (this.minimizePriceFont) {
        return { 'font-14': !this.$isWideScreen, 'font-24': this.$isWideScreen };
      }
      return 'mc-h4';
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-14'],
        wide: ['font-18'],
      });
    },
    recommendedText () {
      return 'font-weight-medium';
    },
    opacity () {
      return {
        opacity: this.bundle.monthlyPrice > 0 && this.paymentInterval === 'year' ? 1 : 0,
      };
    },
  },
  methods: {
    // Formulate signup route query
    getQueryOps (bundle) {
      const queryOps = {
        trial: this.isTrialAvailable(bundle),
        plan: this.paymentInterval === 'month' ? bundle.monthlyPackageId : bundle.annualPackageId,
        ...bundle.facilityType && { type: bundle.facilityType },
      };
      return queryOps;
    },
    getBtnText (bundle) {
      switch (this.paymentInterval) {
        case 'month':
          return bundle.monthlyTrial ? 'Start Free Trial' : 'Get Started';
        case 'year':
          return bundle.annualTrial ? 'Start Free Trial' : 'Get Started';
        default:
          return 'Get Started';
      }
    },
    isTrialAvailable (bundle) {
      switch (this.paymentInterval) {
        case 'month':
          return !!bundle.monthlyTrial;
        case 'year':
          return !!bundle.annualTrial;
        default:
          return false;
      }
    },
    getInclusionIconColor (valid, additional = false) {
      if (!valid) return 'grey';
      if (additional) return 'green';
      return 'primary';
    },
    getInclusionIcon (valid, additional = false) {
      if (valid && additional) return this.mdiCheckboxMarkedCircle;
      if (valid) return this.mdiCheckboxMarkedCircle;
      // if (this.isRecommended && !valid) return this.mdiClose;
      return this.mdiCloseCircle;
    },
    getInclusionTextColor (valid) {
      return 'grey--text';
    },
    sendCrispMessage () {
      const message = 'Hello, I would like to inquire about the ENTERPRISE plan.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
    /*
      Derived from https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900

      Modified for 2-digit thousand
    */
    kFormatter (num) {
      return Math.abs(num) > 9999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style scoped>
.font-45 {
  font-size: 45px;
}

.font-60 {
  font-size: 60px;
}

.slash {
  font-size: 20px !important;
  margin-top: 10px;
}

.savings {
  text-decoration: line-through;
}

/* .card-outter {
  position: relative;
  padding-bottom: 90px;
} */

/* .card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
} */

.price-container {
  position: relative;
}

/* .currency {
  position: absolute;
  top: 25%;
  left: 5%;
} */

.description-line-height {
  line-height: 10px;
}

.chip {
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 60%
}

/* .usage-metric-container {
  min-height: 50px;
} */
.top-spacing-btn {
  margin-top: -5px;
}
.divider {
  border-bottom: 1px solid black;
}
.divider-dark {
  border-bottom: 1px solid white;
}

#price-container .v-window {
  overflow: visible !important;
}
#price-container .v-window-item {
  overflow: visible !important;
}

.general-info-container {
  position: relative;
  min-height: 150px;
}

.list-item {
  color: #72727D;
}

.v-tabs-items {
  background-color: transparent !important;
}

@media screen and (width: 1920px) and (height: 1007px) {
  .top-spacing-btn {
    margin-top: 5px;
  }
}
@media screen and (min-width: 1921px) {
  .general-info-container {
    min-height: 180px;
  }
  .top-spacing-btn {
    margin-top: 15px;
  }
}
</style>
