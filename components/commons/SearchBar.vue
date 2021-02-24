<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10").pb-0
        //- desktop search field
        v-toolbar(
          v-if="!$isMobile"
          height="84"
          color="white"
          :style="{ opacity: services ? '' : '0.8' }"
        ).toolbar
          v-col(cols="12" md="11").d-flex.mt-2.justify-space-between
            v-col(cols="12").search-fields
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Services
                //- v-text-field(
                //-   v-model="serviceSearchQuery"
                //-   placeholder="Consultation (Virtual)"
                //-   clearable
                //-   @click:clear="clearTextfield"
                //-   v-on:keyup.enter="searchServices(serviceSearchQuery, serviceSearchLocation)"
                //- ).font-14.font-weight-regular
                v-combobox(
                  v-model="searchQuery ? searchQuery : serviceSearchQuery"
                  :items="servicesSuggestions"
                  color="white"
                  item-text="name"
                  clearable
                  @keyup.enter="searchServices(serviceSearchQuery, serviceSearchLocation)"
                ).font-14.font-weight-regular
                  template(slot="item" slot-scope="{ item, tile }")
                    div.d-flex.suggestion-item
                      div
                        p {{ item.name }}
                      v-spacer
                      div
                        p.grey--text {{ serviceTypeMappings[item.type] || ''}}
                      //- #[span.ml-auto.text-right.grey--text {{ item.type }}]
            //- v-divider(inset vertical).mt-6.mb-8
            //- v-col(md="4").search-fields
            //-   v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Location
            //-     v-text-field(
            //-       placeholder="Anywhere"
            //-       v-model="serviceSearchLocation"
            //-       clearable
            //-       @keyup.enter="searchServices(serviceSearchQuery, serviceSearchLocation)"
            //-     ).font-14.font-weight-regular
          v-spacer
          //- Desktop Services page search button
          v-btn(
            v-if="icon"
            large
            fab
            color="primary"
            @click="searchServices(serviceSearchQuery, serviceSearchLocation)"
          )
            v-icon mdi-magnify
          //- Desktop Patients page search button
          v-btn(
            v-else
            depressed
            large
            rounded
            color="primary"
            :to="{name: 'services', params: { serviceSearchQuery: { name: serviceSearchQuery }, serviceSearchLocation: serviceSearchLocation }}"
          ) #[b Search Now]
        //- mobile search field
        v-text-field(
          v-else
          v-model="serviceSearchQuery"
          solo
          clearable
          rounded
          color="white"
          placeholder="Search Services"
        ).bg-white
          template(v-slot:append)
            //- Mobile Services page search button
            v-btn(
              v-if="services"
              color="primary"
              icon
              @click="searchServices(serviceSearchQuery)"
            )
            //- Mobile Patients page search button
            v-btn(
              v-else
              color="primary"
              icon
              :to="{name: 'services', params: { serviceSearchQuery: { name: serviceSearchQuery } }}"
            )
              v-icon(color="primary") mdi-magnify
        v-col(v-if="services" cols="12").pb-0
          v-row(:class="$isMobile ? 'd-block' : ''").filter-menu.white--text.font-14
            div.d-flex
              span.mt-2 Filter:
              v-select(
                v-model="defaultSelected"
                dense
                solo
                :items="['Laboratory', 'Teleconsult']"
                @change="selectFilter($event)"
              ).filter.ml-2.font-14.search-select.white--text
            div(:class="$isMobile ? '' : 'ml-4'").d-flex
              span.mt-2 Sort by:
              v-select(
                v-model="defaultSort"
                dense
                solo
                :items="['Relevance', 'Alphabetical (Ascending)', 'Alphabetical (Descending)']"
                @change="sortResults($event)"
              ).filter.ml-2.font-14.search-select.white--text
</template>
<script>
export default {
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
      type: String,
      default: '',
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
      serviceSearchLocation: '',
      filterLabel: '',
      defaultSelected: 'Laboratory',
      defaultSort: 'Relevance',
    };
  },
  computed: {
    servicesSuggestions () {
      return this.allServices;
    },
  },
  watch: {
    serviceSearchQuery (val) {
      (val === null || val === undefined) && this.$emit('clear-services');
    },
  },
  methods: {
    searchServices (searchQuery, locationQuery) {
      this.$emit('search-services', searchQuery, locationQuery);
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
