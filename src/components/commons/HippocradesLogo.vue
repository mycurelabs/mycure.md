<template lang="pug">
q-img(
  src="@/assets/images/hippocrades-logo-test-black.png"
  width="400px"
  spinner-color="primary"
  fit
  @click="onScrollToTop"
).hippocrades-logo
</template>

<script>
import { ref, inject } from 'vue';
export default {
  props: {
    height: {
      type: [String, Number],
      default: '42',
    },
  },
  setup () {
    const smoothScroll = inject('smoothScroll');
    const topRef = ref(null);

    function onScrollToTop () {
      smoothScroll({
        scrollTo: document.getElementById('top'),
        updateHistory: false,
      });
    }

    return {
      topRef,
      onScrollToTop,
    };
  },
};
</script>

<style scoped>
.hippocrades-logo:hover {
  cursor: pointer;
}
</style>
