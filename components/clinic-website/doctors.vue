<template lang="pug">
  v-container(fluid)
    v-row(justify="start" align="end" dense)
      v-col
        h2 Our Doctors
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
        ).search-field
    v-row(justify="start" align="start")
      v-col(cols="4")
        p.grey--text.font-26.message-line-height We have {{ doctorsLength }} doctors in our clinic. Who would you like to schedule for an appointment?
      v-spacer
      v-col(cols="3")
        p Specialization
        v-select(
          :items="specializations"
          dense
          outlined
        )
      v-col(cols="3")
        p Sort By
        v-select(
          :items="sortBy"
          dense
          outlined
        )
      v-col(align-self="center" cols="1")
        div
          v-btn(tile large icon @click="changeToGrid(true)")
            v-icon(large color="primary") mdi-view-grid
          v-btn(tile large icon @click="changeToGrid(false)")
            v-icon(x-large color="primary") mdi-view-list
    v-row
      template(v-if="isLoading")
        v-row(justify="center" align="center").my-10
          v-progress-circular(:size="70" :width="7" color="primary" indeterminate)
      template(v-else)
        template(v-if="isGridView")
          template(v-for="(item) in doctorsToList")
            doctor-item-grid(
              v-if="isGridView"
              :doctor="item"
            )
        template(v-else)
          template(v-if="$isMobile")
            template(v-for="(item) in doctorsToList")
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
      isGridView: true,
      searchTerm: '',
      isLoading: false,
      doctorsRes: [],
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
  },
  methods: {
    changeToGrid (isGrid) {
      this.isGridView = isGrid;
    },
    searchDoctor () {
      this.isSearching = true;
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      console.log(this.searchTerm);
    },
  },
};
</script>

<style scoped>
.message-line-height {
  line-height: 32px;
}
.search-field {
  height: 40px;
}
</style>
