<template lang="pug">
  div(style="background-color: #ececec; border-radius: 5px; min-height: 300px; position: relative;")
    h2.pb-3 Clinic Schedule
    template(v-if="firstThree && firstThree.length === 0")
      i No schedules available
    div(v-for="(day, key) in firstThree" :key="key")
      h3 {{ day.day | morph-capitalize }}
      table
        tr
          td(width="75") {{ day.opening | morph-date-format('hh:mm A') }}
          td(width="15").text-center -
          td {{ day.closing | morph-date-format('hh:mm A') }}
    div(v-if="showAll" v-for="(day, key) in allSchedules" :key="'All' + key")
      h3 {{ day.day | morph-capitalize }}
      table
        tr
          td(width="75") {{ day.opening | morph-date-format('hh:mm A') }}
          td(width="15").text-center -
          td {{ day.closing | morph-date-format('hh:mm A') }}
    div(v-if="schedules.length > 3" style="position: relative; bottom: 10px").pt-6
      strong(@click="showAll = !showAll").primary--text See {{ showAll ? 'Less' : 'All' }}
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
      showAll: false,
      fullSchedules: [],
    };
  },
  computed: {
    firstThree () {
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
      return groupedSchedules.slice(0, 3);
    },
    allSchedules () {
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
      const length = groupedSchedules.length;
      return groupedSchedules.slice(3, length);
    },
  },
};
</script>

<style scoped>
strong {
  cursor: pointer;
}
</style>
