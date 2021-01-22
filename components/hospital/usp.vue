<template lang="pug">
  v-col(:style="backgroundStyle").main-container
    v-container.pa-0
      v-row(align="center" justify="center").content-container
        v-col(md="6").text-center
          h1.white--text Consult online with
          h1.white--text {{ name }}
          v-text-field(
            solo
            clearable
            prepend-inner-icon="mdi-magnify"
            placeholder="Search doctors"
            v-model="searchText"
            @keyup.enter="debouncedSearch"
            @keydown="debouncedSearch"
            @click:clear="clearSearchText"
          ).mt-3
</template>

<script>
// utils
import _ from 'lodash';
import { searchClinicDoctors } from '~/utils/axios';

export default {
  props: {
    backgroundPic: {
      type: String,
      default: () => require('~/assets/images/mycure-homepage-usp-cover.png'),
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
</style>
