<template lang="pug">
  v-dialog(
    v-model="model"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    :hide-overlay="$vuetify.breakpoint.smAndDown"
    :width="$vuetify.breakpoint.mdAndDown ? $vuetify.breakpoint.width : $vuetify.breakpoint.width - 500"
  )
    //- mobile
    v-toolbar(
      v-if="$vuetify.breakpoint.smAndDown"
      color="primary"
    )
      v-btn(
        depressed
        icon
        @click="$emit('toggleSelectBrgyDialog')"
      )
        v-icon.white--text mdi-close
    v-card.py-2.px-4
      v-container
        v-row
          v-col(cols="12")
            v-text-field(
              label="Search Barangay"
              solo
              hide-details
              v-model="searchText"
            )
        v-row(v-if="!searchText").px-3
          v-col(
            cols="12"
            sm="12"
            md="6"
            v-for="(brgy, key) of barangays"
            :key="key"
          ).py-1.px-1
            v-btn(
              depressed
              block
              @click="onSelectBarangay(brgy)"
            ) {{ brgy.locationTag }}
        v-row(v-else).px-3
          v-col(
            cols="12"
            sm="12"
            md="6"
            v-for="(brgy, key) of matchedBrgys"
            :key="key"
          ).py-1.px-1
            v-btn(
              depressed
              block
              @click="onSelectBarangay(brgy)"
            ) {{ brgy.locationTag }}
      v-card-actions
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    value: null, // eslint-disable-line
    isLoading: {
      type: Boolean,
      default: false,
    },
    barangays: {
      type: Array,
      default: () => ([]),
    },
    orgId: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      searchText: null,
      matchedBrgys: [],
      debouncedSearch: _.debounce(this.onSearchBarangay, 250),
    };
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    searchText: {
      handler () {
        this.debouncedSearch();
      },
    },
  },
  methods: {
    onSelectBarangay (barangay) {
      if (!barangay) return;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const bookingAddress = `${pxPortalUrl}/lgu-appointment/step-1?parent=${this.orgId}&child=${barangay.orgId}`;
      window.location.href = bookingAddress;
    },
    onSearchBarangay () {
      const searchString = this.searchText;
      const searchPattern = new RegExp(`${searchString}`, 'i');

      const barangaySearchReducer = (accumulator, brgy) => {
        const brgyLocTag = brgy?.locationTag;
        if (searchPattern.test(brgyLocTag)) accumulator.push(brgy);
        return accumulator;
      };
      const matchedBarangays = [...this.barangays].reduce(barangaySearchReducer, []);

      this.matchedBrgys = matchedBarangays;
    },
  },
};
</script>
