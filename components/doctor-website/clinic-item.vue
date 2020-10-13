<template lang="pug">
  v-row
    v-col.shrink
      v-avatar(tile size="150")
        img(
          :src="clinicPicURL"
          style="border-radius: 5px"
        )
      v-btn(color="primary").text-none.clinic-book-btn.mt-5 Book Appointment
    v-col.grow
      v-row
        v-col(cols="12").pt-0
          h3(style="margin-top: -5px").primary--text {{ clinic.name }}
          | {{ clinic.address | prettify-address }}
          v-divider
        v-col(cols="12" md="7" lg="8").pt-3
          h4 Clinic Schedule
          template(v-if="clinicSchedules && clinicSchedules.length === 0")
            i No schedules available
          table(v-else)
            tr(v-for="sched in clinicSchedules")
              td(width="40") #[b {{sched.day | morph-capitalize}}]
              td {{sched.opening | morph-date-format('hh:mm A')}}
              td -
              td {{sched.closing | morph-date-format('hh:mm A')}}
            tr(v-if="fullSchedules.length > 3")
              td(colspan="4")
                a(@click="clinicSchedulesExpanded = !clinicSchedulesExpanded") View {{clinicSchedulesExpanded ? 'less' : 'more'}}
          div.pt-3
            h4 Contact Info:
            span(v-if="phone") +{{ phone }}
            br
            | {{ email }}
        v-col(cols="12" md="5" lg="4")
          h4 About this Clinic
          p(v-if="description") {{ description }}
          i(v-else) No description available
    //- v-col.grow
    //-   v-row
    //-     v-col(cols="12" sm="12" md="7" lg="8").pt-0
    //-       h3(style="margin-top: -5px") {{clinic.name}}
    //-       template(v-for="key in clinicKeys")
    //-         template(v-if="clinic[key] && key === 'address'")
    //-           | {{clinic.address | prettify-address}}
    //-           br
    //-         template(v-else-if="clinic[key] && key !== 'address'")
    //-           span
    //-             span(v-if="key === 'phone'") +
    //-             | {{clinic[key]}}
    //-           br
    //-       v-col(cols="12" sm="12").pa-0.mt-2
    //-         //- TODO: check if clinic lat lng is available
    //-         //- Hide for now until location is implemented
    //-         //- v-btn(color="primary" depressed).mr-2 View Map
    //-         v-btn(color="primary" depressed v-if="clinic.website" @click="visitWebsite(clinic.website)") Clinic Website
    //-     v-col(cols="12" sm="12" md="5" lg="4")
    //-       h3 Schedules
    //-       template(v-if="clinicSchedules && clinicSchedules.length === 0")
    //-         i No schedules available
    //-       table(v-else)
    //-         tr(v-for="sched in clinicSchedules")
    //-           td(width="40") #[b {{sched.day | morph-capitalize}}]
    //-           td {{sched.opening | morph-date-format('hh:mm A')}}
    //-           td -
    //-           td {{sched.closing | morph-date-format('hh:mm A')}}
    //-         tr(v-if="fullSchedules.length > 3")
    //-           td(colspan="4")
    //-             a(@click="clinicSchedulesExpanded = !clinicSchedulesExpanded") View {{clinicSchedulesExpanded ? 'less' : 'more'}}
</template>

<script>
export default {
  filters: {
    prettifyAddress (address) {
      if (!address) {
        return '';
      }
      const formattedArray = [
        address.street1,
        address.street2,
        address.city,
        address.province,
        address.country,
      ].filter(Boolean).join(', ');
      return formattedArray;
    },
  },
  props: {
    clinic: {
      type: Object,
      default: () => ({}),
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
</style>
