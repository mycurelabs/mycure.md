<template lang="pug">
  div.ml-8
    div.my-4
      h2.header-text Professional Info
    div
      div(:class="{ 'd-flex' : $isMobile }")
        div(:class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.mr-4.font-28.professional-info-item
          h3.primary--text Specialization
          span(v-if="specialtiesMapped").mb-3 {{specialtiesMapped}}
          i(v-else).mb-3 No data
        div(:class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.professional-info-item
          h3.primary--text Practicing Since
          i(v-if="!practicingSince").mb-3 No data
          span(v-else).mb-3 {{practicingSince | morph-date-format('YYYY')}}
      div(:class="{ 'border-bottom' : !$isMobile }").my-2.mb-5.professional-info-item
        h3.primary--text Educational Background
        i(v-if="education.length === 0").mb-3 No data
        template(v-else v-for="educ in education").mb-3
          span {{ educ | format-school }}
          br
          span {{educ.from}} - {{educ.to}}
          br

</template>
<script>
export default {
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
