<template lang="pug">
  v-container(:class="uspBgClass").py-10
    v-row(justify="center" align="center" v-for="(data, key) in uspInfo" :key="key")
      v-col(cols="12" md="10")
        h1(:class="titleSizeClass").text-center.font-weight-bold {{data.title}}
      v-col(cols="12" md="8")
        v-text-field(
          label="Search Doctor, Specialization"
          append-icon="mdi-magnify"
          v-model="searchItem"
          @click:append="searchDoctorSpecialization"
          @keydown.enter="searchDoctorSpecialization"
          @click:clear="isSearching = false"
          :loading="isLoading"
          :class="paddingClass"
          background-color="white"
          clearable
          outlined
        ).search-field
      v-col(cols="12" md="5" :class="marginClass")
        p Popular Searches:
          template(v-for="(search, key) in data.popularSearches")
              span(style="background-color: dcdcdc").pl-3 {{search}}
      v-col(cols="12" md="2" :class="marginClass")
          v-select(
          v-model="selectedSpecialization"
          :items="specializationItems"
          :item-text="specializationItems"
          :item-value="specializationItems"
          label="Others"
          background-color="white"
          outlined
          )
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    uspInfo: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Array of doctor objects
     * @type {Array}
     */
    specializationItems: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      searchItem: '',
      selectedSpecialization: {
        default: 'Others',
      },
      isSearching: false,
      isLoading: false,
    };
  },
  computed: {
    uspBgClass () {
      return [{ 'usp-panel': !this.$isMobile }];
    },
    titleSizeClass () {
      return [this.$isMobile ? 'font-34' : 'font-50'];
    },
    paddingClass () {
      return [{ 'px-12': !this.$isMobile }];
    },
    marginClass () {
      return [this.$isMobile ? 'mt-n5' : 'mt-n5'];
    },
  },
  methods: {
    async searchDoctorSpecialization () {
      this.isLoading = true;
      await setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.usp-panel {
  background-image: url('../../assets/images/directory-doctor/MYCURE-Doctor-Directory-Left-First-Panel-Image.png'), url('../../assets/images/directory-doctor/MYCURE-Doctor-Directory-Right-First-Panel-Image.png');
  background-position: left bottom, right bottom;
}
@media screen and (min-width: 1920px) {
  .search-field {
    padding: 0 75px !important;
  }
}
</style>
