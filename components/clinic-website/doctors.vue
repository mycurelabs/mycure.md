<template lang="pug">
  v-container(fluid)
    v-row(justify="start" align="end" dense)
      v-col
        h2 Our Doctors
      template(v-if="!$isMobile")
        v-spacer
        v-col
          v-text-field(
            outlined
            clearable
            label="Search Doctor"
            type="text"
            dense
            append-icon="mdi-magnify"
            v-model="searchTerm"
            @click:append="mockFilter"
            @click:clear="isSearching = false"
            @keydown.enter="mockFilter"
          ).input-field
      template(v-else)
        p.grey--text.font-26.message-line-height We have {{ doctorsLength }} doctors in our clinic. Who would you like to schedule for an appointment?
    v-row(justify="start" align="center")
      template(v-if="!$isMobile")
        v-col(cols="4")
          p.grey--text.font-26.message-line-height We have {{ doctorsLength }} doctors in our clinic. Who would you like to schedule for an appointment?
        v-spacer
        v-col(cols="3")
          p.mb-3 Specialization
          v-select(
            v-model="selectedSpecialization"
            :items="specializations"
            item-text="info"
            item-value="tag"
            @change="mockFilter"
            dense
            outlined
          )
        v-col(cols="3")
          p.mb-3 Sort By
          v-select(
            v-model="selectedSort"
            :items="sortBy"
            item-text="info"
            item-value="tag"
            @change="mockFilter"
            dense
            outlined
          )
        v-col(cols="1" style="max-width: 85px;").pl-0.mt-2
          div.d-flex.justify-end
            v-btn(tile icon @click="toggleView('grid')")
              v-icon(
                size="28"
                :color="isGridView ? 'primary' : 'grey'"
              ) mdi-view-grid
            v-btn(tile icon @click="toggleView('list')")
              v-icon(
                size="36"
                :color="!isGridView ? 'primary' : 'grey'"
              ) mdi-view-list
      template(v-else)
        v-text-field(
          outlined
          clearable
          label="Search Doctor"
          type="text"
          dense
          append-icon="mdi-magnify"
          v-model="searchTerm"
          @click:append="mockFilter"
          @click:clear="isSearching = false"
          @keydown.enter="mockFilter"
        ).align-baseline
          template(v-slot:append-outer)
            div
              v-btn(icon @click="isOptionDialogOpen = !isOptionDialogOpen")
                v-icon(color="primary") mdi-cog
        doctor-filter-dialog-mobile(
          :is-option-dialog-open="isOptionDialogOpen"
          @apply-filters-mobile="applyFiltersMobile"
          @close-dialog="closeDialog"
          @update-mobile-view="updateMobileView"
          :mobile-view-type="mobileViewType"
          :specializations="specializations"
          :sort-by="sortBy"
        )
    v-row
      template(v-if="isLoading")
        v-row(justify="center" align="center").my-10
          v-progress-circular(:size="70" :width="7" color="primary" indeterminate)
      template(v-else)
        template(v-if="viewType === 'grid'")
          template(v-for="item in doctors")
            doctor-item-grid(
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
import DoctorItemGrid from '~/components/clinic-website/doctor-item-grid';
import DoctorItemListMobile from '~/components/clinic-website/doctor-item-list-mobile';
import DoctorItemListDesktop from '~/components/clinic-website/doctor-item-list-desktop';
import DoctorFilterDialogMobile from '~/components/clinic-website/doctor-filter-dialog-mobile';
export default {
  components: {
    DoctorItemGrid,
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
    /**
     * Array of sorting objects
     * @type {Array}
     */
    specializations: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Array of filter objects
     * @type {Array}
     */
    sortBy: {
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
