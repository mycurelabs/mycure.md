<template lang="pug">
  div
    h1 {{ hospitalName }}
    p TeleMedicine Clinic | {{ address }}
    v-icon(color="orange" size="20px").mb-4 mdi-star
    p {{ completeAddress }}
    div
      v-btn(
        color="primary"
        width="160"
        outlined
        large
        @click=""
      ) #[b VIEW MAP]
      v-btn(
        color="primary"
        width="160"
        outlined
        large
        @click=""
      ).ml-3 #[b CLINIC WEBSITE]
</template>

<script>
export default {
  props: {
    hospitalName: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    completeAddress: {
      type: String,
      default: '',
    },
  },
  data () {
    return {};
  },
};
</script>

<style scoped>
</style>
