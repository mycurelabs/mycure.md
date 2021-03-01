<template lang="pug">
  v-autocomplete(
    v-model="model"
    item-text="insurerName"
    item-value="insurer"
    no-filter
    return-object
    chips
    clearable
    :label="!noLabel ? 'Search HMO' : null"
    :placeholder="placeholder"
    :solo="solo"
    :outlined="outlined"
    :rounded="rounded"
    :search-input.sync="searchText"
    :items="items"
    :loading="loading"
    :disabled="disabled || loading"
    :class="{ 'bg-white': whiteBg }"
    @click:clear="$emit('clear')"
  )
</template>

<script>
import { debounce } from 'lodash';
import { fetchInsuranceContracts } from '~/services/insurance-contracts';

export default {
  props: {
    // FIXME: set proper type
    value: null, // eslint-disable-line
    label: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
    whiteBg: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      fetchedContracts: [],
      items: [],
      model: null,
      loading: false,
      searchText: null,
      debouncedFetchContracts: debounce(this.fetchContracts, 500),
    };
  },
  watch: {
    searchText (val) {
      this.debouncedFetchContracts();
    },
    model (val) {
      if (!val) {
        this.$emit('clear');
        return;
      }
      this.onSelectContract(val);
    },
  },
  async mounted () {
    await this.fetchContracts();
  },
  methods: {
    async fetchContracts () {
      try {
        this.loading = true;
        const { items } = await fetchInsuranceContracts(this.$sdk, {
          searchText: this.searchText,
        });
        if (this.model) {
          this.items = [this.model, ...items];
          return;
        }
        this.items = items || [];
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    onSelectContract (contract) {
      if (!contract) return;
      this.$emit('select', contract.insurer || contract.id);
    },
  },
};
</script>
