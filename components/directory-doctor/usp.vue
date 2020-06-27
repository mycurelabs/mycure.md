<template lang="pug">
  v-container(fluid)
    v-row(justify="center" align="center")
      v-col(cols="12" md="10" v-for="(data, key) in uspInfo" :key="key")
        h1.text-center.font-weight-bold.font-50 {{data.title}}
</template>

<script>
export default {
  props: {
    uspInfo: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
