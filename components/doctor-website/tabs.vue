<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        v-card
          v-tabs(
            v-model="selectedTab"
            grow
          )
            v-tab(href="#clinics") Clinics
            v-tab(href="#services") Services
            v-tab(href="#learning-corner") Learning Corner
          v-tabs-items(v-model="selectedTab").pa-4
            v-tab-item(value="clinics")
              template(v-if="clinics.length === 0")
                div.text-center.pa-5
                  h3.grey--text #[i No clinics to show]
              template(v-else v-for="(clinic, index) in clinics")
                clinic-item(:clinic="clinic")
            v-tab-item(value="services")
              services(
                :services="services"
              )
            v-tab-item(value="learning-corner")
              learning-corner(
                :doctor-id="doctorId"
              )
</template>

<script>
// - components
import ClinicItem from './clinic-item';
import LearningCorner from './learning-corner';
import Services from './services';
export default {
  components: {
    ClinicItem,
    LearningCorner,
    Services,
  },
  filters: {
    formatSchool (educ) {
      if (!educ.degree) return educ.school;
      return `${educ.degree} - ${educ.school}`;
    },
  },
  props: {
    clinics: {
      type: Array,
      default: () => ([]),
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    professions: {
      type: Array,
      default: () => ([]),
    },
    education: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: [Date, Number],
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    services: {
      type: Array,
      default: () => ([]),
    },
    doctorId: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      selectedTab: 'clinics',
    };
  },
  computed: {
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    specialtiesMapped () {
      return this.specialties.join(', ');
    },
    professionsMapped () {
      return this.professions.join(', ');
    },
    educationsMapped () {
      return this.education;
    },
  },
};
</script>
