<template lang="pug">
  div
    v-row
      v-col(cols="12" md="8")
        h3 {{ title }}
        span Mon - Fri
          | (
          b 7:00 AM to 3:00 PM
          | )
        br
        br
        span Coverages:
        br
        v-avatar(size="30" color="secondary")
        v-avatar(size="30" color="secondary")
      v-col(cols="12" md="2").text-center
        v-chip(color="success" small) AVAILABLE
      v-col(cols="12" md="2")
        h2 PHP 200
        br
        br
        v-btn(color="success" rounded).text-none Book Now
    v-row
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title () {
      console.log('item', this.item);
      if (this.isDoctor) {
        return this.item?.doctorName;
      }
      return '';
    },
  },
};
</script>
