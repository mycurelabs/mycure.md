<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" sm="6" md="6")
        h2(:class="$vuetify.breakpoint.xsOnly ? 'text-center' : ''") Healthcare Facilities
      v-spacer
      v-col(cols="12" sm="6" md="4").text-right
        v-text-field(
          v-model="searchTerm"
          prepend-inner-icon="mdi-magnify"
          placeholder="Search facilities"
          outlined
          @keyup.enter="$emit('searchFacility', searchTerm)"
        ).text-field-input
    v-row(v-if="isLoadingFacilityList")
      v-col.text-center
        v-progress-circular(
          indeterminate
          color="primary"
        )
    v-row(v-else align="center" justify="center")
      template(v-if="hcFacilitiesLength === 0")
        v-col.text-center
          h2 No Result Found
      template(v-else v-for="item in hcFacilitiesPaged")
        v-col(cols="12" xs="12" sm="4").d-flex.justify-center
          v-card(
            hover
            class="ma-4"
            height="200"
            :width="$vuetify.breakpoint.xsOnly ? '100%' : 250"
            :ripple="false"
            @click="setFacility(item)"
          )
            v-img(height="100%" width="100%" :src="getImage(item.picURL)")
              v-row(align-content="center" justify="center").fill-height.white--text.background-raise
                v-col.fill-height
                  div.fill-height.d-flex.flex-column.justify-center.text-center.pa-2
                    h2 {{ item.name }}
    v-row(v-if="hcFacilitiesLength > 3" align="center" justify="center")
      v-col.d-flex.align-center.justify-center
        v-icon(
          v-if="hcFacilitiesPage > 1 && hcFacilitiesLength > 3"
          large
          @click="prevPage"
        ).secondary--text.btn mdi-chevron-left
        span.mx-2 {{ hcFacilitiesPage }} / {{ hcFacilitiesTotalPage }}
        v-icon(
          v-if="hcFacilitiesPage !== hcFacilitiesTotalPage && hcFacilitiesLength > 3"
          large
          @click="nextPage"
        ).secondary--text.btn mdi-chevron-right
    dialog-facility(
      :facility="facility"
      :isLoadingFacilityInfo="isLoadingFacilityInfo"
      :selectedHcFacilityProviders="selectedHcFacilityProviders"
      :selectedHcFacilityServices="selectedHcFacilityServices"
      :lguId="lguId"
      v-model="facilityDialog"
      @toggleFacilityDialog="toggleFacilityDialog"
    )
</template>

<script>
import _ from 'lodash';
import DialogFacility from '~/components/lgu-website/dialog-facility';
export default {
  components: {
    DialogFacility,
  },
  props: {
    hcFacilities: {
      type: Array,
      default: () => ([]),
    },
    lguId: {
      type: String,
      default: '',
    },
    hcFacilityServices: {
      type: Array,
      default: () => ([]),
    },
    isLoadingFacilityInfo: {
      type: Boolean,
      default: false,
    },
    isLoadingFacilityList: {
      type: Boolean,
      default: false,
    },
    selectedHcFacilityProviders: {
      type: Array,
      default: () => ([]),
    },
    selectedHcFacilityServices: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      facility: {},
      facilityDialog: false,
      hcFacilitiesPage: 1,
      searchTerm: '',
      debouncedSearch: _.debounce(this.onSearch, 600),
    };
  },
  computed: {
    hcFacilitiesPaged () {
      if (this.hcFacilities?.length > 3) {
        return this.hcFacilities?.slice((this.hcFacilitiesPage - 1) * 3, this.hcFacilitiesPage * 3);
      }
      return this.hcFacilities;
    },
    hcFacilitiesTotalPage () {
      return Math.ceil(this.hcFacilities.length / 3);
    },
    hcFacilitiesLength () {
      return this.hcFacilities?.length;
    },
  },
  watch: {
    searchTerm: {
      handler () {
        this.debouncedSearch();
      },
    },
  },
  methods: {
    getImage (filename) {
      if (filename) {
        return filename;
      }
      // default image
      return require('~/assets/images/doctor-website/doctor-website-profile-clinic.png');
    },
    onSearch () {
      this.$emit('searchFacility', this.searchTerm);
    },
    async setFacility (facility) {
      this.facility = facility;
      await this.$emit('populateServices', facility.id);
      this.toggleFacilityDialog();
    },
    toggleFacilityDialog () {
      this.facilityDialog = !this.facilityDialog;
    },
    prevPage () {
      if (this.hcFacilitiesPage !== 1) {
        this.hcFacilitiesPage--;
      }
    },
    nextPage () {
      if (this.hcFacilitiesPage !== this.hcFacilitiesTotalPage) {
        this.hcFacilitiesPage++;
      }
    },
  },
};
</script>

<style scoped>
.background-raise {
  background-color: rgba(0,0,0,0.4);
  background-size: 100% 400%;
  background-position: 100% 100%;
}
.text-field-input {
  height: 56px;
}
</style>
