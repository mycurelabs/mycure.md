<template lang="pug">
  v-card(height="100%" elevation="2").orgs-card.px-5.pt-5.pb-3
    v-row
      v-icon(v-if="hasWebsite" color="primary" large :class="{'pt-7': !$isMobile}").mt-16.ml-n8 mdi-check-decagram
      img(
        :src="picURL"
        alt="Services"
        :width="$isRegularScreen? '82px' : '130px'"
        :height="$isRegularScreen? '82px' : '130px'"
        style="border-radius: 20px"
      ).ma-3
      v-col.my-3
        v-row
          span(:class="[nameFontSize, $isWideScreen ? 'name-width-wide' : 'name-width-reg']").text-truncate.font-weight-bold.mb-0 {{ organization.name   }}&nbsp;
        v-row(:class="textFontSize").info-text.font-weight-semibold
          span(v-if="organization.doc_specialties") {{ organization.doc_specialties[0] }}&nbsp;&nbsp;
          span(v-else) ---&nbsp;&nbsp;
          //- v-chip(v-if="organization.doc_website" color="primary" outlined x-small).mt-1 verified
        v-row(justify="start").mt-5
          v-col(cols="1").pa-0
            v-icon(color="primary" :small="!$isWideScreen") mdi-map-marker
          v-col(cols="11").pa-0
            div(:class="textFontSize").info-text.mt-1
              span(v-if="organization.address") {{ address }}
              span(v-else) &nbsp;- somewhere
        v-row(justify="start").mt-5.white--text
          div(v-for="(day, index) in daysInit" :key="index")
            div(:class="[textFontSize, $isWideScreen ? 'badge-size-wide' : 'badge-size', {'primary': clinicOpen(day.value)}]"
            ).badge {{ day.text }}
            //- span(v-if="organization.doc_practicingSince") &nbsp;{{ yearsOfExperience }} year/s of experience
            //- span(v-else) &nbsp;- year/s of experience
        //- v-row(justify="start").pt-3
        //-   v-btn(
        //-     color="success"
        //-     target="_blank"
        //-     rel="noopener noreferrer"
        //-     small
        //-     rounded
        //-     :href="doctorWebsite"
        //-   ).text-none.elevation-0.font-weight-light.ma-1.font-10
        //-     v-icon(:x-small="!$isMobile") mdi-stethoscope
        //-     b &nbsp;Teleconsult
        //-   v-btn(
        //-     color="primary"
        //-     target="_blank"
        //-     rel="noopener noreferrer"
        //-     small
        //-     rounded
        //-     :href="doctorWebsite"
        //-   ).text-none.elevation-0.font-weight-light.ma-1.font-10
        //-     v-icon(:x-small="!$isMobile") mdi-calendar
        //-     b &nbsp;Book a Visit
    v-col
      v-row(justify="end")
        v-btn(
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
          :small="!$isWideScreen"
          rounded
          :href="doctorWebsite"
          :class="$isWideScreen ? ['font-14', 'px-6'] : ['font-10', 'px-5'] "
        ).text-none.elevation-0.font-weight-light.mt-2
          b View

    //- v-row(v-if="organization.doc_specialties").mt-6.pa-2
    //-   v-col(cols="12")
    //-     v-row
    //-       v-chip(v-for="(specialty, key) in organization.doc_specialties" :key="key").font-12.ma-1 {{ specialty }}&nbsp;
</template>

<script>
// import VClamp from 'vue-clamp';
// import { format } from 'date-fns';
// import uniqBy from 'lodash/uniqBy';
// import { formatAddress, formatName } from '~/utils/formats';
// import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';

// import { formatName } from '~/utils/formats';
import uniqBy from 'lodash/uniqBy';
import classBinder from '~/utils/class-binder';
import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';
import { formatAddress } from '~/utils/formats';
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
        mobile: ['font-10'],
        regular: ['font-10'],
        wide: ['font-14'],
      });
    },
    address () {
      const { address } = this.organization;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
  },
  methods: {
    clinicOpen (value) {
      if (this.fullSchedules.length) {
        if (value < this.startDay) return false;
        if (value > this.endDay) return false;
        return true;
      }
      return false;
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
