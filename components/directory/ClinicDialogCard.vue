<template lang="pug">
  v-card(width="100%" :height="$isWideScreen ? '800px' : $isRegularScreen ? '700px' : '100%'").py-8.px-5.rounded-xl.no-scroll.no-scroll-2.scroll
    v-card-text
      v-col(cols="12")
        div.text-center
          img(
            :src="picURL"
            :alt="organization.name"
            :width="$isMobile? '80%' : '40%'"
            @error="imageExists = false"
          ).rounded-xl
          v-clamp(
            autoresize
            :max-lines="2"
          ).mc-title-set-2.font-weight-bold.black--text {{ organization.name }}
        v-row(align="start").mc-list-content-set-2.mt-5
          v-icon(color="secondary" x-large) mdi-medical-bag
          v-col.font-gray.py-0
            span Services
            div(v-if="organization.tags").font-weight-semibold
              span(v-for="(tag, index, key) in tagsToDisplay" :key="key") {{ index === 0 ? tag : ', ' + tag }}
            div(v-else)
              v-clamp(
                autoresize
                :max-lines="1"
              ).font-weight-light.font-italic.grey--text.text--lighten-1 No services available
        v-row(align="start").mc-list-content-set-2.pt-2
          v-icon(color="secondary" x-large) mdi-map-marker
          v-col.font-gray.py-0
            span Facility Address
            v-clamp(
              autoresize
              :class="address ? 'font-weight-semibold' : ['font-weight-light', 'font-italic', 'grey--text', 'text--lighten-1']"
            ) {{ address || 'No address provided'}}
        v-row(align="start").mc-list-content-set-2.pt-2
          v-icon(color="secondary" x-large) mdi-phone-in-talk-outline
          v-col.font-gray.py-0
            span Contact Number
            v-clamp(
              autoresize
              :max-lines="2"
              :class="organization.phone ? 'font-weight-semibold' : ['font-weight-light', 'font-italic', 'grey--text', 'text--lighten-1']"
            ) {{ organization.phone || 'No contact number'}}
        v-row(align="start").mc-list-content-set-2.pt-2
          v-icon(color="secondary" x-large) mdi-calendar
          v-col.font-gray.py-0
            v-row
              v-col.pb-2
                span Schedule
            div(v-if="organization.mf_schedule" v-for="(sched, key) in clinicSchedule" :key="key")
              v-col.py-0
                v-row.py-1
                  span(v-if="typeof (sched.day) === 'string'").font-weight-semibold.text-capitalize.font-gray {{ sched.day }}
                  span(v-else).font-weight-semibold.text-capitalize.font-gray {{ `${sched.day[0]} - ${sched.day[sched.day.length - 1]}` }}
                  v-spacer
                  v-col(cols="12" sm="7" :align="$isMobile? 'start' : 'end'").pa-0
                    span(v-if="typeof (sched.time) === 'string'").text-center.font-gray {{ sched.time }}
                    div(v-else v-for="(slot, index, key) in sched.time" :key="key" :class="{'pb-2': index === sched.time.length - 1}").pt-3
                      v-row.pb-1
                        v-col.py-0
                          span.text-center.font-gray {{ sched.time[index] }}
            div(v-else)
              v-clamp(
                autoresize
                :max-lines="1"
              ).font-weight-light.font-italic.grey--text.text--lighten-1 No schedule available
    v-card-actions.pa-0
      v-col
        v-row(justify="center")
          slot(name="card-button")
            v-btn(
              color="secondary"
              rel="noopener noreferrer"
              :href="clinicWebsite"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none.elevation-0.rounded-pill.mt-4
              v-icon mdi-open-in-new
              span.generic-button-text &nbsp;{{ hasWebsite ? 'View Website' : 'Claim this Facility' }}
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
  data () {
    this.formatTag = {
      'sto:diagnostic': 'Diagnostics',
      'sto:diagnostic/lab': 'Laboratory',
      'sto:diagnostic/imaging': 'Imaging',
      'sto:clinical-consultation': 'Consultation',
      'sto:clinical-procedure': 'Clinical Procedure',
      'sto:dental': 'Dental',
      'sto:pe': 'Physical Exam',
      'sto:clinical-procedure/ambulatory-bp-monitoring': 'BP Monitoring',
    };
    return {
      imageExists: true,
    };
  },
  computed: {
    hasWebsite () {
      return !!this.organization?.websiteId;
    },
    clinicWebsite () {
      const username = this.organization?.websiteId || this.organization?.id;
      return `${process.env.WEB_MAIN_URL}/facilities/${username}`;
    },
    picURL () {
      return this.imageExists ? this.organization?.picURL || FacilityPlaceholder : FacilityPlaceholder;
    },
    address () {
      const { address } = this.organization;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    clinicSchedule () {
      const sched = this.organization?.mf_schedule || [];
      const formatSched = sched.map(x => ({ day: x.day, time: `${this.formatTime(x.opening)} - ${this.formatTime(x.closing)}` }));
      const finalSched = [{ day: '', time: '' }];
      formatSched.map((x) => {
        if (finalSched.find(sched => sched.time === x.time)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.time === x.time));
          if (typeof finalSched[index].day === 'string') {
            finalSched[index].day = [finalSched[index].day, x.day];
          } else {
            finalSched[index].day = [...finalSched[index].day, x.day];
          }
        } else if (finalSched.find(sched => sched.day === x.day)) {
          const index = finalSched.indexOf(finalSched.find(sched => sched.day === x.day));
          finalSched[index].time = [finalSched[index].time, x.time];
        } else {
          finalSched.push(x);
          if (finalSched.find(sched => sched.day === '')) finalSched.shift();
        }
        return 0;
      });
      return finalSched;
    },
    tagsToDisplay () {
      const tagArray = this.organization.tags.filter(tag => tag.includes('sto:'));
      return tagArray.map(x => this.formatTag[x]);
    },
  },
  methods: {
    formatTime (time) {
      return format(time, 'hh:mm A');
    },
  },
};
</script>

<style scoped>
.no-scroll::-webkit-scrollbar {
  display: none;
}
.scroll {
  overflow-y: scroll;
}
.no-scroll-2 {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
