<template lang="pug">
  v-card(flat color="#f0f0f0")
    v-card-text
      v-row(v-if="loading" justify="center")
        v-col(cols="12" md="4").text-center
          v-progress-circular(
            color="primary"
            indeterminate
            size="100"
          )
      template(v-else)
        div(v-for="(item, key) in items" :key="key")
          service-item(
            :item="item"
            :is-doctor="!!item.uid"
          )
          v-divider
</template>

<script>
import ServiceItem from './service-item';
export default {
  components: {
    ServiceItem,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
