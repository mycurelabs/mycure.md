<template lang="pug">
  div.ml-8
    div.my-4
      h2.header-text Professional Info
    div(v-if="hasInfo")
      div(:class="{ 'd-flex' : $isMobile }")
        div(v-if="specialtiesMapped" :class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.pb-5.mr-4.font-28.professional-info-item
          h3.primary--text Specialization
          span.font-14.mb-3 {{specialtiesMapped}}
        div(v-if="practicingSince" :class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.pb-5.professional-info-item
          h3.primary--text Practicing Since
          span.font-14.mb-3 {{practicingSince | morph-date-format('YYYY')}}
      div(v-if="education.length" :class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.pb-5.professional-info-item
        h3.primary--text Educational Background
        template(v-for="educ in education").mb-3
          strong.font-14 {{educ.from }} - {{ educ.to }}
          br
          span.font-14 {{ educ | format-school }}
          br
    div(v-else)
      h5.font-italic.grey--text No information available
</template>

<script>
export default {
  filters: {
    formatSchool (educ) {
      if (!educ.degree) return educ.school;
      return `${educ.degree} - ${educ.school}`;
    },
  },
  props: {
    specialties: {
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
    educationsMapped () {
      return this.education;
    },
    hasInfo () {
      return this.specialtiesMapped || this.education?.length || this.practicingSince;
    },
  },
};
</script>
<style scoped>
.border-bottom {
  border-bottom: 1px solid;
}
.professional-info-item {
  color: #777777;
}
.header-text {
  color: #4D4D4D;
}
</style>
