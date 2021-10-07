<template lang="pug">
  div(:class="{'pl-3': !$isMobile}")
    search-filters(
      :is-preview-mode="isPreviewMode"
      :service-types="serviceTypes"
      :loading="loading"
      @search="$emit('search', $event)"
      @filter:date="$emit('filter:date', $event)"
    )
    v-card(flat color="#f0f0f0" :class="{'mt-2': $isMobile}")
      v-card-text
        v-row(v-if="loading" justify="center")
          v-col(cols="12" md="4").text-center
            v-progress-circular(
              color="primary"
              indeterminate
              size="100"
            )
        v-row(v-else-if="!items.length" justify="center")
          v-col(cols="12" md="4").text-center
            h2 No results available
        template(v-else)
          div(v-for="(item, key) in items" :key="key")
            //- If doctor
            //- doc-item-card(
            //-   v-if="!!item.uid"
            //-   :organization="organization"
            //-   :item="item"
            //-   :is-preview-mode="isPreviewMode"
            //-   :read-only="readOnly"
            //- )
            doc-item-card(
              v-if="!!item.uid"
              minified
              show-book-buttons
              :organization="organization"
              :doctor="item"
              :is-booking-enabled="isBookingEnabled"
            )
            //- Service
            service-item(
              v-else
              :organization="organization"
              :item="item"
              :is-doctor="!!item.uid"
              :is-preview-mode="isPreviewMode"
              :read-only="readOnly"
            )
            v-divider
</template>

<script>
// import DocItemCard from '../DocItemCard';
import DocItemCard from '../DocItemCard';
import SearchFilters from '../SearchFilters';
import ServiceItem from './service-item';
export default {
  components: {
    DocItemCard,
    SearchFilters,
    ServiceItem,
  },
  props: {
    organization: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    isBookingEnabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
