<template lang="pug">
  v-card(flat).rounded-md.pa-3
    v-card-text
      v-row(:justify="$isMobile ? 'center' : 'end'")
        v-col(cols="12" md="8" :class="{'text-center': $isMobile}")
          h4.mc-h4.title--text {{ title }}&nbsp;
        v-spacer
        div.pa-3
          h3(v-if="price").mc-h3
            money(:value="price" symbol="₱" text-class="mc-h3")
          span(v-else).font-italic No price stated
      v-row.my-6
        v-col(cols="12")
          a(@click="dialog.schedules = true").title--text.mc-hyp2 Schedule
            v-icon(small color="primary" right).mt-n1 {{ mdiInformationOutline }}
          v-row(:justify="$isMobile ? 'center' : 'start'" align="center").px-2.mt-4
            div(
              v-for="(day, key) in daysList"
              :key="key"
              :class="$isMobile ? ['text-center', 'mx-1'] : 'mx-1'"
            )
              div(
                :class="isServiceAvailable(day.value) ? 'success' : '#EEEEEE'"
                :style="isServiceAvailable(day.value) ? 'color: white' : 'color: #BFBFBF'"
              ).badge.badge-size {{ day.text }}
            v-spacer(v-if="!$isMobile")
            div(:width="$isMobile ? '100%' : 'auto'").my-3
              a(@click="dialog.coverages = true").primary--text.mc-hyp2 View Insurance Providers
      v-divider.my-5
      //- NOTE: When services are fetched with $search operator, no coverages are fetched and populated. Possibly because you
      //- can't use $populate and $search together in the query.
      //- v-row(v-if="hasCoverages")
      //-   v-avatar(
      //-     v-if="coverages[0]"
      //-     size="25"
      //-     color="secondary"
      //-   ).mx-1
      //-     v-img(v-if="coverages[0].picURL" :src="coverages[0].picURL")
      //-     span(v-else).white--text {{ coverages[0].name.substring(0,1) }}
      //-   span {{ previewCoverages }}
      //-     template(v-if="coveragesTotal > previewCoveragesLimit")
      //-       | ...
      //-       a(@click="dialog.coverages = true").primary--text &nbsp;and {{ coveragesTotal - previewCoveragesLimit }} more
    v-card-actions
      //- span(v-if="isAvailable").mc-b4.success--text Available for Online Booking&nbsp;
      span(v-if="!$isMobile && isAvailable" style="color: #72727D").mc-b4 Available for Online Booking&nbsp;
        v-icon(small color="#72727D") {{ mdiCalendarCheck }}
      v-spacer(v-if="!$isMobile")
      v-btn(
        v-if="!$isMobile"
        color="primary"
        depressed
        x-large
        :width="!$isWideScreen ? '152px' : '200'"
        :block="$isMobile"
        :disabled="!isAvailable"
        :href="bookURL"
        @click="trackBooking(appointmentType)"
      ).text-none
        span.mc-btn1 Book Now
      v-col(v-else cols="12").text-center
        v-btn(
          color="primary"
          depressed
          x-large
          :width="!$isWideScreen ? '152px' : '200'"
          :block="$isMobile"
          :disabled="!isAvailable"
          :href="bookURL"
          @click="trackBooking(appointmentType)"
        ).text-none.mb-6
          span.mc-btn1 Book Now
        span(v-if="isAvailable" style="color: #72727D").mc-b4 Available for Online Booking&nbsp;
          v-icon(small color="#72727D") {{ mdiCalendarCheck }}

    //- DIALOGS
    //- Schedule dialog
    v-dialog(v-model="dialog.schedules" width="600")
      v-card
        v-toolbar(flat)
          v-toolbar-title.primary--text Available Schedules
          v-spacer
          v-btn(icon @click="dialog.schedules = false")
            v-icon {{ mdiClose }}
        v-card-text
          schedules(
            hide-labels
            non-mf-schedule
            :items="groupedSchedules"
          )
    //- Providers Dialog
    v-dialog(v-model="dialog.providers" width="350")
      v-toolbar(flat)
        v-toolbar-title.primary--text Available Doctors
        v-spacer
        v-btn(icon @click="closeProvidersDialog")
          v-icon {{ mdiClose }}
      v-card
        v-card-text
          v-list
            v-list-item(v-for="(provider, key) in previewProviders" :key="key")
              v-list-item-avatar
                v-avatar(size="25")
                  img(
                    :src="provider.picURL || doctorAvatar"
                    alt="MYCURE Doctor Default Avatar"
                    width="100%"
                  )
              v-list-item-title {{ provider | format-name }}
    //- Coverages Dialog
    v-dialog(v-model="dialog.coverages" width="500")
      v-toolbar(flat)
        v-toolbar-title.primary--text Accreditations
        v-spacer
        v-btn(icon @click="dialog.coverages = false")
          v-icon {{ mdiClose }}
      v-card
        v-card-text
          v-list
            v-tooltip(
              v-for="(coverage, key) in coverages" :key="key"
              bottom
            )
              template(v-slot:activator="{ on, attrs }")
                v-list-item(v-on="on")
                  v-list-item-avatar
                    v-avatar(size="30" color="secondary")
                      v-img(v-if="coverage.picURL" :src="coverage.picURL" alt="MYCURE HMO")
                      span(v-else).white--text {{ coverage.name.substring(0,1) }}
                  v-list-item-title {{ coverage.name }}
              span {{ coverage.name }}
</template>

<script>
import {
  mdiCalendarBlank,
  mdiInformationOutline,
  mdiCheckboxMarkedCircleOutline,
  mdiCloseCircleOutline,
  mdiClose,
  mdiCalendarCheck,
} from '@mdi/js';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import Schedules from './AppointmentSchedules';
import Money from '~/components/commons/Money';
import { formatName } from '~/utils/formats';
import DefaultAvatar from '~/assets/images/commons/mycure-default-avatar.png';

export default {
  components: {
    Money,
    Schedules,
  },
  filters: {
    formatName (provider) {
      if (!provider?.name) return 'CONCEALED Doctor';
      return `Dr. ${formatName(provider.name || {}, 'firstName middleInitial lastName generationalSuffix')}`;
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    organization: {
      type: String,
      default: null,
    },
  },
  data () {
    this.daysList = [
      { text: 'M', value: 1 },
      { text: 'T', value: 2 },
      { text: 'W', value: 3 },
      { text: 'R', value: 4 },
      { text: 'F', value: 5 },
      { text: 'S', value: 6 },
      { text: 'S', value: 0 },
    ];
    this.doctorAvatar = DefaultAvatar;
    this.previewCoveragesLimit = 1;
    return {
      dialog: {
        schedules: false,
        providers: false,
        coverages: false,
      },
      // Providers Dialog
      previewProviders: [],
      // icons
      mdiCalendarBlank,
      mdiCalendarCheck,
      mdiInformationOutline,
      mdiCheckboxMarkedCircleOutline,
      mdiCloseCircleOutline,
      mdiClose,
    };
  },
  computed: {
    title () {
      return this.item?.name;
    },
    picURL () {
      return this.item?.picURL || require('~/assets/images/commons/mycure-default-avatar.png');
    },
    price () {
      return this.item?.price;
    },
    fullSchedules () {
      return this.item?.schedulesData || [];
    },
    groupedSchedules () {
      const schedules = [...this.fullSchedules];
      return schedules.sort((a, b) => a.day !== b.day ? a.day - b.day : a.startTime - b.startTime);
    },
    hasCoverages () {
      console.log('cov data', this.item?.coveragesData);
      return this.item?.$hasCoverages || !isEmpty(this.item?.coveragesData);
    },
    coverages () {
      if (!this.hasCoverages) return [];
      return this.item?.coveragesData?.map((coverage) => {
        return {
          name: coverage.contractData?.name || coverage.name || 'HMO',
          ...coverage.contractData?.picURL && { picURL: coverage.contractData.picURL },
        };
      }) || [];
    },
    previewCoverages () {
      return this.coverages.slice(0, this.previewCoveragesLimit)
        .map(coverage => coverage.name).join(', ');
    },
    coveragesTotal () {
      return this.coverages.length;
    },
    isAvailable () {
      return this.fullSchedules.length;
    },
    isTelehealthService () {
      return this.item.type === 'clinical-consultation' && this.item.tags?.includes('telehealth');
    },
    appointmentType () {
      return this.isTelehealthService ? 'telehealth' : 'physical';
    },
    bookURL () {
      if (this.isPreviewMode) return null;
      const PX_PORTAL_URL = process.env.PX_PORTAL_URL;
      const id = this.item.id;
      return `${PX_PORTAL_URL}/create-appointment/step-1?service=${id}&clinic=${this.organization}&type=${this.appointmentType}`;
    },
  },
  methods: {
    isServiceAvailable (dayValue) {
      const matchedDay = this.fullSchedules.find(schedule => schedule.day === dayValue);
      return !isNil(matchedDay);
    },
    // utils
    formatDay (day) {
      return this.days?.find(item => item.value === day)?.text || '';
      // return day;
    },
    getProviders (schedule) {
      if (!['clinical-consultation', 'clinical-procedure'].includes(schedule.meta?.serviceType)) return [];
      const { providers } = schedule;
      return providers || [];
    },
    // dialog openers
    openProvidersDialog (schedule) {
      this.previewProviders = this.getProviders(schedule);
      this.dialog.providers = true;
    },
    closeProvidersDialog () {
      this.dialog.providers = false;
      this.previewProviders = [];
    },
    // Google analytics
    trackBooking (appointmentType) {
      this.$gtag.event('book', {
        event_category: 'clinic-website',
        event_label: `book-${appointmentType}-clinic-${this.organization}-service-${this.item.id}`,
      });
    },
  },
};
</script>

<style scoped>
.badge {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(163, 163, 163);
}
.badge-size {
  height: 24px;
  width: 24px;
}

@media screen and (min-width: 1015px) {
  .badge-size {
    height: 27px;
    width: 27px;
  }
}
@media screen and (min-width: 1904px) {
  .badge-size {
    height: 30px;
    width: 30px;
  }
}
</style>
