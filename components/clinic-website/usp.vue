<template lang="pug">
  v-col(:style="backgroundStyle").main-container
    v-container(fluid).pa-0
      v-row(align="center" justify="center").content-container
        v-col(cols="10" md="6").text-center
          h1(:class="{ 'font-30': $isMobile }").white--text Consult online with #[br] MYCURE Health Center today
          v-text-field(
            solo
            clearable
            placeholder="Search MYCURE Health Center’s doctors, specializations, etc."
            v-model="searchText"
            @keyup.enter="debouncedSearch"
            @keydown="debouncedSearch"
            @click:clear="clearSearchText"
          ).mt-3.search-bar
            template(v-slot:append)
              v-icon(color="white").search-icon mdi-magnify
</template>

<script>
// utils
import _ from 'lodash';
import { searchClinicDoctors } from '~/utils/axios';

export default {
  props: {
    backgroundPic: {
      type: String,
      default: () => require('~/assets/images/clinics-website/usp-background.png'),
    },
    name: {
      type: String,
      default: 'Awesome Hospital',
    },
    orgId: {
      type: String,
      default: null,
    },
  },
  data () {
    return {
      searchText: null,
      debouncedSearch: _.debounce(this.search, 500),
    };
  },
  computed: {
    backgroundStyle () {
      const overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
      return { 'background-image': `${overlay}, url(${this.backgroundPic})` };
    },
  },
  methods: {
    clearSearchText () {
      this.$emit('searchResultsLoaded', { results: [], text: null });
    },
    async search () {
      if (!this.searchText) {
        this.clearSearchText();
      };

      this.$emit('searchLoading', true);
      const query = {
        organization: this.orgId,
        searchString: this.searchText,
      };
      const results = await searchClinicDoctors(query);

      this.$emit('searchLoading', false);
      this.$emit('searchResultsLoaded', { results, text: this.searchText });
    },
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 70px;
  padding: 0;
  width: 100%;
  height: 425px;
  background-size: cover;
  background-position: center;
}
.content-container {
  height: 425px;
}
.search-bar >>> .v-input__slot {
  border-radius: 0px 5px 5px 0px;
  border: 4px solid #0099CC;
  padding-right: 0 !important;
}
.search-icon {
  background-color: #0099CC;
padding: 8px;
}
</style>
