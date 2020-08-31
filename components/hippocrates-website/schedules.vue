<template lang="pug">
  div
    h2.pb-3 Clinic Schedule
    template(v-if="hospitalSchedules && hospitalSchedules.length === 0")
      i No schedules available
    div(v-else v-for="(day, key) in hospitalSchedules" :key="key")
      h3 {{ day.day | morph-capitalize }}
      table
        td(width="75") {{ day.opening | morph-date-format('hh:mm A') }}
        td(width="15").text-center -
        td {{ day.closing | morph-date-format('hh:mm A') }}
</template>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.days = [
      { order: 1, day: 'mon' },
      { order: 2, day: 'tue' },
      { order: 3, day: 'wed' },
      { order: 4, day: 'thu' },
      { order: 5, day: 'fri' },
      { order: 6, day: 'sat' },
      { order: 7, day: 'sun' },
    ];
    return {
      fullSchedules: [],
    };
  },
  computed: {
    hospitalSchedules () {
      this.fullSchedules = this.schedules; // eslint-disable-line
      const groupedSchedules = this.fullSchedules
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
  },
};
</script>

<style scoped>
</style>
