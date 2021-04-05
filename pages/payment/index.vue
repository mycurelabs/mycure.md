<template lang="pug">
</template>

<script>
export default {
  layout: 'default',
  mounted () {
    // - No navigation here so go back to home
    this.$nuxt.$router.push({ name: 'index' });
  },
  head () {
    return {
      title: 'MYCURE Advanced Complete Clinic Management System',
    };
  },
};
</script>
