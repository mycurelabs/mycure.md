<template lang="pug">
  v-card(width="100%").px-1.py-1.rounded-xl
    v-card-text
      v-row(:justify="$isMobile ? 'center' : 'start'")
        v-col(cols="5" md="3" justify="center" align="center").text-center
          img(
            :src="picURL"
            alt="Services"
            width="90%"
          ).ma-3.rounded-xl
        v-col(cols="12" md="8").pt-5
          div
            v-clamp(
              autoresize
              :max-lines="1"
            ).font-weight-bold.mb-0.mc-content-set-3 Dr. {{ fullNameWithSuffixes }}&nbsp;
          div.info--text.font-weight-semibold
            v-clamp(
              v-if="hasSpecialties"
              autoresize
              :max-lines="1"
            ) {{ doctor.doc_specialties[0] }}&nbsp;&nbsp;
            //- v-chip(v-if="doctor.doc_website" color="primary" outlined x-small).mt-1 verified
          v-row.mt-2.px-3
            v-icon(color="primary") {{ mdiMedicalBag }}
            v-col.py-0.font-gray
              span.mc-content-set-4 Specialization
              p(v-if="hasSpecialties").ma-0.font-weight-semibold {{ specialtiesText }}&nbsp;&nbsp;
              p(v-else).ma-0.font-weight-semibold.font-italic &nbsp;No information provided
          v-row.px-3.pb-3
            v-icon(color="primary" ) {{ mdiBriefcaseVariantOutline }}
            v-col.py-0.font-gray
              span.mc-content-set-4 Experience
              v-clamp(
                v-if="doctor.doc_practicingSince"
                autoresize
                :max-lines="1"
              ).font-weight-semibold {{ yearsOfExperience }} year{{ yearsOfExperience > 1 ? 's' : '' }} of experience
              v-clamp(
                v-else
                autoresize
                :max-lines="1"
              ).font-weight-semibold.font-italic &nbsp;No Information
          v-row(v-if="!minified" :class="{'mt-2': !minified}").pa-3
            v-icon(color="primary" v-bind="iconBindings") {{ mdiInformationOutline }}
            v-col.font-gray
              span.mc-content-set-4 About
              v-clamp(
                v-if="bio"
                autoresize
                :max-lines="1"
              ).font-weight-semibold {{ bio }}
              p(v-else).font-weight-semibold No information provided
      v-divider.mb-2.mt-5
      //- Schedules
      v-row(justify="end").pt-2.px-4
        //- v-col(cols="1" v-if="!$isMobile")
        //- v-badge(
        //-   v-for="(day, key) in daysList"
        //-   :key="key"
        //-   :color="isClinicOpen(day.value) ? 'success' : 'grey'"
        //-   :content="day.text"
        //-   inline
        //-   x-large
        //- )
        //- div.d-flex.white--text.mt-2
        v-col(v-for="(day, index) in daysList" :key="index" :class="{'pl-0': $isMobile}").white--text.pr-0
          div(:class="[textFontSize, badgeSize , isClinicOpen(day.value) ? 'success' : 'grey']").badge
            | {{ day.text }}
        v-spacer
        //- a(v-if="!$isMobile" @click="scheduleDialog = true").primary--text.font-weight-medium View full schedule
        v-col(cols="12" sm="4" :align="$isMobile ? 'start' : 'end'").pl-0
          a(@click="scheduleDialog = true").primary--text.font-weight-medium View full schedule
    v-spacer
    slot(name="card-actions")
      v-card-actions(v-if="showBookButtons").pa-3
        v-spacer(v-if="!$isMobile")
        div(:class="{'d-inline-flex': !$isMobile}")
          v-btn(
            color="info"
            depressed
            large
            :block="$isMobile"
            :href="!readOnly && bookTeleconsultURL"
            :disabled="!hasTeleconsult"
            @click="trackBooking('telehealth')"
          ).text-none.font-12.mx-1
            v-icon(small left) {{ hasTeleconsult ? mdiVideoOutline : mdiClose }}
            span Online Consult
          v-btn(
            color="success"
            depressed
            large
            :block="$isMobile"
            :disabled="!isAvailable"
            :href="!readOnly && bookPhysicalURL"
            :class="{'mt-2': $isMobile}"
            @click="trackBooking('physical')"
          ).text-none.font-12.mx-1
            v-icon(small left) {{ isAvailable ? mdiStethoscope : mdiClose }}
            span Visit Doctor
        v-spacer(v-if="!$isMobile")
      v-card-actions(v-else).pa-0
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
                  v-icon {{ mdiOpenInNew }}
                  span.generic-button-text &nbsp;View Profile
    v-dialog(v-model="scheduleDialog" width="600")
      v-card.pa-3
        v-toolbar(flat)
          v-toolbar-title.primary--text Schedules
            br
            h5.black--text Dr. {{ fullNameWithSuffixes }}
          v-spacer
          v-btn(icon @click="scheduleDialog = false")
            v-icon {{ mdiClose }}
        v-card-text.pt-3
          schedules-list(:items="groupedSchedules")
</template>

<script>
import VClamp from 'vue-clamp';
import isNil from 'lodash/isNil';
import {
  mdiClose,
  mdiOpenInNew,
  mdiStethoscope,
  mdiVideoOutline,
  mdiBriefcaseVariantOutline,
  mdiMedicalBag,
  mdiInformationOutline,
} from '@mdi/js';
import SchedulesList from './services/service-schedules';
import classBinder from '~/utils/class-binder';
import { formatAddress } from '~/utils/formats';

export default {
  components: {
    SchedulesList,
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
    isBookingEnabled: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.daysList = [
      { text: 'M', value: 1 },
      { text: 'T', value: 2 },
      { text: 'W', value: 3 },
      { text: 'R', value: 4 },
      { text: 'F', value: 5 },
      { text: 'S', value: 6 },
      { text: 'S', value: 0 },
    ];
    return {
      scheduleDialog: false,
      mdiClose,
      mdiOpenInNew,
      mdiStethoscope,
      mdiVideoOutline,
      mdiBriefcaseVariantOutline,
      mdiMedicalBag,
      mdiInformationOutline,
    };
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
      return this.doctor?.picURL || require('~/assets/images/commons/mycure-default-avatar.png');
    },
    specialtiesText () {
      return this.doctor?.doc_specialties?.join(', ') || '';
    },
    yearsOfExperience () {
      const doc_practicingSince = this.doctor?.doc_practicingSince; // eslint-disable-line
      let from = doc_practicingSince; // eslint-disable-line
      if (`${from}`.length > 4) from = new Date(doc_practicingSince).getFullYear(); // eslint-disable-line
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
    fullSchedules () {
      return this.doctor?.schedulesData || this.doctor?.schedules || [];
    },
    groupedSchedules () {
      const schedules = [...this.fullSchedules];
      return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
    },
    todaySchedules () {
      if (!this.fullSchedules?.length) {
        return [];
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      const fullSchedules = [...this.fullSchedules];
      return fullSchedules.filter(schedule => (schedule.order || schedule.day) === dayOrder) || [];
    },
    isAvailable () {
      return this.fullSchedules.length && this.isBookingEnabled;
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
    badgeSize () {
      return classBinder(this, {
        mobile: ['badge-size-mobile'],
        regular: ['badge-size'],
        wide: ['badge-size-wide'],
      });
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-14'],
        wide: ['font-18'],
      });
    },
  },
  methods: {
    visitWebsite () {
      const username = this.doctor?.doc_website || this.doctor?.id;
      this.$router.push(`/doctors/${username}`);
    },
    isClinicOpen (dayValue) {
      const matchedDay = this.groupedSchedules.find(schedule => (schedule.day || schedule.order) === dayValue);
      return !isNil(matchedDay);
    },
    // - Google Analytics
    trackBooking (type) {
      this.$gtag.event('book', {
        event_category: 'clinic-website',
        event_label: `book-${type}-clinic-${this.organization}-doctor-${this.doctor.uid}`,
      });
    },
  },
};
</script>

<style scoped>
.badge-size {
  height: 30px;
  width: 30px;
}
.badge-size-mobile {
  height: 20px;
  width: 20px;
}
.badge-size-wide {
  height: 40px;
  width: 40px;
}
.badge {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(163, 163, 163);
}
</style>
