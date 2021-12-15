<template lang="pug">
  div(v-if="!loading.page").main-container
    //- insert panels here

</template>

<script>
// Insert components from '~/compononets/clinic-website/new'
export default {
  // asyncData () {
  //   //
  // },
  data () {
    return {
      loading: {
        page: false,
      },
    };
  },
  created () {
    //
  }
};
</script>

<style scoped>
.main-container {
  background-color: #f9f9f9;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
