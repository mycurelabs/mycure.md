<template lang="pug">
  v-card(height="100%" elevation="3" rounded="lg").orgs-card
    v-card-text
      v-col(align="start")
        v-row(justify="center")
          v-col.py-0
            img(
              :src="picURL"
              alt="Services"
              width="120"
              height="120"
            ).rounded-circle
          v-spacer
          v-col(align="end").pa-0
            v-btn( icon )
              v-icon mdi-dots-horizontal
        v-row(justify="start")
          v-col
            div.d-inline-flex
              p.font-weight-bold.font-24.text-center {{ organization.name }}&nbsp;
              v-icon(v-if="hasWebsite" color="primary" large).mt-n4 mdi-check-decagram
        v-row(align="end")
          div
            template(v-if="!isDescriptionExpanded && organization.description")
              v-clamp(:max-lines="2" autoresize) {{ organization.description }}
              a(@click="isDescriptionExpanded = true").primary--text See more
            template(v-else-if="isDescriptionExpanded")
              p {{ organization.description }}
              a(@click="isDescriptionExpanded = false").primary--text Collapse
            div(v-if="organization !== undefined").mt-4
              div.d-flex.my-1
                img(
                  src="~/assets/images/directory-results/address.png"
                  width="16px"
                  height="16px"
                  alt="Address logo"
                ).mr-2.pt-1.pl-1
                v-clamp(:max-lines="2" autoresize v-if="organization.address") {{ address }}
                p(v-else).font-italic No address available
              div.d-flex.my-1
                img(
                  src="~/assets/images/directory-results/contact.png"
                  width="16px"
                  height="16px"
                  alt="Phone logo"
                ).mr-2.pt-1.pl-1
                v-clamp(:max-lines="1" autoresize v-if="organization.phone || organization.phones").font-weight-bold {{ phoneNumber }}
                p(v-else).font-italic No phone number available
              div.d-flex.my-1
                img(
                  src="~/assets/images/directory-results/calendar.png"
                  width="16px"
                  height="16px"
                  alt="Calendar logo"
                ).mr-2.pt-1.pl-1
                div(v-if="fullSchedules.length")
                  //- div(v-if="!scheduleExpanded")
                  //-   v-clamp(:max-lines="2" autoresize).text-capitalize {{ formatTodaySchedule(schedulesToday) }}
                  //-     a(v-if="fullSchedules.length > 1" @click="scheduleExpanded = true").primary--text &nbsp; View More
                  //- div(v-else)
                  //-   div(v-for="(schedule, key) in groupedSchedules" :key="key")
                  //-     span.text-capitalize {{ formatIndividualSchedule(schedule) }}
                  //-     br
                  //-   a(@click="scheduleExpanded = false").primary--text View Less
                  span(v-if="filteredDays.length > 1").text-capitalize {{ filteredDays[0] }} - {{ filteredDays[filteredDays.length - 1] }}
                  span(v-else).text-capitalize {{ filteredDays[0] }}
                  br
                  br
                p(v-else).font-italic No schedules available
        v-row(justify="center" align="end")
          v-btn(
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            block
            :disabled="readOnly || !hasWebsite"
            @click="openFacility"
          ).text-none.elevation-0.font-weight-light
            //- need white version
              img(
                src="~/assets/images/directory-results/calendar.png"
                width="16px"
                height="16px"
                alt="Calendar logo"
              ).mr-2
            b Book a Visit
</template>

<script>
// import VClamp from 'vue-clamp';
import { format } from 'date-fns';
import uniqBy from 'lodash/uniqBy';
import { formatAddress } from '~/utils/formats';
import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';

export default {
  components: {
    VClamp: () => import('vue-clamp'),
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
      isDescriptionExpanded: false,
    };
  },
  computed: {
    fullSchedules () {
      // eslint-disable-next-line camelcase
      return this.organization?.mf_schedule || this.organization?.schedules || [];
    },
    filteredDays () {
      return uniqBy(this.groupedSchedules, 'day')
        .map(schedule => schedule.day) || [];
    },
    groupedSchedules () {
      const schedules = this.fullSchedules;
      // if (this.isDoctor) return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
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
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    phoneNumber () {
      const { phone, phones } = this.organization;
      if (phones) return phones.join(', ');
      if (phone) return phone;
      return '';
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
      this.$router.push(`/facilities/${this.organization.id}`);
    },
    formatTodaySchedule (schedules) {
      if (!schedules || !schedules?.length) return 'Unavailable today';
      // if (this.isDoctor) {
      //   const today = schedules[0].day;
      //   const day = this.days.find(day => day.value === today);
      //   const times = schedules.map((schedule) => {
      //     return `${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')}`;
      //   }).join(', ');
      //   return `${day?.text} (${times})`;
      // }
      const day = schedules[0].day;
      const times = schedules.map((schedule) => {
        return `${format(schedule.opening, 'hh:mm A')} - ${format(schedule.closing, 'hh:mm A')}`;
      }).join(', ');
      return `${day} (${times})`;
    },
    formatIndividualSchedule (schedule) {
      // if (this.isDoctor) {
      //   const currentDay = schedule.day;
      //   const day = this.days.find(day => day.value === currentDay) || '';
      //   return `${day.text} (${format(schedule.startTime, 'hh:mm A')} - ${format(schedule.endTime, 'hh:mm A')})`;
      // }
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
