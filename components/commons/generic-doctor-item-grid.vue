<template lang="pug">
  v-col(cols="6" lg="2" md="4" sm="6").pa-1
    v-card(height="100%").elevation-1
      v-card-text.pa-1.py-4.text-center
        v-avatar(size="80" rounded)
          img(:src="picURL")
      v-card-text(style="min-height: 55px").pa-1.text-center
        v-tooltip(bottom)
          template(v-slot:activator="{ on, attrs }")
            p(
              style="line-height: 15px;"
              v-on="on"
            ).mb-0 #[b {{ fullNameWithSuffixes | morph-truncate(18) }}]
          span {{fullNameWithSuffixes}}
        p(style="line-height: 15px;").mb-0.grey--text.caption {{ specialties[0] }}
        p(style="line-height: 15px;" v-if="practicingSince").mb-0.grey--text.caption {{yearsOfExperience}} #[span(v-if="practicingSince") Years]
      v-card-text.pa-1.text-center
        v-btn(
          color="primary"
          elevation="0"
          rel="noreferrer noopener"
          small
          target="_blank"
          :href="bookAppointmentUrl"
        ).mb-1.text-none Book Now!
      v-card-actions.pa-0
        v-btn(
          block
          depressed
          rel="noreferrer noopener"
          small
          target="_blank"
          :href="doctorWebsite"
        ).text-none View Website
</template>

<script>
import { formatName } from '~/utils/formats';
export default {
  props: {
    /**
     * Object doctor item
     * @type {Object}
     */
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

<style scoped>
.right-border {
  border-right: 1px solid #bfc3cc !important;
}
.btn-bottom-left {
  border-bottom-left-radius: 5px;
}
.btn-bottom-right {
  border-bottom-right-radius: 5px;
}
</style>
