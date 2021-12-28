<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="6")
        div(v-if="!$isMobile")
          h3.mc-h4.title--text.px-3 Contact Us
          br
        v-col(cols="12")
          v-row(align="start").pl-3
            v-icon(small color="primary" :class="$isWideScreen ? 'mt-3' : 'mt-2'").mr-1 {{ mdiMapMarker }}
            v-col.pa-0
              span.mc-b2 {{ formattedAddress }}
          v-row(align="center").pl-3.pt-1
            v-icon(small color="primary").mr-2 {{ mdiPhone }}
            span.mc-b2 {{ clinicPhone }}
          br
          br
          h3.mc-h4.title--text.mb-1.font-weight-semibold Facility Schedule
          br
          v-row(v-for="(sched, key) in compressedSchedules" :key="key")
            v-col(cols="4" :class="{'px-1': $isMobile}").pt-1.pb-0
              p(v-if="typeof (sched.day) === 'string'").mc-b3.title--text.font-weight-semibold.text-capitalize.mb-0 {{ sched.day }}
              p(v-else).mc-b3.title--text.font-weight-semibold.text-capitalize.mb-0 {{ `${sched.day[0]} - ${sched.day[sched.day.length - 1]}` }}
            v-col(cols="8" :class="{'px-1': $isMobile}").pt-1.pb-0
              p(v-if="typeof (sched.time) === 'string'").mc-b3.mb-0 {{ sched.time }}
              p(v-else v-for="(slot, key) in sched.time" :key="key").mc-b3.mb-0 {{ slot }}
      v-col(v-if="!$isMobile" cols="1")
        v-divider(vertical)
      v-col(cols="12" md="5" :class="{'mt-8': $isMobile}")
        h3.mc-h4.title--text Location
        br
        div(v-if="address.lat && address.lng" :style="$isWideScreen ? 'height: 400px' : 'height: 250px'")#map
        div(v-else)
          span.mc-b3 Location not available
</template>

<script>
import {
  mdiMapMarker,
  mdiPhone,
} from '@mdi/js';
import { format } from 'date-fns';
import { formatAddress } from '~/utils/formats';
import Schedules from '~/components/clinic-website/schedules';
export default {
  components: {
    Schedules,
  },
  props: {
    address: {
      type: Object,
      default: null,
    },
    schedule: {
      type: Array,
      default: null,
    },
    clinicPhone: {
      type: String,
      default: null,
    },
  },
  data () {
    this.days = [{ order: 1, day: 'mon' }, { order: 2, day: 'tue' }, { order: 3, day: 'wed' }, { order: 4, day: 'thu' }, { order: 5, day: 'fri' }, { order: 6, day: 'sat' }, { order: 7, day: 'sun' }];
    // this.defaultMapPosition = { lat: 14.5813167, lng: 120.9761788 };
    return {
      map: null,
      mdiMapMarker,
      mdiPhone,
    };
  },
  head () {
    return {
      script: [
        {
          hid: 'google',
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCpEuK4K_sSRKLy_wLqymgQPT8aJpsns0g&libraries=places&v=weekly',
          defer: true,
          // callback: () => { this.loading.page = false; },
        },
      ],
    };
  },
  computed: {
    addressGeometry () {
      if (!this.address.lat || !this.address.lng) return null;
      return { lat: this.address.lat, lng: this.address.lng };
    },
    groupedSchedules () {
      const groupedSchedules = this.schedule
        .map((schedule) => {
          const { order } = this.days.find(day => day.day === schedule.day);
          return {
            order,
            ...schedule,
          };
        })
        .sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
      return groupedSchedules;
    },
    compressedSchedules () {
      const sched = this.groupedSchedules;
      const formatSched = sched.map(x => ({ day: x.day, time: `${this.formatTime(x.opening)} - ${this.formatTime(x.closing)}` }));
      const finalSched = [{ day: '', time: '' }];
      formatSched.map((x) => {
        if (finalSched.find(sched => sched.time === x.time)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.time === x.time));
          if (typeof finalSched[index].day === 'string') {
            finalSched[index].day = [finalSched[index].day, x.day];
          } else {
            finalSched[index].day = [...finalSched[index].day, x.day];
          }
        } else if (finalSched.find(sched => sched.day === x.day)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.day === x.day));
          if (typeof finalSched[index].time === 'string') {
            finalSched[index].time = [finalSched[index].time, x.time];
          } else {
            finalSched[index].time = [...finalSched[index].time, x.time];
          }
        } else {
          finalSched.push(x);
          if (finalSched.find(sched => sched.day === '')) finalSched.shift();
        }
        return 0;
      });
      return finalSched;
    },
    formattedAddress () {
      if (!this.address) return '';
      return formatAddress(this.address, 'street1, street2, city, province, country');
    },
  },
  mounted () {
    this.initialize();
  },
  methods: {
    initialize () {
      this.mapGeocoder = new google.maps.Geocoder(); /* eslint-disable-line no-undef */
      if (!this.addressGeometry) {
        return null;
      }
      const center = this.addressGeometry;
      const mapOptions = {
        center,
        zoom: 15,
        mapTypeId: 'roadmap',
      };
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions); /* eslint-disable-line no-undef */

      // Create a marker for passed address
      const position = this.addressGeometry || this.defaultMapPosition;
      this.mapMarker = this.createMapMarker(position);
    },
    createMapMarker (position) {
      const placeMarkerOptions = {
        map: this.map,
        position,
        draggable: false,
      };
      return new google.maps.Marker(placeMarkerOptions); /* eslint-disable-line no-undef */
    },
    formatTime (time) {
      return format(time, 'hh:mm A');
    },
  },
};
</script>

<style scoped>
.img-border {
  border: 8px solid white;
}
</style>
