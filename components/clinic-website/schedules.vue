<template lang="pug">
  div(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile  }").main-container
    h2.pb-3.font-21 Clinic Schedule
    div(v-for="(sched, key) in schedules" :key="key").d-flex
      v-col(cols="4").px-0
        h3.font-weight-bold.text-capitalize.left {{ sched.day }}
      v-col(cols="8").px-0
        p.mb-0.right {{ formatTime(sched.opening) }} - {{ formatTime(sched.closing) }}
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
  /* background-color: #ececec; */
  border-radius: 5px;
  min-height: 300px;
  position: relative;
  padding: 20px;
}
</style>
