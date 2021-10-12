<template lang="pug">
  v-card(width="100%" :class="paddings").rounded-xl
    v-card-text
      v-row(:justify="$isMobile? 'center' : 'start'")
        v-col(cols="10" :md="imageColumn" justify="center" align="center").text-center
          img(
            :src="picURL"
            alt="Services"
            width="90%"
          ).ma-3.rounded-xl
        v-spacer(v-if="!$isMobile")
        v-col(cols="12" :md="infoColumn" :class="{'pt-5': !$isMobile}").mc-content-set-6
          div
            v-clamp(
              autoresize
              :max-lines="2"
              :class="[nameClass]"
            ).font-weight-bold.mb-0 Dr. {{ fullNameWithSuffixes }}&nbsp;
          //- div(:class="{'text-center': $isMobile}").info--text.font-weight-semibold
          //-   v-clamp(
          //-     v-if="hasSpecialties"
          //-     autoresize
          //-     :max-lines="1"
          //-   ) {{ doctor.doc_specialties[0] }}&nbsp;&nbsp;
          //-   span(v-else-if="!hasSpecialties && !minified") ---&nbsp;&nbsp;
            //- v-chip(v-if="doctor.doc_website" color="secondary" outlined x-small).mt-1 verified
          v-row(align="start").mt-2
            v-icon(color="secondary" v-bind="iconBindings").mt-3 mdi-medical-bag
            v-col.font-gray
              span(:class="sectionHeaderClass") Specialization
              p(v-if="hasSpecialties").font-weight-semibold.mb-0 {{ specialtiesText }}&nbsp;&nbsp;
              p(v-else).font-weight-light.font-italic.mb-0.grey--text.text--lighten-1 No information
          v-row(:class="{'mt-2': !minified}" align="start")
            v-icon(color="secondary" v-bind="iconBindings").mt-3 mdi-briefcase-variant-outline
            v-col.font-gray
              span(:class="sectionHeaderClass") Experience
              v-clamp(
                v-if="doctor.doc_practicingSince"
                autoresize
                :max-lines="1"
              ).font-weight-semibold {{ yearsOfExperience }} year{{ yearsOfExperience > 1 ? 's' : '' }} of experience
              v-clamp(
                v-else
                autoresize
                :max-lines="1"
              ).font-weight-light.font-italic.grey--text.text--lighten-1 No information
          v-row(v-if="!minified" :class="{'mt-2': !minified}" align="start")
            v-icon(color="secondary" v-bind="iconBindings").mt-3 mdi-information-outline
            v-col.font-gray
              span(:class="sectionHeaderClass") About
              v-clamp(
                v-if="bio"
                autoresize
                :max-lines="3"
              ).font-weight-semibold {{ bio }}
              p(v-else).font-weight-light.font-italic.grey--text.text--lighten-1 No information
    v-spacer
    slot(name="card-actions")
      v-card-actions(v-if="showBookButtons").pa-2
        v-spacer
        v-btn(
          color="info"
          depressed
          :href="!readOnly && bookTeleconsultURL"
          :disabled="!hasTeleconsult"
        ).text-none.font-12.mx-1
          v-icon(small left) {{ hasTeleconsult ? 'mdi-video-outline' : 'mdi-close' }}
          span Online Consult
        v-btn(
          color="success"
          depressed
          :disabled="!isAvailable"
          :href="!readOnly && bookPhysicalURL"
        ).text-none.font-12.mx-1
          v-icon(small left) {{ isAvailable ? 'mdi-stethoscope' : 'mdi-close' }}
          span Visit Doctor
      v-card-actions(v-else).pa-0
        v-row(justify="center")
          v-col(cols="11")
            v-row(:justify="$isMobile ? 'center' : 'end'").py-4
                v-btn(
                  color="secondary"
                  rel="noopener noreferrer"
                  :href="doctorWebsite"
                  :disabled="!hasDoctorWebsite"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                ).text-none.elevation-0.rounded-pill
                  v-icon mdi-open-in-new
                  span.generic-button-text &nbsp;View Profile
</template>

<script>
import VClamp from 'vue-clamp';
import { format } from 'date-fns';
import uniqBy from 'lodash/uniqBy';
import { formatAddress } from '~/utils/formats';

const COMPONENT_SPECS = {
  paddings: {
    default: 'px-5 py-10',
    minified: 'px-1 py-1',
  },
  iconBindings: {
    default: { xLarge: true },
    minified: { medium: true },
  },
  imageColumn: {
    default: 5,
    minified: 3,
  },
  infoColumn: {
    default: 6,
    minified: 8,
  },
  nameClass: {
    default: 'mc-title-set-2',
    minified: 'mc-content-set-3',
  },
  sectionHeaderClass: {
    default: 'mc-content-set-5',
    minified: 'mc-content-set-5',
  },
};

export default {
  components: {
    VClamp,
  },
  props: {
    doctor: {
      type: Object,
      default: () => ({}),
    },
    organization: {
      type: String,
      default: null,
    },
    minified: {
      type: Boolean,
      default: false,
    },
    showBookButtons: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
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
      const { doc_practicingSince } = this.doctor;
      let from = doc_practicingSince;
      if (from.length > 4) from = new Date(doc_practicingSince).getFullYear();
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
    // Component specs
    version () {
      return this.minified ? 'minified' : 'default';
    },
    paddings () {
      return COMPONENT_SPECS.paddings[this.version];
    },
    iconBindings () {
      return COMPONENT_SPECS.iconBindings[this.version];
    },
    imageColumn () {
      return COMPONENT_SPECS.imageColumn[this.version];
    },
    infoColumn () {
      return COMPONENT_SPECS.infoColumn[this.version];
    },
    nameClass () {
      return COMPONENT_SPECS.nameClass[this.version];
    },
    sectionHeaderClass () {
      return COMPONENT_SPECS.sectionHeaderClass[this.version];
    },
    // Migrated from DocItemCard , re-check if what are only relevant
    fullSchedules () {
      return this.doctor?.scheduleData || this.doctor?.schedules || [];
    },
    groupedSchedules () {
      const schedules = [...this.fullSchedules];
      return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
    },
    previewSchedules () {
      return this.groupedSchedules?.slice(0, 3) || [];
    },
    todaySchedules () {
      if (!this.fullSchedules?.length) {
        return [];
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      return this.fullSchedules.filter(schedule => schedule.order === dayOrder || schedule.day === dayOrder) || [];
    },
    filteredDays () {
      return uniqBy(this.groupedSchedules, 'day').map(schedule => schedule.day);
    },
    scheduleNow () {
      if (!this.todaySchedules.length) return null;

      const timeNow = format(Date.now(), 'HH:mm');

      const availableNow = this.todaySchedules.find((schedule) => {
        const startTime = format(schedule.startTime, 'HH:mm');
        const endTime = format(schedule.endTime, 'HH:mm');
        return timeNow >= startTime && timeNow <= endTime;
      });

      return availableNow;
    },
    isAvailable () {
      return this.todaySchedules.length;
    },
    hasTeleconsult () {
      return this.doctor?.teleconsultQueue;
    },
    bookTeleconsultURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.doctor?.uid;
      return `${pxPortalUrl}/create-appointment/step-1?doctor=${id}&clinic=${this.organization}&type=telehealth`;
    },
    bookPhysicalURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.doctor?.uid;
      return `${pxPortalUrl}/create-appointment/step-1?doctor=${id}&clinic=${this.organization}&type=physical`;
    },
  },
};
</script>
