<template lang="pug">
  div
    v-row
      v-col(v-if="isDoctor" cols="12" md="2")
        v-avatar(size="100")
          img(
            :src="picURL"
            :alt="title"
            width="100%"
          )
      v-col(cols="12" :md="isDoctor ? '6' : '8'")
        h3 {{ title }}
        div(v-if="fullSchedules.length")
          div(v-if="!scheduleExpanded")
            span.text-capitalize {{ schedulesToday | format-today-schedule }}
              a(v-if="fullSchedules.length > 1" @click="scheduleExpanded = true").primary--text &nbsp; View More
          div(v-else)
            div(v-for="(schedule, key) in fullSchedules" :key="key")
              span.text-capitalize {{ schedule | format-individual-schedule }}
              br
            a(@click="scheduleExpanded = false").primary--text View Less
          br
          br
        template(v-else)
          i No schedules available
          br
        template(v-if="hasCoverages")
          span Coverages:
          br
          v-tooltip(
            v-for="(coverage, key) in coverages"
            :key="key"
            top
          )
            template(v-slot:activator="{ on, attrs }")
              v-avatar(
                size="40"
                color="secondary"
                v-on="on"
              ).mx-1
                v-img(v-if="coverage.picURL" :src="coverage.picURL")
                span(v-else).white--text {{ coverage.name.substring(0,1) }}
            span {{ coverage.name || 'HMO' }}
      v-col(v-if="price && !isDoctor" cols="12" md="2").text-right
        v-chip(
          :color="isAvailable ? 'lime' :'grey'"
          small
          label
        ) {{ isAvailable ? 'AVAILABLE' : 'NOT AVAILABLE' }}
      v-col.grow.text-right
        h2(v-if="price") PHP {{ price }}
        v-chip(
          v-else-if="isDoctor"
          :color="isAvailable ? 'lime' :'grey'"
          small
          label
        ) {{ isAvailable ? 'AVAILABLE' : 'NOT AVAILABLE' }}
        br(v-else)
        br
        br
        br
        div(v-if="!isDoctor")
          v-btn(
            color="success"
            rounded
            block
            :disabled="!isAvailable"
            :href="bookServiceURL"
          ).text-none Book Now
        div(v-else)
          v-btn(
            color="success"
            rounded
            block
            :disabled="!isAvailable"
            :href="bookTeleconsultURL"
          ).text-none Book a Teleconsult
          br
          v-btn(
            color="success"
            rounded
            block
            outlined
            :disabled="!isAvailable"
            :href="bookTeleconsultURL"
          ).text-none Book a Visit
    v-row
</template>

<script>
import { format } from 'date-fns';
export default {
  filters: {
    formatTodaySchedule (schedules) {
      if (!schedules?.length) return 'No schedules available';
      const day = schedules[0].day;
      const times = schedules.map((schedule) => {
        return `${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')}`;
      }).join(', ');
      return `${day} (${times})`;
    },
    formatIndividualSchedule (schedule) {
      return `${schedule.day} (${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')})`;
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    organization: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      scheduleExpanded: false,
    };
  },
  computed: {
    title () {
      if (this.isDoctor) {
        return this.item?.doctorName;
      }
      return this.item?.name;
    },
    picURL () {
      const sex = this.item?.sex;
      if (sex === 'female') {
        return this.item?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.item?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    price () {
      return this.item?.price;
    },
    fullSchedules () {
      return this.item?.scheduleData || this.item?.schedules || [];
    },
    schedulesToday () {
      if (!this.fullSchedules) {
        return null;
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      return this.fullSchedules.filter(schedule => schedule.order === dayOrder) || [];
    },
    hasCoverages () {
      return this.item?.$hasCoverages;
    },
    coverages () {
      if (!this.hasCoverages) return [];
      return this.item?.coveragesData?.map((coverage) => {
        return {
          name: coverage.name || coverage.contractData?.insurerName,
          ...coverage.contractData?.insurerPicURL && { picURL: coverage.contractData.insurerPicURL },
        };
      });
    },
    isAvailable () {
      if (!this.schedulesToday?.length) {
        return false;
      }
      return true;
    },
    bookServiceURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.id;
      return `${pxPortalUrl}/appointment/step-1?service=${id}&organization=${this.organization}`;
    },
    bookTeleconsultURL () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.uid;
      return `${pxPortalUrl}/appointment/step-1?doctor=${id}&organization=${this.organization}`;
    },
  },
};
</script>
