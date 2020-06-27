<template lang="pug">
  v-container(fluid).usp-panel
    v-row(justify="center" align="center")
      v-col(cols="12" md="10" v-for="(data, key) in uspInfo" :key="key")
        h1(:class="titleSizeClass").text-center.font-weight-bold {{data.title}}
      v-col(cols="12" md="6")
        v-text-field(
          label="Search Doctor, Specialization"
          append-icon="mdi-magnify"
          v-model="searchItem"
          @click:append="searchDoctorSpecialization()"
          @keydown.enter="searchDoctorSpecialization()"
          @click:clear="isSearching = false"
          :loading="isLoading"
          clearable
          outlined
        )
</template>

<script>
export default {
  props: {
    uspInfo: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      searchItem: '',
      isSearching: false,
      isLoading: false,
    };
  },
  computed: {
    titleSizeClass () {
      return [this.$isMobile ? 'font-34' : 'font-50'];
    },
  },
  methods: {
    searchDoctorSpecialization () {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
