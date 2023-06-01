<template>
<div :class="`mx-auto md:max-w-7xl px-5 ${paddingY}`">
  <slot/>
</div>
</template>

<script>
export default {
  props: {
    paddingY: {
      type: String,
      default: 'py-24',
    },
  },
};
</script>
