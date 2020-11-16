<template lang="pug">
  tr
    td
      v-avatar(size="50" rounded).ma-4
        img(v-lazy="picURL")
    td
      p.mb-2 {{ fullNameWithSuffixes }}
      v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none.font-weight-bold Book Now
    td
      p {{ specialties[0] }}
    td
      p {{ yearsOfExperience }} Years
    td
      v-btn(width="110" tile elevation="0" icon).letter-spacing-normal.text-none.primary--text.font-weight-bold View Website
</template>

<script>
import { formatName } from '~/utils/formats';
export default {
  props: {
    doctor: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    doctorWebsite () {
      const username = this.doctor?.doc_website; // eslint-disable-line
      return process.browser && `${window.location.origin}/doctors/${username}`;
    },
    bookAppointmentUrl () {
      const username = this.doctor?.doc_website; // eslint-disable-line
      return `${process.env.PX_PORTAL_URL}/appointment/step-1?doctor=${username}`;
    },
    picURL () {
      const sex = this.doctor?.sex;
      if (sex === 'female') {
        return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    // NOTE: might use later, don't remove
    // name () {
    //   return this.doctor?.name;
    // },
    fullName () {
      return formatName(this.doctor?.name || {}, 'firstName middleInitial lastName generationalSuffix');
    },
    fullNameWithSuffixes () {
      return [
        this.fullName,
        ...this.professions,
        this.doctor?.name.academicSuffix,
        this.doctor?.name.professionalSuffix,
      ].filter(Boolean).join(', ');
    },
    // NOTE: might use later, don't remove
    // bio () {
    //   return this.doctor?.doc_bio || ''; // eslint-disable-line
    // },
    specialties () {
      return this.doctor?.doc_specialties || []; // eslint-disable-line
    },
    professions () {
      return this.doctor?.doc_professions || []; // eslint-disable-line
    },
    practicingSince () {
      return this.doctor?.doc_practicingSince; // eslint-disable-line
    },
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    // NOTE: might use later, don't remove
    // services () {
    //   return this.doctor?.doc_services; // eslint-disable-line
    // },
    // education () {
    //   return this.doctor?.educations;
    // },
  },
};
</script>
