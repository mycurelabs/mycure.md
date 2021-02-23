<template lang="pug">
  div.d-flex.pa-6
    v-avatar(v-if="isDoctor")
      img(
        v-if="doctor.picURL"
        :src="doctor.picURL"
        alt="Doctor Profile"
        )
      img(
        v-if="!doctor.picURL && doctor.sex === 'male'"
        src="~/assets/images/clinics-website/physician-male.png"
        alt="Male Doctor Profile"
      )
      img(
        v-if="!doctor.picURL && doctor.sex === 'female'"
        src="~/assets/images/clinics-website/physician-female.png"
        alt="Female Doctor Profile"
      )
    div.ml-3(v-if="isDoctor")
      strong.font-18 {{ doctor.doctorName}}
      p.ma-0
        span(v-if="doctor.specialties") {{ doctor.specialties }}
    div.ml-3(v-if="isService")
      strong.font-18 {{ service.name }}
    v-spacer
    v-row(v-if="isDoctor" align="center" justify="end")
      v-btn(
        v-if="xlBelow"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        :href="goToConsult(doctor)"
        outlined
      ) #[b Consult Now]
      v-btn(
        v-if="xlOnly"
        color="primary"
        style="position: absolute; right: 6px;"
        target="_blank"
        rel="noopener noreferrer"
        :href="goToConsult(doctor)"
        outlined
      ) #[b Consult Now]
    v-row(v-if="isService" align="center" justify="end")
      v-btn(
          v-if="xlBelow"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
          :href="goToConsult(doctor)"
          outlined
        ) #[b Book]
      v-btn(
        v-if="xlOnly"
        color="primary"
        style="position: absolute; right: 6px;"
        target="_blank"
        rel="noopener noreferrer"
        :href="goToConsult(doctor)"
        outlined
      ) #[b Book]
</template>
<script>
export default {
  props: {
    doctor: {
      type: Object,
      default: () => ({}),
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    service: {
      type: Object,
      default: () => ({}),
    },
    isService: {
      type: Boolean,
      default: false,
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
