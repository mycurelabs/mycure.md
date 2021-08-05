<template lang="pug">
  v-card(height="100%" elevation="3" rounded="lg").orgs-card.pb-13
    v-col.fill-height.mb-12.pa-8
      v-row(justify="center")
        v-col.py-0
          img(
            :src="picURL"
            alt="Services"
            width="120"
            height="120"
          ).rounded-circle
        v-spacer
        v-col(align="end").pa-0
          v-btn( icon )
            v-icon mdi-dots-horizontal
      v-row(justify="start")
        v-col.pa-0
          div.d-inline-flex
            p.font-weight-bold.font-24 {{ fullNameWithSuffixes }}&nbsp;
            v-icon(v-if="organization.doc_website" color="primary" large).mt-n4 mdi-check-decagram
      v-col(align="start").pa-0.mt-7
        v-row
          span.font-14.info-text Specialization
        v-row(v-if="organization.doc_specialties")
          span.font-16.info-text.font-weight-semibold {{ organization.doc_specialties[0] }}&nbsp;
        v-row(v-else)
          span ---
        v-row.mt-5
          span.font-14.info-text Years of Experience
        v-row(v-if="organization.doc_practicingSince" justify="start")
          span.font-16.info-text.font-weight-semibold {{ yearsOfExperience }} year/s of experience
        v-row(v-else)
          span ---
        v-row.mt-5
          span.font-14.info-text Tags
        v-row(v-if="organization.doc_specialties")
          v-chip(v-for="(specialty, key) in organization.doc_specialties" :key="key").font-12.ma-1 {{ specialty }}&nbsp;
        v-row(v-else)
          span ---
      v-btn(
        color="success"
        target="_blank"
        rel="noopener noreferrer"
        tile
        block
        x-large
        @click="openFacility"
      ).text-none.elevation-0.font-weight-light.mb-n8.ml-n8.card-actions
        v-icon mdi-stethoscope
        b &nbsp;Teleconsult
      v-btn(
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        tile
        block
        x-large
        @click="openFacility"
      ).text-none.elevation-0.font-weight-light.mb-n8.ml-n8.rounded-bl-lg.rounded-br-lg.card-actions2
        v-icon mdi-calendar
        b &nbsp;Book a Visit
</template>

<script>
// import VClamp from 'vue-clamp';
// import { format } from 'date-fns';
// import uniqBy from 'lodash/uniqBy';
// import { formatAddress, formatName } from '~/utils/formats';
// import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';

// import { formatName } from '~/utils/formats';
export default {
  components: {
    VClamp: () => import('vue-clamp'),
  },
  props: {
    organization: {
      type: Object,
      default: () => {},
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      { text: 'Mon', value: 1 },
      { text: 'Tues', value: 2 },
      { text: 'Wed', value: 3 },
      { text: 'Thu', value: 4 },
      { text: 'Fri', value: 5 },
      { text: 'Sat', value: 6 },
      { text: 'Sun', value: 0 },
    ];
    return {
      scheduleExpanded: false,
      isDescriptionExpanded: false,
    };
  },
  computed: {
    fullNameWithSuffixes () {
      let fullName = this.organization.name.firstName;
      if (this.organization.name.middleInitial) fullName = fullName + ' ' + this.organization.name.middleInitial;
      fullName = fullName + ' ' + this.organization.name.lastName;
      if (this.organization.name.generationalSuffix) fullName = fullName + ' ' + this.organization.name.generationalSuffix;
      if (this.organization.name.doc_professions) fullName = fullName + ', ' + this.organization.name.doc_professions;
      if (this.organization.name.academicSuffix) fullName = fullName + ', ' + this.organization.name.academicSuffix;
      if (this.organization.name.professionalSuffix) fullName = fullName + ', ' + this.organization.name.professionalSuffix;
      return fullName;
    },
    picURL () {
      const sex = this.organization?.sex;
      if (sex === 'female') {
        return this.organization?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.organization?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    yearsOfExperience () {
      const from = new Date(this.organization.doc_practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
  },
};
</script>

<style scoped>
.orgs-card {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}
.card-actions {
  position: absolute;
  bottom: 84px;
}
.card-actions2 {
  position: absolute;
  bottom: 32px;
}
.info-text {
 color: #393d45;
}
</style>
