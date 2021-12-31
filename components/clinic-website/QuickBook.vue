<template lang="pug">
  div(style="background: #0369A5")
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" :class="{'text-center': $isMobile}")
            h1.mb-5.white--text Get An Appointment
          v-col(cols="12" md="6").pa-10
            template(v-for="item in quickAppointmentsContent")
              media
                template(slot="media-image")
                  v-avatar(:size="$isMobile ? '50' : '75'" color="#add35b")
                    v-icon(large).white--text {{item.icon}}
                template(slot="media-content")
                  br
                  h5.white--text.step-title.ml-4  {{item.title}}
                  p.white--text.step-caption.ml-4 {{item.content}}
          v-col(cols="12" md="6" :class="{'pa-10': !$isMobile}")
            v-card(style="border-radius: 10px;")
              v-card-text.pa-10
                h3.mb-5 Choose a service
                v-select(
                  v-model="serviceType"
                  :items="availableServiceTypes"
                  label="Service Type"
                  item-text="text"
                  item-value="value"
                  solo
                  clearable
                  :disabled="isPreviewMode || loading"
                  @click:clear="clearInputs"
                ).search-bar
                v-autocomplete(
                  v-model="selectedService"
                  solo
                  clearable
                  label="Services"
                  item-text="name"
                  item-value="id"
                  :items="services"
                  :disabled="!serviceType || loading"
                )
                  template(slot="item" slot-scope="props")
                    v-list-item(v-on="props.on" :disabled="!hasSchedules(props.item)")
                      v-list-item-content
                        v-list-item-title
                          v-clamp(autoresize :max-lines="1") {{ props.item.name }}
                        v-list-item-subtitle(
                          :class="hasSchedules(props.item) ? 'success--text' : 'error--text'"
                        ) {{ hasSchedules(props.item) ? 'Available' : 'Unavailable' }}
                div.d-flex
                  v-spacer
                  v-btn(
                    color="success"
                    depressed
                    large
                    :disabled="!selectedService || isPreviewMode || loading"
                    @click="bookService"
                  ).text-none Continue
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import VClamp from 'vue-clamp';
import {
  mdiMicroscope,
  mdiCalendarBlank,
  mdiClockOutline,
} from '@mdi/js';
import {
  fetchClinicServices,
} from '~/services/services';
import GenericPanel from '~/components/generic/GenericPanel';
import Media from '~/components/commons/media';
export default {
  components: {
    GenericPanel,
    Media,
    VClamp,
  },
  props: {
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    // - Schedules of specific services
    serviceSchedules: {
      type: Array,
      default: () => ([]),
    },
    // - Schedules of facility
    organizationSchedules: {
      type: Array,
      default: () => ([]),
    },
    // - Facility Id
    organization: {
      type: String,
      default: null,
    },
  },
  data () {
    this.quickAppointmentsContent = [
      {
        icon: mdiMicroscope,
        title: 'Choose a service',
        content: 'Select from among the healthcare services available for you.',
      },
      {
        icon: mdiCalendarBlank,
        title: 'Book a schedule',
        content: 'Choose your best time and fill in the appointment form.',
      },
      {
        icon: mdiClockOutline,
        title: 'Show up on time',
        content: 'Our friendly healthcare professionals will be there to see you.',
      },
    ];
    this.serviceTypeMappings = {
      'clinical-consultation': { text: 'Face-to-Face Consult', value: 'clinical-consultation' },
      telehealth: { text: 'Teleconsult', value: 'telehealth' },
      'clinical-procedure': { text: 'Procedure', value: 'clinical-procedure' },
      lab: { text: 'Laboratory', value: 'lab' },
      imaging: { text: 'Imaging', value: 'imaging' },
      pe: { text: 'PE Package', value: 'pe' },
      dental: { text: 'Dental', value: 'dental' },
    };
    return {
      // - UI State
      loading: false,
      // - Data models
      serviceType: null,
      selectedService: null,
      // - Enum
      services: [],
    };
  },
  computed: {
    availableServiceTypes () {
      if (isEmpty(this.serviceTypes)) return [];
      const types = this.serviceTypes.map((type) => {
        return this.serviceTypeMappings[type];
      });
      if (!types.length) return [];
      return types;
    },
  },
  watch: {
    serviceType: {
      async handler (val) {
        await this.fetchServices();
      },
    },
  },
  methods: {
    // - Fetch Services according to type
    async fetchServices () {
      try {
        this.loading = true;
        const mapServiceType = (type) => {
          if (type === 'lab' || type === 'imaging') return 'diagnostic';
          // Telehealth services are technically under 'clinical-consultation',
          // They are differentiated through `service#tags`
          if (type === 'telehealth') return 'clinical-consultation';
          return type;
        };
        const { items } = await fetchClinicServices(this.$sdk, {
          facility: this.organization,
          type: mapServiceType(this.serviceType),
          subtype: this.serviceType === 'lab' || this.serviceType === 'imaging' ? this.serviceType : null,
          // Differentiate the telehealth services
          ...this.serviceType === 'clinical-consultation' && { tags: { $nin: ['telehealth'] } },
          ...this.serviceType === 'telehealth' && { tags: { $in: ['telehealth'] } },
        });

        // - Assign schedules and include only those with schedules
        this.services = items.map((item) => {
          const { type, subtype, tags } = item;
          const primaryType = subtype || type;
          const schedules = this.serviceSchedules.find((schedule) => {
            if (primaryType === 'clinical-consultation' && tags?.includes('telehealth')) {
              return schedule.type === 'telehealth';
            }
            return schedule.type === primaryType;
          });
          return {
            ...item,
            nonMfSchedule: !!schedules,
            schedules: schedules?.items || this.organizationSchedules,
          };
        }) || [];
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    bookService () {
      if (this.isPreviewMode) return null;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const appointmentType = this.serviceType === 'telehealth' ? 'telehealth' : 'physical';
      const bookURL = `${pxPortalUrl}/create-appointment/step-1?service=${this.selectedService}&clinic=${this.organization}&type=${appointmentType}`;
      window.location.href = bookURL;
    },
    hasSchedules (item) {
      return item.schedules?.length;
    },
    clearInputs () {
      this.selectedService = null;
    },
  },
};
</script>

<style scoped>
.step-title {
  font-size: 20px;
}
.step-caption {
  font-size: 16px;
}
</style>
