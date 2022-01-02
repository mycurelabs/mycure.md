<template lang="pug">
  v-card(flat :class="$isWideScreen ? 'pa-8' : 'pa-3'").rounded-md
    v-card-text(:class="{'px-0': $isMobile}")
      v-row(:justify="$isMobile ? 'center' : 'start'")
        v-col(cols="12" md="3" align="center")
          v-avatar(:size="$isWideScreen ? '200' : '150'")
            img(
              :src="picURL"
              alt="MYCURE Doctor"
              width="90%"
            )
        v-spacer(v-if="!$isMobile")
        v-col(cols="12" md="8" xl="9")
          v-clamp(
            autoresize
          ).mc-h3.title--text Dr. {{ fullNameWithSuffixes }}
          div.my-4
            v-clamp(
              autoresize
              :max-lines="1"
              :class="[{'font-italic': !specializations.length }, {'unavailable--text': !specializations.length }]"
            ).mc-h5 {{ formattedSpecializations }}
          span(v-if="yearsOfExperience").mc-b2
            v-icon(color="secondary" :small="!$isWideScreen" left).mt-n1 {{ mdiBriefcaseVariant }}
            | {{ yearsOfExperience }} year{{ yearsOfExperience > 1 ? 's' : '' }} of experience
      v-divider(:class="$isWideScreen ? ['mb-5', 'mt-14'] : ['mb-3', 'mt-10']")
      v-row.mb-5
        v-col(cols="12")
          v-row(dense :justify="$isMobile ? 'center' : 'start'" align="center").py-4.pl-3
            v-col(cols="12" md="4" xl="7").pa-0
              span.mc-b4.pt-2.title--text.font-weight-bold Schedule
            v-spacer
            v-col(:cols="$isMobile ? '12' : null")
              v-tooltip(top :disabled="$isMobile")
                template(v-slot:activator="{ on, attrs }")
                  div(v-on="on").mr-n4
                    v-select(
                      v-model="appointmentType"
                      :items="appointmentTypes"
                      item-text="text"
                      item-value="value"
                      dense
                      flat
                      solo
                      hide-details
                      :append-icon="mdiMenuDown"
                    )
                      template(v-slot:selection="{ item }")
                        span.mc-b4 {{ item.text }}
                span Select Consultation Type
          v-row(dense :justify="$isMobile ? 'center' : 'start'" align="center" :class="$isMobile? 'mt-3' : 'mt-n1'").pl-1
            div(
              v-for="(day, key) in daysList"
              :key="key"
              :class="[{'text-center': $isMobile}, isDoctorAvailable(day.value) ? 'white--text' : 'unavailable--text', $isWideScreen ? 'mx-3' : 'mx-1']"
            )
              div(:class="isDoctorAvailable(day.value) ? 'success' : 'disabled'").badge.badge-size {{ day.text }}
            v-spacer(v-if="!$isMobile")
            a(
              v-if="!$isMobile"
              @click="dialog.schedules = true"
              :class="isAvailable ? 'primary--text' : ['unavailable--text', 'disable-click']"
            ).mc-b4.font-weght-semibold View full schedule
            v-col(v-else cols="12").text-center.mt-4
              a(
                @click="dialog.schedules = true"
                :class="isAvailable ? 'primary--text' : ['unavailable--text', 'disable-click']"
              ).mc-b4.font-weght-semibold View full schedule
                //- v-icon(small color="primary" right) {{ mdiInformationOutline }}
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
  mdiBriefcaseVariant,
} from '@mdi/js';
import isNil from 'lodash/isNil';
import Schedules from '../services/AppointmentSchedules';
import Money from '~/components/commons/Money';
import { formatName } from '~/utils/formats';
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
      mdiBriefcaseVariant,
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
.disable-click {
  pointer-events: none;
  cursor: default;
}
.badge {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(163, 163, 163);
}
.badge-size {
  height: 24px;
  width: 24px;
}

@media screen and (min-width: 1015px) {
  .badge-size {
    height: 27px;
    width: 27px;
  }
}
@media screen and (min-width: 1904px) {
  .badge-size {
    height: 33px;
    width: 33px;
  }
}
</style>
