<template lang="pug">
  v-row
   v-col(cols="12")
      v-row(justify="center")
        v-col(cols="12" md="4")
          v-select(
            v-model="serviceType"
            :items="availableServiceTypes"
            label="Service Type"
            item-text="text"
            item-value="value"
            solo
            clearable
            :disabled="isPreviewMode || loading"
            @change="onServiceTypeSelect"
          @click:clear="clearServiceFilter"
          ).search-bar
        v-col(cols="12" md="4")
          search-insurance-contracts(
            solo
            avatar
            :disabled="isPreviewMode || loading"
            @select="onInsuranceSelect"
            @clear="clearInsuranceFilter"
          ).search-bar
        v-col(cols="12" md="4" )
          date-picker-menu(
            v-model="dateFilter"
            solo
            :disabled="isPreviewMode || loading"
            @clear="dateFilter = null"
          )
</template>

<script>
import isEmpty from 'lodash/isEmpty';
// components
import SearchInsuranceContracts from './services/search-insurance-contracts';
import DatePickerMenu from '~/components/commons/date-picker-menu';
export default {
  components: {
    DatePickerMenu,
    SearchInsuranceContracts,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.serviceTypeMappings = {
      'clinical-consultation': { text: 'Consult', value: 'clinical-consultation' },
      'clinical-procedure': { text: 'Procedure', value: 'clinical-procedure' },
      lab: { text: 'Laboratory', value: 'lab' },
      imaging: { text: 'Imaging', value: 'imaging' },
      pe: { text: 'PE Package', value: 'pe' },
      dental: { text: 'Dental', value: 'dental' },
    };
    return {
      searchFilters: {},
      serviceType: null,
      dateFilter: null,
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
    dateFilter (val) {
      this.$emit('filter:date', val);
    },
  },
  methods: {
    search () {
      this.$emit('search', { searchFilters: this.searchFilters });
    },
    onServiceTypeSelect () {
      this.searchFilters = {
        ...this.searchFilters,
        type: this.serviceType === 'lab' || this.serviceType === 'imaging' ? 'diagnostic' : this.serviceType,
        subtype: this.serviceType === 'lab' || this.serviceType === 'imaging' ? this.serviceType : null,
      };
      this.search();
    },
    onInsuranceSelect (insurer) {
      this.searchFilters = {
        ...this.searchFilters,
        insurer,
      };
      this.search();
    },
    clearServiceFilter () {
      delete this.searchFilters?.type;
      delete this.searchFilters?.subtype;
      this.serviceType = null;
      this.search();
    },
    clearInsuranceFilter () {
      delete this.searchFilters?.insurer;
      this.search();
    },
  },
};
</script>
