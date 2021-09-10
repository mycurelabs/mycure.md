<template lang="pug">
  v-card(height="100%").card-outter.elevation-3
    v-card-text.text-center
      v-avatar(size="125")
        img(:src="clinicPicURL")
    v-card-text
      h3.text-center {{ clinic.name }}
        template(v-if="isVerified")
          | &nbsp;
          v-icon(color="primary" small) mdi-check-circle-outline
      br
      //- Address
      div.d-flex
        v-icon(color="primary").mr-2.mb-auto.mt-1 mdi-home-variant-outline
        p(:class="{ 'font-italic': !clinic.address }").text-left {{ clinic.address | prettify-address }}
      //- Contact number
      div.d-flex
        v-icon(color="primary").mr-2.mb-auto.mt-1 mdi-phone-in-talk
        p(:class="{ 'font-italic': !phone }") {{ phone ? `+${phone}` : 'No information provided' }}
      //- Email
      div.d-flex
        v-icon(color="primary").mr-2.mb-auto.mt-1 mdi-email
        p(:class="{ 'font-italic': !email }") {{ email || 'No information provided' }}
      br
      template(v-if="clinicSchedules && clinicSchedules.length === 0")
        div(:class="{ 'justify-center' : $isMobile}").d-flex
          v-icon(color="primary" left).mr-2.mb-auto.mt-1 mdi-calendar-today
          i No schedules available
      div(v-else :class="{ 'justify-center' : $isMobile}").d-flex
        v-icon(color="primary" left).mr-2.mb-auto.mt-1 mdi-calendar-today
        table
          tr(v-for="sched in clinicSchedules").font-weight-600
            td(width="70") #[b.text-capitalize {{ formatDay(sched) }}]
            td {{sched.startTime || sched.opening | morph-date-format('hh:mm A')}}
            td -
            td {{sched.endTime || sched.closing | morph-date-format('hh:mm A')}}
      br
      div(v-if="fullSchedules.length > 3").pl-3
        a(
          @click="clinicSchedulesExpanded = !clinicSchedulesExpanded"
        ) View {{clinicSchedulesExpanded ? 'less' : 'more'}}
        br
    div.card-actions.px-3.pb-3
      //- Online Consult
      //- v-btn(
      //-   color="accent"
      //-   target="_blank"
      //-   rel="noopener noreferrer"
      //-   block
      //-   large
      //-   :disabled="!canOnlineBook"
      //-   :href="telehealthURL"
      //- ).my-4.text-none.rounded-lg
      //-   v-icon(left) mdi-stethoscope
      //-   b Teleconsult

      //- Physical Visit
      v-btn(
        color="secondary"
        target="_blank"
        rel="noopener noreferrer"
        block
        large
        :disabled="!canVisit"
        :href="visitURL"
      ).text-none.rounded-lg
        v-icon(left) mdi-calendar
        b Visit Clinic
</template>

<script>
import uniqWith from 'lodash/uniqWith';
// - components
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import { formatAddress } from '~/utils/formats';

export default {
  components: {
    BookAppointmentBtn,
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
      clinicSchedules: [],
      clinicSchedulesExpanded: null,
      fullSchedules: [],
      clinicKeys: [
        'description',
        'address',
        'phone',
        'email',
        'website',
      ],
    };
  },
  computed: {
    canOnlineBook () {
      return this.clinicId && this.doctorId && this.clinicSchedules?.length;
    },
    canVisit () {
      return !!this.clinicSchedules?.length;
      // return this.clinic?.types?.includes('doctor-booking' || 'clinic-booking');
    },
    telehealthURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return !this.isPreviewMode ? `${pxPortalUrl}/appointments/step-1?doctor=${this.doctorId}&organization=${this.clinicId}&type=telehealth` : null;
    },
    visitURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return !this.isPreviewMode ? `${pxPortalUrl}/appointments/step-1?doctor=${this.doctorId}&organization=${this.clinicId}&type=physical` : null;
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
  },
  watch: {
    clinicSchedulesExpanded (val) {
      this.fullSchedules = this.clinic?.$populated?.doctorSchedules  || this.clinic?.doctorSchedules || []; // eslint-disable-line

      if (!this.fullSchedules?.length) {
        this.clinicSchedules = [];
        return;
      }
      // Organize the schedules
      const groupedSchedules = uniqWith(this.fullSchedules
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
      if (!val && groupedSchedules && groupedSchedules.length >= 3) {
        this.clinicSchedules = groupedSchedules.slice(0, 3);
        return;
      }
      this.clinicSchedules = groupedSchedules;
    },
  },
  created () {
    this.clinicSchedulesExpanded = false;
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
  },
};
</script>

<style scoped>
.clinic-book-btn {
  width: 150px;
}

td {
  vertical-align: unset !important;
}

.card-outter {
  position: relative;
  padding-bottom: 120px;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
