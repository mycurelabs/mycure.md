<template lang="pug">
  div
    strong Estimated Consultation Price
    v-row
      v-col
        h2 {{priceText}}
</template>

<script>
import { formatCurrency } from '~/utils/formats';
export default {
  props: {
    priceMin: {
      type: Number,
      default: null,
    },
    priceMax: {
      type: Number,
      default: null,
    },
  },
  computed: {
    priceText () {
      if (this.priceMin == null && this.priceMax == null) return null;

      // special case: just one price
      if (this.priceMin === this.priceMax) return formatCurrency(this.priceMin, 'PHP');
      if (this.priceMax == null) return formatCurrency(this.priceMin, 'PHP');
      if (this.priceMin == null) return formatCurrency(this.priceMax, 'PHP');

      // general case: range
      return `${formatCurrency(this.priceMin, 'PHP')} - ${formatCurrency(this.priceMax, 'PHP')}`;
    },
  },
};
</script>
