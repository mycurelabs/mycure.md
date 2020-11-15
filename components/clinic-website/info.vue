<template lang="pug">
  div
    v-row
      v-col(cols="12" sm="12").text-center
        v-avatar(size="200")
          img(:src="picURL")
      v-col(cols="12" offset-sm="2" sm="8").text-center
        h1 {{ hospitalName }}
        p {{ completeAddress }}
    v-row
      v-col(cols="12" offset-sm="2" sm="8").text-center
        p {{ description }}
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
    picURL: {
      type: String,
      default: '',
    },
    description: {
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
