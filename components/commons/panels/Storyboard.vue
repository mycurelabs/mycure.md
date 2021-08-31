<template lang="pug">
  v-container
    v-row(justify="center").pa-5
      v-card(:width="!$isMobile ? '60%' : '100%'" elevation="5" :class="{'px-0': $isMobile}").rounded-xl.px-8.py-16.my-16
        v-card-text(:class="$isMobile ? 'px-0' : 'my-16'")
          v-row(justify="center")
            v-col(cols="10" align="center")
              span.font-weight-bold.mc-title-set-2.black--text {{ title}}
            v-col(cols="12").font-open-sans.px-10
              div(v-for="paragraph in content")
                p.mc-content-set-3 {{ paragraph }}
            v-col(cols="12" :class="{'px-0': $isMobile}" align="center")
              signup-button(
                depressed
                rounded
                color="success"
                facility-type="clinic"
                width="228px"
                height="59px"
              ).text-none
                span.generic-button-text Get Started Now
</template>

<script>
// import SignupButton from '~/components/commons/SignupButton';
// import PictureSource from '~/components/commons/PictureSource';
// import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    //     PictureSource,
  },
  //   filters: {
  //     getYearly (amount) {
  //       if (!amount) return 0;
  //       return (amount * 12).toLocaleString();
  //     },
  //   },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default: undefined,
    },
  //     bundle: {
  //       type: Object,
  //       default: () => ({}),
  //     },
  //     /**
  //      * @example 'month'
  //      * @example 'year'
  //      */
  //     paymentInterval: {
  //       type: String,
  //       default: 'month',
  //     },
  //     height: {
  //       type: String,
  //       default: null,
  //     },
  //     // - If non-inclusions will be included
  //     hideInvalidItems: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     // - If has trial
  //     hasTrialOption: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     // Force center items
  //     centerItems: {
  //       type: Boolean,
  //       default: false,
  //     },
  },
  //   data () {
  //     return {
  //       showList: false,
  //     };
  //   },
  //   computed: {
  //     savingsPercentage () {
  //       const yearly = (this.bundle?.monthlyPrice * 12) || 0;
  //       const saveAmount = yearly - this.bundle.annualMonthlyPrice;
  //       const percentage = (saveAmount / yearly) * 100;
  //       return Math.round(percentage);
  //     },
  //     mainInclusions () {
  //       return this.bundle?.inclusions?.slice(0, 3) || [];
  //     },
  //     additionalInclusions () {
  //       const length = this.bundle?.inclusions?.length;
  //       if (!length) return [];
  //       return this.bundle?.inclusions.slice(3, length) || [];
  //     },
  //     iconSize () {
  //       return this.$isWideScreen ? '85px' : '65px';
  //     },
  //     cardType () {
  //       return this.bundle.value;
  //     },
  //     isRecommended () {
  //       return this.bundle.isRecommended;
  //     },
  //     cardColor () {
  //       return this.isRecommended ? 'primary' : 'white';
  //     },
  //     normalTextColor () {
  //       return { 'black--text': !this.isRecommended, 'white--text': this.isRecommended };
  //     },
  //     priceColor () {
  //       return { 'primary--text': !this.isRecommended, 'white--text': this.isRecommended };
  //     },
  //     btnText () {
  //       return this.hasTrialOption ? 'Start Trial' : this.bundle.btnText;
  //     },
  //     btnColor () {
  //       return this.isRecommended ? 'white' : 'primary';
  //     },
  //     cardHeight () {
  //       // if (!this.showList) return '500';
  //       return this.height || '800';
  //     },
  //     textFontSize () {
  //       return classBinder(this, {
  //         mobile: ['font-12'],
  //         regular: ['font-14'],
  //         wide: ['font-18'],
  //       });
  //     },
  //     recommendedText () {
  //       return this.isRecommended ? 'font-weight-bold' : 'font-weight-medium';
  //     },
  //     opacity () {
  //       return {
  //         opacity: this.bundle.monthlyPrice > 0 && this.paymentInterval === 'year' ? 1 : 0,
  //       };
  //     },
  //   },
  //   methods: {
  //     // Formulate signup route query
  //     getQueryOps (bundle) {
  //       const queryOps = {
  //         ...bundle.queryOps,
  //         plan: this.paymentInterval === 'month' ? bundle.monthlyPackageId : bundle.annualPackageId,
  //       };
  //       return queryOps;
  //     },
  //     getInclusionIconColor (valid, additional = false) {
  //       if (this.isRecommended) return 'white';
  //       if (!valid) return 'grey';
  //       if (additional) return 'green';
  //       return 'primary';
  //     },
  //     getInclusionIcon (valid, additional = false) {
  //       if (valid && additional) return 'mdi-plus-circle';
  //       if (valid) return 'mdi-checkbox-marked-circle';
  //       if (this.isRecommended && !valid) return 'mdi-close';
  //       return 'mdi-close-circle';
  //     },
  //     getInclusionTextColor (valid) {
  //       if (this.isRecommended) return 'white--text';
  //       if (valid) return 'black--text';
  //       return 'grey--text';
  //     },
  //     sendCrispMessage () {
  //       const message = 'Hello, I would like to inquire about the ENTERPRISE plan.';
  //       window.$crisp.push(['do', 'chat:toggle']);
  //       window.$crisp.push(['do', 'message:send', ['text', message]]);
  //     },
  //     /*
  //       Derived from https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900

  //       Modified for 2-digit thousand
  //     */
  //     kFormatter (num) {
  //       return Math.abs(num) > 9999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num);
  //     },
  //   },
};
</script>
