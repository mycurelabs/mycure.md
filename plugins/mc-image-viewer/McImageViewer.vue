<template lang="pug">
  v-dialog(v-model="dialog" width="1000")
    v-card(v-if="image")
      v-img(
        :src="require(`~/assets/images/${customImagePath}${image}`)"
        :alt="imageAlt"
        :width="imageWidth"
      )
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    customImagePath: {
      type: String,
      default: '',
    },
    // with file extension
    image: {
      type: String,
      default: null,
    },
    imageAlt: {
      type: String,
      default: 'MYCURE Image',
    },
    imageWidth: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    dialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
