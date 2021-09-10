<template lang="pug">
  v-card(height="100%" elevation="2").orgs-card.px-2.pt-5.pb-3
    v-row.d-flex
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
    v-col
      v-row(justify="end")
        v-btn(
          color="primary"
          :small="!$isWideScreen"
          rounded
          :class="$isWideScreen ? ['font-14', 'px-6'] : ['font-10', 'px-5']"
          @click="visitWebsite"
        ).text-none.elevation-0.font-weight-light.mt-2
          b Book a Visit
</template>

<script>
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
      scheduleExpanded: false,
      isDescriptionExpanded: false,
    };
  },
  computed: {
    hasWebsite () {
      return !!this.organization?.websiteId;
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
