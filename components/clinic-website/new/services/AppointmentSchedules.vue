<template lang="pug">
  v-row
    v-col(v-if="!hideLabels")
      strong.font-weight-black.accent--text |&nbsp;
        span.font-weight-bold Physical Appointment
      br
      strong.font-weight-black.info--text |&nbsp;
        span.font-weight-bold Online Consult
    v-col(cols="12")
      v-row(v-for="(day, key) in days" :key="key" align="center").bordered-table.my-3
        v-col(cols="12" md="2").text-center
          h3(:class="{'error--text': day.value === 0}") {{ day.text }}
        v-col.grow
          v-row(dense justify="center")
            v-col(
              v-for="(timeslot, key) in getSlots(day.value)"
              :key="key"
              cols="12"
              sm="7"
            )
              v-row(dense justify="center")
                v-col(cols="8" :align="$isMobile ? 'center' : null")
                  h4.font-weight-semibold
                    strong(v-if="!hideLabels" :class="`${getSlotColor(timeslot)}--text`").font-weight-black |&nbsp;
                    span {{ timeslot | format-time-range }}
</template>

<script>
// utils
import { format } from 'date-fns';
// import { sortBy } from 'lodash';

// const sortItems = (items) => {
//   return sortBy(items, item => item.startTime);
// };

export default {
  filters: {
    formatTimeRange (value) {
      if (!value) return;
      const { startTime, endTime, opening, closing } = value;
      const start = startTime || opening;
      const end = endTime || closing;
      return `${format(start, 'hh:mm a')}-${format(end, 'hh:mm a')}`;
    },
    formatTimeRangeShortened (value) {
      if (!value) return;

      const { startTime, opening } = value;
      return `${format(startTime || opening, 'hh:mm a')} ...`;
    },
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    nonMfSchedule: {
      type: Boolean,
      default: true,
    },
    hideLabels: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      { text: 'MON', value: 1 },
      { text: 'TUE', value: 2 },
      { text: 'WED', value: 3 },
      { text: 'THU', value: 4 },
      { text: 'FRI', value: 5 },
      { text: 'SAT', value: 6 },
      { text: 'SUN', value: 0 },
    ];
    return {
      showList: false,
    };
  },
  computed: {
    headers () {
      return this.days.map((day) => {
        const normalizedDay = day.text.substring(0, 3);
        return {
          text: normalizedDay,
          align: 'start',
          sortable: false,
          value: normalizedDay.toLowerCase(),
          width: '1%',
        };
      });
    },
    mon () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 1);
      return items.filter(item => item.order === 1);
    },
    tue () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 2);
      return items.filter(item => item.order === 2);
    },
    wed () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 3);
      return items.filter(item => item.order === 3);
    },
    thu () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 4);
      return items.filter(item => item.order === 4);
    },
    fri () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 5);
      return items.filter(item => item.order === 5);
    },
    sat () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 6);
      return items.filter(item => item.order === 6);
    },
    sun () {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule) return items.filter(item => item.day === 0);
      return items.filter(item => item.order === 7);
    },
    tableItems () {
      return [{
        mon: this.mon,
        tue: this.tue,
        wed: this.wed,
        thu: this.thu,
        fri: this.fri,
        sat: this.sat,
        sun: this.sun,
      }];
    },
  },
  methods: {
    getSlots (value) {
      if (!this.items?.length) return [];
      const items = [...this.items];
      if (this.nonMfSchedule && value === 0) {
        return items.filter(item => item.day === 0);
      } else if (value === 0) {
        return items.filter(item => item.order === 7);
      }
      if (this.nonMfSchedule) return items.filter(item => item.day === value);
      return items.filter(item => item.order === value);
    },
    getSlotColor (timeslot) {
      const { meta } = timeslot;
      if (meta?.serviceSubtype === 'telehealth') return 'info';
      return 'accent';
    },
  },
};
</script>

<style scoped>
.bordered-table {
  border: 1px solid lightgrey;
  border-radius: 5px !important;
}

.schedule-table {
  table-layout : fixed;
}
</style>
