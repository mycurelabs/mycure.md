<template lang="pug">
  div
    v-row(v-if="itemsTotal").pt-1
      span.mc-btn1 Showing {{ itemsTotal }} result{{ itemsTotal > 1 ? 's' : '' }}
      v-spacer
      v-pagination(
        :value="itemsPage"
        :length="itemsPaginationLength"
        total-visible="10"
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
    div(v-else).pt-3
      div(
        v-for="(item, key) in items"
        :key="key"
      ).my-3
        service-item(
          :item="item"
          :organization="organization"
          :is-preview-mode="isPreviewMode"
        )
</template>

<script>
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import ServiceItem from './ServiceItem';
export default {
  components: {
    ServiceItem,
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
