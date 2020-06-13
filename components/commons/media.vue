<template lang="pug">
  v-row(:align="align")
    template(v-if="imagePosition === 'left'")
      v-col.pa-1.shrink
        slot(name="media-image")
      v-col.pa-1
        slot(name="media-content")
    template(v-else-if="imagePosition === 'right'")
      v-col.pa-1
        slot(name="media-content")
      v-col.pa-1.shrink
        slot(name="media-image")
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'center',
    },
    imagePosition: {
      type: String,
      default: 'left',
    },
  },
};
</script>
