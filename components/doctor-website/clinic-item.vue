<template lang="pug">
  v-row
    v-col.shrink
      v-avatar(tile size="150")
        img(
          :src="clinicPicURL"
          style="border-radius: 5px"
        )
    v-col.grow
      v-row(wrap)
        v-col(cols="12" sm="12" md="8").pt-0
          h3(style="margin-top: -5px") {{clinic.name}}
          template(v-for="key in clinicKeys")
            template(v-if="clinic[key] && key === 'address'")
              | {{clinic.address | prettify-address}}
              br
            template(v-else-if="clinic[key] && key !== 'address'")
              span
                span(v-if="key === 'phone'") +
                | {{clinic[key]}}
              br
          v-col(cols="12" sm="12").pa-0.mt-2
            //- TODO: check if clinic lat lng is available
            //- Hide for now until location is implemented
            //- v-btn(color="primary" depressed).mr-2 View Map
            v-btn(color="primary" depressed v-if="clinic.website" @click="visitWebsite(clinic.website)") Clinic Website
        v-col(cols="12" sm="12" md="4")
          h3 Schedules
          template(v-if="clinicSchedules && clinicSchedules.length === 0")
            i No schedules available
          table(v-else)
            tr(v-for="sched in clinicSchedules")
              td(width="40") #[b {{sched.day | morph-capitalize}}]
              td {{sched.opening | morph-date-format('hh:mm A')}}
              td -
              td {{sched.closing | morph-date-format('hh:mm A')}}
            tr
              td(colspan="4")
                a(@click="clinicSchedulesExpanded = !clinicSchedulesExpanded") View {{clinicSchedulesExpanded ? 'less' : 'more'}}
        //- TODO: apply services
        //- v-col(cols="12" sm="12" md="3")
          h3 Services
          span {{['foo', 'bar', 'fizz', 'buzz'].join(', ')}}
          br
          a View more
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
  },
  watch: {
    clinicSchedulesExpanded (val) {
      // Sort the schedules
      const mfSchedules = this.clinic?.mf_schedules || []; // eslint-disable-line
      const groupedSchedules = mfSchedules
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
      window.location.href = url;
    },
  },
};
</script>
