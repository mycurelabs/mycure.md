<template lang="pug">
  div(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile  }").main-container
    h3(:class="sectionClasses").mb-3 Facility Schedule
    div(v-if="schedules[0].day !== ''" v-for="(sched, key) in schedules" :key="key" :class="{'mt-2': $isMobile}")
      v-col.py-0
        v-row.py-1
          span(v-if="typeof sched.day === 'string'").font-weight-bold.text-capitalize.font-gray {{ sched.day }}
          span(v-else).font-weight-bold.text-capitalize.font-gray {{ `${sched.day[0]} - ${sched.day[sched.day.length - 1]}` }}
          v-spacer
          v-col(cols="12" sm="7" :align="$isMobile? 'start' : 'end'").pa-0
            span(v-if="typeof sched.time === 'string'").text-center.font-gray {{ sched.time }}
            div(v-else v-for="(slot, index, key) in sched.time" :key="key" :class="{'pb-2': index === sched.time.length - 1}").pt-3
              v-row.pb-1
                v-col.py-0
                  span.text-center.font-gray {{ sched.time[index] }}
    div(v-else)
      span No Schedule Available
    //- div(v-for="(sched, key) in schedules" :key="key").d-flex
    //-   h4.font-weight-bold.text-capitalize.font-gray {{ DAY_MAPPINGS[sched.day] }}
    //-   v-spacer
    //-   p.text-center.font-gray {{ formatTime(sched.opening) }} - {{ formatTime(sched.closing) }}
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
