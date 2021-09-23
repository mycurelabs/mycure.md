<template lang="pug">
  v-card.rounded-lg
    v-card-text
      v-row
        v-col(cols="12" md="2")
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
                v-icon(
                  v-if="getProviders(schedule).length"
                  color="primary"
                  small
                  right
                  @click="openProvidersDialog(schedule)"
                ) mdi-information-outline
                br
              br
              a(@click="scheduleExpanded = true").grey--text More Schedules >
            br
            br
          template(v-else)
            i No schedules available
            br
      v-row(justify="end")
        v-col(
          v-if="isDoctor"
          cols="12"
          md="4"
        )
          v-btn(
            color="success"
            depressed
            block
            :href="!readOnly && bookTeleconsultURL"
            :disabled="!hasTeleconsult"
          ).text-none.font-12
            v-icon(small left) {{ hasTeleconsult ? 'mdi-video-outline' : 'mdi-close' }}
            span Online Consult
          br
          v-btn(
            color="info"
            depressed
            block
            :disabled="!isAvailable"
            :href="!readOnly && bookPhysicalURL"
          ).text-none.font-12
            v-icon(small left) {{ isAvailable ? 'mdi-stethoscope' : 'mdi-close' }}
            span Visit Doctor
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
            non-mf-schedule
            :items="groupedSchedules"
          )
</template>

<script>
import { format } from 'date-fns';
import uniqBy from 'lodash/uniqBy';
import ServiceSchedules from './services/service-schedules';
import { formatName } from '~/utils/formats';
import DefaultAvatar from '~/assets/images/commons/MYCURE Default Avatar.png';

export default {
  components: {
    ServiceSchedules,
  },
  filters: {
    formatName (provider) {
      if (!provider?.name) return 'CONCEALED Doctor';
      return `Dr. ${formatName(provider.name || {}, 'firstName middleInitial lastName generationalSuffix')}`;
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
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
    this.doctorAvatar = DefaultAvatar;
    return {
      scheduleExpanded: false,
    };
  },
  computed: {
    title () {
      return this.item?.doctorName;
    },
    picURL () {
      return this.item?.picURL || require('~/assets/images/commons/MYCURE Default Avatar.png');
    },
    fullSchedules () {
      return this.item?.scheduleData || this.item?.schedules || [];
    },
    groupedSchedules () {
      const schedules = [...this.fullSchedules];
      return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
    },
    previewSchedules () {
      return this.groupedSchedules?.slice(0, 3) || [];
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
        const startTime = format(schedule.startTime, 'HH:mm');
        const endTime = format(schedule.endTime, 'HH:mm');
        return timeNow >= startTime && timeNow <= endTime;
      });

      return availableNow;
    },
    isAvailable () {
      return this.todaySchedules.length;
    },
    hasTeleconsult () {
      return this.item?.teleconsultQueue;
    },
    bookTeleconsultURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.uid;
      return `${pxPortalUrl}/appointments/step-1?doctor=${id}&organization=${this.organization}&type=telehealth`;
    },
    bookPhysicalURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.uid;
      return `${pxPortalUrl}/appointments/step-1?doctor=${id}&organization=${this.organization}&type=physical`;
    },
  },
  methods: {
    formatTodaySchedule (schedule) {
      if (!schedule) return 'Unavailable at this hour';
      const today = schedule.day;
      const day = this.days.find(day => day.value === today);
      const times = `${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')}`;
      return `${day?.text} (${times})`;
      // const day = schedule.day;
      // const times = `${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')}`;
      // return `${day} (${times})`;
    },
    formatIndividualSchedule (schedule) {
      const currentDay = schedule.day;
      const day = this.days.find(day => day.value === currentDay) || '';
      return `${day.text} (${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')})`;
      // return `${schedule.day} (${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')})`;
    },
    formatDay (day) {
      return this.days?.find(item => item.value === day)?.text || '';
      // return day;
    },
  },
};
</script>
