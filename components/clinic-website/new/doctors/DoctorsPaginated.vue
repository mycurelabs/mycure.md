<template lang="pug">
  div
    v-row(v-if="itemsTotal" align="center" justify="center").pt-1.px-3
      v-col(v-if="!$isMobile" cols="12" md="5").pa-0
        span.mc-btn1 Showing {{ itemsTotal }} doctor{{ itemsTotal > 1 ? 's' : '' }}
      v-spacer(v-if="!$isMobile")
      v-pagination(
        v-if="itemsTotal > 4 && !$isMobile"
        :value="itemsPage"
        :length="itemsPaginationLength"
        total-visible="5"
        :next-icon="mdiChevronRight"
        :prev-icon="mdiChevronLeft"
        circle
        @input="onPaginate($event)"
      )
    div(v-if="loading").pt-3
      v-skeleton-loader(
        v-for="n in 3"
        :key="n"
        type="card-heading, list-item-three-line, actions" elevation="2"
      )
    //- TODO: Change to itemsTotal once backend fix for showing total when there is search text is done
    p(v-else-if="!items.length").mc-b2.pt-3 No doctors are listed for online booking.
    div(v-else).pt-3
      div(
        v-for="(item, key) in items"
        :key="key"
      ).py-4
        doctor-item(
          :item="item"
          :organization="organization"
          :is-preview-mode="isPreviewMode"
        )
      v-pagination(
        v-if="itemsTotal > 4 && $isMobile"
        :value="itemsPage"
        :length="itemsPaginationLength"
        total-visible="5"
        :next-icon="mdiChevronRight"
        :prev-icon="mdiChevronLeft"
        circle
        @input="onPaginate($event)"
      )
</template>

<script>
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import DoctorItem from './DoctorItem';
export default {
  components: {
    DoctorItem,
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
    isPreviewMode: Boolean,
  },
  data () {
    return {
      mdiChevronRight,
      mdiChevronLeft,
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
  },
};
</script>
