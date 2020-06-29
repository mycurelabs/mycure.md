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
      if (!val && this.clinic?.mf_schedule && this.clinic?.mf_schedule.length >= 3) { // eslint-disable-line
        this.clinicSchedules = this.clinic?.mf_schedule.slice(0, 3) || []; // eslint-disable-line
        return;
      }
      this.clinicSchedules = this.clinic?.mf_schedule || []; // eslint-disable-line
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
