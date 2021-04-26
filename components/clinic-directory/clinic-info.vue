<template lang="pug">
  generic-container.my-10
    v-row(justify="start" align="start" :class="{ 'text-center': $isMobile }")
      v-col(cols="12" md="6")
        h3 {{ clinicName }}
        p.grey--text {{ clinicAddress }}
        v-row
          v-col(cols="12" md="6")
            template(v-if="schedules.length > 0")
              template(v-for="item in schedules")
                h3 {{ item.day }}
                p {{ item.time }}
            template(v-else)
              h3 No schedules added
          v-col(cols="12" md="6")
            h3 {{ rates }}
            p(v-if="hasRange") Service Fee Range
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
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    clinicName () {
      return this.info?.name || '';
    },
    clinicAddress () {
      return this.info?.address || '';
    },
    rates () {
      return this.hasRange
        ? `${this.info.rates.currency}${this.info.rates.min} - ${this.info.rates.currency}${this.info.rates.max}`
        : 'No range added';
    },
    schedules () {
      return this.info?.schedules || [];
    },
    hasRange () {
      return (this.info?.rates?.currency && this.info?.rates?.min && this.info?.rates?.max) !== undefined;
    },
  },
};
</script>
