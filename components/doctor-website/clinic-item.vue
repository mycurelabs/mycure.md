<template lang="pug">
  v-row
    v-col(:class="{ 'mx-auto' : $isMobile}").shrink
      v-avatar(tile size="150")
        img(
          :src="clinicPicURL"
          style="border-radius: 5px"
        )
    v-col(:class="{ 'text-center' : $isMobile}").grow
      v-row
        v-col(cols="12").pt-0
          h3(style="margin-top: -5px") {{ clinic.name }}
        v-col(cols="12" md="7").pt-5
          h4 About this Clinic
          p(v-if="description") {{ description }}
          i(v-else) No description available
        v-col(cols="12" md="5")
          div(v-if="clinic.address").d-flex
            v-icon(color="error").mr-2.mb-auto mdi-map-marker
            p.font-weight-600 {{ clinic.address | prettify-address }}
          div(v-if="phone").d-flex.pt-3
            v-icon(color="success").mr-2.mb-auto mdi-phone
            span.font-weight-600 +{{ phone }}
            br
            | {{ email }}
          template(v-if="clinicSchedules && clinicSchedules.length === 0")
            div(:class="{ 'justify-center' : $isMobile}").d-flex
              v-icon(color="primary").mr-2.mb-auto mdi-calendar-today
              i No schedules available
          div(v-else :class="{ 'justify-center' : $isMobile}").d-flex
            v-icon(color="primary").mr-2.mb-auto mdi-calendar-today
            table
              tr(v-for="sched in clinicSchedules").font-weight-600
                td(width="40") #[b {{sched.day | morph-capitalize}}]
                td {{sched.opening | morph-date-format('hh:mm A')}}
                td -
                td {{sched.closing | morph-date-format('hh:mm A')}}
              tr(v-if="fullSchedules.length > 3")
                td(colspan="4")
                  a(@click="clinicSchedulesExpanded = !clinicSchedulesExpanded") View {{clinicSchedulesExpanded ? 'less' : 'more'}}
          v-btn(
            color="success"
            target="_blank"
            rel="noopener noreferrer"
            rounded
            block
            :disabled="!canBook"
            :href="bookURL"
          ).my-4 #[b Book Appointment]
          v-btn(
            color="success"
            target="_blank"
            rel="noopener noreferrer"
            outlined
            rounded
            block
            :disabled="!canBook"
            :href="bookURL"
          ) #[b Book a Visit]
</template>

<script>
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
        return 'No address available';
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
      default: null,
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
        order: 7,
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
    canBook () {
      return this.clinicId && this.doctorId;
    },
    bookURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return `${pxPortalUrl}/appointments/step-1?doctor=${this.doctorId}&organization=${this.clinicId}`;
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
  },
  watch: {
    clinicSchedulesExpanded (val) {
      // Sort the schedules
      this.fullSchedules = this.clinic?.mf_schedule || []; // eslint-disable-line
      const groupedSchedules = this.fullSchedules
        .map((schedule) => {
          const { order } = this.days.find(day => day.day === schedule.day);
          return {
            order,
            ...schedule,
          };
        })
        .sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
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
</style>
