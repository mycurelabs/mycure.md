<template lang="pug">
  div
    v-row
      v-col(cols="12" sm="12").text-center
        v-avatar(size="200")
          img(:src="picURL")
      v-col(cols="12" sm="12")
        h1 {{ hospitalName }}
        p {{ completeAddress }}
        v-icon(color="orange" size="20px" v-for="(star) in 5" :key="star").mb-4 mdi-star
        br
    v-row
      v-col(cols="12" sm="12").pt-0
        div
          h2.py-5.primary--text.pt-0 About
          p {{ description }}

    //- HIDE THIS FOR THE MOMENT DO NOT DELETE
    //- div
    //-   v-btn(
    //-     color="primary"
    //-     width="160"
    //-     outlined
    //-     large
    //-     @click=""
    //-   ) #[b VIEW MAP]
    //-   v-btn(
    //-     color="primary"
    //-     width="160"
    //-     outlined
    //-     large
    //-     @click=""
    //-   ).ml-3 #[b CLINIC WEBSITE]
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
