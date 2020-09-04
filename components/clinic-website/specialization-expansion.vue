<template lang="pug">
  div
    v-expansion-panels(style="background-color: #ececec;" flat).pa-5
      v-expansion-panel(v-for="(specialization, key) in specializations" :key="key")
        v-expansion-panel-header.pa-1
          template(v-slot:actions)
            v-icon.primary--text.icon mdi-chevron-down
          span.header-title {{ specialization.title }}
          span.primary--text.mr-2.doctors-count {{ specialization.doctorsDetails.length }} Doctors
        v-expansion-panel-content(v-for="(docDetails, key) in specialization.doctorsDetails" :key="key")
          div.d-inline-flex
            v-avatar
              img(:src="require(`~/assets/images/clinics-website/${docDetails.image}`)")
            div.ml-3
              strong {{ docDetails.name }}
              p.ma-0 {{ docDetails.specialization }} | {{ docDetails.years }}
              v-btn(v-if="xlBelow" color="primary" @click="") Consult Now
            v-btn(v-if="xlOnly" color="primary" style="position: absolute; right: 6px;" @click="") Consult Now
</template>

<script>
export default {
  props: {
    doctors: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    this.specializations = [
      {
        title: 'For your Family',
        doctorsDetails: [
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '3 years', image: 'physician-male.png' },
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
        ],
      },
      {
        title: 'For your Kids',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '8 years', image: 'physician-male.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
        ],
      },
      {
        title: 'For Mothers',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '6 years', image: 'physician-male.png' },
        ],
      },
      {
        title: 'For your Lungs',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '7 years', image: 'physician-male.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
        ],
      },
      {
        title: 'For your Heart',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '9 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '3 years', image: 'physician-male.png' },
        ],
      },
      {
        title: 'For your Ears, Nose and Tongue',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '3 years', image: 'physician-male.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
        ],
      },
      {
        title: 'For your Mental Care',
        doctorsDetails: [
          { name: 'Dr. Minerva', specialization: 'Gen. Physician', years: '4 years', image: 'physician-female.png' },
          { name: 'Dr. Lily', specialization: 'Gen. Physician', years: '3 years', image: 'physician-female.png' },
          { name: 'Dr. Karlos', specialization: 'Gen. Physician', years: '3 years', image: 'physician-male.png' },
        ],
      },
    ];
    return {};
  },
  computed: {
    xlBelow () {
      return this.$vuetify.breakpoint.lgAndDown;
    },
    xlOnly () {
      return this.$vuetify.breakpoint.xlOnly;
    },
  },
};
</script>

<style scoped>
.icon {
  order: 0;
}
.header-title {
  max-width: 60% !important;
  order: 1;
}
.doctors-count {
  position: relative;
  text-align: right;
  order: 2;
}
</style>
