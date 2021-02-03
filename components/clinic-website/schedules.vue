<template lang="pug">
  v-container(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile  }").main-container
    h2.font-21.font-gray Clinic Schedule
    v-row(v-for="(sched, key) in groupedSchedules" :key="key")
      v-col(cols="4").pb-0
        h3.font-weight-bold.text-capitalize.left.font-gray {{ sched.day }}
      v-col(cols="8").pb-0
        p.mb-0.right.text-center.font-gray {{ formatTime(sched.opening) }} - {{ formatTime(sched.closing) }}
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
    this.days = [
      {
        order: 1,
        day: 'mon',
        dayName: 'Monday',
      },
      {
        order: 2,
        day: 'tue',
        dayName: 'Tuesday',
      },
      {
        order: 3,
        day: 'wed',
        dayName: 'Wednesday',
      },
      {
        order: 4,
        day: 'thu',
        dayName: 'Thursday',
      },
      {
        order: 5,
        day: 'fri',
        dayName: 'Friday',
      },
      {
        order: 6,
        day: 'sat',
        dayName: 'Saturday',
      },
      {
        order: 7,
        day: 'sun',
        dayName: 'Sunday',
      },
    ];
    return {
      showAll: false,
    };
  },
  computed: {
    groupedSchedules () {
      const groupedSchedules = this.schedules
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
  background: rgba(0, 153, 204, 0.2);
  border-radius: 5px;
  min-height: 300px;
  position: relative;
  padding: 20px;
}
.font-gray {
  color: #4D4D4D !important;
}

</style>
