<template lang="pug">
  v-card.rounded-lg
    v-card-text
      v-row
        v-col(v-if="isDoctor" cols="12" md="2")
          v-avatar(size="100")
            img(
              :src="picURL"
              :alt="title"
              width="100%"
            )
        v-col(cols="12" md="8")
          h3.black--text {{ title }}&nbsp;
          //- SCHEDULES
          div(v-if="fullSchedules.length")
            div
              div(v-for="(schedule, key) in previewSchedules" :key="key")
                v-icon(color="black" small left) mdi-calendar-blank
                span.text-capitalize {{ formatIndividualSchedule(schedule) }}
                br
              br
              a(@click="scheduleExpanded = true").grey--text More Schedules >
            br
            br
          template(v-else)
            i No schedules available
            br
          span Coverages:
          br
          template(v-if="hasCoverages")
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
          i(v-else) No coverages available
        v-col(v-if="!isDoctor && !readOnly").grow.text-right
          h3.info--text Availability
            v-icon(:color="isAvailable ? 'primary' : 'error'" right) {{ isAvailable ? 'mdi-checkbox-marked-circle-outline' : 'mdi-close-circle-outline' }}
          br
          br
          h2(v-if="price").black--text
            v-icon(left) mdi-cash
            | {{ price }}
          h3(v-else).font-italic No price stated
          v-btn(
            color="accent"
            depressed
            block
            :disabled="!isAvailable"
            :href="bookServiceURL"
          ).text-none.mt-1.font-12 Book Now
      v-row(justify="end")
        v-col(
          v-if="isDoctor && !readOnly"
          cols="12"
          md="4"
        )
          //- TODO: Temporary hide
          //- v-btn(
          //-   color="success"
          //-   depressed
          //-   block
          //-   :disabled="!isAvailable"
          //-   :href="bookTeleconsultURL"
          //- ).text-none.font-12 Book a Teleconsult
          //- br
          v-btn(
            color="info"
            depressed
            block
            outlined
            :disabled="!isAvailable"
            :href="bookTeleconsultURL"
          ).text-none.font-12 Book a Visit
    //- Schedule dialog
    v-dialog(v-model="scheduleExpanded" width="1000")
      v-toolbar(flat)
        v-toolbar-title.primary--text Available Schedules
        v-spacer
        v-btn(icon @click="scheduleExpanded = false")
          v-icon mdi-close
      v-card
        v-card-text
          service-schedules(
            :items="groupedSchedules"
            :non-mf-schedule="nonMfSchedule"
          )
</template>

<script>
import { format } from 'date-fns';
import { uniqBy } from 'lodash';
import ServiceSchedules from './service-schedules';

export default {
  components: {
    ServiceSchedules,
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
      const schedules = [...this.fullSchedules];
      if (this.nonMfSchedule) return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
      return schedules.sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
    },
    previewSchedules () {
      return this.todaySchedules?.slice(0, 3);
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
    filteredDays () {
      return uniqBy(this.groupedSchedules, 'day').map(schedule => schedule.day);
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
    formatDay (day) {
      if (this.nonMfSchedule) return this.days.find(item => item.value === day)?.text || '';
      return day;
    },
  },
};
</script>
