<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center" v-for="(data, key) in about" :key="key")
      v-col(justify="center" cols="12" md="8").text-center
        h1 About {{data.clinicName}}
      v-col(justify="center" align="center" cols="12" md="8")
        p.grey--text {{data.firstInfo}}
        p.grey--text {{data.secondInfo}}
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    about: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style scoped>
</style>
