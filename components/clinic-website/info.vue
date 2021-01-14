<template lang="pug">
  div.container
    v-row(justify="center" align="center")
      v-col(cols="12" sm="12").text-center
        v-avatar(size="130")
          img(:src="picURL")
      v-col(cols="10").text-center
        h1 {{ hospitalName }}
        p.font-14 {{ completeAddress }}
    v-row(justify="center" align="center")
      v-col(
        cols="10"
        :class="{ 'text-left': !$isMobile, 'text-center': $isMobile }"
        )
        h3.font-21 About
        p.font-14 {{ description }}
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
.container {
  background: rgba(0, 153, 204, 0.2);;
  /* width:448px; */
}
h1{
  font-size: 27px;
}
p {
  color: #4D4D4D;
}
</style>
