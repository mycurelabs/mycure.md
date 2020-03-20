<template lang="pug">
  v-dialog(v-model="dialog" width="500")
    v-card
      v-toolbar(flat)
        h2 {{ clinic.title }} Clinic
        v-spacer
        v-btn(
          icon
          @click="dialog = false"
          small
        )
          v-icon mdi-close
      v-card-text
        v-layout(row wrap align-center)
          v-flex(xs12 md3)
            img(
              :src="require(`@/assets/images/${clinic.image || 'mycure-signup-derma'}-active.png`)"
              :alt="clinic.image"
              width="100%"
            )
          v-flex(xs12 md9)
            v-layout(v-for="(desc, key) in clinic.descriptions" :key="key" row)
              v-flex(xs2).text-xs-center
                img(:src="require('@/assets/images/mycure-web-bullet-check.png')" alt="✓ " width="30%")
              v-flex(xs10)
                p.font-14 {{ desc }}
</template>

<script>
export default {
  props: {
    value: null,
    clinic: {
      type: Object,
      required: true
    }
  },
  computed: {
    dialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style scoped>
.no-list-style {
  list-style-type: none;
}
</style>