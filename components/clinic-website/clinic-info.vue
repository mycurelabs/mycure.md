<template lang="pug">
  v-container(fluid)
      v-row(justify="start" align="start")
        v-col(cols="12" md="6")
          h3 {{ clinicName }}
          p.grey--text {{ clinicAddress }}
          v-row
            v-col(cols="12" md="6")
              div(v-for="(item, key) in schedules" :key="key")
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
    schedules: {
      type: Array,
      default: () => ([]),
    },
    clinicName: {
      type: String,
      default: null,
    },
    clinicAddress: {
      type: String,
      default: null,
    },
    rates: {
      type: Object,
      default: null,
    },
  },
};
</script>
