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
            :loading="isLoading"
            @click:append="searchDoctor()"
            @click:clear="isSearching = false"
            @keydown.enter="searchDoctor()"
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
            :items="specializations"
            dense
            outlined
          )
        v-col(cols="3")
          p.mb-3 Sort By
          v-select(
            :items="sortBy"
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
          :loading="isLoading"
          @click:append="searchDoctor()"
          @keydown.enter="searchDoctor()"
        ).align-baseline
          template(v-slot:append-outer)
            div
              v-btn(icon @click="isOptionDialogOpen = !isOptionDialogOpen")
                v-icon(color="primary") mdi-cog
        v-dialog(v-model="isOptionDialogOpen" max-width="280")
          v-container.white.px-0
            div.px-4
              p.font-20.primary--text Filter Settings
            div
              v-btn(
                :outlined="!isGridView"
                width="50%"
                :color="isGridView ? 'primary' : 'grey'"
                tile
                @click="toggleView('grid')"
                elevation="0"
              )
                v-icon(
                  size="24"
                  :color="isGridView ? 'white' : 'grey'"
                ) mdi-view-grid
              v-btn(
                :outlined="isGridView"
                width="50%"
                :color="!isGridView ? 'primary' : 'grey'"
                tile
                @click="toggleView('list')"
                elevation="0"
              )
                v-icon(
                  size="32"
                  :color="!isGridView ? 'white' : 'grey'"
                ) mdi-view-list
            div.px-4.mt-3
              p.mb-3 Specialization
              v-select(
                :items="specializations"
                dense
                outlined
              ).input-field
            div.px-4.mt-3
              p.mb-3 Sort by
              v-select(
                :items="sortBy"
                dense
                outlined
              ).input-field
            div.px-4.mt-6
              v-btn(
                width="50%"
                tile
                elevation="0"
                rounded
                @click="isOptionDialogOpen = !isOptionDialogOpen"
              ).letter-spacing-normal.text-none Cancel
              v-btn(
                width="50%"
                color="primary"
                tile
                elevation="0"
                rounded
                @click="filterDoctor"
              ).letter-spacing-normal.text-none Update
    v-row
      template(v-if="isLoading")
        v-row(justify="center" align="center").my-10
          v-progress-circular(:size="70" :width="7" color="primary" indeterminate)
      template(v-else)
        template(v-if="viewType === 'grid'")
          template(v-for="item in doctorsToList")
            doctor-item-grid(
              :doctor="item"
            )
        template(v-else)
          template(v-if="$isMobile")
            template(v-for="item in doctorsToList")
              doctor-item-list-mobile(
                :doctor="item"
              )
          template(v-else)
            doctor-item-list-desktop(
              :doctors="doctorsToList"
            )
</template>

<script>
import DoctorItemGrid from '~/components/clinic-website/doctor-item-grid';
import DoctorItemListMobile from '~/components/clinic-website/doctor-item-list-mobile';
import DoctorItemListDesktop from '~/components/clinic-website/doctor-item-list-desktop';
export default {
  components: {
    DoctorItemGrid,
    DoctorItemListMobile,
    DoctorItemListDesktop,
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
      searchTerm: '',
      isLoading: false,
      doctorsRes: [],
      isOptionDialogOpen: false,
    };
  },
  computed: {
    doctorsLength () {
      return this.doctors?.length || 0;
    },
    specializations () {
      return ['For my family', 'For my kids', 'For my eyes', 'For my nose'];
    },
    sortBy () {
      return ['Alphabetical Order', 'Reverse Alphabetical', 'Specialization', 'Years of Experience'];
    },
    doctorsToList () {
      return this.isSearching ? this.doctorsRes : this.doctors;
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
      }, 1000);
    },
    toggleView (type) {
      this.viewType = type;
    },
    searchDoctor () {
      console.log(this.searchTerm);
      this.mockLoading();
      this.isSearching = true;
    },
    filterDoctor () {
      console.log('----> filter doctor');
      this.mockLoading();
      this.isOptionDialogOpen = false;
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
.letter-spacing-normal {
  letter-spacing: normal;
}
</style>
