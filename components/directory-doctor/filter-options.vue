<template lang="pug">
  v-container(fluid)
    template(v-if="!$isMobile")
      v-row(justify="start" align="end")
        v-col(v-show="isHeader" cols="1" style="max-width: 70px;")
          img(src="~/assets/images/sign-in/mycure-sso-sign-in-logo.svg" height="60").mb-n3
        v-col(:cols="isHeader ? 4 : 5")
          v-text-field(
            outlined
            clearable
            label="Search Doctor"
            type="text"
            dense
            append-icon="mdi-magnify"
            v-model="searchTerm"
            @click:append="$emit('mock-load')"
            @keydown.enter="$emit('mock-load')"
          ).input-field
        v-col(cols="3")
          p.mb-2 Specialization
          v-select(
            v-model="selectedSpecialization"
            :items="specializations"
            item-text="info"
            item-value="tag"
            @change="$emit('mock-load')"
            dense
            outlined
          ).input-field
        v-col(cols="3")
          p.mb-2 Sort by
          v-select(
            v-model="selectedSort"
            :items="sortBy"
            item-text="info"
            item-value="tag"
            @change="$emit('mock-load')"
            dense
            outlined
          ).input-field
        v-col(cols="1")
          div.d-flex.justify-end
            v-btn(tile icon)
              v-icon(
                size="28"
                color="grey"
              ) mdi-view-grid
            v-btn(tile icon)
              v-icon(
                size="36"
                color="primary"
              ) mdi-view-list
    template(v-else)
      v-row
        v-text-field(
          outlined
          clearable
          label="Search Doctor"
          type="text"
          dense
          append-icon="mdi-magnify"
          v-model="searchTerm"
          @click:append="$emit('mock-load')"
          @keydown.enter="$emit('mock-load')"
        ).align-baseline
          template(v-slot:append-outer)
            div
              v-btn(icon @click="isOptionDialogOpen = !isOptionDialogOpen")
                v-icon(color="primary") mdi-cog
        doctor-filter-dialog-mobile(
          :option-dialog="isOptionDialogOpen"
          @apply-filters-mobile="$emit('mock-load')"
          @close-dialog="closeDialog"
          @update-mobile-view="updateMobileView"
          :mobile-view-type="mobileViewType"
          :specializations="specializations"
          :sort-by="sortBy"
        )
</template>

<script>
import DoctorFilterDialogMobile from '~/components/commons/generic-doctor-filter-dialog-mobile';
export default {
  components: {
    DoctorFilterDialogMobile,
  },
  props: {
    specializations: {
      type: Array,
      default: () => ([]),
    },
    sortBy: {
      type: Array,
      default: () => ([]),
    },
    isHeader: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      viewType: 'grid',
      mobileViewType: 'grid',
      searchTerm: '',
      isLoading: false,
      isOptionDialogOpen: false,
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
    mockLoading () {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    toggleView (type) {
      this.mobileViewType = type;
      this.viewType = type;
      this.selectedSpecialization = 'default';
      this.selectedSort = 'default';
    },
    searchDoctor () {
      this.mockLoading();
    },
    specFilterDoctor () {
      this.mockLoading();
    },
    sortDoctor () {
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
.input-field {
  height: 40px;
}
</style>
