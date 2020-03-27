<template lang="pug">
</template>

<script>
export default {
  layout: 'user',
  created () {
    this.$nuxt.$router.push({ name: 'signup-multispecialty-step-1' });
  },
};
</script>
