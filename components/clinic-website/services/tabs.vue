<template lang="pug">
  v-card(flat style="border-radius: 10px;")#servicesList
    v-toolbar(v-if="!hideTabs && !showBackButton" color="white" flat)
      v-btn(v-if="showBackButton" color="primary" outlined @click="$emit('back')").text-none
        v-icon(small left) mdi-arrow-left
        | Back
    v-card-text
      v-row(v-if="loading" justify="center")
        v-col(cols="12" md="4").text-center
          v-progress-circular(
            color="primary"
            indeterminate
            size="100"
          )
      v-row(v-else-if="items.length === 0")
        v-col(cols="12" md="4").text-center
          h2 No services available
      template(v-else)
        div(
          v-for="(item, key) in items"
          :key="key"
        )
          service-item(
            :item="item"
            :organization="organization"
            :is-doctor="activeServiceType === 'doctors'"
            :is-preview-mode="isPreviewMode"
            :read-only="readOnly"
          )
          v-divider.my-5
    v-card-actions
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
import ServiceItem from './service-item';
export default {
  components: {
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
    hideTabs: {
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
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    showBackButton: {
      type: Boolean,
      default: false,
    },
    hasDoctors: {
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
  methods: {
    hasServiceType (type) {
      return this.serviceTypes.includes(type);
    },
  },
};
</script>
