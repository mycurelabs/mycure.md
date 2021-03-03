<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10").pb-0
        //- desktop search field
        v-toolbar(
          v-if="!$isMobile"
          height="65"
          color="white"
          :style="{ opacity: services ? '' : '0.8' }"
        ).toolbar
          v-col(cols="12" md="11" :class="{ 'justify-space-between': !$isMobile }").d-flex.mt-3
            v-col(cols="12").search-fields
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Services
                v-combobox(
                  v-if="!$isMobile"
                  v-model="serviceSearchQuery"
                  :items="servicesSuggestions"
                  color="white"
                  item-text="name"
                  placeholder="Search for a service"
                  clearable
                  return-object
                  @keyup.enter="searchServices"
                  @update:search-input="searchDebounce"
                ).font-14.font-weight-regular
                  template(slot="item" slot-scope="{ item, tile }")
                    div.d-flex.suggestion-item
                      div
                        p {{ item.name }}
                      v-spacer
                      div
                        p.grey--text {{ serviceTypeMappings[item.type] || ''}}
            //- TODO: Hide HMO filter temporarily as per instruction
            //- v-divider(inset vertical).mt-6.mb-8
            //- v-col(cols="4" md="4").search-fields
            //-   v-toolbar-title.font-14.ml-4.text-left.font-weight-bold HMO
            //-     search-insurance-contracts(
            //-       no-label
            //-       placeholder="Search HMO"
            //-       @select="onInsuranceSelect"
            //-       @clear="onInsuranceClear"
            //-     )
          v-spacer
          //- Desktop Services page search button
          v-btn(
            v-if="icon"
            fab
            color="primary"
            @click="searchServices"
          )
            v-icon mdi-magnify
          //- Desktop Patients page search button
          v-btn(
            v-else
            depressed
            rounded
            color="primary"
            :to="{name: 'services', params: { serviceSearchQuery: { name: serviceSearchQuery }, serviceSearchLocation: serviceSearchLocation }}"
          ) #[b Search Now]
        //- mobile search field
        template(v-else)
          v-text-field(
            v-model="serviceSearchQuery"
            solo
            clearable
            rounded
            item-text="name"
            color="white"
            placeholder="Search Services"
            @input="debouncedSearchText"
            hide-details
          ).bg-white
            template(v-slot:append)
              //- Mobile Services page search button
              v-btn(
                v-if="services"
                color="primary"
                icon
                @click="searchServices"
              )
                v-icon mdi-magnify
              //- Mobile Patients page search button
              v-btn(
                v-else
                color="primary"
                icon
                :to="{name: 'services', params: { serviceSearchQuery: { name: serviceSearchQuery } }}"
              )
                v-icon mdi-magnify
          //- TODO: Hide HMO filter temporarily as per instruction
          //- search-insurance-contracts(
          //-   rounded
          //-   solo
          //-   white-bg
          //-   @select="onInsuranceSelect"
          //-   @clear="onInsuranceClear"
          //- ).mt-3
        //- v-col(v-if="services" cols="12").pb-0
        //-   v-row(:class="$isMobile ? 'd-block' : ''").filter-menu.white--text.font-14
        //-     div.d-flex
        //-       span.mt-2 Filter:
        //-       v-select(
        //-         v-model="defaultSelected"
        //-         dense
        //-         solo
        //-         :items="['Laboratory', 'Teleconsult']"
        //-         @change="selectFilter($event)"
        //-       ).filter.ml-2.font-14.search-select.white--text
        //-     div(:class="$isMobile ? '' : 'ml-4'").d-flex
        //-       span.mt-2 Sort by:
        //-       v-select(
        //-         v-model="defaultSort"
        //-         dense
        //-         solo
        //-         :items="['Relevance', 'Alphabetical (Ascending)', 'Alphabetical (Descending)']"
        //-         @change="sortResults($event)"
        //-       ).filter.ml-2.font-14.search-select.white--text
</template>

<script>
import _ from 'lodash';
import SearchInsuranceContracts from '~/components/clinic-website/services/search-insurance-contracts';

export default {
  components: {
    SearchInsuranceContracts,
  },
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    services: {
      type: Boolean,
      default: false,
    },
    allServices: {
      type: Array,
      default: () => [],
    },
    searchQuery: {
      type: [String, Object],
      default: null,
    },
    locationQuery: {
      type: String,
      default: '',
    },
  },
  data () {
    this.serviceTypeMappings = {
      'clinical-consultation': 'Consult',
      'clinical-procedure': 'Procedure',
      diagnostic: 'Diagnostic',
      pe: 'PE Package',
      dental: 'Dental',
    };
    return {
      serviceSearchQuery: null,
      serviceSearchLocation: null,
      serviceSearchHMO: null,
      filterLabel: '',
      defaultSelected: 'Laboratory',
      defaultSort: 'Relevance',
      debouncedSearchText: _.debounce((e) => { this.serviceSearchQuery = e; }, 500),
    };
  },
  computed: {
    servicesSuggestions () {
      return this.allServices;
    },
  },
  mounted () {
    if (this.searchQuery) this.serviceSearchQuery = this.searchQuery;
  },
  methods: {
    searchServices () {
      this.$emit('search-services', this.serviceSearchQuery, this.serviceSearchLocation, this.serviceSearchHMO);
    },
    selectFilter (label) {
      this.filterLabel = label;
      this.$emit('filter-services', label);
    },
    clearTextfield () {
      this.serviceSearchLocation = '';
      this.$emit('clear-services');
    },
    sortResults (sortMethod) {
      this.$emit('sort-results', sortMethod);
    },
    searchDebounce (searchText) {
      if (searchText === null || searchText === undefined) {
        this.$emit('clear-services');
        return;
      }
      this.searchServices();
    },
    onInsuranceSelect (insurer) {
      this.serviceSearchHMO = insurer;
      this.searchServices();
    },
    onInsuranceClear () {
      this.serviceSearchHMO = null;
      this.searchServices();
    },
  },
};
</script>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}

.filter-menu {
  flex-wrap: nowrap !important;
  font-weight: 600;
}

.filter >>> .v-input__slot {
  box-shadow: none !important;
  background-color: #0369A5 !important;
  border: none !important;
}

.filter >>> label {
  font-size: 14px;
  color: #FFFFFF;
}

.filter >>> i {
  color: #FFFFFF;
}

.search-fields >>> .v-input__slot::before {
  border-style: none !important;
}

.search-select >>> .v-select__selection--comma {
  color: #FFFFFF !important;
}

.suggestion-item {
  flex: auto;
}
</style>
