<template lang="pug">
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
            //- v-clamp(
            //-   autoresize
            //-   :max-lines="2"
            //- ).font-weight-semibold {{ tagsToDisplay }}
            div(v-if="organization.tags").font-weight-semibold
              span(v-for="(tag, index, key) in tagsToDisplay" :key="key") {{ index === 0 ? tag : ', ' + tag }}
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
import { format } from 'date-fns';
import VClamp from 'vue-clamp';
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
  },
  computed: {
    hasWebsite () {
      return !!this.organization?.websiteId;
    },
    clinicWebsite () {
      const username = this.organization?.websiteId;
      return `${process.env.WEB_MAIN_URL}/facilities/${username}`;
    },
    picURL () {
      return this.organization?.picURL || FacilityPlaceholder;
    },
    address () {
      const { address } = this.organization;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    clinicSchedule () {
      const orgSched = this.organization?.mf_schedule || [];
      const schedArray = [];
      let hasMatch = false;
      let schedIndex = 0;
      if (orgSched !== []) {
        for (let i = 0; i < orgSched.length; i++) {
          hasMatch = false;
          for (let x = 0; x < schedArray.length; x++) {
            // if ((orgSched[i].opening === schedArray[x].opening) && (orgSched[i].closing === schedArray[x].closing)) {
            if (schedArray[x].time === this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing)) {
              if (schedArray[x].multiday) {
                schedArray[x].dayArray = [...schedArray[x].dayArray, this.formatDay(orgSched[i].day)];
              } else {
                schedArray[x].dayArray = [schedArray[x].dayArray, this.formatDay(orgSched[i].day)];
                schedArray[x].multiday = true;
              }
              hasMatch = true;
            }
          }
          for (let x = 0; x < schedArray.length; x++) {
            if (schedArray[x].dayArray === this.formatDay(orgSched[i].day)) {
              schedArray[x].time = [schedArray[x].time, this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing)];
              hasMatch = true;
            }
          }
          if (!hasMatch) {
            schedArray[schedIndex] = { dayArray: this.formatDay(orgSched[i].day), day: '', time: this.formatTime(orgSched[i].opening) + ' - ' + this.formatTime(orgSched[i].closing), multiday: false };
            schedIndex++;
          }
        }
        for (let i = 0; i < schedArray.length; i++) {
          if (schedArray[i].multiday) {
            schedArray[i].day = schedArray[i].dayArray[0] + ' - ' + schedArray[i].dayArray[schedArray[i].dayArray.length - 1];
          } else {
            schedArray[i].day = schedArray[i].dayArray;
          }
        }
      }
      return schedArray;
    },
    tagsToDisplay () {
      const tagArray = this.organization.tags.filter(tag => tag.search('sto:') === 0);
      const tags = tagArray.map(this.formatTag);
      return tags;
    },
  },
  methods: {
    visitWebsite () {
      this.$router.push(`/facilities/${this.organization.websiteId || this.organization.id}`);
    },
    formatTime (time) {
      return format(time, 'hh:mm A');
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
    formatTag (tag) {
      switch (tag) {
        case 'sto:diagnostic': return 'Diagnostics';
        case 'sto:diagnostic/lab': return 'Laboratory';
        case 'sto:diagnostic/imaging': return 'Imaging';
        case 'sto:clinical-consultation': return 'Consultation';
        case 'sto:clinical-procedure': return 'Clinical Procedure';
        case 'sto:dental': return 'Dental';
        case 'sto:pe': return 'Physical Exam';
        case 'sto:clinical-procedure/ambulatory-bp-monitoring': return 'BP Monitoring';
        default: return '';
      }
    },
  },
};
</script>
