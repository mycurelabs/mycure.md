<template lang="pug">
  div#servicesList
    //- BACK BUTTON
    v-row(v-if="showBackButton").mb-5
      v-btn(v-if="showBackButton" color="primary" outlined @click="$emit('back')").text-none
        v-icon(small left) mdi-arrow-left
        | Back
    //- LOADING
    v-row(v-if="loading" justify="center")
      v-col.text-center
        v-skeleton-loader(type="card-heading, list-item-three-line, actions" elevation="2")
    //- EMPTY SERVICES
    v-row(v-else-if="items.length === 0" justify="center")
      v-col(cols="12" md="4").text-center
        h2 No services available
    //- SERVICE ITEM
    template(v-else)
      div(
        v-for="(item, key) in items"
        :key="key"
        :class="{'mt-0': key === 0}"
      ).my-3
        doc-item-card(
          v-if="!!item.uid"
          minified
          show-book-buttons
          :organization="organization"
          :doctor="item"
          :is-preview-mode="isPreviewMode"
          :read-only="readOnly"
          :is-booking-enabled="isBookingEnabled"
        )
        service-item(
          v-else
          :item="item"
          :organization="organization"
          :is-doctor="activeServiceType === 'doctors'"
          :is-preview-mode="isPreviewMode"
          :read-only="readOnly"
          :is-booking-enabled="isBookingEnabled"
        )
    //- PAGINATION
    v-row(v-if="items.length")
      v-spacer
      v-pagination(
        v-model="itemsPage"
        :length="itemsPaginationLength"
        total-visible="10"
      )
      v-spacer
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import DocItemCard from '../DocItemCard';
import ServiceItem from './service-item';
export default {
  components: {
    DocItemCard,
    ServiceItem,
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
    hasNextPage: {
      type: Boolean,
      default: false,
    },
    hasPreviousPage: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    itemsPaginationLength: {
      type: Number,
      default: 0,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
    isBookingEnabled: {
      type: Boolean,
      default: false,
    },
  },
  data () {
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
  },
  watch: {
    itemsPage (page) {
      this.$emit('paginate', page);
      VueScrollTo.scrollTo('#servicesList', 500, { offset: -100, easing: 'ease' });
    },
  },
};
</script>
