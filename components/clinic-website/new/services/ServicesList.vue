<template lang="pug">
  v-row(justify="center")
    //- LOADING
    template(v-if="loading.section")
      v-col(cols="12").text-center
        v-skeleton-loader(type="card-heading, list-item-three-line" elevation="2")
    //- template(v-else-if="items.length === 0")
    //-   v-col(cols="12").text-center
    //-     h2.mc-h2 No services available
    template(v-else)
      v-col(v-if="!$isMobile" cols="12" md="4" xl="3")
        v-card(color="white" flat)
          v-toolbar(flat).pa-1
            v-spacer
            h2.mc-h4.black--text Our Services
            v-spacer
          v-divider.my-3
          div
            v-list(subheader v-if="hasConsultations")
              v-subheader.mc-hyp2.black--text Consultation
              v-list-item-group(v-model="activeServiceType")
                v-list-item(
                  v-for="(type, key) in ['clinical-consultation', 'telehealth']"
                  :key="key"
                  :value="type"
                )
                  v-list-item-icon
                    v-icon {{ typeMappings[type].icon }}
                  v-list-item-content
                    v-list-item-title.mc-hyp2.font-weight-regular {{ typeMappings[type].text }}
            v-list(subheader v-if="hasAncillary")
              v-subheader.mc-hyp2.black--text Ancillary Services
              v-list-item-group(v-model="activeServiceType")
                v-list-item(
                  v-for="(type, key) in ancillaryServiceTypes"
                  :key="key"
                  :value="type"
                )
                  v-list-item-icon
                    v-icon {{ typeMappings[type].icon }}
                  v-list-item-content
                    v-list-item-title.mc-hyp2.font-weight-regular {{ typeMappings[type].text }}

      //- SERVICES
      v-col(
        cols="12"
        md="8"
        xl="9"
      )
        services-paginated(
          :loading="loading.list"
          :items="items"
          :items-total="itemsTotal"
          :items-limit="itemsLimit"
          :itemsPage.sync="itemsPage"
          :organization="organization"
          :is-preview-mode="isPreviewMode"
          @update:itemsPage="onPaginate($event)"
        )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import isEmpty from 'lodash/isEmpty';
import {
  mdiAccountTieVoiceOutline,
  mdiVideoOutline,
  mdiFlaskOutline,
  mdiRadiologyBoxOutline,
  mdiPackageVariantClosed,
  mdiPulse,
  mdiToothOutline,
} from '@mdi/js';
import ServicesPaginated from './ServicesPaginated';
import GenericPanel from '~/components/generic/GenericPanel';

const CONSULT_TYPES = [
  'clinical-consultation',
  'telehealth',
];

const ANCILLARY_TYPES = [
  'lab',
  'imaging',
  'pe',
  'clinical-procedure',
  'dental',
];

export default {
  components: {
    GenericPanel,
    ServicesPaginated,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    organization: {
      type: String,
      default: null,
    },
    // - It should have the service info, and schedules
    items: {
      type: Array,
      default: () => ([]),
    },
    itemsTotal: {
      type: Number,
      default: 0,
    },
    itemsLimit: {
      type: Number,
      default: 5,
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    // Loading props
    /**
     * @param {Boolean} loading.section - whole services section loading
     * @param {Boolean} loading.list - only list loading
     */
    loading: {
      type: Object,
      default: () => ({
        section: false,
        list: false,
      }),
    },
  },
  data () {
    this.typeMappings = {
      'clinical-consultation': {
        icon: mdiAccountTieVoiceOutline,
        text: 'Face-to-Face Consults',
      },
      telehealth: {
        icon: mdiVideoOutline,
        text: 'Teleconsults',
      },
      lab: {
        icon: mdiFlaskOutline,
        text: 'Laboratory',
      },
      imaging: {
        icon: mdiRadiologyBoxOutline,
        text: 'Imaging',
      },
      pe: {
        icon: mdiPackageVariantClosed,
        text: 'PE Packages',
      },
      dental: {
        icon: mdiToothOutline,
        text: 'Dental',
      },
      'clinical-procedure': {
        icon: mdiPulse,
        text: 'Procedures',
      },
    };
    return {
      itemsPage: 1,
    };
  },
  computed: {
    activeServiceType: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
    consultServiceTypes () {
      return this.serviceTypes.filter(type => CONSULT_TYPES.includes(type));
    },
    hasConsultations () {
      return !isEmpty(this.consultServiceTypes);
    },
    ancillaryServiceTypes () {
      return this.serviceTypes.filter(type => ANCILLARY_TYPES.includes(type));
    },
    hasAncillary () {
      return !isEmpty(this.ancillaryServiceTypes);
    },
  },
  watch: {
    activeServiceType (val) {
      this.itemsPage = 1;
    },
  },
  methods: {
    onPaginate (page) {
      this.$emit('paginate', page);
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
  },
};
</script>
