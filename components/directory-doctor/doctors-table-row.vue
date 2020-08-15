<template lang="pug">
  tr
    td.pa-1
      v-avatar
        img(:src="picURL")
    td {{ fullNameWithSuffixes }}
    td {{ specialties && specialties.join(', ') }}
    td
      span(v-if="yearsOfExperience") {{ yearsOfExperience }} year/s
      span(v-else) --
    td(width="229").pa-0
      v-row(no-gutters align="center" justify="end")
        v-col.pa-1.shrink
          v-btn(
            color="primary"
            rel="noreferrer noopener"
            target="_blank"
            depressed
            small
            :href="bookAppointmentUrl"
          ).text-none Book Now!
        v-col.pa-1.shrink
          v-menu(offset-y left)
            template(v-slot:activator="{ on, attrs }")
              v-icon(v-on="on").mx-3 mdi-dots-vertical
            v-btn(
              color="white"
              rel="noreferrer noopener"
              target="_blank"
              small
              :href="doctorWebsite"
            ).primary--text.text-none Visit Website
</template>

<script>
import { formatName } from '~/utils/formats';
export default {
  props: {
    doctor: {
      type: Object,
      default: null,
    },
  },
  computed: {
    doctorWebsite () {
      const username = this.doctor?.doc_website; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/doctors/${username}`;
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
