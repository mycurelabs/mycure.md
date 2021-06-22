<template lang="pug">
  div(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile  }").main-container
    h3.mb-3 Facility Schedule
    div(v-for="(sched, key) in schedules" :key="key").d-flex
      h3.font-weight-bold.text-capitalize.font-gray {{ sched.day }}
      v-spacer
      p.text-center.font-gray {{ formatTime(sched.opening) }} - {{ formatTime(sched.closing) }}
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
  /* background-color: rgba(0, 153, 204, 0.2); */
  /* border-radius: 5px; */
  min-height: 300px;
  position: relative;
  /* padding: 20px; */
}
.font-gray {
  color: #4D4D4D !important;
}

</style>
