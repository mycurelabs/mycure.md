<template lang="pug">
  div
    v-row
      v-col(v-if="isDoctor" cols="12" md="2")
        v-avatar(size="100")
          img(
            :src="picURL"
            :alt="title"
            width="100%"
          )
      v-col(cols="12" :md="isDoctor ? '6' : '8'")
        h3 {{ title }}
        //- TODO: Show schedule for today but make it expandable
        //- span Mon - Fri
        //-   | (
        //-   b 7:00 AM to 3:00 PM
        //-   | )
        span.text-capitalize {{ schedule | format-schedule }}
        br
        br
        template(v-if="hasCoverages")
          span Coverages:
          br
          v-avatar(size="40" color="secondary").mx-1
          v-avatar(size="40" color="secondary").mx-1
      v-col(v-if="!price && !isDoctor" cols="12" md="2").text-center
        v-chip(
          :color="isAvailable ? 'lime' :'grey'"
          small
          label
        ) {{ isAvailable ? 'AVAILABLE' : 'UNAVAILABLE' }}
      v-col.grow.text-right
        h2(v-if="price") PHP {{ price }}
        v-chip(
          v-else-if="isDoctor"
          :color="isAvailable ? 'lime' :'grey'"
          small
          label
        ) {{ isAvailable ? 'AVAILABLE' : 'UNAVAILABLE' }}
        br(v-else)
        br
        br
        br
        v-btn(
          color="success"
          rounded
          :disabled="!isAvailable"
        ).text-none Book Now
    v-row
</template>

<script>
import { format } from 'date-fns';
export default {
  filters: {
    formatSchedule (schedule) {
      if (!schedule) return 'No schedules available';
      return `${schedule.day} (${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')})`;
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title () {
      if (this.isDoctor) {
        return this.item?.doctorName;
      }
      return this.item?.name;
    },
    picURL () {
      const sex = this.item?.sex;
      if (sex === 'female') {
        return this.item?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.item?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    price () {
      return this.item?.price;
    },
    schedules () {
      return this.item?.scheduleData || this.item?.schedules;
    },
    schedule () {
      if (!this.schedules) {
        return null;
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      return this.schedules.find(schedule => schedule.order === dayOrder);
    },
    hasCoverages () {
      return this.item?.$hasCoverages;
    },
    isAvailable () {
      if (!this.schedule) {
        return false;
      }
      return true;
    },
  },
};
</script>
