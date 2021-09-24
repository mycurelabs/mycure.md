<template lang="pug">
  v-card(width="100%").px-5.py-10.rounded-xl
    v-card-text
      v-col(cols="12")
        v-row
          v-col(cols="5" justify="center" align="center")
            img(
              :src="picURL"
              alt="Services"
              width="90%"
            ).ma-3.rounded-xl
          v-col(cols="6").pt-5
            div
              v-clamp(
                autoresize
                :max-lines="1"
              ).font-weight-bold.mb-0.mc-title-set-2 {{ fullNameWithSuffixes }}&nbsp;
            div.mc-content-set-1.info--text.font-weight-semibold
              v-clamp(
                v-if="hasSpecialties"
                autoresize
                :max-lines="1"
              ) {{ doctor.doc_specialties[0] }}&nbsp;&nbsp;
              span(v-else) ---&nbsp;&nbsp;
              //- v-chip(v-if="doctor.doc_website" color="primary" outlined x-small).mt-1 verified
            v-row.mt-5
              v-icon(color="primary" x-large) mdi-medical-bag
              v-col.mc-content-set-1.font-gray
                span.mc-content-set-4 Specialization
                p(v-if="hasSpecialties").font-weight-semibold {{ specialtiesText }}&nbsp;&nbsp;
                span(v-else).font-weight-semibold &nbsp;---
            v-row.mt-2
              v-icon(color="primary" x-large) mdi-briefcase-variant-outline
              v-col.mc-content-set-1.font-gray
                span.mc-content-set-4 Experience
                v-clamp(
                  v-if="doctor"
                  autoresize
                  :max-lines="1"
                ).font-weight-semibold {{ doctor.doc_practicingSince ? yearsOfExperience : '-' }} year/s of experience
                span(v-else).font-weight-semibold &nbsp;- year/s of experience
            v-row.mt-2
              v-icon(color="primary" x-large) mdi-information-outline
              v-col.mc-content-set-1.font-gray
                span.mc-content-set-4 About
                v-clamp(
                  v-if="bio"
                  autoresize
                  :max-lines="1"
                ).font-weight-semibold {{ bio }}
                p(v-else).font-weight-semibold No information provided
    v-spacer
    v-card-actions.pa-0
      v-row(justify="center")
        v-col(cols="11")
          v-row(justify="end").py-4
              v-btn(
                color="primary"
                rel="noopener noreferrer"
                :href="doctorWebsite"
                :disabled="!hasDoctorWebsite"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                @click="visitWebsite"
              ).text-none.elevation-0.rounded-pill
                v-icon mdi-open-in-new
                span.generic-button-text &nbsp;View Profile
</template>

<script>
import VClamp from 'vue-clamp';
import { formatAddress } from '~/utils/formats';
export default {
  components: {
    VClamp,
  },
  props: {
    doctor: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    hasDoctorWebsite () {
      return !!this.doctor?.doc_website && !!this.doctor?.id;
    },
    doctorWebsite () {
      const username = this.doctor?.doc_website || this.doctor?.id; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/doctors/${username}`;
    },
    fullNameWithSuffixes () {
      if (!this.doctor?.name) return '';
      let fullName = this.doctor.name.firstName;
      if (this.doctor.name.middleInitial) fullName = fullName + ' ' + this.doctor.name.middleInitial;
      fullName = fullName + ' ' + this.doctor.name.lastName;
      if (this.doctor.name.generationalSuffix) fullName = fullName + ' ' + this.doctor.name.generationalSuffix;
      if (this.doctor.name.doc_professions) fullName = fullName + ', ' + this.doctor.name.doc_professions;
      if (this.doctor.name.academicSuffix) fullName = fullName + ', ' + this.doctor.name.academicSuffix;
      if (this.doctor.name.professionalSuffix) fullName = fullName + ', ' + this.doctor.name.professionalSuffix;
      return fullName;
    },
    picURL () {
      return this.doctor?.picURL || require('~/assets/images/commons/MYCURE Default Avatar.png');
    },
    specialtiesText () {
      return this.doctor?.doc_specialties?.join(', ') || '';
    },
    yearsOfExperience () {
      const from = new Date(this.doctor.doc_practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    address () {
      const { address } = this.doctor;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    bio () {
      return this.doctor?.doc_bio;
    },
    hasSpecialties () {
      return this.doctor?.doc_specialties?.length;
    },
  },
  methods: {
    visitWebsite () {
      const username = this.doctor?.doc_website || this.doctor?.id;
      this.$router.push(`/doctors/${username}`);
    },
  },
};
</script>
