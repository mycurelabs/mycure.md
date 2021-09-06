<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12").pb-0
        v-row
          v-btn-toggle(
            v-model="selectedMode"
            background-color="transparent"
            dense
            mandatory
            borderless
            @change="onModeChange($event)"
          )
            //- v-btn(value="all" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font all
            v-btn(value="account" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill doctor
            v-btn(value="organization" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill clinics
              //- v-btn(value="location" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill location
          v-spacer
          //- TODO: Location
          //- v-col
          //-   v-row(align="center" justify="end")
          //-     span.font-weight-bold.font-14 USE MY LOCATION
          //-     v-switch(v-model="locationSwitch" inset).ml-3
        v-row.pt-2
          v-col.pa-0
            v-text-field(
              v-model="searchObject.searchString"
              :placeholder="searchPlaceholder"
              solo
              outlined
              flat
              clearable
              :height="$isMobile ? '40px' : '60px'"
              @keyup.enter="onSearch(true)"
              @clear="onSearch"
            ).rounded-bl-lg.rounded-tl-lg
          v-col(cols="1").pa-0
            v-btn(
              small
              block
              tile
              color="primary"
              @click="onSearch(true)"
              :height="$isMobile ? '40px' : '60px'"
            ).elevation-0.rounded-br-lg.rounded-tr-lg
              v-icon mdi-magnify
        v-row
          //- Service Type Filter
          v-col(v-if="searchObject.mode === 'organization'" cols="12" md="4").pa-0
            v-autocomplete(
              v-model="searchObject.serviceType"
              placeholder="Service Type"
              solo
              outlined
              flat
              dense
              clearable
              item-text="name"
              item-value="value"
              :items="serviceTypes"
              @change="onSearch"
            )
          //- Specialization
          v-col(
            v-if="showSpecializationsField" cols="12" md="4"
            :class="{'pl-1 py-0 pr-0': searchObject.mode === 'organization', 'pa-0': searchObject.mode === 'account'}"
          )
            v-autocomplete(
              v-model="searchObject.specializations"
              label="Specializations"
              solo
              outlined
              flat
              dense
              multiple
              chips
              small-chips
              item-text="text"
              :item-value="searchObject.mode === 'organization' ? 'code' : 'text'"
              :items="specialtiesList"
              @change="onSearch"
            )
              template(v-slot:selection="{ item, index }")
                v-chip(v-if="index === 0")
                  span {{ item.text }}
                span(
                  v-if="index === 1"
                  class="grey--text text-caption"
                ) (+{{ searchObject.specializations.length - 1 }} others)
</template>

<script>
// import NCR_CITIES from '~/assets/fixtures/ncr-cities';
export default {
  components: {
  },
  props: {
    requireAction: {
      type: Boolean,
      default: false,
    },
    // showSuggestions: {
    //   type: Boolean,
    //   default: false,
    // },
    // Search Mode
    mode: {
      type: String,
      default: 'account',
    },
    locationSwitch: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    // this.cities = NCR_CITIES;
    this.buttonGroupClasses = ['font-weight-semibold', 'font-16', 'black--text'];
    this.serviceTypes = [
      { name: 'Consult', value: 'clinical-consultation' },
      { name: 'Procedure', value: 'clinical-procedure' },
      { name: 'Laboratory', value: 'lab' },
      { name: 'Imaging', value: 'imaging' },
      { name: 'Physical Exam', value: 'pe' },
      { name: 'Dental', value: 'dental' },
    ];
    return {
      loading: false,
      deleteTag: {
        removeIndex: undefined,
      },
      tagSearchDialog: false,
      searchText: null,
      searchObject: {
        searchString: '',
        specializations: [],
        mode: 'account',
        serviceType: null,
      },
      specialtiesList: [],
      // docSuggestionsSearchQuery: null,
      // docSearchLocation: null,
      // doctorsSuggestions: [],
      // selectedSuggestion: null,
      // debouncedSuggestionsSearch: debounce((event) => {
      //   this.handleSuggestions(event);
      // }, 500),
    };
  },
  computed: {
    searchPlaceholder () {
      switch (this.searchObject.mode) {
        case 'account': return 'Search for doctors';
        case 'organization': return 'Search for clinics';
        case 'location': return 'Search by location';
        default: return 'Search for clinics, doctors, and services';
      };
    },
    showSpecializationsField () {
      return this.searchObject.mode === 'account';
      // this.searchObject.serviceType === 'clinical-consultation' ||
      // this.searchObject.serviceType === 'clinical-procedure';
    },
    selectedMode: {
      get () {
        return this.mode || 'account';
      },
      set (val) {
        this.$emit('update:mode', {
          ...this.searchObject,
          mode: val,
        });
      },
    },
  },
  async mounted () {
    this.loading = true;
    this.searchObject.mode = this.selectedMode;
    this.searchObject.searchString = this.$route.query.searchText;
    await this.fetchSpecialties();
    this.loading = false;
  },
  methods: {
    onModeChange (val) {
      this.selectedMode = val;
      this.searchObject.mode = val;
      this.searchObject.specializations = [];
    },
    /**
     * @param {Boolean} allowableSearch - if true, continue with search regardless of action requirement
     *
     * An action requirement is usually a trigger through button or enter key
     */
    onSearch (allowableSearch = false) {
      if (!allowableSearch && this.requireAction) return;
      this.searchObject.mode = this.selectedMode;
      console.log('searchObject', this.searchObject);
      this.$emit('search', this.searchObject);
    },
    async fetchSpecialties () {
      try {
        const { items } = await this.$sdk.service('fixtures').find({ type: 'specialty' });
        this.specialtiesList = items;
      } catch (e) {
        console.error(e);
      }
    },
    toggleChip (index) {
      // console.log(this.specialtiesList[index].selected);
      if (!this.specialtiesList[index].selected) {
        this.specialtiesList[index].selected = true;
        this.searchObject.specialties.push(this.specialtiesList[index]);
      } else {
        this.specialtiesList[index].selected = false;
        for (let i = 0; i < this.searchObject.specialties.length; i++) {
          if (this.specialtiesList[index].indexVal === this.searchObject.specialties[i].indexVal) {
            this.searchObject.specialties.splice(i, 1);
            console.log('weewee' + i);
          }
        };
      };
    },
    clearSpecialties () {
      for (let i = 0; i < this.specialtiesList.length; i++) {
        this.specialtiesList[i].selected = false;
      }
      this.searchObject.specialties = [];
    },
  },
};
</script>

<style scoped>
.active-button {
  background: #0099ee !important;
  color: white !important;
}
.tight-font {
  letter-spacing: 0px;
}
.bordered-chip {
  border: 1px solid black;
}
</style>
