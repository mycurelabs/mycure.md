<template lang="pug">
  v-card(color="#f0f0f0" flat)#servicesList
    v-toolbar(color="#f0f0f0" flat)
      v-tabs(v-model="activeServiceType" :show-arrows="$isMobile")
        v-tab(v-if="hasServiceType('diagnostic')" href="#lab") #[b Laboratory]
        v-tab(v-if="hasServiceType('diagnostic')" href="#imaging") #[b Imaging]
        v-tab(v-if="hasServiceType('pe')" href="#pe") #[b PE Packages]
        v-tab(v-if="hasDoctors" href="#doctors") #[b Doctors]
        v-tab(v-if="hasServiceType('clinical-procedure')" href="#clinical-procedure") #[b Procedures]
        v-tab(v-if="hasServiceType('dental')" href="#dental") #[b Dental]
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
          v-divider
    v-card-actions
      v-spacer
      v-btn(
        v-if="hasPreviousPage"
        outlined
        color="primary"
        @click="onPaginate('previous')"
      ).text-none
        v-icon(small) mdi-chevron-left
        | Previous
      v-btn(
        v-if="hasNextPage"
        outlined
        color="primary"
        @click="onPaginate('next')"
      ).text-none
        | Next
        v-icon(small) mdi-chevron-right
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
    items: {
      type: Array,
      default: () => ([]),
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
    hasDoctors: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {};
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
  methods: {
    onPaginate (direction) {
      if (this.isPreviewMode) return;
      VueScrollTo.scrollTo('#servicesList', 500, { offset: -100, easing: 'ease' });
      this.$emit(direction);
    },
    hasServiceType (type) {
      return this.serviceTypes.includes(type);
    },
  },
};
</script>
