<template lang="pug">
  div
    v-card(width="588").main-content
      v-tabs(
        background-color="#ececec"
      ).mb-2
        v-tab(href="#tab-1").text-none Doctors
        v-tab(href="#tab-2").text-none Specialization
      v-tabs-items
        v-card-text(v-for="(doctor, key) in doctors" :key="key").main-content
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
    //- v-pagination(
    //-   v-model="page"
    //-   :length="3"
    //-   prev-icon="mdi-menu-left"
    //-   prev-icon="mdi-menu-right"
    //- )
</template>

<script>
export default {
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      page: 1,
    };
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

<style scoped>
.main-content{
  background-color: #ececec;
}
</style>
