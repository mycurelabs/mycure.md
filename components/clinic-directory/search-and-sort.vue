<template lang="pug">
  generic-container
    v-row(align="center")
      v-col(cols="12" md="6" lg="7" align="start").px-0
        v-text-field(
          v-model="searchObject.searchString"
          prepend-inner-icon="mdi-magnify"
          label="Search a clinic you need."
          background-color="yellow accent-1"
          type="text"
          color="grey"
          clearable
          dense
          hide-details
          outlined
        )
      v-spacer
      v-col(cols="12" md="3" align="end").px-0
        v-select(
          v-model="searchObject.sortBy"
          label="Sort By"
          item-text="text"
          dense
          hide-details
          outlined
          return-object
          :items="sortBy"
        )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: { GenericContainer },
  props: {
    searchString: {
      type: String,
      default: '',
    },
  },
  data () {
    this.sortBy = [
      {
        text: 'Vicinity',
      },
      {
        text: 'Sort 1',
      },
      {
        text: 'Sort 2',
      },
      {
        text: 'Sort 3',
      },
      {
        text: 'Sort 4',
      },
      {
        text: 'Sort 5',
      },
    ];
    return {
      searchObject: {
        searchString: '',
        sortBy: {},
      },
    };
  },
  watch: {
    searchObject: {
      handler () {
        this.onSearch();
      },
      deep: true,
    },
  },
  methods: {
    onSearch () {
      this.$emit('search', this.searchObject);
    },
  },
};
</script>
