<template lang="pug">
  v-card(flat).rounded-md.pa-3
    v-card-text
      v-row(:justify="$isMobile ? 'center' : 'start'")
        v-col(cols="12" md="3" justify="center" align="center").text-center
          v-avatar(size="150")
            img(
              :src="picURL"
              alt="MYCURE Doctor"
              width="90%"
            )
        v-spacer(v-if="!$isMobile")
        v-col(cols="12" md="8")
          v-clamp(
            autoresize
          ).mc-h3.title-text Dr. {{ fullNameWithSuffixes }}
          div.my-4
            v-clamp(
              autoresize
              :max-lines="1"
              :class="{'font-italic': !specializations.length }"
              :style="{'colr: #A2A5AE;': !specializations.length }"
            ).mc-h5 {{ formattedSpecializations }}
          p(v-if="yearsOfExperience").mc-b2
            v-icon(color="secondary" :small="!$isWideScreen" left) {{ mdiBriefcaseVariantOutline }}
            span &nbsp;{{ yearsOfExperience }} year{{ yearsOfExperience > 1 ? 's' : '' }} of experience
      v-divider.my-5
      v-row
        v-col(cols="12")
          v-row(dense :justify="$isMobile ? 'center' : 'start'")
            h5.mc-h5.pt-2 Schedule
            v-spacer
            v-col(cols="12" md="4" xl="3").mr-n2
              v-select(
                v-model="appointmentType"
                :items="appointmentTypes"
                item-text="text"
                item-value="value"
                dense
                flat
                solo
                :append-icon="mdiMenuDown"
              )
                template(v-slot:selection="{ item }")
                  span.mc-b4 {{ item.text }}
          v-row(dense :justify="$isMobile ? 'center' : 'start'" align="center").pl-1.mt-n1
            div(v-for="(day, key) in daysList" :key="key" :class="$isMobile ? ['text-center', 'mx-1'] : 'mx-1' ").white--text
              div(:class="[badgeSize , isDoctorAvailable(day.value) ? 'success' : '#EEEEEE']").badge {{ day.text }}
            v-spacer(v-if="!$isMobile")
            div(:width="$isMobile ? '100%' : 'auto'").mt-2
              v-btn(
                text
                color="primary"
                :disabled="!isAvailable"
                @click="dialog.schedules = true"
              ).text-none
                span.mc-hyp2 View full schedule
                v-icon(small color="primary" right) {{ mdiInformationOutline }}
    v-card-actions
      v-btn(
        color="primary"
        depressed
        x-large
        block
        :disabled="!isAvailable"
        :href="bookURL"
        @click="trackBooking(appointmentType)"
      ).text-none
        span.mc-btn1 Book Now

    //- DIALOGS
    //- Schedule dialog
    v-dialog(v-model="dialog.schedules" width="600")
      v-card
        v-toolbar(flat)
          v-toolbar-title.primary--text Available Schedules
          v-spacer
          v-btn(icon @click="dialog.schedules = false")
            v-icon {{ mdiClose }}
        v-card-text
          schedules(
            non-mf-schedule
            :items="groupedSchedules"
          )
</template>

<script>
import VClamp from 'vue-clamp';
import {
  mdiInformationOutline,
  mdiClose,
  mdiMenuDown,
  mdiBriefcaseVariantOutline,
} from '@mdi/js';
import isNil from 'lodash/isNil';
import Schedules from '../services/AppointmentSchedules';
import Money from '~/components/commons/Money';
import { formatName } from '~/utils/formats';
import classBinder from '~/utils/class-binder';
import DefaultAvatar from '~/assets/images/commons/mycure-default-avatar.png';

export default {
  components: {
    Money,
    Schedules,
    VClamp,
  },
  filters: {
    formatName (provider) {
      if (!provider?.name) return 'CONCEALED Doctor';
      return `Dr. ${formatName(provider.name || {}, 'firstName middleInitial lastName generationalSuffix')}`;
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    organization: {
      type: String,
      default: null,
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
    this.appointmentTypes = [
      { text: 'Face-to-face Consult', value: 'physical' },
      { text: 'Online Consult', value: 'telehealth' },
    ];
    this.doctorAvatar = DefaultAvatar;
    this.previewCoveragesLimit = 1;
    return {
      dialog: {
        schedules: false,
      },
      appointmentType: 'telehealth',
      // icons
      mdiInformationOutline,
      mdiClose,
      mdiMenuDown,
      mdiBriefcaseVariantOutline,
    };
  },
  computed: {
    picURL () {
      return this.item?.picURL || require('~/assets/images/commons/mycure-default-avatar.png');
    },
    fullNameWithSuffixes () {
      if (!this.item?.name) return '';
      let fullName = this.item.name.firstName;
      if (this.item.name.middleInitial) fullName = fullName + ' ' + this.item.name.middleInitial;
      fullName = fullName + ' ' + this.item.name.lastName;
      if (this.item.name.generationalSuffix) fullName = fullName + ' ' + this.item.name.generationalSuffix;
      if (this.item.name.doc_professions) fullName = fullName + ', ' + this.item.name.doc_professions;
      if (this.item.name.academicSuffix) fullName = fullName + ', ' + this.item.name.academicSuffix;
      if (this.item.name.professionalSuffix) fullName = fullName + ', ' + this.item.name.professionalSuffix;
      return fullName;
    },
    specializations () {
      return this.item?.doc_specialties || [];
    },
    formattedSpecializations () {
      return this.specializations.join(', ') || 'No specializations listed';
    },
    yearsOfExperience () {
      const doc_practicingSince = this.item?.doc_practicingSince; // eslint-disable-line
      let from = doc_practicingSince; // eslint-disable-line
      if (`${from}`.length > 4) from = new Date(doc_practicingSince).getFullYear(); // eslint-disable-line
      const to = new Date().getFullYear();
      return to - from;
    },
    // - SCHEDULES
    fullSchedules () {
      /* NOTE: filtering was done because there are some schedules that are not clinical-consultation
       that were somehow assigned to the doctor. Possibly due to past bad data
      */
      return this.item?.schedulesData?.filter(schedule => schedule.meta?.serviceType === 'clinical-consultation') || [];
    },
    groupedSchedules () {
      const schedules = [...this.fullSchedules];
      return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
    },
    // Filter schedules according to selected appointmentType
    displaySchedules () {
      if (this.appointmentType === 'physical') {
        return this.groupedSchedules.filter(schedule => isNil(schedule.meta?.serviceSubtype) && !isNil(schedule.meta?.serviceType));
      }
      // else return telehealth
      return this.groupedSchedules.filter(schedule => schedule.meta?.serviceSubtype === 'telehealth');
    },
    isAvailable () {
      return this.displaySchedules.length;
    },
    bookURL () {
      if (this.isPreviewMode) return null;
      const PX_PORTAL_URL = process.env.PX_PORTAL_URL;
      const id = this.item.uid;
      return `${PX_PORTAL_URL}/create-appointment/step-1?doctor=${id}&clinic=${this.organization}&type=${this.appointmentType}`;
    },
    badgeSize () {
      return classBinder(this, {
        mobile: ['badge-size-mobile'],
        regular: ['badge-size'],
        wide: ['badge-size-wide'],
      });
    },
  },
  methods: {
    isDoctorAvailable (dayValue) {
      const matchedDay = this.displaySchedules.find(schedule => schedule.day === dayValue);
      return !isNil(matchedDay);
    },
    // utils
    formatDay (day) {
      return this.days?.find(item => item.value === day)?.text || '';
      // return day;
    },
    // Google analytics
    trackBooking (type) {
      this.$gtag.event('book', {
        event_category: 'clinic-website',
        event_label: `book-${type}-clinic-${this.organization}-service-${this.item.uid}`,
      });
    },
  },
};
</script>

<style scoped>
.badge {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(163, 163, 163);
}
.badge-size {
  height: 27px;
  width: 27px;
}
.badge-size-mobile {
  height: 24px;
  width: 24px;
}
.badge-size-wide {
  height: 30px;
  width: 30px;
}
</style>
