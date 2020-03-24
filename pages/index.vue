<template lang="pug">
  div
    h1 Content goes here
</template>

<script>

export default {
  created () {
    const a = {
      b: {
        c: {
          d: 1,
        },
      },
    };
    // NOTE: optional chaining sample
    console.warn(a?.b?.c?.d);
  },
};
</script>
