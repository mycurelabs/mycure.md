<template lang="pug">
  v-card(flat)
    v-toolbar(flat)
      v-tabs
        v-tab #[b Laboratory]
        v-tab #[b Imaging]
        v-tab #[b PE Packages]
        v-tab #[b Doctors]
        v-tab #[b Procedures]
    v-card-text
</template>

<script>
export default {
  data () {
    return {
      activeTab: null,
    };
  },
};
</script>
