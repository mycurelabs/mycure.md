<template lang="pug">
  v-card(height="100%" elevation="3" style="border-radius: 30px").orgs-card.pa-2
    v-col.fill-height
      v-row(justify="center")
        v-col(cols="5")
          img(
            :src="picURL"
            alt="Services"
            :width="!$isMobile ? '154.48' : '102.66'"
            :height="!$isMobile ? '154.48' : '102.66'"
            style="border-radius: 30px"
          )
        v-col(cols="7").pt-10
          v-row
            p(:class="(fullNameWithSuffixes.length > 21) ? 'font-18' : 'font-24'").font-weight-bold.mb-0 {{ fullNameWithSuffixes }}&nbsp;
          v-row
            span(v-if="organization.doc_specialties").font-16.info-text {{ organization.doc_specialties[0] }}&nbsp;&nbsp;
            span(v-else) ---&nbsp;&nbsp;
            v-chip(v-if="organization.doc_website" color="primary" outlined x-small).mt-1 verified
          v-row(justify="start").mt-5.mb-3
            v-col(cols="2").pa-0
              v-icon(color="primary") mdi-briefcase-variant-outline
            v-col.pr-0.pb-0.pt-3.pl-2
              v-row
                span.font-12.info-text &nbsp;Experience
              v-row
                span(v-if="organization.doc_practicingSince" justify="start" :class="$isMobile ? 'font-12' : 'font-14'").info-text.font-weight-semibold &nbsp;{{ yearsOfExperience }} year/s of experience
                span(v-else justify="start" :class="$isMobile ? 'font-12' : 'font-14'").info-text.font-weight-semibold &nbsp;---
          v-row(justify="start" :class="$isMobile ? 'my-5' : 'mt-3'")
            v-col(cols="2").pa-0
              v-icon(color="primary") mdi-map-marker
            v-col.pr-0.pb-0.pt-3.pl-2
              v-row
                span.font-12.info-text &nbsp;Location
              v-row
                span(v-if="organization.doc_practicingSince" justify="start" :class="$isMobile ? 'font-12' : 'font-14'").info-text.font-weight-semibold &nbsp;{{ yearsOfExperience }} somewhere
                span(v-else justify="start" :class="$isMobile ? 'font-12' : 'font-14'").info-text.font-weight-semibold &nbsp;---
          v-row(justify="start").pt-3
            v-btn(
              color="success"
              target="_blank"
              rel="noopener noreferrer"
              small
              rounded
              :href="doctorWebsite"
            ).text-none.elevation-0.font-weight-light.ma-1.font-10
              v-icon(:x-small="!$isMobile") mdi-stethoscope
              b &nbsp;Teleconsult
            v-btn(
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              small
              rounded
              :href="doctorWebsite"
            ).text-none.elevation-0.font-weight-light.ma-1.font-10
              v-icon(:x-small="!$isMobile") mdi-calendar
              b &nbsp;Book a Visit
      v-row(v-if="organization.doc_specialties").mt-6.pa-2
        v-col(cols="12")
          v-row
            v-chip(v-for="(specialty, key) in organization.doc_specialties" :key="key").font-12.ma-1 {{ specialty }}&nbsp;
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
    doctorWebsite () {
      const username = this.organization?.doc_website; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/doctors/${username}`;
    },
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
.info-text {
 color: #393d45;
}
</style>
