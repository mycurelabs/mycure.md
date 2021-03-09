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
      v-col(cols="12" md="8")
        h3 {{ title }}&nbsp;
          v-chip(
            :color="isAvailable ? 'lime' :'grey'"
            small
            label
          ) {{ isAvailable ? 'AVAILABLE' : 'NOT AVAILABLE' }}
        div(v-if="fullSchedules.length")
          div(v-if="!scheduleExpanded")
            p(v-if="scheduleNow").text-capitalize {{ formatTodaySchedule(scheduleNow) }}
            a(v-if="fullSchedules.length > 1" @click="scheduleExpanded = true").primary--text View Schedules >
          div(v-else)
            div(v-for="(schedule, key) in groupedSchedules" :key="key")
              span.text-capitalize {{ formatIndividualSchedule(schedule) }}
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
      v-col(v-if="!isDoctor && !readOnly").grow.text-right
        h2(v-if="price") PHP {{ price }}
        h3(v-else).font-italic No price stated
        br
        br
        br
        v-btn(
          color="success"
          rounded
          block
          :disabled="!isAvailable"
          :href="bookServiceURL"
        ).text-none Book Now
    v-row(justify="end")
      v-col(
        v-if="isDoctor && !readOnly"
        cols="12"
        md="4"
      )
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
</template>

<script>
import { format } from 'date-fns';
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    organization: {
      type: String,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      { text: 'Mon', value: 1 },
      { text: 'Tues', value: 2 },
      { text: 'Wed', value: 3 },
      { text: 'Thu', value: 4 },
      { text: 'Fri', value: 5 },
      { text: 'Sat', value: 6 },
      { text: 'Sun', value: 0 },
    ];
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
    nonMfSchedule () {
      // - Doctor schedules automatically do not use mf_schedule
      return this.item?.nonMfSchedule || this.isDoctor;
    },
    fullSchedules () {
      return this.item?.scheduleData || this.item?.schedules || [];
    },
    groupedSchedules () {
      const schedules = this.fullSchedules;
      if (this.nonMfSchedule) return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
      return schedules.sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
    },
    todaySchedules () {
      if (!this.fullSchedules?.length) {
        return [];
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      return this.fullSchedules.filter(schedule => schedule.order === dayOrder || schedule.day === dayOrder) || [];
    },
    scheduleNow () {
      if (!this.todaySchedules.length) return null;

      const timeNow = format(Date.now(), 'HH:mm');

      const availableNow = this.todaySchedules.find((schedule) => {
        const opening = this.nonMfSchedule ? schedule.startTime : schedule.opening;
        const closing = this.nonMfSchedule ? schedule.endTime : schedule.closing;
        const openingHour = format(opening, 'HH:mm');
        const closingHour = format(closing, 'HH:mm');

        return timeNow >= openingHour && timeNow <= closingHour;
      });

      return availableNow;
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
      return this.todaySchedules.length;
    },
    bookServiceURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.id;
      return `${pxPortalUrl}/appointments/step-1?service=${id}&organization=${this.organization}`;
    },
    bookTeleconsultURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.uid;
      return `${pxPortalUrl}/appointments/step-1?doctor=${id}&organization=${this.organization}`;
    },
  },
  methods: {
    formatTodaySchedule (schedule) {
      if (!schedule) return 'Unavailable at this hour';
      if (this.nonMfSchedule) {
        const today = schedule.day;
        const day = this.days.find(day => day.value === today);
        const times = `${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')}`;
        return `${day?.text} (${times})`;
      }
      const day = schedule.day;
      const times = `${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')}`;
      return `${day} (${times})`;
    },
    formatIndividualSchedule (schedule) {
      if (this.nonMfSchedule) {
        const currentDay = schedule.day;
        const day = this.days.find(day => day.value === currentDay) || '';
        return `${day.text} (${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')})`;
      }
      return `${schedule.day} (${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')})`;
    },
  },
};
</script>
