<template lang="pug">
  div
    v-card(v-for="(doctor, key) in doctors" :key="key").mb-3
      v-card-text
        div.d-inline-flex
          v-avatar
            img(:src="doctor.picURL" alt="Doctor Profile")
          div.ml-3
            strong {{ doctor.doctorName }}
            p.ma-0
              span(v-if="doctor.specialties") {{ doctor.specialties }}
            v-btn(
              v-if="xlBelow"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              :href="goToConsult(doctor)"
            ) Consult Now
          v-btn(
            v-if="xlOnly"
            color="primary"
            style="position: absolute; right: 6px;"
            target="_blank"
            rel="noopener noreferrer"
            :href="goToConsult(doctor)"
          ) Consult Now
</template>

<script>
export default {
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    xlBelow () {
      return this.$vuetify.breakpoint.lgAndDown;
    },
    xlOnly () {
      return this.$vuetify.breakpoint.xlOnly;
    },
  },
  methods: {
    goToConsult (doctor) {
      if (!doctor) return;
      const docUID = doctor.uid;
      const clinicID = doctor.organization;
      return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?doctor=${docUID}&organization=${clinicID}`;
    },
  },
};
</script>
