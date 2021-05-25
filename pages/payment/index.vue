<template lang="pug">
</template>

<script>
export default {
  layout: 'default',
  head () {
    return {
      title: 'MYCURE Advanced Complete Clinic Management System',
    };
  },
  mounted () {
    // - No navigation here so go back to home
    this.$nuxt.$router.push({ name: 'index' });
  },
};
</script>
