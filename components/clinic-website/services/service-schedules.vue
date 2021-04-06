<template lang="pug">
  v-row
    v-col(cols="12").bordered-table
      v-data-table(
        :headers="headers"
        :items="tableItems"
        hide-default-footer
        light
        dense
      ).schedule-table
        tr(slot="item" slot-scope="props")
          td(v-for="(day, key) in props.item" :key="key").text-xs-center
            v-row(no-gutters)
              v-col(cols="12" v-for="(timeslot, key) in day" :key="key")
                v-chip(
                  :class="{'mt-1': key !== 0}"
                  color="primary"
                  small
                ).white--text
                  v-tooltip(bottom)
                    template(slot="activator" slot-scope="data")
                      span(v-on="data.on") {{ timeslot | format-time-range-shortened }}
                    | {{ timeslot | format-time-range }}
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
  },
  data () {
    this.days = [
      { text: 'Monday', value: 1 },
      { text: 'Tuesday', value: 2 },
      { text: 'Wednesday', value: 3 },
      { text: 'Thursday', value: 4 },
      { text: 'Friday', value: 5 },
      { text: 'Saturday', value: 6 },
      { text: 'Sunday', value: 0 },
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
};
</script>

<style scoped>
.bordered-table {
  border: 0.5px solid lightgrey;
}

.schedule-table {
  table-layout : fixed;
}
</style>
