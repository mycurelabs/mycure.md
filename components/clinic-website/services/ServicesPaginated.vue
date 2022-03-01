<template lang="pug">
  div
    v-row(v-if="itemsTotal" align="center" justify="center").pt-1.px-3
      v-col(cols="12").pa-0
        v-row(v-if="!$isMobile" align="center").px-3
          span(style="color: #AFAFBA").mc-btn1 Showing {{ itemsTotal }} service{{ itemsTotal > 1 ? 's' : '' }}
          v-spacer
          mc-paginate(
            v-if="itemsTotal > 4"
            :items-page="itemsPage"
            :items-pagination-length="itemsPaginationLength"
            @input="onPaginate($event)"
          )
        v-select(
          v-else-if="!searchMode"
          v-model="selectedServiceType"
          placeholder="Select Service Type"
          item-text="text"
          dense
          solo
          :disabled="loading.search"
          :append-icon="mdiMenuDown"
          :items="serviceTypeOptions"
          return-object
          @change="onServiceTypeFilter"
        )
          template(slot="prepend")
            span.mc-b4.font-weight-bold.title--text Filter:
        mc-paginate(
          v-if="itemsTotal > 4 && $isMobile"
          dense
          :items-page="itemsPage"
          :items-pagination-length="itemsPaginationLength"
          @input="onPaginate($event)"
        )
      v-spacer(v-if="!$isMobile")
    div(v-if="loading").pt-8
      v-skeleton-loader(
        v-for="n in 5"
        :key="n"
        type="card-heading, list-item-three-line, actions" elevation="2"
      )
    //- TODO: Change to itemsTotal once backend fix for showing total when there is search text is done
    p(v-else-if="!items.length").mc-b2.pt-3 No services are listed for online booking.
    div(v-else).pt-3
      div(
        v-for="(item, key) in items"
        :key="key"
      ).py-4
        service-item(
          :item="item"
          :organization="organization"
          :is-preview-mode="isPreviewMode"
        )
</template>

<script>
import { mdiMenuDown, mdiClose, mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import ServiceItem from './ServiceItem';
import McPaginate from './McPaginate';
export default {
  components: {
    ServiceItem,
    McPaginate,
  },
  props: {
    loading: Boolean,
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
    itemsPage: {
      type: Number,
      default: 1,
    },
    organization: {
      type: String,
      default: null,
    },
    searchMode: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: Boolean,
  },
  data () {
    this.serviceTypeOptions = [
      // - TODO: Currently we cannot query with Service#tags and a $search operator, so both F2F and Telehealth consults were put
      // - in one category. To follow up with Nad.
      { text: 'Consultations', type: 'clinical-consultation' },
      // { text: 'Teleconsults', type: 'clinical-consultation', tags: 'telehealth' },
      { text: 'Procedures', type: 'clinical-procedure' },
      { text: 'Dental', type: 'dental' },
      { text: 'Physical Exam', type: 'pe' },
      { text: 'Laboratory', type: 'diagnostic', subtype: 'lab' },
      { text: 'Imaging', type: 'diagnostic', subtype: 'imaging' },
    ];
    return {
      selectedServiceType: {},
      mdiChevronRight,
      mdiChevronLeft,
      mdiMenuDown,
      mdiClose,
    };
  },
  computed: {
    // pagination
    itemsPaginationLength () {
      return Math.ceil(this.itemsTotal / this.itemsLimit) || 0;
    },
  },
  methods: {
    onPaginate (page) {
      this.$emit('update:itemsPage', page);
    },
    onServiceTypeFilter () {
      this.$emit('update:serviceType', this.selectedServiceType);
    },
  },
};
</script>
