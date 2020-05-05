<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="10")
        v-tabs(v-model="selectedTab")
          v-tab(href="#clinics") Clinics
          v-tab(href="#professional-info") Professional Info
        v-tabs-items(v-model="selectedTab")
          v-tab-item(value="clinics")
            //- TODO: loop clinics here
            template
              clinic-item
          v-tab-item(value="professional-info")
            h1 Professional Info
</template>

<script>
import ClinicItem from './clinic-item';
export default {
  components: {
    ClinicItem,
  },
  data () {
    return {
      selectedTab: 'clinics',
    };
  },
};
</script>
