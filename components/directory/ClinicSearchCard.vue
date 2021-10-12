<template lang="pug">
  v-card(height="100%" elevation="4").orgs-card.pa-4.d-flex.flex-column
    v-card-title.pa-0
      div(:height="coverSize").container.pa-0
        img(
          :src="coverURL"
          :alt="organization.name"
          width="100%"
          :height="coverSize"
          style="border-radius: 20px; object-fit: cover"
          @error="imageExists = false"
        )
        img(
          :src="picURL"
          :alt="organization.name"
          :width="imageSize"
          :height="imageSize"
          @error="imageExists = false"
        ).bottom-right.ma-2.rounded-circle
    v-card-text(:class="$isWideScreen ? 'pt-4' : 'pt-2'").px-0
      //- v-icon(v-if="hasWebsite" color="secondary" large :class="{'pt-7': !$isMobile}").mt-16.ml-n8 mdi-check-decagram
      v-col.pa-0
        v-tooltip(bottom)
          template(v-slot:activator="{ on, attrs }")
            v-clamp(
              v-on="on"
              autoresize
              :max-lines="2"
              :class="nameFontSize"
            ).font-weight-bold.mb-0.black--text {{ organization.name || '' }}&nbsp;
          span {{ organization.name }}
        div(:class="$isWideScreen ? 'mt-4' : 'mt-1'").d-flex
          v-icon(color="secondary" :small="!$isWideScreen") mdi-map-marker
          v-tooltip(bottom)
            template(v-slot:activator="{ on, attrs }")
              v-clamp(
                v-on="on"
                autoresize
                :max-lines="1"
                :class="[textFontSize, {'font-italic': !address }]"
              ).info--text.mt-1 {{ address || 'No address provided'}}
            span {{ address || 'No address' }}
    v-spacer
    v-card-actions.pa-0
      v-col.pa-0
        div.d-flex.white--text.my-2
          div(v-for="(day, index) in daysInit" :key="index").pr-2
            div(:class="[textFontSize, badgeSize, {'success': isClinicOpen(day.value)}]").badge
              | {{ day.text }}
        v-row(justify="end").py-3
          v-col(cols="12" sm="6").py-0
            v-btn(
              color="secondary"
              :small="!$isWideScreen"
              outlined
              rounded
              block
              :class="$isWideScreen ? 'font-14' : 'font-10'"
              @click="dialogBox = true"
            ).text-none.elevation-0.font-weight-light.mt-2
              b Online Consults
          v-col(cols="12" sm="6").py-0
            v-btn(
              color="secondary"
              :small="!$isWideScreen"
              rounded
              block
              :class="$isWideScreen ? 'font-14' : 'font-10'"
              @click="dialogBox = true"
            ).text-none.elevation-0.font-weight-light.mt-2
              b Book a Visit
    v-dialog(
      v-model="dialogBox"
      :scrollable="false"
      :width="$isMobile ? '100%' : '35%'"
      content-class="rounded-xl"
    ).pa-0
      clinic-dialog-card(:organization="organization")
</template>

<script>
import VClamp from 'vue-clamp';
import uniqBy from 'lodash/uniqBy';
import classBinder from '~/utils/class-binder';
import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';
import CoverPlaceholder from '~/assets/images/directory-results/Directory Card image - Clinic.png';
import { formatAddress } from '~/utils/formats';
export default {
  components: {
    VClamp,
    ClinicDialogCard: () => import('~/components/directory/ClinicDialogCard.vue'),
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
      { text: 'S', value: 'sun' },
      { text: 'M', value: 'mon' },
      { text: 'T', value: 'tue' },
      { text: 'W', value: 'wed' },
      { text: 'Th', value: 'thu' },
      { text: 'F', value: 'fri' },
      { text: 'S', value: 'sat' },
    ];
    return {
      dialogBox: false,
      scheduleExpanded: false,
      isDescriptionExpanded: false,
      imageExists: true,
    };
  },
  computed: {
    hasWebsite () {
      return !!this.organization?.websiteId;
    },
    clinicWebsite () {
      const username = this.organization?.websiteId;
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
    picURL () {
      return this.imageExists ? this.organization?.picURL || FacilityPlaceholder : FacilityPlaceholder;
    },
    coverURL () {
      return this.imageExists ? this.organization?.coverURL || CoverPlaceholder : CoverPlaceholder;
    },
    nameFontSize () {
      return classBinder(this, {
        mobile: ['font-16'],
        regular: ['font-20'],
        wide: ['font-28'],
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
    imageSize () {
      if (this.$isRegularScreen) return '55px';
      if (this.$isMobile) return '67px';
      return '87px';
    },
    coverSize () {
      if (this.$isRegularScreen) return '140px';
      if (this.$isMobile) return '140px';
      return '180px';
    },
  },
  methods: {
    visitWebsite () {
      this.$router.push(`/facilities/${this.organization.websiteId || this.organization.id}`);
    },
    isClinicOpen (value) {
      if (this.fullSchedules.length) {
        if (this.filteredDays.includes(value)) return true;
        return false;
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
  height: 20px;
  width: 20px;
}
.badge-size-mobile {
  height: 25px;
  width: 25px;
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
.cover-bg {
  width: 100%;
  border-radius: 20px;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 0px;
}
.container {
  position: relative;
  text-align: center;
}
</style>
