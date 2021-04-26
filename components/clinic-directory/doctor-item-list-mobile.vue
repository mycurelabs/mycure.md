<template lang="pug">
  v-col(cols="12")
    v-card
      div.d-flex
        v-avatar(size="100" rounded).ma-4
          img(v-lazy="picURL")
        div
          v-card-title.headline.word-break {{ fullNameWithSuffixes }}
          v-card-subtitle.pb-2 {{ specialties[0] }} | {{ yearsOfExperience }} Years
          v-card-actions.ml-2
            v-btn(color="primary" elevation="0" width="110").letter-spacing-normal.text-none Book Now!
        div.ml-auto.mr-1
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-dots-vertical
            v-list
              v-list-item
                v-btn(width="110" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Website
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
    doctorName () {
      const name = `${this.doctor?.fullName || ''} ${this.doctor?.title || ''}`;
      if (this.$vuetify.breakpoint.name === 'xs' && name.length > 15) {
        return this.$morphTruncate(name, 15);
      }
      return name;
    },
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

<style scoped>
.word-break {
  word-break: break-word;
}
</style>
