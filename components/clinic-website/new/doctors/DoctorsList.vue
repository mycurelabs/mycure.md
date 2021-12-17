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
          //- TODO: insert specialization dropdown and dialog

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
import GenericPanel from '~/components/generic/GenericPanel';

export default {
  components: {
    GenericPanel,
    DoctorsPaginated,
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
      specializationFilter: null,
    };
  },
  computed: {
  },
  watch: {
    specializationFilter (val) {
      this.$emit('filter', val);
    },
  },
  methods: {
    onPaginate (page) {
      this.$emit('paginate', page);
      VueScrollTo.scrollTo('#tabs', 500, { offset: -100, easing: 'ease' });
    },
  },
};
</script>
