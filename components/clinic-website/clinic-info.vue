<template lang="pug">
  generic-container
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
        h2.mb-10 Book an appointment with us.
        book-appointment-clinic-btn(
          content="Book Appointment"
          :extra-bindings="{ color: 'primary' }"
        )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import BookAppointmentClinicBtn from '~/components/commons/book-appointment-clinic-btn';
export default {
  components: {
    GenericContainer,
    BookAppointmentClinicBtn,
  },
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
