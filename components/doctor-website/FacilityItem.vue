<template lang="pug">
  v-card(width="100%" flat).px-1.py-1.rounded-xl.card-outter
    v-card-text
      v-row(justify="center")
        v-col(cols="6" md="3" justify="center" align="center").pb-0.text-center
          img(
            :src="clinicPicURL"
            alt="Services"
            width="90%"
          ).mt-3.rounded-xl
        v-col(cols="12" md="8").pt-5
          div
            v-clamp(
              autoresize
              :max-lines="1"
            ).font-weight-bold.mb-0.mc-title-set-2 {{ clinic.name }}&nbsp;
          //- Address
          v-row.mt-2
            v-icon(color="primary") mdi-home-variant-outline
            v-col.font-gray
              span.mc-content-set-5 Address
              v-clamp(autoresize :max-lines="2" :class="{ 'font-italic': !clinic.address }").font-weight-semibold {{ clinic.address | prettify-address }}&nbsp;&nbsp;
          //- Contact
          v-row
            v-icon(color="primary") mdi-phone-in-talk
            v-col.font-gray
              span.mc-content-set-5 Contact Number
              v-clamp(
                autoresize
                :max-lines="1"
                :class="{ 'font-italic': !phone }"
              ).font-weight-semibold {{ phone ? `+${phone}` : 'No information provided' }}
          //- Email
          v-row
            v-icon(color="primary") mdi-email
            v-col.font-gray
              span.mc-content-set-5 Email
              v-clamp(
                autoresize
                :max-lines="1"
                :class="{ 'font-italic': !email }"
              ).font-weight-semibold {{ email || 'No information provided'}}
      //- Schedules
      v-row.pt-2
        v-col(cols="1" v-if="!$isMobile")
        v-badge(
          v-for="(day, key) in days"
          :key="key"
          :color="isClinicOpen(day.order) ? 'success' : 'grey'"
          :content="day.dayName.charAt(0)"
          inline
          large
        )
        v-spacer
        template(v-if="operatingSchedules.length")
          a(v-if="!$isMobile" @click="scheduleDialog = true").primary--text.font-weight-medium.pr-3 View full schedule
          v-col(cols="12" v-else)
            a(@click="scheduleDialog = true").primary--text.font-weight-medium View full schedule
    v-spacer
    v-card-actions.pa-2.pb-4
      v-row(justify="center")
        //- v-spacer(v-if="!$isMobile")
        v-col(cols="12" sm="8").text-center
          div(:class="{'d-inline-flex': !$isMobile}")
            v-btn(
              color="success"
              depressed
              large
              :block="$isMobile"
              :href="!isPreviewMode && telehealthURL"
              :class="{'mx-1': !$isMobile}"
              :disabled="!canOnlineBook"
              @click="trackBooking('telehealth')"
            ).text-none.font-12.clinic-book-btn
              v-icon(small left) {{ canOnlineBook ? 'mdi-video-outline' : 'mdi-close' }}
              span Online Consult
            v-btn(
              color="info"
              depressed
              large
              :block="$isMobile"
              :disabled="!canVisit"
              :href="!isPreviewMode && visitURL"
              :class="$isMobile ? 'mt-2': 'mx-1'"
              @click="trackBooking('physical')"
            ).text-none.font-12.clinic-book-btn
              v-icon(small left) {{ canVisit ? 'mdi-stethoscope' : 'mdi-close' }}
              span Visit Clinic
      //- v-spacer(v-if="!$isMobile")

    //- Schedule Dialog
    v-dialog(v-model="scheduleDialog" width="600")
      v-card.pa-3
        v-toolbar(flat)
          v-toolbar-title.primary--text Schedules
            br
            h5.black--text {{ clinic.name }}
          v-spacer
          v-btn(icon @click="scheduleDialog = false")
            v-icon mdi-close
        v-card-text.pt-3
          schedules-list(
            :items="operatingGroupedSchedules"
            :non-mf-schedule="false"
          )
</template>

<script>
import isNil from 'lodash/isNil';
import uniqWith from 'lodash/uniqWith';
import VClamp from 'vue-clamp';
// - components
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import SchedulesList from '~/components/clinic-website/services/service-schedules';
import { formatAddress } from '~/utils/formats';

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
    return {
      scheduleDialog: false,
    };
  },
  computed: {
    canOnlineBook () {
      return this.clinic?.teleconsultQueue;
    },
    canVisit () {
      return !!this.fullSchedules?.length;
      // return this.clinic?.types?.includes('doctor-booking' || 'clinic-booking');
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
      console.log('operatingGrouped', this.operatingGroupedSchedules);
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
  border: 0.5px solid grey !important;
}
.clinic-book-btn {
  width: 150px;
}
</style>
