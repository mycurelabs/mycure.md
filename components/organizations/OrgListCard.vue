<template lang="pug">
  v-card(flat color="#fafafa" height="100%").orgs-card
    div.d-flex
      v-col.shrink
        img(
          :src="picURL"
          alt="Services"
          :width="!$isMobile ? 146 : 80"
        )
      v-col.grow
        strong.font-18 {{ organization.name }}
        div
          v-clamp(:max-lines="2" autoresize) {{ organization.description }}
          div(v-if="organization !== undefined").mt-4
            div.d-flex
              v-icon(color="primary").mr-2.mb-auto mdi-map-marker
              p(:class="{ 'font-italic': !organization.address }") {{ address }}
            div.d-flex
              v-icon(color="primary)").mr-2.mb-auto mdi-phone
              p(v-if="organization.phone").font-weight-bold {{ organization.phone }}
              i(v-else) No phone number available
            div.d-flex
              v-icon(color="primary").mr-2.mb-auto mdi-calendar-today
              div(v-if="fullSchedules.length")
                div(v-if="!scheduleExpanded")
                  span.text-capitalize {{ formatTodaySchedule(schedulesToday) }}
                    a(v-if="fullSchedules.length > 1" @click="scheduleExpanded = true").primary--text &nbsp; View More
                div(v-else)
                  div(v-for="(schedule, key) in groupedSchedules" :key="key")
                    span.text-capitalize {{ formatIndividualSchedule(schedule) }}
                    br
                  a(@click="scheduleExpanded = false").primary--text View Less
                br
                br
              template(v-else)
                i No schedules available
                br
    v-row(v-if="!$isMobile && !readOnly && hasWebsite")
      v-col(cols="12").text-center
        v-btn(
          color="primary"
          @click="openFacility"
          target="_blank"
          rel="noopener noreferrer"
          rounded
        ) #[b Visit Facility]
    v-row(justify="center"  v-if="$isMobile && !readOnly && hasWebsite")
      v-col(cols="12")
        v-btn(
          color="primary"
          @click="openFacility"
          target="_blank"
          rel="noopener noreferrer"
          rounded
          block
          ) #[b Visit Facility]
</template>

<script>
import VClamp from 'vue-clamp';
import { format } from 'date-fns';
import { isEmpty } from 'lodash';
import { formatAddress } from '~/utils/formats';
import FacilityPlaceholder from '~/assets/images/facility-placeholder.png';

export default {
  components: {
    VClamp,
  },
  props: {
    organization: {
      type: Object,
      default: () => {},
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      { text: 'Mon', value: 1 },
      { text: 'Tues', value: 2 },
      { text: 'Wed', value: 3 },
      { text: 'Thu', value: 4 },
      { text: 'Fri', value: 5 },
      { text: 'Sat', value: 6 },
      { text: 'Sun', value: 0 },
    ];
    return {
      scheduleExpanded: false,
    };
  },
  computed: {
    fullSchedules () {
      // eslint-disable-next-line camelcase
      return this.organization?.mf_schedules || this.organization?.schedules || [];
    },
    groupedSchedules () {
      const schedules = this.fullSchedules;
      if (this.isDoctor) return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
      return schedules.sort((a, b) => a.day !== b.day ? a.order - b.order : a.opening - b.opening) || [];
    },
    schedulesToday () {
      if (!this.fullSchedules?.length) {
        return null;
      }
      const dateToday = new Date();
      const dayToday = dateToday.getDay();
      const dayOrder = dayToday === 7 ? 0 : dayToday;

      return this.fullSchedules.filter(schedule => schedule.order === dayOrder || schedule.day === dayOrder) || [];
    },
    picURL () {
      return this.organization?.picURL || FacilityPlaceholder;
    },
    address () {
      const { address } = this.organization;
      if (isEmpty(address)) return 'No address available';
      return formatAddress(address, 'street1, city, province, country');
    },
    hasWebsite () {
      return !!this.organization?.websiteId;
    },
  },
  methods: {
    async fetchOrganization () {
      const { items } = await this.$sdk.service('organizations').find({
        id: this.service.facility,
      });
      if (items) {
        this.serviceOrganization = items;
      }
    },
    openFacility () {
      this.$router.push(`/clinics/${this.organization.id}`);
    },
    formatTodaySchedule (schedules) {
      if (!schedules || !schedules?.length) return 'Unavailable today';
      if (this.isDoctor) {
        const today = schedules[0].day;
        const day = this.days.find(day => day.value === today);
        const times = schedules.map((schedule) => {
          return `${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')}`;
        }).join(', ');
        return `${day?.text} (${times})`;
      }
      const day = schedules[0].day;
      const times = schedules.map((schedule) => {
        return `${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')}`;
      }).join(', ');
      return `${day} (${times})`;
    },
    formatIndividualSchedule (schedule) {
      if (this.isDoctor) {
        const currentDay = schedule.day;
        const day = this.days.find(day => day.value === currentDay) || '';
        return `${day.text} (${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')})`;
      }
      return `${schedule.day} (${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')})`;
    },
  },
};
</script>

<style scoped>
.orgs-card {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}
</style>
