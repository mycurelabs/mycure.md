<template lang="pug">
  generic-container.my-10
    v-row(justify="center" align="center" dense)
      v-col(cols="12").text-center
        h2 Our Doctors
        p.grey--text.font-20.message-line-height We have {{ doctorsLength }} doctors in our clinic. Who would you like to schedule for an appointment?
      v-col.pa-1
        search-controls(@search="searchFromControls")
    v-row
      template(v-if="isLoading")
        v-row(justify="center" align="center").my-10
          v-progress-circular(:size="70" :width="7" color="primary" indeterminate)
      template(v-else)
        template(v-if="viewType === 'grid'")
          template(v-for="item in doctors")
            generic-doctor-item-grid(
              :doctor="item"
            )
        template(v-else)
          template(v-if="$isMobile")
            template(v-for="item in doctors")
              doctor-item-list-mobile(
                :doctor="item"
              )
          template(v-else)
            doctor-item-list-desktop(
              :doctors="doctors"
            )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import SearchControls from '~/components/directory-doctor/search-controls';
import GenericDoctorItemGrid from '~/components/commons/generic-doctor-item-grid';
import DoctorItemListMobile from '~/components/clinic-website/doctor-item-list-mobile';
import DoctorItemListDesktop from '~/components/clinic-website/doctor-item-list-desktop';
import DoctorFilterDialogMobile from '~/components/clinic-website/doctor-filter-dialog-mobile';
export default {
  components: {
    SearchControls,
    GenericContainer,
    GenericDoctorItemGrid,
    DoctorItemListMobile,
    DoctorItemListDesktop,
    DoctorFilterDialogMobile,
  },
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      viewType: 'grid',
      mobileViewType: 'grid',
      searchTerm: '',
      isLoading: false,
      isOptionDialogOpen: false,
      isSearching: false,
      isSorting: false,
      isSpecFiltering: false,
      selectedSpecialization: 'default',
      selectedSort: 'default',
    };
  },
  computed: {
    doctorsLength () {
      return this.doctors?.length || 0;
    },
    isGridView () {
      return this.viewType === 'grid';
    },
  },
  methods: {
    async mockLoading () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    searchFromControls () {
      // this.$emit('search');
    },
    toggleView (type) {
      this.mobileViewType = type;
      this.viewType = type;
      this.selectedSpecialization = 'default';
      this.selectedSort = 'default';
    },
    mockFilter () {
      this.mockLoading();
    },
    applyFiltersMobile () {
      this.mockLoading();
      this.toggleView(this.mobileViewType);
      this.closeDialog();
    },
    closeDialog () {
      this.isOptionDialogOpen = false;
    },
    updateMobileView (type) {
      this.mobileViewType = type;
    },
  },
};
</script>

<style scoped>
.message-line-height {
  line-height: 32px;
}
.input-field {
  height: 40px;
}
</style>
