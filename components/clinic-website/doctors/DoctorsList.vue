<template lang="pug">
  v-row(justify="center")
    //- LOADING
    template(v-if="loading.section")
      v-col(cols="12").text-center
        v-skeleton-loader(type="card-heading, list-item-three-line" elevation="2")
    //- template(v-else-if="items.length === 0")
    //-   v-col(cols="12").text-center
    //-     h2.mc-h2 No services available
    template(v-else)
      v-col(v-if="!$isMobile" cols="12" md="4" xl="3")
        v-card(color="white" flat)
          v-toolbar(flat).pa-1
            v-spacer
            h2.mc-h4.black--text Our Doctors
            v-spacer
          v-divider.my-3
          v-card-text
            specialization-filter(
              v-model="specializationFiltersArray"
              @filter="onFilter($event)"
              ref="specFilter"
            )
            v-row(justify="end").px-3.my-2
              v-spacer
              v-btn(
                v-if="specializationsArray.length > 0"
                color="secondary"
                text
                @click="$refs.specFilter.clearSpecializations()"
              ).font-12.px-0 CLEAR FILTERS
            //- v-text-field(
            //-   v-model="specializationFilter"
            //-   placeholder="Filter Specializations"
            //-   :prepend-inner-icon="mdiFilter"
            //-   dense
            //-   hide-details
            //-   outlined
            //-   :disabled="dialog"
            //-   :append-
            //-   @click="dialog = true"
            //- )
            //-   template(slot="append")
      //- SERVICES
      v-col(
        cols="12"
        md="8"
        xl="9"
      )
        doctors-paginated(
          :loading="loading.list"
          :items="items"
          :items-total="itemsTotal"
          :items-limit="itemsLimit"
          :itemsPage.sync="itemsPage"
          :organization="organization"
          :is-preview-mode="isPreviewMode"
          @update:itemsPage="onPaginate($event)"
        )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import DoctorsPaginated from './DoctorsPaginated';
import SpecializationFilter from './SpecializationFilter';
import GenericPanel from '~/components/generic/GenericPanel';

export default {
  components: {
    GenericPanel,
    DoctorsPaginated,
    SpecializationFilter,
  },
  props: {
    organization: {
      type: String,
      default: null,
    },
    // - It should have the service info, and schedules
    items: {
      type: Array,
      default: () => ([]),
    },
    itemsTotal: {
      type: Number,
      default: 0,
    },
    itemsLimit: {
      type: Number,
      default: 5,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    // Loading props
    /**
     * @param {Boolean} loading.section - whole services section loading
     * @param {Boolean} loading.list - only list loading
     */
    loading: {
      type: Object,
      default: () => ({
        section: false,
        list: false,
      }),
    },
  },
  data () {
    return {
      itemsPage: 1,
      specializationFiltersArray: [],
      specializationsArray: [],
    };
  },
  watch: {
    specializationFilter (val) {
      this.$emit('filter', val);
    },
  },
  mounted () {
    this.$watch(
      '$refs.specFilter.specializationFiltersArray',
      value => (this.specializationsArray = value),
    );
  },
  methods: {
    onPaginate (page) {
      this.$emit('paginate', page);
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
    onFilter (specialties) {
      this.$emit('filter', specialties);
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
  },
};
</script>
