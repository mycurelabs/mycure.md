<template lang="pug">
  mc-btn(
    v-bind="$attrs"
    :event-label="eventLabel"
    @click="click"
  )
    slot
</template>

<script>
const healthFacilityTypeMap = {
  booking: 'doctor-booking',
  'doctors-clinics': 'doctor',
  clinics: 'clinic',
  diagnostics: 'diagnostic',
  telehealth: 'doctor-telehealth',
};
export default {
  props: {
    pricingBundle: {
      type: String,
      default: undefined,
    },
    eventLabel: {
      type: String,
      default: 'signup',
    },
    facilityType: {
      type: String,
      default: null,
    },
  },
  methods: {
    click () {
      const routeName = this.$route.name;
      const route = {
        name: 'signup-health-facilities',
        query: {},
      };
      if (healthFacilityTypeMap[routeName]) {
        route.query.type = healthFacilityTypeMap[routeName];
      }
      if (this.facilityType) route.query.type = this.facilityType;
      if (this.pricingBundle) {
        route.query.subscription = this.pricingBundle;
      }
      this.$router.push(route);
    },
  },
};
</script>
