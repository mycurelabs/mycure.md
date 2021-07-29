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
  'doctors-clinics': 'doctor',
  clinics: 'clinic',
  diagnostics: 'diagnostic',
  telehealth: 'doctor-telehealth',
  'clinics-skin': 'clinic',
  'clinics-dental': 'clinic',
  'clinics-ofw': 'clinic',
  'clinics-corporate': 'clinic',
  'diagnostics-mobile-labs': 'diagnostic',
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
    queryOps: {
      type: Object,
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
      if (routeName === 'booking') {
        route.query.from = 'booking';
        // - This was done since booking is a special case in health facility types
        if (this.queryOps?.type) route.query.type = this.queryOps.type;
        // - Flag for trial
        if (this.queryOps.trial) route.query.trial = this.queryOps.trial;
      }
      this.$router.push(route);
    },
  },
};
</script>
