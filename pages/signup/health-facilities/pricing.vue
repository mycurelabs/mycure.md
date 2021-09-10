<template lang="pug">
  v-container
    v-overlay(v-if="loading.page" :value="loading.page")
      v-progress-circular(
        indeterminate
        size="64"
      )
    template(v-else)
      v-row(justify="center" align="center")
        v-col(cols="12").text-center
          h1.font-m Choose a&nbsp;
            span.primary--text pricing plan&nbsp;
            span(v-if="isTrial") before beginning your trial
      v-row(justify="center" align="start")
        v-col(cols="12" md="12")
          div.d-flex.align-center.justify-center
            strong(:class="descriptionClasses").font-open-sans.black--text.mr-3 Billed Monthly
            v-switch(
              v-model="paymentIntervalSwitch"
              inset
              color="primary"
            )
            strong(:class="descriptionClasses").font-open-sans.black--text Billed Annually
      v-row(justify="center" align="center")
        v-col(cols="12" md="10")
          v-row(justify="center" align="center")
            template(v-for="bundle in packages")
              v-col(
                v-if="!bundle.requireContact"
                cols="10"
                md="4"
                xl="3"
              )
                pricing-card(
                  :bundle="bundle"
                  :payment-interval="paymentInterval"
                ).elevation-3
                  template(slot="card-btn")
                    v-btn(
                      rounded
                      block
                      depressed
                      :color="bundle.isRecommended ? 'white' : 'primary'"
                      :loading="loading.button"
                      :disabled="loading.button"
                      :class="{'primary--text': bundle.isRecommended}"
                      @click="selectBundle(bundle)"
                    ).text-none Choose {{bundle.title}}
    email-verification-dialog(v-model="emailVerificationMessageDialog" :email="email" @confirm="confirmEmailVerification")
    stripe-checkout(
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    )
    //- Payment Error
    v-dialog(v-model="paymentErrorDialog" width="400")
      v-card
        v-card-text.pa-10.text-center
          v-icon(style="font-size: 40px;").error--text mdi-close
          h2 Error!
          p Checkout failed to proceed!
          v-btn(
            depressed
            color="success"
            @click="retryPayment"
          ).text-none Retry Now
    //- Error
    v-dialog(v-model="errorDialog" width="400" persistent)
      v-card
        v-card-text.pa-10.text-center
          v-icon(style="font-size: 40px;").error--text mdi-close
          h2 Error!
          p {{ errorMessage }}
        v-card-actions
          v-spacer
          v-btn(color="success" depressed :to="{ name: 'signup-health-facilities' }").text-none Back
          v-spacer
    v-dialog(v-model="confirmPaymentDialog" width="600")
      v-card
        v-card-text.pa-5
          h2.mb-5 Confirmation
          p(v-if="isPaid") You will be redirected to our payment partner to input your card details. Do you want to proceed?
          p(v-else) Do you want to proceed creating a FREE account with MYCURE?
        v-card-actions
          v-spacer
          v-btn(
            depressed
            @click="confirmPaymentDialog = false"
          ).text-none Cancel
          v-btn(
            depressed
            color="success"
            @click="submit"
          ).text-none Proceed
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import classBinder from '~/utils/class-binder';
import EmailVerificationDialog from '~/components/signup/EmailVerificationDialog';
import PictureSource from '~/components/commons/PictureSource';
import PricingCard from '~/components/commons/PricingCard';
import { SUBSCRIPTION_MAPPINGS } from '~/constants/subscription';
import { ALL_PRICING } from '~/constants/pricing';
import {
  signupFacility,
  // signin,
} from '~/utils/axios';
import { getSubscriptionPackagesPricing } from '~/services/subscription-packages';
const FACILITY_STEP_1_DATA = 'facility:step1:model';
export default {
  components: {
    EmailVerificationDialog,
    PictureSource,
    PricingCard,
  },
  layout: 'user',
  data () {
    this.subscriptionMappings = SUBSCRIPTION_MAPPINGS;
    this.publishableKey = process.env.STRIPE_PK;
    // this.queryTypeMapping = {
    //   doctor:
    // };
    return {
      loading: {
        page: false,
        button: false,
      },
      paymentErrorDialog: false,
      errorDialog: false,
      errorMessage: 'Checkout process failed to proceed!',
      confirmPaymentDialog: false,
      selectedBundle: {},
      packages: [],
      paymentIntervalSwitch: false,
      selectedPricingModel: 0,
      selectedPricing: {},
      emailVerificationMessageDialog: false,
      sessionId: '',
      isTrial: false,
    };
  },
  computed: {
    step1LocalStorageData () {
      return process.browser && JSON.parse(localStorage.getItem(FACILITY_STEP_1_DATA));
    },
    preBundle () {
      return this.$route.query.plan;
    },
    email () {
      return this.step1LocalStorageData?.email;
    },
    countryCallingCode () {
      return this.step1LocalStorageData?.countryCallingCode;
    },
    organizationTypes0 () {
      return this.step1LocalStorageData?.organization?.types?.[0];
    },
    facilityType () {
      const typesMap = {
        'doctor-booking': 'doctor',
        'doctor-telehealth': 'doctor',
        'clinic-booking': 'clinic',
        'clinic-telehealth': 'clinic',
        doctor: 'doctor',
        clinic: 'clinic',
        diagnostic: 'diagnostic',
      };
      const type = this.$route.query.type || this.organizationTypes0;
      return typesMap[type];
    },
    allPricing () {
      return ALL_PRICING;
    },
    filteredPricing () {
      return ALL_PRICING.filter(({ facilityType }) => facilityType === this.facilityType);
    },
    paymentState () {
      return process.client && (new URLSearchParams(window.location.search).get('payment') || '');
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
    paymentInterval () {
      return this.paymentIntervalSwitch ? 'year' : 'month';
    },
    isPaid () {
      return this.selectedBundle?.monthlyPrice > 0 || this.selectedBundle?.annualMonthlyPrice > 0;
    },
  },
  watch: {
    selectedPricingModel: {
      handler (val) {
        this.selectedPricing = this.filteredPricing[val];
      },
      immediate: true,
    },
  },
  async mounted () {
    // Check if step 1 accomplished
    this.loading.page = true;
    if (isEmpty(this.step1LocalStorageData)) this.$nuxt.$router.push({ name: 'signup-health-facilities' });
    if (this.paymentState === 'success') {
      this.$nuxt.$router.push({ name: 'signup-health-facilities-otp-verification' });
    }
    if (this.paymentState === 'cancel') {
      this.handlePaymentCancel();
    }

    // - Note: URL query parameters are strings
    this.isTrial = this.$route.query.trial === 'true' || this.$route.query.trial === true;

    if (this.preBundle) {
      await this.submit();
      return;
    }

    // For other types
    this.packages = await getSubscriptionPackagesPricing(this.facilityType);
    this.loading.page = false;
  },
  methods: {
    selectBundle (bundle) {
      this.selectedBundle = bundle;
      this.confirmPaymentDialog = true;
    },
    /*
      The prebundle is meant for proceeding to stripe without selecting from the packages
      Used when there is already a pre-selected plan from website pricing panels.
    */
    retryPayment () {
      this.confirmPaymentDialog = true;
    },
    async submit () {
      try {
        this.loading.button = true;
        this.confirmPaymentDialog = false;
        const bundle = this.preBundle || this.selectedBundle;
        if (bundle.requireContact) {
          this.sendCrispMessage();
          return;
        }
        // Build payload, omit non-allowed values
        const payload = {
          ...omit(this.step1LocalStorageData, ['trial', 'organizationType']),
        };

        // Subscription URLS
        const subscription = {
          stripeCheckoutSuccessURL: process.client && `${window.location.origin}${window.location.pathname}?payment=success`,
          stripeCheckoutCancelURL: process.client && `${window.location.origin}${window.location.pathname}?payment=cancel`,
        };

        if (this.preBundle) {
          payload.organization = {
            ...this.step1LocalStorageData?.organization,
            subscription: {
              ...subscription,
              package: this.$route.query.plan,
              customer: {
                stripeEmail: this.email,
              },
              ...this.isTrial && { trial: true },
            },
          };
        } else {
          const paid = bundle.monthlyPrice > 0 || bundle.annualMonthlyPrice > 0;
          if (paid) {
            let packageId;
            if (this.paymentInterval === 'month') packageId = bundle.monthlyPackageId;
            if (this.paymentInterval === 'year') packageId = bundle.annualPackageId;
            // Build organization payload
            payload.organization = {
              ...this.step1LocalStorageData?.organization,
              subscription: {
                ...subscription,
                package: packageId,
                customer: {
                  stripeEmail: this.email,
                },
                ...this.isTrial && { trial: true },
              },
            };
          }
        }

        const user = await signupFacility(payload);
        if (!isEmpty(user?.organization?.subscription?.updatesPending)) {
          this.sessionId = user.organization.subscription.updatesPending.stripeSession;
          process.browser && window.localStorage.setItem('signup:stripe:session-id', this.sessionId);
          this.$refs.checkoutRef.redirectToCheckout();
          return;
        }

        if (this.countryCallingCode !== '63') {
          this.emailVerificationMessageDialog = true;
        } else {
          this.$nuxt.$router.push({ name: 'signup-health-facilities-otp-verification' });
        }
      } catch (e) {
        console.error(e);
        const errorCode = parseInt(e?.message?.replace(/ .*/, '').substr(1));
        if (errorCode === 11000) {
          this.sessionId = process.browser && window.localStorage.getItem('signup:stripe:session-id');
          if (this.sessionId) {
            this.$refs.checkoutRef.redirectToCheckout();
            return;
          }
          this.errorMessage = 'The email or mobile number is already taken!';
        };
        if (e.message === 'Invitation not found') this.errorMessage = 'Invitation code is not valid!';
        this.errorDialog = true;
      } finally {
        this.loading.button = false;
      }
    },
    // Payment
    handlePaymentCancel () {
      this.paymentErrorDialog = true;
      // - Reload route quries thru local storage
      this.$router.replace({
        query: {
          trial: this.step1LocalStorageData.trial,
          type: this.step1LocalStorageData.organizationType,
          referralCode: this.step1LocalStorageData.invitation,
        },
      });

      // Load pending session Id by logging in
      // const { email, password } = this.step1LocalStorageData;
      // const loginData = await signin({ email, password });
      // this.sessionId = await refetchStripeToken(loginData);
      this.sessionId = process.browser && JSON.parse(localStorage.getItem('signup:stripe:session-id'));
    },
    // MISC
    getInclusionColor (valid) {
      if (!valid) return 'grey';
      return 'info';
    },
    sendCrispMessage () {
      const message = 'Hello, I would like to inquire about the ENTERPRISE plan.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
    confirmEmailVerification () {
      process.browser && localStorage.removeItem(FACILITY_STEP_1_DATA);
      this.$router.push({ name: 'signin' });
    },
  },
};
</script>
