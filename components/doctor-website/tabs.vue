<template lang="pug">
  v-container
    v-row(v-if="!$isMobile" justify="center")
      v-col(cols="12" md="11")
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
                clinic-item(
                  :clinic="clinic"
                  :doctor-id="doctorId"
                )
              v-pagination(
                v-if="this.selectedTab === 'clinics'"
                v-model="page"
                :length="length"
              )
            v-tab-item(value="services")
              services(
                :services="services"
              )
            v-tab-item(value="learning-corner")
              learning-corner(
                :doctor-id="doctorId"
              )
    v-row(v-else)
      v-expansion-panels(:class="{ 'd-block' : $isMobile }" focusable).elevation-0.mx-2.tabs-mobile
        v-card.mb-3.mx-5
          v-expansion-panel
            v-expansion-panel-header
              span.font-weight-bold.font-20 Clinics
              template(v-slot:actions)
                v-icon(color="primary") mdi-chevron-right
            v-expansion-panel-content
              template(v-if="clinics.length === 0")
                div.text-center.pa-5
                  h3.grey--text #[i No clinics to show]
              template(v-else v-for="(clinic, index) in clinics")
                clinic-item(
                  :clinic="clinic"
                  :doctor-id="doctorId"
                )
              v-pagination(
                v-if="this.selectedTab === 'clinics'"
                v-model="page"
                :length="length"
              )
        v-card.mb-3.mx-5
          v-expansion-panel
            v-expansion-panel-header
              span.font-weight-bold.font-20 Services
              template(v-slot:actions)
                v-icon(color="primary") mdi-chevron-right
            v-expansion-panel-content
              services(
                :services="services"
              )
        v-card.mb-3.mx-5
          v-expansion-panel
            v-expansion-panel-header
              span.font-weight-bold.font-20 Learning Corner
              template(v-slot:actions)
                v-icon(color="primary") mdi-chevron-right
            v-expansion-panel-content
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
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 3,
    },
  },
  data () {
    return {
      selectedTab: 'clinics',
      page: 1,
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
    length () {
      return Math.ceil(this.total / this.limit) || 0;
    },
  },
  watch: {
    page (val) {
      this.$emit('onUpdatePage', val);
      return val;
    },
  },
};
</script>
<style scoped>
.tabs-mobile span {
  color: #4D4D4D;
}
</style>
