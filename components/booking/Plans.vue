<template lang="pug">
  div(:class="$isMobile ? 'pricing-bg-mobile' : 'pricing-bg' ").mx-n3
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12")
            v-row(align="center" justify="center")
              v-col(cols="12").text-center
                h2.mc-title-set-2.font-weight-semibold.mb-5 {{ title }}
                p(:class="descriptionClasses").mb-5.font-open-sans.font-gray {{ description }}
            v-row(justify="center")
              v-col(cols="12" md="6" xl="4").text-center.mb-10
                div.d-flex.align-center.justify-center
                  strong(:class="descriptionClasses").font-open-sans.black--text.mr-3 Billed Monthly
                  v-switch(
                    v-model="switchModel"
                    inset
                    color="info"
                  )
                  strong(:class="descriptionClasses").font-open-sans.black--text Billed Annually
            v-row(v-if="loading" justify="center" dense).text-center
              v-col(cols="12")
                v-progress-circular(
                  color="primary"
                  indeterminate
                  size="150"
                )
            v-row(v-else justify="center" dense)
              template(v-if="!$isMobile")
                v-col(
                  v-for="(pack, key) in pricingPackages"
                  :key="key"
                  v-bind="columnBindings"
                )
                  pricing-card(
                    hide-invalid-items
                    :bundle="pack"
                    :payment-interval="paymentInterval"
                    :height="'750'"
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
                      hide-invalid-items
                      :bundle="pack"
                      :payment-interval="paymentInterval"
                      :height="'700'"
                    ).elevation-3
</template>

<script>
import omit from 'lodash/omit';
import { getSubscriptionPackagesPricing } from '~/services/subscription-packages';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import PricingCard from '~/components/commons/PricingCard';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    PricingCard,
    SignupButton,
  },
  props: {
    columnBindings: {
      type: Object,
      default: () => ({
        cols: '12',
        md: '4',
        xl: '3',
      }),
    },
  },
  data () {
    this.title = 'Try MYCURE Booking FREE!';
    this.description = 'All essential features to help start up your digital booking journey.';
    this.inclusions = [
      'Up to 1 user',
      'Up to 200 MB',
      'Classic Booking Website',
      'Fast appointments',
      'Online payments',
      'Patient Registration',
      'Medical Records',
      'Daily Census',
      'Sales Reports',
    ];
    this.descriptionClasses = ['mc-content-set-1'];
    return {
      loading: false,
      switchModel: false,
      pricingPackages: [],
      paymentInterval: 'month', // month | year
    };
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
    await this.fetchPackages();
  },
  methods: {
    async fetchPackages () {
      try {
        this.loading = true;
        // - Fetch doctor pricings
        const doctorPricings = await getSubscriptionPackagesPricing('doctor') || [];
        // - Get the 2nd package from doctors
        const doctorBookingPricing = {
          title: 'Doctors',
          image: 'Platinum',
          queryOps: {
            type: 'doctor',
          },
          ...omit(doctorPricings[1], 'title'),
        };
        // - Fetch clinic pricings
        const clinicPricings = await getSubscriptionPackagesPricing('clinic') || [];
        // - Get lowest pricing from clinics
        const clinicBookingPricing = {
          title: 'Outpatient Clinics',
          image: 'Platinum',
          queryOps: {
            type: 'clinic',
          },
          ...omit(clinicPricings[0], 'title'),
        };
        // - Fetch Diagnostic Pricings
        const diagnosticPricings = await getSubscriptionPackagesPricing('diagnostic') || [];
        // - Get lowest pricing from diagnostic
        const diagnosticBookingPricing = {
          title: 'Diagnostic Centers',
          image: 'Platinum',
          queryOps: {
            type: 'diagnostic',
          },
          ...omit(diagnosticPricings[0], 'title'),
        };
        // - Map Free Booking
        const freeBooking = {
          monthlyPrice: 0,
          annualMonthlyPrice: 0,
          image: 'Essentials',
          btnText: 'Try Free',
          title: 'Start Free',
          trial: true,
          description: 'All essential features to help start up your digital booking journey',
          inclusions: [
            { text: 'Up to 1 user', valid: true },
            { text: 'Up to 200 MB', valid: true },
            { text: 'Classic Booking Website', valid: true },
            { text: 'Fast appointments', valid: true },
            { text: 'Online payments', valid: true },
            { text: 'Patient Registration', valid: true },
            { text: 'Medical Records', valid: true },
            { text: 'Daily Census', valid: true },
            { text: 'Sales Reports', valid: true },
          ],
          queryOps: {
            trial: 1,
          },
        };

        // - Put them all together
        this.pricingPackages = [
          freeBooking,
          doctorBookingPricing,
          diagnosticBookingPricing,
          clinicBookingPricing,
        ];
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* .pricing-card {
  border: 2px solid #0174BB;
} */
.pricing-bg {
  width: 100vw;
  background-image: url('../../assets/images/pricing/MYCURE-Pricing BG Wide.png');
  background-position: center center;
  background-size: 100% 100%;
}
.pricing-bg-mobile {
  background-image: url('../../assets/images/pricing/MYCURE-Pricing BG Mobile.png');
  background-position: center bottom;
}
.divider {
  border-bottom: 1px solid black;
}
</style>
