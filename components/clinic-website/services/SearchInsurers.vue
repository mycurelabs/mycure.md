<template lang="pug">
  v-autocomplete(
    v-model="model"
    item-text="name"
    item-value="id"
    no-filter
    return-object
    clearable
    chips
    :allow-overflow="false"
    :label="!noLabel ? 'Search HMO' : null"
    :placeholder="placeholder"
    :solo="solo"
    :outlined="outlined"
    :rounded="rounded"
    :search-input.sync="searchText"
    :items="loading ? ['Loading...'] : items"
    :loading="loading"
    :clear-icon="mdiClose"
    :append-icon="mdiMenuDown"
    :disabled="disabled"
    :class="{ 'bg-white': whiteBg }"
    @click:clear="$emit('clear')"
  )
    template(slot="prepend-inner")
      v-icon.mr-2 {{ mdiShieldCheck }}
    template(v-slot:selection="data")
      v-tooltip(v-if="avatar" bottom)
        template(v-slot:activator="{ on, attrs }")
          div(width="180px").basic
            span
              v-avatar(
                size="20"
                color="secondary"
                v-on="on"
              ).mx-1
                v-img(v-if="data.item.picURL" :src="data.item.picURL")
                span(v-else).white--text {{ data.item.name.substring(0,1) }}
              span(style="overflow: hidden; white-space: no-wrap;") {{ data.item.name }}
        span {{ data.item.name }}
      v-chip(v-else small color="primary")
        span(:max-lines="1" autoresize).font-12 {{ `${data.item.name.substr(0, 20)} ...` }}
    template(slot="item" v-if="loading")
      v-col
        v-row(justify="center").px-3.py-6
          v-progress-circular(
            color="primary"
            indeterminate
            :size="$isWideScreen ? 80 : 50"
          )
</template>

<script>
// import VClamp from 'vue-clamp';
import { mdiClose, mdiMenuDown, mdiShieldCheck } from '@mdi/js';
import debounce from 'lodash/debounce';
import { fetchOrganizations } from '~/services/organizations';

export default {
  components: {
    // VClamp,
  },
  props: {
    // FIXME: set proper type
    value: null, // eslint-disable-line
    // - If coverage icons should be displayed instead of names in selection
    avatar: {
      type: Boolean,
      default: false,
    },
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
      mdiClose,
      mdiMenuDown,
      mdiShieldCheck,
    };
  },
  watch: {
    searchText (val) {
      this.loading = true;
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
        const { items } = await fetchOrganizations(this.$sdk, {
          searchText: this.searchText,
          type: 'insurance',
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
    clearModel () {
      this.model = null;
    },
    onSelectContract (contract) {
      if (!contract) return;
      this.$emit('select', contract.id);
    },
  },
};
</script>

<style scoped>
.basic{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
