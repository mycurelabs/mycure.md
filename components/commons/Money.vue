<template lang="pug">
  span(:style="textStyle" :class="textClass") {{symbol}}{{value | money}}
</template>

<script>
export default {
  filters: {
    money (num) {
      const [characteristic, mantissa] = num.toFixed(2).split('.');
      const integer = parseInt(characteristic).toLocaleString();
      const fractional = mantissa;
      return [integer, fractional].join('.');
    },
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    symbol: {
      type: String,
      default: '$',
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    textClass: {
      type: [Array, Object, String],
      default: () => ({}),
    },
  },
};
</script>
