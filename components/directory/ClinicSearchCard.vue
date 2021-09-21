<template lang="pug">
  v-card(height="100%" elevation="2").orgs-card.px-3.pb-3.pt-4.d-flex.flex-column
    v-row
      //- v-icon(v-if="hasWebsite" color="primary" large :class="{'pt-7': !$isMobile}").mt-16.ml-n8 mdi-check-decagram
      img(
        :src="picURL"
        :alt="organization.name"
        :width="$isRegularScreen? '82px' : '130px'"
        :height="$isRegularScreen? '82px' : '130px'"
        style="border-radius: 20px"
      ).ma-3
      v-col
        v-tooltip(bottom)
          template(v-slot:activator="{ on, attrs }")
            v-clamp(
              v-on="on"
              autoresize
              :max-lines="2"
              :class="[nameFontSize, $isWideScreen ? 'name-width-wide' : 'name-width-reg']"
            ).font-weight-bold.mb-0 {{ organization.name || '' }}&nbsp;
          span {{ organization.name }}
        div.d-flex.mt-1
          v-icon(color="primary" :small="!$isWideScreen") mdi-map-marker
          v-tooltip(bottom)
            template(v-slot:activator="{ on, attrs }")
              v-clamp(
                v-on="on"
                autoresize
                :max-lines="2"
                :class="[textFontSize, {'font-italic': !address }]"
              ).info--text.mt-1 {{ address || 'No address provided'}}
            span {{ address || 'No address' }}
        div.d-flex.white--text.mt-2
          div(v-for="(day, index) in daysInit" :key="index")
            div(:class="[textFontSize, badgeSize, {'primary': clinicOpen(day.value)}]").badge
              | {{ day.text }}
    v-spacer
    v-card-actions.pa-0
      v-col
        v-row(justify="end")
          v-btn(
            color="primary"
            :small="!$isWideScreen"
            rounded
            :class="$isWideScreen ? ['font-14', 'px-6'] : ['font-10', 'px-5']"
            @click="dialogBox = true"
          ).text-none.elevation-0.font-weight-light.mt-2
            b Book a Visit
    v-dialog(v-model="dialogBox" :scrollable="false" width="40%").pa-0
      v-card(width="100%").pa-5.rounded-xl
        v-card-text
          v-col(cols="12")
            div.text-center
              img(
                :src="picURL"
                :alt="organization.name"
                width="30%"
              ).rounded-xl
              v-clamp(
                autoresize
                :max-lines="2"
              ).mc-title-set-2.font-weight-bold.black--text {{ organization.name }}
            v-row.mc-content-set-4.mt-5
              v-icon(color="primary" x-large) mdi-medical-bag
              v-col.font-gray.py-0
                span Services
                v-clamp(
                  autoresize
                  :max-lines="2"
                ).font-weight-semibold {{ organization.tags }}
            v-row.mc-content-set-4.pt-2
              v-icon(color="primary" x-large) mdi-map-marker
              v-col.font-gray.py-0
                span Facility Address
                v-clamp(
                  autoresize
                  :max-lines="2"
                ).font-weight-semibold {{ address || 'No address provided'}}
            v-row.mc-content-set-4.pt-2
              v-icon(color="primary" x-large) mdi-phone-in-talk-outline
              v-col.font-gray.py-0
                span Contact Number
                v-clamp(
                  autoresize
                  :max-lines="2"
                ).font-weight-semibold {{ organization.phone || 'No contact number'}}
            v-row.mc-content-set-4.pt-2
              v-icon(color="primary" x-large) mdi-calendar
              v-col.font-gray.py-0
                v-row
                  v-col.pb-2
                    span Schedule
                //- div(v-for="(sched, index, key) in clinicSchedule" :key="key").d-flex
                //-   span {{ sched }}
                div(v-for="(sched, key) in clinicSchedule" :key="key")
                  v-col.py-0
                    v-row.py-1
                      span.font-weight-semibold.text-capitalize.font-gray {{ sched.day }}
                      v-spacer
                      v-col(cols="7" align="end").pa-0
                        span(v-if="sched.time.length > 18").text-center.font-gray {{ sched.time }}
                        div(v-else v-for="(slot, index, key) in sched.time" :key="key").pt-3
                          v-row.pb-1
                            v-col.py-0
                              span.text-center.font-gray {{ sched.time[index] }}
                //- v-clamp(
                //-   autoresize
                //- ).mc-content-set-1.font-weight-semibold {{ organization.mf_schedule || 'heyhey' + organization.schedules}}
        v-card-actions.pa-0
          v-col
            v-row(justify="center")
              v-btn(
                color="primary"
                rel="noopener noreferrer"
                :href="clinicWebsite"
                :disabled="!hasWebsite"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                @click="visitWebsite"
              ).text-none.elevation-0.rounded-pill
                v-icon mdi-open-in-new
                span.generic-button-text &nbsp;View Website

</template>

<script>
import datefns from 'date-fns';
import VClamp from 'vue-clamp';
// import { format } from 'date-fns';
// import uniqBy from 'lodash/uniqBy';
// import { formatAddress, formatName } from '~/utils/formats';
// import { formatName } from '~/utils/formats';
import uniqBy from 'lodash/uniqBy';
import classBinder from '~/utils/class-binder';
import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';
import { formatAddress } from '~/utils/formats';
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
    this.daysInit = [
      { text: 'S', value: 0 },
      { text: 'M', value: 1 },
      { text: 'T', value: 2 },
      { text: 'W', value: 3 },
      { text: 'Th', value: 4 },
      { text: 'F', value: 5 },
      { text: 'S', value: 6 },
    ];
    return {
      dialogBox: false,
      scheduleExpanded: false,
      isDescriptionExpanded: false,
    };
  },
  computed: {
    hasWebsite () {
      return !!this.organization?.websiteId;
    },
    clinicWebsite () {
      const username =this.organization?.websiteId; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/facilities/${username}`;
    },
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
    startDay () {
      switch (this.filteredDays[0]) {
        case 'mon': return 1;
        case 'tue': return 2;
        case 'wed': return 3;
        case 'thu': return 4;
        case 'fri': return 5;
        case 'sat': return 6;
        default: return 0;
      };
    },
    endDay () {
      switch (this.filteredDays[this.filteredDays.length - 1]) {
        case 'mon': return 1;
        case 'tue': return 2;
        case 'wed': return 3;
        case 'thu': return 4;
        case 'fri': return 5;
        case 'sat': return 6;
        default: return 0;
      };
    },
    picURL () {
      return this.organization?.picURL || FacilityPlaceholder;
    },
    nameFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-16'],
        wide: ['font-24'],
      });
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-10'],
        wide: ['font-14'],
      });
    },
    badgeSize () {
      return classBinder(this, {
        mobile: ['badge-size-mobile'],
        regular: ['badge-size'],
        wide: ['badge-size-wide'],
      });
    },
    address () {
      const { address } = this.organization;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    clinicSchedule () {
      const orgSched = this.organization.mf_schedule;
      const schedArray = [];
      let hasMatch = false;
      let schedIndex = 0;
      if (this.organization.mf_schedule) {
        for (let i = 0; i < orgSched.length; i++) {
          hasMatch = false;
          for (let x = 0; x < schedArray.length; x++) {
            // if ((orgSched[i].opening === schedArray[x].opening) && (orgSched[i].closing === schedArray[x].closing)) {
            if (schedArray[x].time === this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing)) {
              if (schedArray[x].multiday) {
                console.log('hit');
                schedArray[x].dayArray = [...schedArray[x].dayArray, this.formatDay(orgSched[i].day)];
              } else {
                console.log('hithit');
                schedArray[x].dayArray = [schedArray[x].dayArray, this.formatDay(orgSched[i].day)];
                schedArray[x].multiday = true;
              }
              hasMatch = true;
              console.log('match 1');
            }
          }
          for (let x = 0; x < schedArray.length; x++) {
            if (schedArray[x].dayArray === this.formatDay(orgSched[i].day)) {
              schedArray[x].time = [schedArray[x].time, this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing)];
              hasMatch = true;
              console.log('match 2');
            }
          }
          if (!hasMatch) {
            schedArray[schedIndex] = { dayArray: this.formatDay(orgSched[i].day), day: '', time: this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing), multiday: false };
            schedIndex++;
            console.log('match 3');
          }
        }
      }
      for (let i = 0; i < schedArray.length; i++) {
        if (schedArray[i].multiday) {
          schedArray[i].day = schedArray[i].dayArray[0] + ' - ' + schedArray[i].dayArray[schedArray[i].dayArray.length - 1];
        } else {
          schedArray[i].day = schedArray[i].dayArray;
        }
      }
      return schedArray;
    },
  },
  methods: {
    visitWebsite () {
      this.$router.push(`/facilities/${this.organization.websiteId || this.organization.id}`);
    },
    clinicOpen (value) {
      if (this.fullSchedules.length) {
        if (value < this.startDay) return false;
        if (value > this.endDay) return false;
        return true;
      }
      return false;
    },
    formatTime (time) {
      return datefns.format(time, 'hh:mm A');
    },
    formatDay (day) {
      switch (day) {
        case 'mon': return 'Mon';
        case 'tue': return 'Tue';
        case 'wed': return 'Wed';
        case 'thu': return 'Thu';
        case 'fri': return 'Fri';
        case 'sat': return 'Sat';
        case 'sun': return 'Sun';
        default: return '';
      }
    },
  },
};
</script>

<style scoped>
.orgs-card {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}
.info-text {
 color: #393d45;
}
.name-width-wide {
  max-width: 300px;
}
.name-width-reg {
  max-width: 180px;
}
.badge-size {
  height: 15px;
  width: 15px;
}
.badge-size-mobile {
  height: 20px;
  width: 20px;
}
.badge-size-wide {
  height: 30px;
  width: 30px;
}
.badge {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(163, 163, 163);
}
</style>
