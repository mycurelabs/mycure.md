<template lang="pug">
  generic-container
    template(v-if="!$isMobile")
      v-row(justify="start" align="end").mb-2
        v-col(v-show="isHeader" cols="1" style="max-width: 70px;").pl-0
          img(src="~/assets/images/sign-in/mycure-sso-sign-in-logo.svg" height="60").mb-n3
        v-col(:cols="isHeader ? 4 : 5").pl-0
          v-text-field(
            label="Search Doctor"
            append-icon="mdi-magnify"
            type="text"
            outlined
            clearable
            dense
            v-model="searchTerm"
            @click:append="$emit('mock-load')"
            @keydown.enter="$emit('mock-load')"
          ).input-field
        v-col(cols="3")
          p.mb-2 Specialization
          v-select(
            item-text="info"
            item-value="tag"
            outlined
            dense
            v-model="selectedSpecialization"
            :items="specializations"
            @change="$emit('mock-load')"
          ).input-field
        v-col(cols="3")
          p.mb-2 Sort by
          v-select(
            item-text="info"
            item-value="tag"
            dense
            outlined
            v-model="selectedSort"
            :items="sortBy"
            @change="$emit('mock-load')"
          ).input-field
        v-col(cols="1").pr-0
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
      v-row.mb-2
        v-text-field(
          label="Search Doctor"
          type="text"
          append-icon="mdi-magnify"
          outlined
          clearable
          dense
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
          :mobile-view-type="mobileViewType"
          :specializations="specializations"
          :sort-by="sortBy"
          @apply-filters-mobile="$emit('mock-load')"
          @close-dialog="closeDialog"
          @update-mobile-view="updateMobileView"
        )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import DoctorFilterDialogMobile from '~/components/commons/generic-doctor-filter-dialog-mobile';
export default {
  components: {
    DoctorFilterDialogMobile,
    GenericContainer,
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
