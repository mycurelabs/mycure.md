<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        v-tabs(v-model="selectedTab")
          v-tab(href="#clinics") Clinics
          v-tab(href="#professional-info") Professional Info
        v-tabs-items(v-model="selectedTab")
          v-tab-item(value="clinics")
            template(v-if="clinics.length === 0")
              div.text-center.pa-5
                h3.grey--text #[i No clinics to show]
            template(v-else v-for="(clinic, index) in clinics")
              clinic-item(:clinic="clinic")
          v-tab-item(value="professional-info")
            v-row
              v-col(cols="12" md="5")
                div.mb-5
                  h3 Specialization
                  span(v-if="specialtiesMapped") {{specialtiesMapped}}
                  i(v-else) No data
                div
                  h3 Practicing Since
                  i(v-if="!practicingSince") No data
                  span(v-else) {{practicingSince | morph-date-format('YYYY')}}
              v-col(cols="12" md="5")
                div.mb-5
                  h3 Educational Background
                  i(v-if="education.length === 0") No data
                  template(v-else v-for="educ in education")
                    span {{ educ | format-school }}
                    br
                    span {{educ.from}} - {{educ.to}}
                    br
</template>

<script>
import ClinicItem from './clinic-item';
export default {
  components: {
    ClinicItem,
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
