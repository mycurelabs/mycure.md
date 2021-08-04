<template lang="pug">
  div(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile  }").main-container
    h3(:class="sectionClasses").mb-3 Facility Schedule
    div(v-for="(sched, key) in schedules" :key="key").d-flex
      h4.font-weight-bold.text-capitalize.font-gray {{ DAY_MAPPINGS[sched.day] }}
      v-spacer
      p.text-center.font-gray {{ formatTime(sched.opening) }} - {{ formatTime(sched.closing) }}
</template>

<script>
import datefns from 'date-fns';
import classBinder from '~/utils/class-binder';

export default {
  props: {
    schedules: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.DAY_MAPPINGS = {
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday',
    };
    return {
      showAll: false,
    };
  },
  computed: {
    sectionClasses () {
      return classBinder(this, {
        mobile: ['font-s', 'text-center'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
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
  /* background-color: rgba(0, 153, 204, 0.2); */
  /* border-radius: 5px; */
  min-height: 300px;
  position: relative;
  /* padding: 20px; */
}
</style>
