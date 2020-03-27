<template lang="pug">
</template>

<script>
export default {
  layout: 'user',
  created () {
    this.$nuxt.$router.push({ name: 'signup-individual-step-1' });
  },
};
</script>
