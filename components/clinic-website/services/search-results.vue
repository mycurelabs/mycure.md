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
      v-row(v-else-if="!items.length")
        v-col(cols="12" md="4").text-center
          h2 No results available
      template(v-else)
        div(v-for="(item, key) in items" :key="key")
          service-item(
            :organization="organization"
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
    organization: {
      type: String,
      default: null,
    },
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
