<template lang="pug">
   v-card(:color="cardColor" :height="cardHeight" width="100%").rounded-xl.card-outter.pa-3
      v-chip(v-if="isRecommended" color="warning" label small).chip.mt-n3.black--text.align-center.justify-center.font-weight-bold Popular
      v-card-title.pt-8
        v-spacer
        h2(:class="[normalTextColor, {'font-21': !$isWideScreen, 'font-24': $isWideScreen}]").font-weight-bold {{ bundle.title }}
        v-spacer
      v-card-text.general-info-container.font-open-sans
        div.text-center.pb-3
          picture-source(
            custom-path="pricing/"
            :image-file-extension="$useWebp? '.webp' : '.png'"
            image-alt="Health facility pricing icon"
            :image="bundle.image"
            :image-width="iconSize"
            :image-height="iconSize"
          )
        div.text-center.description-container
          p(:class="[normalTextColor, textFontSize, recommendedText]") {{ bundle.description }}
        div#price-container.text-center
          p(
            :class="{'font-18': !$isWideScreen, 'font-25': $isWideScreen}"
            :style="opacity"
          ).text-center
            v-icon(color="success" small left) {{ isRecommended ? mdiTag : mdiTagOutline }}
            strong(:class="{ 'white--text': isRecommended, 'grey--text': !isRecommended}").savings.font-16 {{ bundle.currency }} {{ bundle.monthlyPrice | getYearly }}
            v-chip(color="success" :small="!$isWideScreen").white--text.ml-1.font-weight-medium Save {{ savingsPercentage }}%
          p(
            v-if="!bundle.requireContact"
            :class="[priceColor]"
          ).font-weight-black
            v-tabs-items(v-if="bundle.monthlyPrice > 0" v-model="paymentInterval" transition="slide-y-transition")
              v-tab-item(value="year" transition="slide-y-transition")
                span(:class="{'font-16': !$isWideScreen, 'font-25': $isWideScreen}").currency.font-open-sans {{ bundle.currency }}&nbsp;
                span(:class="{'font-35': !$isWideScreen, 'font-40': $isWideScreen}") {{ kFormatter(bundle.annualMonthlyPrice) }}
                //- template(v-if="bundle.users")
                //-   span(:class="{'slash': bundle.users !== 1}") &nbsp;{{ bundle.users }}
                //-   span {{ bundle.users === 1 ? ' ' : '' }}user
                span.slash &nbsp;/
                | clinic
                span.slash /
                | year
              v-tab-item(value="month" transition="slide-y-transition")
                span(:class="{'font-16': !$isWideScreen, 'font-25': $isWideScreen}").currency.font-open-sans {{ bundle.currency }}&nbsp;
                span(:class="{'font-35': !$isWideScreen, 'font-40': $isWideScreen}") {{  kFormatter(bundle.monthlyPrice) }}
                //- template(v-if="bundle.users")
                //-   span(:class="{'slash': bundle.users !== 1}") &nbsp;{{ bundle.users }}
                //-   span {{ bundle.users === 1 ? ' ' : '' }}user
                span.slash &nbsp;/
                | clinic
                span.slash /
                | month
            span(v-else).font-45 FREE
          p(v-else).text-center
            strong.primary--text.font-30 Contact Us
            //- br
            //- span for customized pricing
        //- div.text-center.usage-metric-container
        //-   p(v-if="!bundle.requireContact" :class="[normalTextColor, textFontSize, recommendedText]").black--text
        //-     span(v-if="bundle.users") {{ bundle.users }} user
        //-     br(v-if="bundle.users")
        //-     | per clinic monthly
        //-     template(v-if="!bundle.users")
        //-       br
        //-       br
        //-   div(v-else).top-spacing-btn
        //-     | &nbsp;
      v-card-text.card-actions
        slot(name="card-btn")
          template(v-if="bundle.requireContact")
            mc-btn(
              depressed
              rounded
              block
              event-category="Pricing"
              width="200px"
              height="40px"
              :color="btnColor"
              :event-label="`click-pricing-${bundle.title}`"
              :class="{'primary--text': isRecommended}"
              @click="sendCrispMessage"
            ).generic-button-text.font-weight-semibold.text-none {{ bundle.btnText }}
          template(v-else)
            signup-button(
              depressed
              rounded
              block
              width="200px"
              height="40px"
              event-category="Pricing"
              :color="btnColor"
              :class="{'primary--text': isRecommended}"
              :event-label="`click-pricing-${bundle.title}`"
              :pricing-bundle="bundle.id"
              :query-ops="getQueryOps(bundle)"
            ).generic-button-text.font-weight-semibold.text-none {{ getBtnText(bundle) }}
        v-row(justify="center").mt-3
          v-col(cols="12" xl="12")
            div(v-for="(inclusion, inclusionKey) in mainInclusions" :key="inclusionKey").d-flex
              v-icon(:color="getInclusionIconColor(inclusion.valid)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid) }}
              span(:class="[getInclusionTextColor(inclusion.valid), textFontSize, {'font-weight-medium': isRecommended}]") {{ inclusion.text }}
      v-divider(:class="{'divider': !this.isRecommended, 'divider-dark': this.isRecommended}").mx-5
      v-card-text
        v-row(justify="center")
          v-col(cols="12")
            div(v-for="(inclusion, inclusionKey) in additionalInclusions" :key="inclusionKey").d-flex
              template(v-if="inclusion.valid || !hideInvalidItems")
                v-icon(:color="getInclusionIconColor(inclusion.valid, true)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid, true) }}
                span(:class="[getInclusionTextColor(inclusion.valid), textFontSize]") {{ inclusion.text }}
        //- v-row(justify="center" v-if="!showList")
        //-   v-col(cols="12" xl="10").text-center
        //-     v-btn(:color="isRecommended ? 'white' : 'primary'" text @click="showList = !showList").text-none
        //-       | {{ showList ? 'Collapse' : 'View Details'}}
        //-       v-icon(v-if="!showList" right) mdi-chevron-down
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
    cardColor () {
      return this.isRecommended ? 'primary' : 'white';
    },
    normalTextColor () {
      return { 'black--text': !this.isRecommended, 'white--text': this.isRecommended };
    },
    priceColor () {
      return { 'primary--text': !this.isRecommended, 'white--text': this.isRecommended };
    },
    btnColor () {
      return this.isRecommended ? 'white' : 'primary';
    },
    cardHeight () {
      // if (!this.showList) return '500';
      return this.height || '800';
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-14'],
        wide: ['font-18'],
      });
    },
    recommendedText () {
      return this.isRecommended ? 'font-weight-bold' : 'font-weight-medium';
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
      if (this.isRecommended) return 'white';
      if (!valid) return 'grey';
      if (additional) return 'green';
      return 'primary';
    },
    getInclusionIcon (valid, additional = false) {
      if (valid && additional) return this.mdiPlusCircle;
      if (valid) return this.mdiCheckboxMarkedCircle;
      if (this.isRecommended && !valid) return this.mdiClose;
      return this.mdiCloseCircle;
    },
    getInclusionTextColor (valid) {
      if (this.isRecommended) return 'white--text';
      if (valid) return 'black--text';
      return 'grey--text';
    },
    sendCrispMessage () {
      const message = 'Hello, I would like to inquire about the ENTERPRISE plan.';
      window.Intercom('show');
      window.Intercom('sendMessage', message);
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

.general-info-container {
  position: relative;
  min-height: 240px;
}

.description-container {
  min-height: 80px;
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
    min-height: 235px;
  }
  .top-spacing-btn {
    margin-top: 15px;
  }
}
</style>
