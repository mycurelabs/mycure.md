<template lang="pug">
  v-card.rounded-md.pa-3
    v-card-text
      v-row
        v-col(cols="12" md="9")
          h4.mc-h4.black--text {{ title }}&nbsp;
          span(v-if="isAvailable").success--text Available for Online Booking&nbsp;
            v-icon(small color="success") {{ mdiCalendarCheck }}

        v-col(cols="12" md="3" :class="{'text-right': !$isMobile}")
          h3(v-if="price").mc-h3
            money(:value="price" symbol="₱" text-class="mc-h3")
          h3(v-else).mc-h3 No price stated
      v-row.my-6
        v-col(cols="12")
          v-row.pl-1.pr-2
            div(v-for="(day, key) in daysList" :key="key").d-flex
              v-badge(
                :color="isServiceAvailable(day.value) ? 'success' : '#EEEEEE'"
                :content="day.text"
                inline
                x-large
              )
            v-spacer
            a(@click="dialog.schedules = true").primary--text.mc-hyp2 View full schedule
              v-icon(small color="primary" right) {{ mdiInformationOutline }}
      v-divider
      v-row(v-if="hasCoverages").my-3
        v-avatar(
          size="25"
          color="secondary"
        ).mx-1
          v-img(v-if="coverages[0].picURL" :src="coverages[0].picURL")
          span(v-else).white--text {{ coverages[0].name.substring(0,1) }}
        span {{ previewCoverages }}
          template(v-if="coveragesTotal > previewCoveragesLimit")
          | ...
          a(@click="dialog.coverages = true").primary--text &nbsp;and {{ coveragesTotal - previewCoveragesLimit }} more
        //- v-tooltip(
        //-   v-for="(coverage, key) in previewCoverages"
        //-   :key="key"
        //-   top
        //- )
        //-   template(v-slot:activator="{ on, attrs }")
        //-     v-avatar(
        //-       size="40"
        //-       color="secondary"
        //-       v-on="on"
        //-     ).mx-1
        //-       v-img(v-if="coverage.picURL" :src="coverage.picURL")
        //-       span(v-else).white--text {{ coverage.name.substring(0,1) }}
        //-   span {{ coverage.name || 'HMO' }}
      v-row(justify="end").text-right
        v-btn(
          color="primary"
          depressed
          large
          :block="$isMobile"
          :disabled="!isAvailable"
          :href="bookPhysicalURL"
          @click="trackBooking"
        ).text-none
          span.mc-btn1 Book Now

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
    isBookingEnabled: {
      type: Boolean,
      default: false,
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
      return this.item?.$hasCoverages;
    },
    coverages () {
      if (!this.hasCoverages) return [];
      return this.item?.coveragesData?.map((coverage) => {
        return {
          name: coverage.name || coverage.contractData?.insurerName || 'HMO',
          ...coverage.contractData?.insurerPicURL && { picURL: coverage.contractData.insurerPicURL },
        };
      });
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
    bookPhysicalURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.id;
      return `${pxPortalUrl}/create-appointment/step-1?service=${id}&clinic=${this.organization}&type=physical`;
    },
    bookTelehealthURL () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const id = this.item?.id;
      return `${pxPortalUrl}/create-appointment/step-1?service=${id}&clinic=${this.organization}&type=telehealth`;
    },
  },
  methods: {
    isTelehealthService (service) {
      return service.type === 'clinical-consultation' && service.tags?.includes('telehealth');
    },
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
    trackBooking () {
      this.$gtag.event('book', {
        event_category: 'clinic-website',
        event_label: `book-appointment-clinic-${this.organization}-service-${this.item.id}`,
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
</style>
