<template lang="pug">
  v-container(style="height: 100vh" fluid).fill-height
    v-item-group(
      v-model="selectedPricingModel"
      mandatory
      style="width: 100%"
    )
      v-row(justify="center" align="start")
        v-col(cols="6" md="6").text-center
          v-btn-toggle(
            v-model="paymentInterval"
            color="primary"
            mandatory
          )
            v-btn.text-none Pay Monthly
            v-btn.text-none Pay Annually
      v-row(justify="center" align="start")
        template(v-for="bundle in filteredPricing")
          v-col(cols="6" md="3")
            v-item(v-slot="{ active, toggle }")
              v-card(
                flat
                :style="{ border: `3px solid ${ active ? '#7fad33' : 'lightgrey' }` }"
                height="100%"
                @click="toggle"
              )
                v-card-title
                  v-spacer
                  h2.font-weight-semibold {{ bundle.title }}
                  v-spacer
                v-card-text(style="height: 380px;").general-info-container
                  div.text-center.pb-5
                    picture-source(
                      extension-exclusive
                      custom-path="pricing/"
                      :image="bundle.image"
                      image-file-extension=".png"
                      :image-alt="bundle.title"
                      :image-width="!$isMobile ? '50%' : '40%'"
                    )
                  div.text-center
                    div(v-if="bundle.requireContact")
                      p.font-l.font-weight-semibold Contact Us
                    template(v-else)
                      p.font-weight-bold
                        template(v-if='bundle.monthlyPrice > 0')
                          span.font-s.font-weight-semibold {{ bundle.currency }}&nbsp;
                          span.font-xl.font-weight-semibold {{ bundle.monthlyPrice }}
                        span(v-else).font-xl.font-weight-semibold FREE
                        //- span(v-else).font-xl {{ bundle.annualMonthlyPrice ? bundle.annualMonthlyPrice : bundle.monthlyPrice }}
                      p.font-s
                        span(v-if="bundle.users") {{ bundle.users }} user
                        br
                        | per clinic
                        br
                        | per month
                  div.text-center.description-container
                    p.info--text {{ bundle.description }}
                v-card-text(style="height: 360px;")
                  v-row(justify="center")
                    v-col(cols="12" xl="10")
                      div(v-for="(inclusion, inclusionKey) in bundle.inclusions" :key="inclusionKey").d-flex
                        v-icon(:color="getInclusionColor(inclusion.valid)" left) mdi-check
                        span(:class="inclusion.valid ? 'info--text' : 'grey--text'") {{ inclusion.text }}
                v-card-actions
                  v-btn(
                    color="success"
                    large
                    block
                    :disabled="!active || loading"
                    :loading="loading"
                    @click="selectBundle(bundle)"
                  ).text-none Select {{bundle.title}}
                //- v-card-text
                  pre {{bundle}}
    email-verification-dialog(v-model="emailVerificationMessageDialog" :email="email" @confirm="confirmEmailVerification")
    stripe-checkout(
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    )
    v-dialog(v-model="paymentErrorDialog" width="400")
      v-card
        v-card-text.pa-10.text-center
          v-icon(style="font-size: 40px;").error--text mdi-close
          h2 Error!
          p Checkout process didn't go through!
</template>

<script>
import { isEmpty } from 'lodash';
import EmailVerificationDialog from '~/components/signup/EmailVerificationDialog';
import PictureSource from '~/components/commons/PictureSource';
import { SUBSCRIPTION_MAPPINGS } from '~/constants/subscription';
import { ALL_PRICING } from '~/constants/pricing';
import { signupFacility } from '~/utils/axios';
// import { getSubscriptionPackages } from '~/services/subscription-packages';
const FACILITY_STEP_1_DATA = 'facility:step1:model';
export default {
  components: {
    EmailVerificationDialog,
    PictureSource,
  },
  layout: 'user',
  data () {
    this.subscriptionMappings = SUBSCRIPTION_MAPPINGS;
    this.publishableKey = process.env.STRIPE_PK;
    // this.queryTypeMapping = {
    //   doctor:
    // };
    return {
      loading: false,
      paymentErrorDialog: false,
      paymentInterval: 0,
      selectedPricingModel: 0,
      selectedPricing: {},
      emailVerificationMessageDialog: false,
      sessionId: '',
    };
  },
  computed: {
    step1LocalStorageData () {
      return process.browser && JSON.parse(localStorage.getItem(FACILITY_STEP_1_DATA));
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
      return this.$route.query.type || this.organizationTypes0;
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
  },
  watch: {
    selectedPricingModel: {
      handler (val) {
        this.selectedPricing = this.filteredPricing[val];
      },
      immediate: true,
    },
  },
  mounted () {
    if (this.paymentState === 'success') {
      this.$nuxt.$router.push({ name: 'signup-health-facilities-otp-verification' });
    }
    if (this.paymentState === 'cancel') {
      this.paymentErrorDialog = true;
    }
  },
  methods: {
    async selectBundle (bundle) {
      try {
        this.loading = true;
        if (bundle.requireContact) {
          this.sendCrispMessage();
          return;
        }

        // Build payload
        const payload = {
          ...this.step1LocalStorageData,
        };

        // TODO: Subscription logic block
        const paid = bundle.annualMonthlyPrice > 0 || bundle.monthlyPrice;

        if (paid) {
          // Build organization payload
          payload.organization = {
            ...this.step1LocalStorageData?.organization,
            subscription: {
              // TODO: infer from selected bundle
              // package: bundle.id,
              package: 'package_physicians_premium_usd_monthly',
              stripeCheckoutSuccessURL: process.client && `${window.location.origin}${window.location.pathname}?payment=success`,
              stripeCheckoutCancelURL: process.client && `${window.location.origin}${window.location.pathname}?payment=cancel`,
            },
          };
        }

        const user = await signupFacility(payload);

        if (!isEmpty(user?.organization?.subscription?.updatesPending)) {
          this.sessionId = user.organization.subscription.updatesPending.stripeSession;
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
      } finally {
        this.loading = false;
      }
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
