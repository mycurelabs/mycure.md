<template lang="pug">
div.text-center.timeline-year
  div.timeline-dot
  h1.text-h5 {{year}}
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.timeline-year {
  /* border: 1px solid red; */
  width: 100px;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #0099cc;
  margin: 0px auto;
  margin-top: -11px;
}
</style>
