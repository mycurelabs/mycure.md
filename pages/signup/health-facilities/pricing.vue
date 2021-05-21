<template lang="pug">
  h1 pricing
</template>

<script>
import { SUBSCRIPTION_MAPPINGS } from '~/constants/subscription';
import {
  DOCTORS_PRICING,
  CLINICS_PRICING,
  DIAGNOSTICS_PRICING,
} from '~/constants/pricing';
export default {
  layout: 'user',
  data () {
    this.subscriptionMappings = SUBSCRIPTION_MAPPINGS;
    this.doctorsPricing = DOCTORS_PRICING;
    this.clinicsPricing = CLINICS_PRICING;
    this.diagnotics = DIAGNOSTICS_PRICING;
    return {};
  },
};
</script>
