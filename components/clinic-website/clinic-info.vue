<template lang="pug">
  v-container(fluid)
    v-row(justify="start" align="start")
      v-col(cols="12" md="6")
        h3 {{ clinicName }}
        p.grey--text {{ clinicAddress }}
        v-row
          v-col(cols="12" md="6")
            template(v-for="item in schedules")
              h3 {{ item.day }}
              p {{ item.time }}
          v-col(cols="12" md="6")
            h3 {{ `${rates.currency}${rates.min}` }} - {{ `${rates.currency}${rates.max}` }}
            p Service Fee Range
      v-col(cols="12" md="4" offset-md="1")
        h1 Book an appointment with us.
        br
        v-btn(
          x-large
          color="primary"
        ).text-none Book Appointment
</template>

<script>
export default {
  props: {
    /**
     * Array of schedule objects
     * @type {Array}
     */
    schedules: {
      type: Array,
      default: () => ([]),
    },
    /**
     * String name of clinic
     * @type {String}
     */
    clinicName: {
      type: String,
      default: null,
    },
    /**
     * String address of clinic
     * @type {String}
     */
    clinicAddress: {
      type: String,
      default: null,
    },
    /**
     * Object rates of clinic (min, max, currency)
     * @type {Object}
     */
    rates: {
      type: Object,
      default: null,
    },
  },
};
</script>
