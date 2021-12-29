<template lang="pug">
  v-card(width="100%" flat).px-1.py-8.rounded-lg
    v-card-text
      v-row(justify="center")
        v-col(cols="6" md="3" :class="{'text-center': $isMobile}").pb-0
          img(
            :src="clinicPicURL"
            alt="Services"
            width="90%"
          ).mt-3.rounded-circle
        v-col(cols="12" md="8").pt-5
          v-row.pa-3
            v-clamp(
              autoresize
              :max-lines="2"
            ).mb-0.mc-h3.black--text {{ clinic.name }}&nbsp;
            v-spacer
          //- Address
          v-row(align="top").mt-2.px-3
            v-icon(color="primary").mr-2 {{ mdiMapMarker }}
            v-col.pa-0
              v-clamp(
                autoresize
                :max-lines="2"
                :class="[{ 'font-italic': !clinic.address }, { 'text-left': $isMobile }]"
                :style="!clinic.address ? 'color: #BFBFBF;' : ''"
              ).mc-b2 {{ clinic.address | prettify-address }}&nbsp;&nbsp;
          //- Contact
          v-row.px-3
            v-icon(color="primary").mr-2 {{ mdiPhoneInTalk }}
            span(
              :class="{ 'font-italic': !phone }"
              :style="!phone ? 'color: #BFBFBF;' : ''"
            ).mc-b2 {{ phone || 'No information provided' }}
          //- Email
          v-row.px-3
            v-icon(color="primary").mr-2 {{ mdiEmail }}
            span(
              :class="{ 'font-italic': !email }"
              :style="!email ? 'color: #BFBFBF;' : ''"
            ).mc-b2 {{ email || 'No information provided'}}
      v-row(justify="end").px-8
        v-col(cols="12").py-6
          v-divider
      //- Schedules
      v-row(justify="center")
        v-col(cols="12" md="11")
          v-row(v-if="!$isMobile" justify="center" align="center").my-1
            div(
              v-for="(day, index) in daysList"
              :key="index"
              :class="[{'text-center': $isMobile}, isClinicOpen(day.value) ? 'white--text' : 'unavailable--text' ]"
            ).mx-3
              div(:class="[textFontSize, isClinicOpen(day.value) ? 'primary' : 'disabled']").badge.badge-size
                | {{ day.text }}
            v-spacer
            a(v-if="operatingSchedules.length && !$isMobile" @click="scheduleDialog = true").primary--text.font-weight-semibold.mc-b4 View full schedule
            v-icon(v-if="operatingSchedules.length && !$isMobile" small color="primary").ml-1 {{ mdiInformationOutline }}
          div(v-else).mb-2
            v-row.d-flex.justify-space-around.mb-3
              div(
                v-for="(day, index) in daysList"
                :key="index"
                :class="[{'text-center': $isMobile}, isClinicOpen(day.value) ? 'white--text' : 'unavailable--text' ]"
              )
                div(:class="[textFontSize, isClinicOpen(day.value) ? 'primary' : 'disabled']").badge.badge-size
                  | {{ day.text }}
            v-row(v-if="$isMobile" justify="center" align="center")
              a(v-if="operatingSchedules.length" @click="scheduleDialog = true").primary--text.font-weight-semibold.mc-b4 View full schedule
              v-icon(v-if="operatingSchedules.length" small color="primary").ml-1 {{ mdiInformationOutline }}
    v-spacer
    v-card-actions.pa-2.pb-4
      v-row(justify="center" :class="{'px-8': !$isMobile}").mt-3
        //- v-spacer(v-if="!$isMobile")
        v-col(v-if="canOnlineBook || canVisit" cols="12").text-right
          div(:class="{'d-inline-flex': !$isMobile}")
            v-btn(
              color="primary"
              depressed
              outlined
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              :block="$isMobile"
              :href="!isPreviewMode && telehealthURL"
              :class="{'mx-1': !$isMobile}"
              :disabled="!canOnlineBook"
              @click="trackBooking('telehealth')"
            ).text-none.rounded-ml
              //- v-icon(small left) {{ canOnlineBook ? mdiVideoOutline : mdiClose }}
              span.primary--text.mc-btn1 Online Consult
            v-btn(
              color="primary"
              depressed
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              :block="$isMobile"
              :disabled="!canVisit"
              :href="!isPreviewMode && visitURL"
              :class="$isMobile ? 'mt-2': 'mx-1'"
              @click="trackBooking('physical')"
            ).text-none.rounded-ml
              //- v-icon(small left) {{ canVisit ? mdiStethoscope : mdiClose }}
              span.mc-btn1 Book a Visit
        v-col(v-else cols="12" sm="10").text-center
          span(style="color: #BFBFBF").font-italic This clinic does not accept online bookings for now. Please contact the clinic directly for more info.
      //- v-spacer(v-if="!$isMobile")

    //- Schedule Dialog
    v-dialog(v-model="scheduleDialog" width="600")
      v-card.pa-3
        v-toolbar(flat)
          v-toolbar-title.primary--text Schedules
            br
            h5.black--text {{ clinic.name }}&nbsp;
              span.font-weight-regular - Opening Hours
          v-spacer
          v-btn(icon @click="scheduleDialog = false")
            v-icon {{ mdiClose }}
        v-card-text.pt-3
          schedules-list(
            hideLabels
            :items="operatingGroupedSchedules"
            :non-mf-schedule="false"
          )
</template>

<script>
import isNil from 'lodash/isNil';
import intersection from 'lodash/intersection';
import uniqWith from 'lodash/uniqWith';
import {
  mdiClose,
  mdiStethoscope,
  mdiVideoOutline,
  mdiEmail,
  mdiPhoneInTalk,
  mdiMapMarker,
  mdiShareVariant,
  mdiInformationOutline,
} from '@mdi/js';
import VClamp from 'vue-clamp';
// - components
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import SchedulesList from '~/components/clinic-website/services/service-schedules';
import classBinder from '~/utils/class-binder';
import { formatAddress } from '~/utils/formats';

const BOOKING_FACILITY_TYPES = ['doctor-booking', 'clinic-booking'];
const TELEHEALTH_FACILITY_TYPES = ['doctor-telehealth', 'clinic-telehealth'];

export default {
  components: {
    BookAppointmentBtn,
    SchedulesList,
    VClamp,
  },
  filters: {
    prettifyAddress (address) {
      if (!address) {
        return 'No information provided';
      }
      if (address?.formattedString) {
        return address.formattedString;
      }
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
  },
  props: {
    clinic: {
      type: Object,
      default: () => ({}),
    },
    doctorId: {
      type: String,
      default: '',
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      {
        order: 1,
        day: 'mon',
        dayName: 'Monday',
      },
      {
        order: 2,
        day: 'tue',
        dayName: 'Tuesday',
      },
      {
        order: 3,
        day: 'wed',
        dayName: 'Wednesday',
      },
      {
        order: 4,
        day: 'thu',
        dayName: 'Thursday',
      },
      {
        order: 5,
        day: 'fri',
        dayName: 'Friday',
      },
      {
        order: 6,
        day: 'sat',
        dayName: 'Saturday',
      },
      {
        order: 0,
        day: 'sun',
        dayName: 'Sunday',
      },
    ];
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
      mdiStethoscope,
      mdiVideoOutline,
      mdiEmail,
      mdiPhoneInTalk,
      mdiMapMarker,
      mdiShareVariant,
      mdiInformationOutline,
    };
  },
  computed: {
    canOnlineBook () {
      return this.clinic?.teleconsultQueue && intersection(this.clinic?.types, TELEHEALTH_FACILITY_TYPES)?.length;
    },
    canVisit () {
      return !!this.fullSchedules?.length && intersection(this.clinic?.types, BOOKING_FACILITY_TYPES)?.length;
    },
    telehealthURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return !this.isPreviewMode ? `${pxPortalUrl}/create-appointment/step-1?doctor=${this.doctorId}&clinic=${this.clinicId}&type=telehealth` : null;
    },
    visitURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return !this.isPreviewMode ? `${pxPortalUrl}/create-appointment/step-1?doctor=${this.doctorId}&clinic=${this.clinicId}&type=physical` : null;
    },
    clinicId () {
      return this.clinic?.id;
    },
    clinicPicURL () {
      return this.clinic?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-clinic.png');
    },
    description () {
      return this.clinic?.description;
    },
    phone () {
      return this.clinic?.phone;
    },
    email () {
      return this.clinic?.email;
    },
    isVerified () {
      return !!this.clinic?.websiteId;
    },
    // - Schedules models
    // all doctor schedules
    fullSchedules () {
      return this.clinic?.$populated?.doctorSchedules  || this.clinic?.doctorSchedules || []; // eslint-disable-line
    },
    // - opening hours, uses mf_schedule
    operatingSchedules () {
      return this.clinic?.mf_schedule || [];
    },
    // doctor schedules organized
    groupedSchedules () {
      const schedules = this.fullSchedules;
      return uniqWith(schedules
        .map((schedule) => {
          const { day, order } = this.days.find(day => day.order === schedule.day);
          return {
            day,
            order,
            ...schedule,
          };
        })
        .sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime) || []
      , (a, b) => a.day === b.day && a.startTime === b.startTime);
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-14'],
        wide: ['font-18'],
      });
    },
    operatingGroupedSchedules () {
      const schedules = this.operatingSchedules;
      return uniqWith(schedules
        .map((schedule) => {
          const { day, order } = this.days.find(item => item.day === schedule.day);
          return {
            day,
            order,
            ...schedule,
          };
        })
        .sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || []
      , (a, b) => a.day === b.day && a.opening === b.opening);
    },
  },
  methods: {
    visitWebsite (url) {
      if (process.browser) {
        window.location.href = url;
      }
    },
    formatDay (schedule) {
      const comparingItem = typeof (schedule.day) === 'number' ? schedule.day : schedule.order;
      return this.days.find(day => day.order === comparingItem).day;
    },
    isClinicOpen (dayValue) {
      const matchedDay = this.operatingGroupedSchedules.find(schedule => schedule.order === dayValue);
      return !isNil(matchedDay);
    },
    // Google Analytics
    trackBooking (type) {
      this.$gtag.event('book', {
        event_category: 'doctor-website',
        event_label: `book-${type}-organization-${this.clinicId}-doctor-${this.doctorId}`,
      });
    },
  },
};
</script>

<style scoped>
.card-outter {
  border: 0.5px solid rgb(218, 218, 218) !important;
}
.clinic-book-btn {
  width: 150px;
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
