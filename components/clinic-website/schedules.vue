<template lang="pug">
  div.main-container
    h2.pb-3 Clinic Schedule
    div(v-for="(sched, key) in schedules" :key="key")
      v-row
        v-col(cols="12" sm="4")
          h3.font-weight-bold.text-capitalize.left {{ sched.day }}
        v-col(cols="12" sm="8")
          p(v-for="(hour, key) in sched.hours" :key="key").mb-0.right {{ formatTime(hour.opening) }} - {{ formatTime(hour.closing) }}
</template>

<script>
import datefns from 'date-fns';

export default {
  props: {
    schedules: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      showAll: false,
    };
  },
  methods: {
    formatTime (time) {
      return datefns.format(time, 'hh:mm A');
    },
  },
};
</script>

<style scoped>
strong {
  cursor: pointer;
}
.main-container {
  background-color: #ececec;
  border-radius: 5px;
  min-height: 300px;
  position: relative;
  padding: 30px;
}
</style>
